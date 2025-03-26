const { Pool } = require('pg');

// Configuração do pool de conexões
const pool = new Pool({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '1234',
    database: process.env.DB_NAME || 'pricescout',
    port: 5432,
});

// Função para inicializar o banco de dados (criar a tabela Products, se não existir)
async function initializeDatabase() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS Products (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL UNIQUE,
                price VARCHAR(50),
                description TEXT,
                rating INTEGER,
                reviews INTEGER,
                link TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('Tabela Products criada ou já existe.');
    } catch (error) {
        console.error('Erro ao inicializar o banco de dados:', error);
        throw error;
    }
}

// Função para salvar produtos (upsert)
async function saveProducts(products) {
    try {
        for (const product of products) {
            await pool.query(`
                INSERT INTO Products (title, price, description, rating, reviews, link, created_at)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                ON CONFLICT (title)
                DO UPDATE SET
                    price = EXCLUDED.price,
                    description = EXCLUDED.description,
                    rating = EXCLUDED.rating,
                    reviews = EXCLUDED.reviews,
                    link = EXCLUDED.link,
                    created_at = EXCLUDED.created_at
            `, [
                product.title,
                product.price,
                product.description,
                parseInt(product.rating),
                parseInt(product.reviews),
                product.link,
                new Date(),
            ]);
        }
        console.log('Produtos salvos no banco de dados.');
    } catch (error) {
        console.error('Erro ao salvar produtos:', error);
        throw error;
    }
}

// Função para buscar produtos com filtros
async function getProducts(filter = {}) {
    try {
        let query = 'SELECT * FROM Products';
        const conditions = [];
        const values = [];

        if (filter.minRating) {
            conditions.push(`rating >= $${conditions.length + 1}`);
            values.push(filter.minRating);
        }
        if (filter.maxPrice) {
            conditions.push(`price <= $${conditions.length + 1}`);
            values.push(filter.maxPrice);
        }

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        query += ' ORDER BY created_at DESC';

        const result = await pool.query(query, values);
        return result.rows;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        throw error;
    }
}

module.exports = { initializeDatabase, saveProducts, getProducts };