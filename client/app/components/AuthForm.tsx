import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import InputField from './InputField'
import { UserRound, Mail, Lock } from 'lucide-react';
import Link from 'next/link';


type AuthFormProps = {
    type: string,
}
const AuthForm = ({type}: AuthFormProps) => {
  return (
    <VStack w={450} h={500} justifyContent={'center'} className='rounded-xl p-3 border'>
      {type === 'Sign In' ? <Heading>Sign In</Heading> : <Heading>Sign Up</Heading>}
      {type === 'Sign Up' && <div className="grid">
        <label htmlFor="name">Name</label>
        <InputField type='text' placeholder='Name' id='name'/>
      </div>}

      <div className="grid">
        <label htmlFor="email">Email</label>
        <InputField type='email' placeholder='Email address' id='email'/>
      </div>

      <div className="grid">
        <label htmlFor="password">Password</label>
        <InputField type='password' placeholder='Password' id='password'/>
      </div>

      {type === 'Sign Up' && <div className="grid">
        <label htmlFor="confirm">Confirm Password</label>
        <InputField type='password' placeholder='Confirm Password' id='confirm'/>
      </div>}

      <Button variant={'outline'} className='mt-4'>{type === 'Sign In' ? 'Sign In' : 'Sign Up'}</Button>
      <Link href={type === 'Sign In' ? '/auth/signup' : '/auth/login'}>
        {type === 'Sign In' ? 
        <p>Don't have an account yet? <span className='text-amber-500'>Sign up</span></p> :
        <p>Have an account already? <span className='text-amber-500'>Log In</span></p>}
      </Link>
    </VStack>
  )
}

export default AuthForm
