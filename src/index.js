const express = require('express');
const app = express();
require('dotenv').config();
const main = require('./config/db');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());



main()  // first database gets connected
.then(async ()=>{  // then server starts
    app.listen(process.env.PORT, ()=>{
        console.log("Server is listening to port no: "+ process.env.PORT);
    })
})

.catch(err=> console.log("Error Occured: "+err));

