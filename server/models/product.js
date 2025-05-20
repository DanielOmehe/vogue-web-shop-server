const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: String,
        price: { type: Number, required: true },
        image: String,
        inStock: { type: Boolean, default: true }
    }, { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema);