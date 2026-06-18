const jwt = require('jsonwebtoken')
const User = require("../models/Users")
async function isLoggedIn(req,res,next) {
    
    try {
        if(!req.cookies.Token) 
        {
         req.flash('error','You must be logged in ....')
         return res.redirect('/users')
        }
        else
        {
        let decoded = jwt.verify( req.cookies.Token ,process.env.JWT_KEY)
        let user = await User
        .findOne({Email:decoded.Email})
        .select("-Password")
        req.user = user 
        next()
        }
    } catch (error) {
        req.flash('error','Something Went wrong')
        console.log(error.message)
        return res.redirect('/users')
    }
}

module.exports = isLoggedIn ;