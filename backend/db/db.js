import mongoose from "mongoose";

const connectToMongoose=async()=>{
    try {
        await mongoose.connect("mongodb+srv://diploma:ram2000@cluster0.ybpfopj.mongodb.net/studio")
         console.log("Connection complete with Database")
    } catch (err) {
          console.log("Failed to connect mongodb")
          console.log(err)
    }

}

export default connectToMongoose;