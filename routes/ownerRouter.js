const express = require('express')
const router = express.Router()

router.get('/o',(req,res)=>{
    res.send("hey")
})

module.exports = router ;