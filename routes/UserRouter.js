const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const {Register , loginUser} = require('../controllers/authcontrollers')

router.get('/',(req,res)=>{
    console.log(req.cookies.Token)
    res.send(process.env.JWT_KEY)
})

router.post('/register', Register)

router.post('/login' , loginUser )

module.exports = router ;