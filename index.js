import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./routes/userRoutes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use("/express-api/v1", router);

mongoose.connect('mongodb+srv://abhishek:Glorious%40Mongo41@atlascluster.htagarr.mongodb.net/ecommerceDB?retryWrites=true&w=majority')
.then(()=> console.log("DB Connection Established."))
.catch((err)=> console.log("DB Failed. Error ==>", err))


app.listen(4000);