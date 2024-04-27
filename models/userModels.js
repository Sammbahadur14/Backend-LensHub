import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            require: true,
            trim: true
        },
        email: { 
            type: String,
            require: true,
            unique: true
        },
        password: { 
            type: String,
            require: true,
        },
        address: {
          type: {},
          required: true,
        },
        answer: {
            type: String,
            required: true,
        },
        role:{
            type: Number,
            default: 0,
        },
    },
    {timeseries: true}
)
export default mongoose.model("users", userSchema)