const admindetail = require("../models/admindetail");

const getAdmin = async(req,res) =>{
        const {formemail,formpassword}=req.body;
        const account=await admindetail.findone({email:formemail})
        if (!account){
            console.log("invalid email or password")
        }
        if (formpassword === account.password) {
            console.log("logged in succesfully")
        }
        else{
            console.log("invalid email or password")
        }
}