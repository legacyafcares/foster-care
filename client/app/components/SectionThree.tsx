import { Button, Card, CardBody, CardHeader, Link } from '@chakra-ui/react'
import React from 'react'

const SectionThree = () => {
    const cards = [
        {
            main: 'Dedicated Professionals Committed to Enhancing Quality of Life',
            p: 'Our personalized care plans ensure that each resident receives the attention they deserve.',
            linkText: 'Learn More',
            link: '#services'
        },
        {
            main: 'A Safe and Nurturing Environment for Your Loved Ones',
            p: 'We create a warm, welcoming atmosphere that always looks and feels like home.',
            linkText: 'Sign Up',
            link: '/auth/signup'
        },
        {
            main: 'Comprehensive Support for Families and Their Elderly Loved Ones',
            p: 'Our team is here to support both residents and their families every step of the way at all times.',
            linkText: 'Contact',
            link: '#contact'
        },
    ]
  return (
    <section className='flex-1 flex flex-col justify-around items-center px-6'>
        <div className="lg:w-[50%] md:w-[75%] mx-auto mt-6">
            <h1 className="font-extrabold lg:text-5xl md:text-3xl text-xl mb-6 md:text-center">Experience Compassionate Care Tailored to Your Loved One&apos;s Needs</h1>
        </div>
        <div className='lg:w-[80%] md:w-[60%] w-full h-fit grid lg:flex lg:items-center lg:justify-evenly gap-6'>
            {cards.map((c,index) => (
                <Card key={index} className='lg:h-[300px] h-fit lg:w-[400px] flex flex-col'>
                    <CardHeader>
                        <h1 className='lg:text-2xl font-extrabold'>{c.main}</h1>
                    </CardHeader>
                    <CardBody className='font-afacad'>
                        <p>{c.p}</p>
                        <Link href={c.link}>
                            <Button colorScheme='green' className='mx-auto mt-5'>{c.linkText}</Button>
                        </Link>
                    </CardBody>
                </Card>
            ))}
        </div>
    </section>
  )
}

export default SectionThree
