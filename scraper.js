const { chromium } = require('playwright');

async function scrapeProducts() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Lista de URLs para raspar
    const urls = [
        'https://webscraper.io/test-sites/e-commerce/allinone', // Produtos genéricos
        'https://webscraper.io/test-sites/e-commerce/allinone/computers/tablets' // Tablets
    ];

    let allProducts = [];

    try {
        for (const url of urls) {
            console.log(`Scraping produtos da URL: ${url}`);
            await page.goto(url);

            // Extrai os dados dos produtos
            const products = await page.evaluate(() => {
                const items = Array.from(document.querySelectorAll('.thumbnail'));
                return items.map(item => {
                    const title = item.querySelector('.title').innerText;
                    const price = item.querySelector('.price').innerText;
                    const link = item.querySelector('.title').href;
                    const description = item.querySelector('.description')?.innerText || 'N/A';
                    const rating = item.querySelector('.ratings p[data-rating]')?.getAttribute('data-rating') || '0';
                    const reviewsText = item.querySelector('.review-count')?.innerText || '0 reviews';
                    const reviews = reviewsText.replace(' reviews', ''); // Extrai apenas o número
                    return { title, price, link, description, rating, reviews };
                });
            });

            allProducts = [...allProducts, ...products];
        }

        return allProducts;
    } catch (error) {
        console.error('Erro ao fazer scraping:', error);
        return [];
    } finally {
        await browser.close();
    }
}

module.exports = { scrapeProducts };