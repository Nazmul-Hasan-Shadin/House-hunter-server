const RegisterUser = require("../../model/registerUser")

const roleCheck=async(req,res)=>{
    const userInfo= req.params.email
    console.log(userInfo);
    try {
        const finduser=await RegisterUser.findOne({email:userInfo})
        // console.log(finduser,'jo');
        let Owner=false;
        let renter=false
        if (finduser) {
            Owner=finduser.role=== 'Owner'
             renter=finduser.role==='House Renter'
        }
        res.json({owner:Owner,renter})
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports= roleCheck