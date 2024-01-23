const express= require('express')
const registerUser = require("../../api/users/controller/registerUser")


 
const router= express.Router()

router.post('/api/v1/registerUser',registerUser)



module.exports=router