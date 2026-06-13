const mongoose = require('mongoose')


const ProductSchema = mongoose.Schema({
    Image:String,
    Name:String,
    Price:Number,
    Discount:{
        type:Number,
        default:0
    },
    BgColor:String,
    PanelColor:String,
    TextColor:String
})
module.exports = mongoose.model('Products',ProductSchema  )