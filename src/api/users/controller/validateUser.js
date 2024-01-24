const jwt = require('jsonwebtoken')
const RegisterUser = require("../../../model/registerUser");

const validateUser=async(req,res)=>{
    const {email,password}= req.body;
    console.log(email);
    
     try {
        const user= await RegisterUser.findOne({email:email})
        console.log(user);
        console.log(user);
        if (!user) {
             return res.status(404).json({error:'invaild credentials'})
        }
      
      
       if (password==user.password) {
      const token=jwt.sign( {email:user.email},process.env.SECRET,{expiresIn:'1h'})
       
        res.status(200).json({success:true, token:token,displayName:user?.name,email:user?.email,phone:user?.phone})
       }

     } catch (error) {
        console.log(error.message);
     }
}

module.exports= validateUser