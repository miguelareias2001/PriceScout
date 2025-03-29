const { parseXML } = require('crawlee'); // Para parsear o XML

// Função para extrair links do sitemap XML
async function extractSitemapLinks(page) {
  const xmlContent = await page.content(); // Pega o conteúdo XML da página
  const parsed = await parseXML(xmlContent); // Converte XML para objeto JS
  
  // Extrai URLs do sitemap (assumindo estrutura padrão <url><loc>...</loc></url>)
  const links = parsed.urlset.url.map((item) => item.loc);
  return links.filter((href) => href.includes('/produtos/')); // Filtra apenas URLs de produtos
}

// Função para raspar dados de uma página de produto
async function scrapeProductPage(page) {
  // Aguarda o carregamento da página de produto
  try {
    await page.waitForSelector('.product-card, .product-page', { timeout: 10000 });

    const productData = {
      name: await page
        .$eval('.product-card__name, h1', (el) => el.textContent.trim())
        .catch(() => 'N/A'),
      price: await page
        .$eval('.product-card__price .price__numbers, .sales-price', (el) => {
          const priceText = el.textContent.trim();
          return parseFloat(priceText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
        })
        .catch(() => 0),
      url: page.url(),
      category: await page
        .$eval('.breadcrumb a:last-child, [itemprop="category"]', (el) => el.textContent.trim())
        .catch(() => 'N/A'), // Usa breadcrumb ou outro indicador de categoria
      stock: await page
        .$eval('.product-card__actions, .availability', (el) => {
          const text = el.textContent.trim().toLowerCase();
          return text.includes('adicionar') || text.includes('em stock') ? 'Em stock' : 'Esgotado';
        })
        .catch(() => 'N/A'),
    };

    return [productData]; // Retorna como array para compatibilidade com index.js
  } catch (error) {
    console.error(`Erro ao raspar ${page.url()}: ${error.message}`);
    return [];
  }
}

// Função principal de scrape (chamada pelo index.js)
async function scrape(page, enqueueLinks) {
  const currentUrl = page.url();

  if (currentUrl === 'https://www.worten.pt/sitemap.xml') {
    // Extrai links do sitemap e enfileira
    const productLinks = await extractSitemapLinks(page);
    await enqueueLinks({
      urls: productLinks,
      label: 'product',
    });
    return []; // Não retorna produtos ainda, apenas enfileira
  } else if (currentUrl.includes('/produtos/')) {
    // Raspa página de produto
    return await scrapeProductPage(page);
  }

  return []; // Caso não seja sitemap nem produto
}

module.exports = { scrape };