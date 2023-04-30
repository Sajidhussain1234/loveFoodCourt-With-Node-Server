const express = require("express");
const mongoose = require("mongoose");

const port = 6000;
const mongoURI =  "mongodb+srv://sajid:mAFzg1djvhlQF1kI@cluster0.davbvrm.mongodb.net/kfcDb?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Sajid");
});

// api for category
app.get('/category', async (req, res) => {
  try {
    const category = await Category.find();
    res.json(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// api for product
app.get('/product', async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server started successfully on port number ${port}`);
});

// Schema for category collection 
const categorySchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});
const Category = mongoose.model("category", categorySchema);


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
const Product = mongoose.model("product", productSchema);







