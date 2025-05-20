const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/add', async(req, res) => {
    try{
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.get('/all', async(req, res) => {
    try{
        const products = await Product.find();
        res.json(products)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router