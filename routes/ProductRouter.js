const express = require('express')
const router = express.Router()

router.get('/p',(req,res)=>{
    res.send("hey its product")
})

module.exports = router ;