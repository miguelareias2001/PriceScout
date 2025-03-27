CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    website VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'EUR',
    url TEXT NOT NULL,
    category VARCHAR(100),
    stock BOOLEAN DEFAULT true,
    scraped_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_website ON products(website);
CREATE INDEX idx_price ON products(price);