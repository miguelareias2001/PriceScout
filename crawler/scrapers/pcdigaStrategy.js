// pcdigaStrategy.js
const { PlaywrightCrawler } = require('crawlee');
const { parseSitemapRecursive } = require('./sitemapScraper');

async function startPCDigaCrawl() {
  // 1. Read sitemap
  const sitemapUrl = 'https://www.pcdiga.com/sitemap.xml';
  const productUrls = await parseSitemapRecursive(sitemapUrl);
  
  // 2. Create crawler with proper workflow
  const crawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: 1000,
    async requestHandler({ request, page }) {
      try {
        // 3. Product page handling
        const productData = await require('../sites/pcdiga').scrape(page);
        
        // 4. Store in database
        const { pool } = require('../index'); // Lazy import
        await pool.query(
          `INSERT INTO products (
            website, name, price, image_url, product_url, category, brand, timestamp
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
          ON CONFLICT (product_url) DO UPDATE SET
            price = EXCLUDED.price,
            timestamp = EXCLUDED.timestamp`,
          [
            'pcdiga',
            productData.name,
            productData.price,
            productData.imageUrl,
            productData.url,
            productData.category,
            productData.brand
          ]
        );
        
      } catch (error) {
        console.error(`Error processing ${request.url}:`, error);
      }
    }
  });

  // 5. Run crawler with collected URLs
  await crawler.run(productUrls.map(url => ({
    url,
    userData: { type: 'product' }
  })));
}

module.exports = { startPCDigaCrawl };