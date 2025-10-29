import UserModel from "../model/userModel.js";

const Register =async(req,res)=>{
  try {
    const {name,email,password} = req.body;
    const check = await UserModel.findOne({email})
    if(check.email === email){
        return res.json({success:false,message:"User Already exist"})
    }
    const user = await new UserModel({
        name,
        email,
        password
    });
    
    const response = await user.save()
    res.json({success:true, response})
  } catch (error) {
    console.log(error)
  }
}

const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const isUser = await UserModel.findOne({email})
        // console.log(isUser)
        if(!isUser){
            return res.json({success:false, message:"Please Register first"})
        }
        if(isUser.password !== password){
              return res.json({success:false, message:"Wrong password"})
        }
       res.json({success:true,data:isUser})
    } catch (error) {
        console.log(error)
    }
}

export {Register, Login}