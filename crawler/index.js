const { startWortenCrawl } = require('./scrapers/sitemapScraper');
const { startPCDigaCrawl } = require('./scrapers/pcdigaStrategy');
const { startPCComponentesCrawl } = require('./scrapers/sitemapScraper');

async function startCrawling() {
  try {
    // Run crawlers in parallel
    await Promise.all([
      startWortenCrawl('https://acessorios.worten.pt/pt/sitemap.xml'),
      startPCComponentesCrawl('https://www.pccomponentes.com/sitemap/sitemap.xml'),
      startPCDigaCrawl()
    ]);
    
    console.log('All crawling completed');
    await pool.end();
  } catch (error) {
    console.error('Crawling failed:', error);
    process.exit(1);
  }
}