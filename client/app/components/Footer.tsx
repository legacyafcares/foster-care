import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const quickLinks = [
        // {
        //     name: 'About Us',
        //     url: '/about-us'
        // },
        {
            name: 'Our Services',
            url: '#services'
        },
        {
            name: 'Contact Us',
            url: '#contact'
        }
    ]
    // const socialLinks = [
    //     {
    //         name: 'Facebook',
    //         url: '/'
    //     },
    //     {
    //         name: 'Twitter',
    //         url: '/'
    //     },
    //     {
    //         name: 'Instagram',
    //         url: '/'
    //     }
    // ]
    const updateLinks = [
        {
            name: 'Newsletter Sign Up',
            url: '/'
        },
        {
            name: 'Join Our Community',
            url: '/auth/signup'
        },
        {
            name: 'Get Involved Today',
            url: '/'
        }
    ]
  return (
    <footer className='md:h-[200px] h-screen px-7 bg-red-800 flex max-md:flex-col justify-evenly md:items-center text-white pb-7'>
        <Link href={'/'}>
            <h1 className='font-extrabold text-3xl'>Legacy AFC</h1>
        </Link>
        <div className='grid gap-1 h-[100px] pt-4'>
            {/* {socialLinks.map((l, index) => (
                <Link  href={l.url} key={index} className='hover:text-slate-500 transition ease-in-out duration-500'>{l.name}</Link>
            ))} */}
            <h2>120 Maple Street, Suite 401</h2>
            <h3>Springfield, Massachusetts</h3>
        </div>
        <div className='grid gap-1 h-[100px] pt-4'>
            <h1 className="font-extrabold md:mb-5 mb-3">Quick Links</h1>
            {quickLinks.map((l, index) => (
                <Link  href={l.url} key={index} className='hover:text-slate-500 transition ease-in-out duration-500'>{l.name}</Link>
            ))}
        </div>
        
        <div className='grid gap-1 h-[100px] pt-4'>
            <h1 className="font-extrabold md:mb-5 mb-3">Stay Updated</h1>
            {updateLinks.map((l, index) => (
                <Link  href={l.url} key={index} className='hover:text-slate-500 transition ease-in-out duration-500'>{l.name}</Link>
            ))}
        </div>
    </footer>
  )
}

export default Footer
