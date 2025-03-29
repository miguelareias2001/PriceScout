const { PlaywrightCrawler } = require('crawlee');
const axios = require('axios');
const { XMLParser } = require('fast-xml-parser');

async function parseSitemapRecursive(sitemapUrl) {
  const parser = new XMLParser();
  try {
    const response = await axios.get(sitemapUrl);
    const parsed = parser.parse(response.data);

    if (parsed.sitemapindex) {
      const nestedSitemaps = parsed.sitemapindex.sitemap.map(s => s.loc);
      const results = await Promise.all(nestedSitemaps.map(parseSitemapRecursive));
      return results.flat();
    }

    return parsed.urlset.url.map(u => u.loc);
  } catch (error) {
    console.error('Error parsing sitemap:', error);
    return [];
  }
}

async function createSitemapCrawler(website, productFilter) {
  return new PlaywrightCrawler({
    maxRequestsPerCrawl: 1000,
    async requestHandler({ request, page }) {
      try {
        const products = await require(`../sites/${website}`).scrape(page);
        
        // Lazy import to avoid circular dependency
        const { pool } = require('../index');
        for (const product of products) {
          await pool.query(
            `INSERT INTO products (...) VALUES (...) ON CONFLICT DO NOTHING`,
            [website, ...Object.values(product)]
          );
        }
      } catch (error) {
        console.error('Error handling request:', error);
      }
    }
  });
}

async function startWortenCrawl(sitemapUrl) {
  try {
    const urls = await parseSitemapRecursive(sitemapUrl);
    const productUrls = urls.filter(url => url.includes('/product/'));
    const crawler = await createSitemapCrawler('worten');
    await crawler.run(productUrls.map(url => ({ url, userData: { website: 'worten' } })));
  } catch (error) {
    console.error('Error starting Worten crawl:', error);
  }
}

async function startPCComponentesCrawl(sitemapUrl) {
  try {
    const urls = await parseSitemapRecursive(sitemapUrl);
    const productUrls = urls.filter(url => url.includes('/product/'));
    const crawler = await createSitemapCrawler('pccomponentes');
    await crawler.run(productUrls.map(url => ({ url, userData: { website: 'pccomponentes' } })));
  } catch (error) {
    console.error('Error starting PCComponentes crawl:', error);
  }
}

async function startPCDigaCrawl() {
  const crawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: 500,
    async requestHandler({ request, page }) {
      try {
        // Category page handling
        if (request.url.includes('/categoria/')) {
          await handleCategoryPage(page);
          return;
        }
        
        // Product page handling
        const products = await require('../sites/pcdiga').scrape(page);
        // ... save to DB
      } catch (error) {
        console.error('Error in PCDiga crawl:', error);
      }
    }
  });

  // Start with main category pages
  await crawler.run([
    { url: 'https://www.pcdiga.com/componentes', userData: { depth: 0 } },
    { url: 'https://www.pcdiga.com/perifericos', userData: { depth: 0 } },
    // Add other main categories
  ]);
}

async function handleCategoryPage(page) {
  try {
    // Extract and enqueue product links
    const productLinks = await page.$$eval('.product-item a', links => 
      links.map(link => link.href)
    );
    
    // Handle pagination if exists
    const nextPage = await page.$('.pagination-next a');
    if (nextPage) {
      await crawler.addRequests([{
        url: await nextPage.getAttribute('href'),
        userData: { depth: request.userData.depth + 1 }
      }]);
    }
  } catch (error) {
    console.error('Error handling category page:', error);
  }
}

module.exports = { startWortenCrawl, startPCComponentesCrawl, startPCDigaCrawl, handleCategoryPage };