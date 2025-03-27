const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const router = express.Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

router.get('/', async (req, res) => {
  try {
    const { website, minPrice, maxPrice, category, sortBy = 'price', order = 'ASC' } = req.query;
    
    let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];
    
    if (website) {
      params.push(website);
      query += ` AND website = $${params.length}`;
    }
    if (minPrice) {
      params.push(minPrice);
      query += ` AND price >= $${params.length}`;
    }
    if (maxPrice) {
      params.push(maxPrice);
      query += ` AND price <= $${params.length}`;
    }
    if (category) {
      params.push(category);
      query += ` AND category = $${params.length}`;
    }
    
    query += ` ORDER BY ${sortBy} ${order}`;
    
    const { rows } = await pool.query(query, params);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;