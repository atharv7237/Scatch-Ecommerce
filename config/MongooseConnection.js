const mongoose = require('mongoose')


mongoose
.connect("mongodb://localhost:27017/scatch")
.then(()=>{
    console.log('connected to database')
})
.catch((err)=>{
    console.log("Error Occurred :",err)
}
)

module.exports =  mongoose.connection