'use client'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiCubeTransparent } from "react-icons/hi";

const HomeContact = () => {
    const router = useRouter()

    const serviceCards = [
      {
        title: 'Personalized In-Home Care Services',
        content: 'Our in-home care services ensure comfort and safety.'
      },
      {
        title: 'Respite Care for Family Caregivers',
        content: 'We provide temporary relief for family caregivers.'
      },
      {
        title: 'Social Engagement Programs',
        content: 'Our programs foster social connections and reduce loneliness.'
      },
      {
        title: 'Specialized Memory Care Services',
        content: 'We offer tailored support for individuals with memory challenges.'
      },
    ]
  return (
    <>
      <section className='flex-1' id='services'>
      <div className='w-[90%] flex max-lg:flex-col items-center justify-evenly gap-5 mx-auto my-16'>
        <h1 className='lg:text-3xl md:text-2xl text-xl font-extrabold lg:w-1/2'>Caring for Our Elders with Dignity</h1>
        <p className='lg:w-1/2 font-afacad lg:text-xl text-lg'>At our core, we believe in providing loving and respectful care for the elderly. Our mission is to enhance the quality of life for seniors through dedicated support and community engagement. With years of experience, we are committed to fostering a nurturing environment where every elder feels valued and cherished.</p>
      </div>
      <div className='w-[90%] flex max-md:flex-col items-center justify-start gap-5 mx-auto'>
        <div className='flex flex-col gap-5 items-start justify-evenly lg:w-2/5'>
          <h1 className="lg:text-3xl md:text-2xl text-xl font-extrabold text-center">Comprehensive Services for Elderly Care</h1>
          <p className='font-afacad text-lg'>We offer a range of specialized services tailored to meet the unique needs of the elderly. Our compassionate team is dedicated to providing the highest quality of care and support.</p>
          <div className='mx-auto'>
            {/* <Button colorScheme='red' className='rounded-lg p-2 text-center'>Learn More</Button> */}
            <Button as={'a'} colorScheme='green' href="#contact" className='rounded-lg p-2 w-[100px]'>Contact</Button>
          </div>
        </div>
        <div className='lg:w-3/5 flex-col lg:grid lg:grid-cols-2 gap-5 max-lg:hidden'>
          {serviceCards.map((c, index) => (
            <div key={index} className='p-3 flex flex-col items-start gap-5 h-fit'>
              <HiCubeTransparent className='lg:text-2xl text-lg'/>
              <h1 className="lg:text-3xl text-xl font-bold">{c.title}</h1>
              <p className='text-xl font-afacad'>{c.content}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
      <section className='flex-1 lg:pt-8 max-md:mt-8 mt-6'>
        <div className='h-full flex items-center justify-center flex-col gap-7 p-4'>
          <h1 className='lg:text-4xl text-3xl font-extrabold'>Your Care Journey Starts Here</h1>
          <p className='text-left font-afacad lg:text-xl text-lg'>Contact us today to learn more about our compassionate foster care services for the elderly.</p>
          <Button colorScheme={'green'} onClick={()=>router.push('#contact')} w={150} p={3}>Inquire</Button>
        </div>
      </section>    
    </>
  )
}

export default HomeContact
