const Houses = require("../../model/allhouse");

const postHouse=(req,res)=>{
   const houseInfo= req.body;

   try {
    const result= Houses.create(houseInfo)
    res.json({success:true, message:'House added succcessful'})
   } catch (error) {
     console.log(error);
   }
}

module.exports= postHouse