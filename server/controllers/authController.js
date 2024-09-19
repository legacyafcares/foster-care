import { nlUser } from "../models/NewsletterUser";
import { User } from "../models/User";
import bcrypt from 'bcrypt'

export const signup = async (req, res) => {
    const {name, email, password} = req.body
    try {
        if (!name || !email || !password) {
            res.status(400).json({message: 'All fields are required.'})
        }

        const existingUser = await User.findOne({email})

        if (existingUser) {
            res.status(400).json({message: "User already exists."})
        }

        const hashedPwd = bcrypt.hash(password, 12)

        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString()

        const newUser = {
            name,
            email, 
            password: hashedPwd,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 //expires after 1 week
        }

        await newUser.save()

        res.status(201).json({message: 'User created successfully.'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
}


export const login = (req, res) => {}


export const logout = (req, res) => {}