require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const path = require('path')
const crypto = require('crypto')
const db = require('./config/MongooseConnection')
const ownerRouter = require('./routes/ownerRouter')
const productRouter = require('./routes/ProductRouter')
const userRouter = require('./routes/UserRouter')

app.use(express.static(path.join(__dirname , "public")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.use('/owners', ownerRouter)
app.use('/products', productRouter)
app.use('/users', userRouter)


app.listen(3000,()=>{
    console.log('server connected to port 3000')
})