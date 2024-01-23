const { Schema, default: mongoose } = require("mongoose");

const registerUser= new Schema({
    name: String,
    email: String,
    role : String,
    phone : String,
    password: String
    
})

const RegisterUser= mongoose.model('registerdUser', registerUser)
module.exports=RegisterUser;