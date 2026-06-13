const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/scatch')

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