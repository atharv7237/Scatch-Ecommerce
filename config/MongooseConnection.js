console.log("this file is loaded")
const mongoose = require('mongoose')
const dbgr = require("debug")("development:mongoose")
const config = require('config')

mongoose
.connect(`${config.get("MONGO_URI")}`)
.then(()=>{
    console.log('connected to database')
})
.catch((err)=>{
    console.log("Error Occurred :",err)
}
)

module.exports =  mongoose.connection;