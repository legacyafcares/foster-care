import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected: ' + conn.connection.host)
        process.exit(0) // 0 indicates a successful connection
    } catch (error) {
        console.log('Error connecting to DB: ' + error)
        process.exit(1) // 1 indicates a failure to connect
    }
}