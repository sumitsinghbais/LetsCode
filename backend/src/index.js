const express = require('express');
const app = express();
require('dotenv').config();
const main = require('./config/db');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/userAuth");
const  redisClient = require("./config/redis");
const problemRouter = require("./routes/problemCreator");
const submitRouter = require("./routes/submit");

app.use(express.json());
app.use(cookieParser());

// 1. authentication
app.use('/user', authRouter);
app.use('/problem',problemRouter);
app.use('/submission',submitRouter);

// 1st we will connect both of our database redis and mongodb then listen to server
const InitializeConnection = async ()=>{

    try{
        await Promise.all([main(), redisClient.connect()]);
        console.log("DB connected");

        // now listen to server
        app.listen(process.env.PORT, ()=>{
            console.log("Server is listening to port no: "+ process.env.PORT);
        })
    }

    catch(err){
        console.log("Error: "+err);
    }
}

InitializeConnection();
