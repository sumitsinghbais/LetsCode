const validator = require("validator");





const validate = (data)=>{

    const mandatoryFeild = ["firstName", "emialID", "password"];
    const IsAllowed = mandatoryFeild.every((k)=> Object.keys(data).includes(k));
}

module.exports = validate;