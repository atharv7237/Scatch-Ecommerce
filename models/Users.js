const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    FullName:{
        type:String,
        minLength:3,
        trim:true
    },
    Email:String,
    Password:String,
    Cart:{
        type:Array,
        default:[]
    },
    Orders:{
        type:Array,
        default:[]
    },
    Contact:Number,
    Picture:String
})

module.exports = mongoose.model('User', UserSchema)