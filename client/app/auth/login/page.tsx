import AuthForm from '@/app/components/AuthForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='w-screen min-h-screen lg:flex lg:items-center lg:justify-center lg:gap-8'>
      <AuthForm type='Sign In'/>
      <div className='max-md:hidden'>
        <Image src={'/login.jpg'} alt={'Join us'} width={600} height={1000} priority/>
      </div>
    </section>
  )
}

export default page
