'use client'
import React, { useState } from 'react'
import InputField from './InputField'
import { Button } from '@chakra-ui/react'
import Image from 'next/image'

const ContactForm = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async () => {

    }
  return (
    <section className='w-full h-screen flex gap-3 justify-center items-center' id='contact'>
      <form onSubmit={handleSubmit} className='w-2/5 left-0 ml-16 px-3'>
        <h1 className="text-3xl font-bold">Get In Touch With Us</h1>
        <div className='flex flex-col gap-3 items-start'>
            <InputField 
                type={'text'} 
                placeholder='Name'
                value={input.name} 
                onChange={handleInputChange}   
            />
            <InputField 
                type={'email'} 
                placeholder='Email address'
                value={input.name} 
                onChange={handleInputChange}   
            />
            <textarea 
                name='message'
                placeholder='Enter your message'
                value={input.message}
                onChange={handleInputChange}   // same handler for the textarea
                className='w-full h-32 p-2 border border-gray-300 rounded-md my-5'
            />
        </div>
        <Button type="submit" colorScheme='red'>Send Message</Button>
      </form>
      <div className='h-full w-1/2 grid place-content-center'>
        <Image src={'/verify.jpg'} alt={'Contact Us'} width={1000} height={1000} className='rounded-md'/>
      </div>
    </section>
  )
}

export default ContactForm
