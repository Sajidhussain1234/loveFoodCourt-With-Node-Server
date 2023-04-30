const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const cors = require('cors');

// ================= Start Database ======================

// Schema for category collection 
const categorySchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});
const Category = mongoose.model("Category", categorySchema);


// Schema for product collection 
const productSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  description: String,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
  },
});
const Product = mongoose.model("Product", productSchema);


const port = 6000;
const mongoURI = "mongodb+srv://sajid:CwyHs0PUSopsDMF1@cluster0.davbvrm.mongodb.net/kfcDb?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// ================= End Database ======================

const app = express();
app.use(morgan('tiny'));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Sajid");
});

// api for category
app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(400).send(error);
  }
});

// api for product
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server started successfully on port number ${port}`);
});