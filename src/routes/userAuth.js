const express = require('express');
const authRouter = express.Router();  // create a router
const {register, login, logout, adminRegister} = require('../controllers/userAuthent');
const userMiddleware = require("../middleware/userMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");


authRouter.post('/register', register);     // user register only not admin
authRouter.post('/login', login);
authRouter.post('/logout', userMiddleware, logout);
authRouter.post('/admin/register', adminMiddleware, adminRegister);
// authRouter.post('/getProfile', getProfile);

module.exports = authRouter;