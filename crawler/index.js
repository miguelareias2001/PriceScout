const { PlaywrightCrawler } = require('crawlee');
const worten = require('./sites/worten');
const pcdiga = require('./sites/pcdiga');
const pccomponentes = require('./sites/pccomponentes');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const crawler = new PlaywrightCrawler({
  maxRequestsPerCrawl: 100,
  async requestHandler({ request, page }) {
    const siteConfigs = { worten, pcdiga, pccomponentes };
    const website = request.userData.website;
    const config = siteConfigs[website];

    const products = await config.scrape(page);
    
    for (const product of products) {
      await pool.query(
        `INSERT INTO products (website, name, price, url, category, stock)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT DO NOTHING`,
        [website, product.name, product.price, product.url, product.category, product.stock]
      );
    }
  },
});

async function startCrawling() {
  await crawler.run([
    { url: 'https://www.worten.pt/search', userData: { website: 'worten' } },
    { url: 'https://www.pcdiga.com/pesquisa', userData: { website: 'pcdiga' } },
    { url: 'https://www.pccomponentes.pt/pesquisa', userData: { website: 'pccomponentes' } },
  ]);
  await pool.end();
}

startCrawling();