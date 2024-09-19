import { mailtrapClient, mailtrapSender } from "../mailtrap/mailtrap.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "../mailtrap/templates.js";
import { nlUser } from "../models/NewsletterUser.js";
import { User } from "../models/User.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config()

const generateCookieAndSetToken = async (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    return token
}

export const signup = async (req, res) => {
    const sendVerificationEmail =  async (email, token) => {
        const recipient = [{email}]        
        try {
            await mailtrapClient.send({
                from: mailtrapSender,
                to: recipient,
                subject: 'Verify your email',
                html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', token),
                category: 'Email Verification',
            })
        } catch (error) {
           throw new Error(error) 
        }
    }

    


    const {name, email, password} = req.body
    
    try {
        if (!name || !email || !password) {
            res.status(400).json({message: 'All fields are required.'})
        }

        const existingUser = await User.findOne({email})

        if (existingUser) {
            res.status(400).json({message: "User already exists."})
        }

        const hashedPwd = await bcryptjs.hash(password, 12)
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString()


        const newUser = new User({
            name,
            email, 
            password: hashedPwd,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 15 * 60 * 1000 //expires after 15 minutes
        })

        await newUser.save()

        await sendVerificationEmail(email, verificationToken)

        await generateCookieAndSetToken(res, newUser._id)

        res.status(201).json({message: 'User created successfully.'})
    } catch (error) {
        console.log(error)
    }
}

export const verifyEmail = async(req, res) => {
    const {code} = req.body

    const sendWelcomeEmail = async (email, name) => {
        const recipient =[{email}]
        try {
            await mailtrapClient.send({
                from: mailtrapSender,
                to: recipient,
                template_uuid: "2770ae3a-6ed6-427b-a317-2cbf6e8b655d",
                template_variables: {
                "company_info_name": "Some_Company_Name_Yet_To_Be_Determined",
                "name": name
                }
            })
        } catch (error) {
            throw new Error(error)
        }
    }
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: {$gt: Date.now()}
        })

        if (!user) return res.status(400).json({message: 'Invalid or expired verification code.'})
        
        user.isVerified = true    
        user.verificationToken = undefined  
        user.verificationTokenExpiresAt = undefined
        
        await user.save()

        await sendWelcomeEmail(user.email, user.name)

        res.status(200).json({message: 'Email verified successfully.'})

    } catch (error) {
        throw new Error(error)
    }
}

export const login = async(req, res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user) {
            res.status(400).json({message: "User not found."})
        }

        // check password
        const storedPwd = await bcryptjs.compare(password, user.password)

        if (!storedPwd) return res.status(400).json({message: "Invalid password."})
        
        // jwt
        generateCookieAndSetToken(res, user._id)

        //update last login date
        user.lastLogin = new Date()
        
        await user.save()

        res.status(200).json({message: "Logged in successfully."})

    } catch (error) {
        console.log(error)
    }
}

export const addToNewsletter = async (req, res) => {
    const {email} = req.body

    const user =  new nlUser({email})

    await user.save()

    res.status(200).json({message: 'User added successfully.'})
}


export const logout = (req, res) => {
    res.clearCookie('token')
    res.status(200).json({message: 'Logged out successfully.'})
}