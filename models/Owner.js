const mongoose = require('mongoose')

const OwnerSchema = mongoose.Schema({
    FullName:String,
    Email:String,
    Password:String,
    Products:{
        type:Array,
        default:[]
    },
    Contact:Number,
    Picture:String,
    GSTIN:Number
})

module.exports = mongoose.model('Owner', OwnerSchema)