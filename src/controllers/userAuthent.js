const User = require("../models/user");
const validate = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const register = async (req, res) =>{

    try{

        // validate that the given email, password valid or not
        validate(req.body);


        const {firstName, emailId, password} = req.body;

        // hash the password
        req.body.password = await bcrypt.hash(password, 10);

        const user = await User.create(req.body);  // it will check emailId already exist or not so no need to do

        const token = jwt.sign({_id: user._id, emailID: emailId},process.env.JWT_KEY, {expiresIn: 60*60});
        res.cookie('token', token,{maxAge: 60*60*1000});  // 1 hours
        res.status(201).send("User Registered Successfully");
    }

    catch(err){
        res.status(400).send("Error: "+err);
    }

}

const login = async (req, res) =>{

    try{

        const {emailId, password} = req.body;

        if(!emailId)
            throw new Error("Invalid EmialId");

        if(!password)
            throw new Error("Invalid credentials");

        const user = await User.findOne({emailId});
        const match = await bcrypt.compare(password, user.password);

        if(!match)
            throw new Error("Invalid credentials");

        const token = jwt.sign({_id: user._id, emailID: emailId},process.env.JWT_KEY, {expiresIn: 60*60});
        res.cookie('token', token,{maxAge: 60*60*1000});
        res.status(200).send("Logged In Successfully");
    }

    catch(err){
        res.status(401).send("Error: "+err);
    }
}

const logout = async (req, res) =>{

    try{

    }

    catch{

    }


}