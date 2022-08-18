import express from "express";
import dotenv from "dotenv";
dotenv.config();



//express

const app = express();
const PORT = process.env.PORT || 3000;
// middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})
// routes
app.get("/", (req,res)=>{
    res.json({msg: "welcome to the app"});
})


// listen for requests
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
    console.log("listening on port 4000")
    }
})