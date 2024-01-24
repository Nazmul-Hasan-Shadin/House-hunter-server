const express= require('express')
const postHouse = require('../../api/houses/houseses')
const gethouse = require('../../api/houses/gethouse')
 const router= express.Router()

router.post('/api/v1/houses',postHouse)
router.get('/api/v1/get-houses/:email',gethouse)

 module.exports=router