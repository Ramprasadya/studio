import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:{type:String, require:true},
    password:String,
    date:{
        type:Date,
        default: Date.now()
    }
})

const UserModel = mongoose.model("user", userSchema);

export default UserModel;