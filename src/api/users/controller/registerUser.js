const RegisterUser = require("../../../model/registerUser")

const registerUser=async(req,res)=>{
    const userInfo= req.body

     try {
         
        const existUser=await RegisterUser.findOne({email:userInfo.email})
         if (existUser) {
           return  res.json({error: 'user already exist'})
         }

        const result=  await RegisterUser.create(userInfo)
         res.render('/')
         
     
        res.status(200).json({message:result, success:true})
     } catch (error) {
        
     }
  
  
}

module.exports=registerUser;