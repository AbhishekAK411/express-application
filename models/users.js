import mongoose, { Schema } from "mongoose";

const product = new Schema({
    productName: String,
    productPrice: Number,
    ProductCategory: String,
    productImage: String
}); 

const user = new Schema({
    username : String,
    email : String,
    password : String,
    number : Number,
    otpNumber : String,
    otpEmail : String,
    isNumberVerified : Boolean,
    isEmailVerified : Boolean,
    productList : [product]
});

export default mongoose.model("expUsers", user);