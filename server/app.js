require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("./db/conn");
const path=require("path");
const cookieParser=require("cookie-parser");


const Products=require("./models/productsSchema");

const DefaultData=require("./defaultdata");
const cors=require("cors");
const router=require("./routes/router");
const { dirname } = require("path/posix");

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"client","build")));
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
})

const port=8005;

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
});


DefaultData();