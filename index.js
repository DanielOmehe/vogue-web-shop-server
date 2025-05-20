const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: "https://vogue-web-shop.vercel.app/", credentials: true}))
app.use(cors());
app.use(express.json()); // parse JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Import product routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
