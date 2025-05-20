const express = require('express');
const router = express.Router();

// Temporary product list
const products = [
  { id: 1, name: 'Black Suit', price: 250 },
  { id: 2, name: 'Navy Blue Tux', price: 300 },
];

// Route: GET /api/products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;