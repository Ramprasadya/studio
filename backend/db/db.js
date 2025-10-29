import mongoose from "mongoose";

const connectToMongoose=async()=>{
    try {
        await mongoose.connect(process.env.URI)
         console.log("Connection complete with Database")
    } catch (err) {
          console.log("Failed to connect mongodb")
          console.log(err)
    }

}

export default connectToMongoose;