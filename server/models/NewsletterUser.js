import mongoose from "mongoose";

const newsletterUserSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            unique: true
        }
    },
     {timestamps: true})

export const nlUser = mongoose.model('nlUser', newsletterUserSchema)