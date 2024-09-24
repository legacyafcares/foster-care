'use client'
import React, {useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import InputField from './InputField'
import { Button } from '@chakra-ui/react'

const Subscribe = () => {
    const [email, setEmail] = useState('')
    
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        try {
            axios.post('https://foster-care.onrender.com/auth/add-to-newsletter')
            toast.success('Subscribed to newsletter.')
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => setEmail(e.target.value)

  return (
    <form onSubmit={handleSubmit} className='flex max-md:flex-col justify-center md:items-center w-4/5 mx-auto gap-8 mb-12'>
        <div className='mr-auto'>
            <p className='font-bold'>Subscribe to updates about our services and community events.</p>
        </div>
        <InputField 
            type={'email'} 
            placeholder='Subscribe to our newsletter'
            value={email}
            onChange={handleChange} 
        />
        <Button type="submit" p={3} colorScheme='red' w={150} className='max-md:mx-auto'>Subscribe</Button>
    </form>
  )
}

export default Subscribe
