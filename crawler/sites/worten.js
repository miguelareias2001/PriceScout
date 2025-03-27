async function scrape(page) {
    await page.waitForSelector('.product-card');
    const products = await page.$$eval('.product-card', (cards) => {
      return cards.map(card => ({
        name: card.querySelector('.product-title')?.textContent.trim(),
        price: parseFloat(card.querySelector('.price')?.textContent.replace('€', '').replace(',', '.')),
        url: card.querySelector('a')?.href,
        category: card.querySelector('.category')?.textContent.trim(),
        stock: !!card.querySelector('.in-stock'),
      }));
    });
    return products.filter(p => p.name && p.price);
  }
  
  module.exports = { scrape };