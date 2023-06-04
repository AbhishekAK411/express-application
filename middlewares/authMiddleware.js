export const checkFields = (req,res,next) =>{
    try{
        const { username, email, password, cpassword, number } = req.body;
        if(!username) return res.send("username is required.");
        if(!email) return res.send("Email is required.");
        if(!password) return res.send("Password is required.");
        if(!cpassword) return res.send("Confirm Password is required.");
        if(!number) return res.send("Phone number is required.");
        if(password.length < 8 &&  cpassword.length < 8){
            return res.send("Length should be between 8 and 16 characters.");
        }
        if(password !== cpassword){
            return res.send("Passwords do not match.");
        }
        next();
    } catch(err){
        return res.send(err);
    }
}


export const checkFieldsForVerification = (req,res,next) =>{
    try{
        const {number, email, otpNumber, otpEmail} = req.body;
        if(!number) return res.send("Number is required.");
        if(!email) return res.send("Email is required.");
        if(!otpNumber) return res.send("OTP field is required.");
        if(!otpEmail) return res.send("OTP field is required.");
        next();
    } catch(err){
        return res.send(err);
    }
}


export const checkLogin = (req,res,next) =>{
    try{
        const {email, password} = req.body;
        if(!email) return res.send("Email is required.");
        if(!password) return res.send("Password is required.");
        next();
    } catch(err){
        return res.send(err);
    }
}

export const checkAddProduct = (req,res,next) =>{
    try{
        const {email, productName, productPrice, productCategory, productImage} = req.body;
        if(!email) return res.send("Email is required.");
        if(!productName) return res.send("Name of the product is required.");
        if(!productPrice) return req.send("Price of the product is required.");
        if(!productCategory) return req.send("Category of the product is required.");
        if(!productImage) return req.send("Image of the product is required.");
        next();
    }catch(err){
        return res.send(err);
    }
}

export const checkBuyProduct = (req,res,next) =>{
    try{
        const {email} = req.body;
        if(!email) return res.send("Email is required.");
        next();
    } catch(err){
        return res.send(err);
    }
}