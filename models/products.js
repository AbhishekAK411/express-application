import mongoose, { Schema } from "mongoose";

const product = new Schema({
    productName: String,
    productPrice: Number,
    ProductCategory: String,
    productImage: String
});

export default mongoose.model("expProducts", product);