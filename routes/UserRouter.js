const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const {Register , loginUser} = require('../controllers/authcontrollers')
const isLoggedIn = require('../middlewares/isLoggedIn')

router.get('/',(req,res)=>{
    let error = req.flash('error');
    res.send(error)
})

router.get('/check', isLoggedIn ,(req,res)=>{
res.send("You are logged In ")
})
router.post('/register', Register)

router.post('/login' , loginUser )


module.exports = router ;