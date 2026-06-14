const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    FullName:String,
    Email:String,
    Password:String,
    Cart:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean,
    Orders:{
        type:Array,
        default:[]
    },
    Contact:Number,
    Picture:String
})

module.exports = mongoose.model('User', UserSchema)