import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isVerified: Boolean,
    resetPasswordToken: String,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
}, 
{timestamps: true}
)

export const User = mongoose.model('User', userSchema)