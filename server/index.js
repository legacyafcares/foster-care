import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/dbConn.js'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
import {corsOptions} from './config/corsOptions.js'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors(corsOptions))
app.use(express.json())
app.use('/auth', authRoutes)

app.listen(port, () => {
    connectDB()
    console.log(`Server is listening on port ${port}`)
})  