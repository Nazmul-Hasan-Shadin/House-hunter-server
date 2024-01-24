const express= require('express')
const registerUser = require("../../api/users/controller/registerUser")
const validateUser = require('../../api/users/controller/validateUser')


 
const router= express.Router()

router.post('/api/v1/registerUser',registerUser)
router.post('/api/v1/validateUser',validateUser)



module.exports=router