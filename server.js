const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

//  Product Schema
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
});

const Product = mongoose.model("Product", ProductSchema);

//  API Route
app.get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

//  Run Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
