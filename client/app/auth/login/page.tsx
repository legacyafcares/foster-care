import AuthForm from '@/app/components/AuthForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='w-screen min-h-screen lg:flex lg:items-center lg:justify-center'>
      <AuthForm type='Sign In'/>
      <div className='size-screen object-cover'>
        <Image src={'/login.jpg'} alt={'Join us'} width={600} height={1000} priority/>
      </div>
    </section>
  )
}

export default page
