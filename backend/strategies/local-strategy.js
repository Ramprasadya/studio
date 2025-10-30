import passport from "passport";
import { Strategy } from "passport-local";
import UserModel from "../model/userModel";

passport.use(
    new Strategy({usernameField:"email"},async(username,password,done)=>{
        try {
          const findUser = await UserModel.find((user)=> user.email === username)
        if(!findUser) throw new Error("user not found")
        if(findUser.password !==password)
            throw new Error("Inavlid Credentials")
      } catch (error) {
        done(err,null);
      }
    })
)