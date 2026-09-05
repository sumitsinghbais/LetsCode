const validator = require("validator");





const validate = (data)=>{

    // const mandatoryFeild = ["firstName", "emialId", "password"];
    const mandatoryFeild = ["firstName", "emailId", "password"];
    const IsAllowed = mandatoryFeild.every((k)=> Object.keys(data).includes(k));

    if(!IsAllowed)
        throw new Error("Some feild missing");

    if(!validator.isEmail(data.emailId))
        throw new Error("Invalid Email");

    if(!validator.isStrongPassword(data.password))
        throw new Error("Week Password");

    
}

module.exports = validate;