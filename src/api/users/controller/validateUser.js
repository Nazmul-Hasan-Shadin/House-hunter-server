const RegisterUser = require("../../../model/registerUser");

const validateUser=async(req,res)=>{
    const {email,password}= req.body;
     try {
        const user= await RegisterUser.findOne({email})
        if (!checkEmail) {
             return res.status(404).json({error:'invaild credentials'})
        }
      
      
       if (password===user.password) {
           res.status(200).json({success:true})
       }

     } catch (error) {
        res.status(404).json({error:error.message})
     }
}