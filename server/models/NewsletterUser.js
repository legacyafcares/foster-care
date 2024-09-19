import mongoose from "mongoose";

const newsletterUserSchema = new mongoose.Schema({email: String}, {timestamps: true})

export const nlUser = mongoose.model('nlUser', newsletterUserSchema)