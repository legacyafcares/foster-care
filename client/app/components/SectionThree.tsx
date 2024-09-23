import { Button, Card, CardBody, CardHeader, Heading, Link } from '@chakra-ui/react'
import React from 'react'

const SectionThree = () => {
    const cards = [
        {
            main: 'Dedicated Professionals Committed to Enhancing Quality of Life',
            p: 'Our personalized care plans ensure that each resident receives the attention they deserve.',
            linkText: 'Learn More',
            link: '/about-us'
        },
        {
            main: 'A Safe and Nurturing Environment for Your Loved Ones',
            p: 'We create a warm, welcoming atmosphere that looks and feels like home.',
            linkText: 'Sign Up',
            link: '/auth/signup'
        },
        {
            main: 'Comprehensive Support for Families and Their Elderly Loved Ones',
            p: 'Our team is here to support both residents and their families every step of the way.',
            linkText: 'Contact',
            link: '/contact'
        },
    ]
  return (
    <section className='min-h-screen w-full flex flex-col justify-around items-center px-6'>
        <div className="lg:w-[50%] w-[75%] mx-auto mt-6">
            <h1 className="font-extrabold lg:text-5xl text-2xl mb-6 lg:text-center">Experience Compassionate Care Tailored to Your Loved One&apos;s Needs</h1>
        </div>
        <div className='lg:w-[80%] md:w-[60%] w-full h-fit grid lg:flex lg:items-center lg:justify-evenly gap-6'>
            {cards.map((c,index) => (
                <Card key={index} className='lg:h-[300px] h-fit flex flex-col'>
                    <CardHeader>
                        <h1 className='text-2xl font-extrabold'>{c.main}</h1>
                    </CardHeader>
                    <CardBody>
                        <p>{c.p}</p>
                        <Link href={c.link}>
                            <Button variant={'outline'} colorScheme='red' className='mx-auto mt-5'>{c.linkText}</Button>
                        </Link>
                    </CardBody>
                </Card>
            ))}
        </div>
    </section>
  )
}

export default SectionThree
