const express= require('express')
const roleCheck = require('../../api/RoleChecker/RoleChecker')

const router=express.Router()

router.get('/api/v1/role-checker/:email',roleCheck)


module.exports=router