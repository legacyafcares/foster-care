'use client'
import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import InputField from './InputField'
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use next/navigation for Next.js 13+
import { useAuthStore } from '@/app/store/authStore.js'

type AuthFormProps = {
    type: string,
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')

  const { signup, login, error, isLoading } = useAuthStore()

  const router = useRouter() // Updated import

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const handleConfirmPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPwd(e.target.value)

  const handleSignUp = async () => {
    try {
      await signup(name, email, password)
      router.push('/auth/verify-email')
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async () => {
    try {
      await login(email, password)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Prevent default form submission
    try {
      if (type === 'Sign Up') {
        await handleSignUp()
      } else {
        await handleLogin()
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <VStack as={'form'} onSubmit={handleSubmit} w={450} h={500} justifyContent={'center'} className='rounded-xl py-3 px-16'>
      <Heading className='mb-2'>{type === 'Sign In' ? 'Sign In' : 'Sign Up'}</Heading>
      
      {type === 'Sign Up' && (
          <InputField 
            type='text' 
            placeholder='Name' 
            id='name' 
            value={name} 
            onChange={handleNameChange} 
          />
      )}

        <InputField 
          type='email' 
          placeholder='Email address' 
          id='email' 
          value={email}
          onChange={handleEmailChange} 
        />

        <InputField 
          type='password' 
          placeholder='Password' 
          id='password' 
          value={password}
          onChange={handlePasswordChange} 
        />

      {type === 'Sign Up' && (
          <InputField 
            type='password' 
            placeholder='Confirm Password' 
            id='confirm' 
            value={confirmPwd}
            onChange={handleConfirmPwdChange} 
          />
      )}

      <Button type="submit" borderColor={'black'} variant={'outline'} className='mt-4'>
        {isLoading ? 'Loading...' : type === 'Sign In' ? 'Sign In' : 'Sign Up'}
      </Button>

      <Link href={type === 'Sign In' ? '/auth/signup' : '/auth/login'}>
        {type === 'Sign In' ? 
        <p>Don't have an account yet? <span className='text-orange-600 font-bold'>Sign up</span></p> :
        <p>Have an account already? <span className='text-orange-600 font-bold'>Log In</span></p>}
      </Link>
    </VStack>
  )
}

export default AuthForm
