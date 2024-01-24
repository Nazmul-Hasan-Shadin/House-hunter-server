const { Schema, default: mongoose } = require("mongoose");

const houses= new Schema({
    bedroom: String,
    city: String,
    image : String,
    location : String,
    name: String,
    size: Number,
    bathroom:Number,
    email:String
    
})

const Houses= mongoose.model('allhouse', houses)
module.exports=Houses;