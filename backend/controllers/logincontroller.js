const admindetail = require("../models/admindetail");

const loginadmin = async(req,res) =>{
    try{
        const {email,password}=req.body;
        const account=await admindetail.findOne({email})

        if (!account){
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        if (password === account.password) {
            return res.status(200).json({
                message:"Logged in successfully"
            })
        }
        else{
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "something went wrong",
            error:error.message
        });
    }
}

module.exports={
    loginadmin,
};