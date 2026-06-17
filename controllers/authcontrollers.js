const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const Token = require('../utils/Token')
const User = require('../models/Users')

module.exports.Register = async(req,res)=>{
    try {
        let {Fullname , Email , Password} = req.body ;
        let find  = await User.findOne({Email})
        if(find) return res.send("user already exists")
        let hash = await bcrypt.hash(Password,10)
        let user = await User.create({
            Fullname,
            Email,
            Password:hash
        })
        let token = await Token(user)
        res.cookie("Token", token)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports.loginUser = async(req,res)=>{
    try {
        let {Email , Password} = req.body ;
        let user  = await User.findOne({Email})
        if(!user) return res.send("Need to Register first")
        let check = await bcrypt.compare(Password , user.Password)
        if(check){
            let token = await Token(user)
            res.cookie("Token", token)
            res.send("Login Successful")
        }
        else
        {
            res.send("Wrong Password retry")
        }
    } catch (error) {
        res.send(error.message)
    }
}