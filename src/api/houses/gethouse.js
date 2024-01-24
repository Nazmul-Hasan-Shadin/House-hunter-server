const Houses = require("../../model/allhouse")

const gethouse=async(req,res)=>{
    const email= req.params?.email
    console.log(email);
    try {
        const result= await Houses.find({email:email}).exec()
        console.log(result);
        res.json({success:true,message:result})
    } catch (error) {
        
    }
}

module.exports= gethouse