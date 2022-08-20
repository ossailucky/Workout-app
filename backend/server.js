import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import workoutRoutes from "./routes/workouts.js";



//express

const app = express();
const PORT = process.env.PORT || 3000;
// middleware
//app.use(express.json);
app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({extended: true}))


app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})
// routes
app.use("/api/workouts", workoutRoutes);

//connect to db

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        // listen for requests
        app.listen(PORT,()=>{
            console.log("connected to db & listening on port", PORT) 
        });
    })
    .catch((error)=>{
        console.log(error)
    });

