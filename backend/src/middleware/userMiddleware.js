const jwt = require("jsonwebtoken");
const User = require("../models/user");
const redisClient = require("../config/redis");


const userMiddleware = async (req, res, next) =>{

    try{

        const {token} = req.cookies;
        if(!token){
            throw new Error("Token is not present");
        }

        const payload = jwt.verify(token, process.env.JWT_KEY);   // it gives payload form the token

        const {_id} = payload;
        if(!_id){
            throw new Error("Invalid token");
        }

        const result = await User.findById(_id);   // find the id in the database
        if(!result){
            throw new Error("User doesn't exist");
        }

        // Now we have to check, whether it is present in the blocklist of the redis

        const isBlocked = await redisClient.exists(`token:${token}`);
        if(isBlocked){
            throw new Error("Invalid token");
        }

        req.result = result;
        next();

    }

    catch(err){
        res.status(401).send("Error: "+err.message);
    }

}

module.exports = userMiddleware;