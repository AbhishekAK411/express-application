import expUsers from "../models/users.js";
import {v4 as uuidv4 } from "uuid";

export const otpRegister = async (req,res) =>{
    try{
        const {username, email, password, cpassword, number } = req.body;
        const response = await expUsers.find({email,number}).exec();
        if(response.length) return res.send("Account is already registered.");
        const codeNum = uuidv4();
        const codeEmail = uuidv4();
        const user = new expUsers({
            username,
            email,
            password,
            number,
            otpNumber : codeNum,
            otpEmail: codeEmail,
            isNumberVerified: false,
            isEmailVerified: false
        });
        await user.save();
        return res.send("Check your Number and Email for OTP.");
    } catch(err){
        return res.send(err);
    }
}


export const checkOtpRegister = async (req,res)=>{
    try{
        const {number, email, otpNumber, otpEmail } = req.body;
        const response = await expUsers.find({email,number}).exec();
        if(!response.length) return res.send("User not found.");
        if(response[0].otpNumber == otpNumber && response[0].otpEmail == otpEmail){
            await expUsers.findOneAndUpdate({email,number}, {isNumberVerified: true, isEmailVerified: true}).exec();
            return res.send("Account is successfully verified.");
        }
        return res.send("The otp you have entered is incorrect. Kindly check again.");
    }catch(err){
        return res.send(err);
    }
}


export const login = async (req,res) =>{
    try{
        const {email, password} = req.body;
        const user = await expUsers.find({email}).exec();
        if(!user) return res.send("User not found.");
        if(user[0].password === password){
            return res.send("Login Successful.");
        }
        return res.send("Password is incorrect.");
    }catch(err){
        return res.send(err);
    }
}