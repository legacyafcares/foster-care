'use client'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomeContact = () => {
    const router = useRouter()
  return (
    <section className='w-full h-[200px] pt-8'>
      <div className='h-full flex items-center justify-center flex-col gap-7'>
        <h1 className='text-4xl font-extrabold'>Your Care Journey Starts Here</h1>
        <p className='text-left'>Contact us today to learn more about our compassionate foster care services for the elderly.</p>
        <Button colorScheme={'red'} onClick={()=>router.push('/contact')}>Inquire</Button>
      </div>
    </section>
  )
}

export default HomeContact
