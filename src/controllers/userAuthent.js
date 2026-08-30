const User = require("../models/user");

const validate = require("../utils/validator");

const register = (req, res) =>{

    try{

        // validate that the given email, password valid or not
        validate(req.body);


        const {firstName, emailID, password} = req.body;

        User.create(req.body);

    }

    catch(err){


    }



}