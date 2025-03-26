const { initializeDatabase, saveProducts, getProducts } = require('./db');
const { scrapeProducts } = require('./scraper');

const url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/tablets';

async function scrapeAndSave() {
    try {
        console.log('Iniciando o scraping de produtos...');
        const products = await scrapeProducts(url);
        await saveProducts(products);

        const filteredProducts = await getProducts({ minRating: 3, maxPrice: '$100' });

        console.log('\n=== Produtos Filtrados (Rating >= 3 e Preço <= $100) ===');
        console.log(filteredProducts);

        console.log('\n=== Relatório de Preços de Produtos ===');
        console.log(`Foram encontrados ${filteredProducts.length} produtos após o filtro.`);

        console.log('\n=== Alertas de Preço ===');
        filteredProducts.forEach(product => {
            console.log(`- ${product.title}: ${product.price}`);
        });
    } catch (error) {
        console.error('Erro no processo de scraping e salvamento:', error);
    }
}

async function main() {
    try {
        console.log('Inicializando o banco de dados...');
        await initializeDatabase();
        await scrapeAndSave();
    } catch (error) {
        console.error('Erro na inicialização:', error);
        process.exit(1);
    }
}

main();