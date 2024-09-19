import express from 'express'
import {login, signup, logout, verifyEmail, addToNewsletter} from '../controllers/authController.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/verify-email', verifyEmail)
router.post('/add-to-newsletter', addToNewsletter)
router.post('/logout', logout)

export default router