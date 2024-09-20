'use client'
import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import InputField from './InputField'
import Link from 'next/link';


type AuthFormProps = {
    type: string,
}
const AuthForm = ({type}: AuthFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')

  
  const handleNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value)
  }
  
  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value)
  }
  
  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value)
  }

  const handleConfirmPwdChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setConfirmPwd(e.target.value)
  }

  const handleSubmit = async () => {
    const form = type === 'Sign Up' ? { name, email, password } : { email, password }; // Check whether the form is for signup or login
    const endpoint = type === 'Sign Up'
      ? 'http://localhost:5000/auth/signup'
      : 'http://localhost:5000/auth/login';
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(`${type === 'Sign Up' ? 'Signup' : 'Login'} successful`, data);
        // Handle success, e.g., redirect or show a success message
      } else {
        const errorData = await response.json();
        console.error(`${type === 'Sign Up' ? 'Signup' : 'Login'} failed`, errorData);
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network errors
    }
  };
  
  return (
    <VStack as={'form'} onSubmit={handleSubmit} w={450} h={500} justifyContent={'center'} className='rounded-xl p-3'>
      {type === 'Sign In' ? <Heading className='mb-2'>Sign In</Heading> : <Heading className='mb-2'>Sign Up</Heading>}
      {type === 'Sign Up' && <div className="grid">
        <label htmlFor="name">Name</label>
        <InputField 
          type='text' 
          placeholder='Name' 
          id='name' 
          value={name} 
          onChange={handleNameChange}
        />
      </div>}

      <div className="grid">
        <label htmlFor="email">Email</label>
        <InputField 
          type='email' 
          placeholder='Email address' 
          id='email' 
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div className="grid">
        <label htmlFor="password">Password</label>
        <InputField 
          type='password' 
          placeholder='Password' 
          id='password' 
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      {type === 'Sign Up' && <div className="grid">
        <label htmlFor="confirm">Confirm Password</label>
        <InputField 
          type='password' 
          placeholder='Confirm Password' 
          id='confirm' 
          value={confirmPwd}
          onChange={handleConfirmPwdChange}
        />
      </div>}

      <Button borderColor={'black'} variant={'outline'} className='mt-4'>{type === 'Sign In' ? 'Sign In' : 'Sign Up'}</Button>
      <Link href={type === 'Sign In' ? '/auth/signup' : '/auth/login'}>
        {type === 'Sign In' ? 
        <p>Don't have an account yet? <span className='text-orange-600 font-bold'>Sign up</span></p> :
        <p>Have an account already? <span className='text-orange-600 font-bold'>Log In</span></p>}
      </Link>
    </VStack>
  )
}

export default AuthForm
