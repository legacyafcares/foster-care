import {create} from 'zustand'
import axios from 'axios'
import dotenv  from 'dotenv'

dotenv.config()

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/auth' : '/auth'

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    message: null,

    signup: async (name, email, password) => {
        set({
            isLoading: true,
            error: null
        })
        try {
            const response = await axios.post(`${API_URL}/signup`, {name, email, password})
            set({
                user: response.data.user,
                isAuthenticated: true,
                isLoading: false
            })
        } catch (error) {
            set({
                error: error.response.data.message || 'Error signing up',
                isLoading: false
            })
            throw(error)
        }
    },

    login: async (email, password) => {
        set({
            isLoading: true,
            error: null
        }) 
        try {
            const response = await axios.post(`${API_URL}/login`, {email, password})
            set({
                user: response.data.user,
                isAuthenticated: true,
                isLoading: false
            })
        } catch (error) {
            set({
                error: error.response.data.message || 'Error logging in',
                isLoading: false
            })
            throw(error)
        } 
    },
    logout: async () => {
        set({
            isLoading: true,
            error: null
        }) 
        try {
            await axios.post(`${API_URL}/logout`)
            set({
                user: null,
                error: null,
                isAuthenticated: false,
                isLoading: false
            })
        } catch (error) {
            set({
                error: error.response.data.message || 'Error logging out',
                isLoading: false
            })
            throw(error)
        } 
    },
    verifyEmail: async (code) => {
        set({
            isLoading: true,
            error: null
        }) 
        try {
            const response = await axios.post(`${API_URL}/verify-email`, {code})
            set({
                user: response.data.user,
                isAuthenticated: true,
                isLoading: false
            })
            return response.data
        } catch (error) {
            set({
                error: error.response.data.message || 'Error verifying email',
                isLoading: false
            })
            throw(error)
        } 
    },
    
}))