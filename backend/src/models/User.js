import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    phone: String,
    createAt: {
        type: Date,
        default : Date.now
    }
}
);

export default mongoose.model("User", userSchema);