import expUsers from "../models/users.js";

export const addProduct = async (req,res) => {
    try{
        const {email, productName, productPrice, productCategory, productImage} = req.body;

        const user = await expUsers.findOne({email}).exec();
        if(!user) return res.send("user not found.");

        const addProduct = {
            productName,
            productImage,
            productPrice,
            productCategory
        };
        user.productList.push(addProduct);
        await user.save();
        return res.send("Product added successfully.");
    }catch(err){
        return res.send(err);
    }
}


export const buyProduct = async(req,res) =>{
    try{
        const {email} = req.body;
        const user = await expUsers.findOne({email}).exec();
        if(!user) return res.send("User not found.");
        user.productList = [];
        await user.save();
        return res.send("All Products deleted successfully.");
    } catch(err){
        return res.send(err);
    }
}