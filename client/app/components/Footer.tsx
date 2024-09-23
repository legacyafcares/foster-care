import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const quickLinks = [
        {
            name: 'About Us',
            url: '/about-us'
        },
        {
            name: 'Our Services',
            url: '/services'
        },
        {
            name: 'Contact Us',
            url: '/contact'
        }
    ]
    const socialLinks = [
        {
            name: 'Facebook',
            url: '/'
        },
        {
            name: 'Twitter',
            url: '/'
        },
        {
            name: 'Instagram',
            url: '/'
        }
    ]
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
    <footer className='h-[200px] px-7 bg-red-900 flex justify-evenly items-center text-white'>
        <h1 className='font-extrabold text-3xl'>SOME NAME</h1>
        <div className='grid gap-1 h-[100px] pt-4'>
            <h1 className="font-extrabold mb-5">Quick Links</h1>
            {quickLinks.map((l, index) => (
                <Link  href={l.url} key={index} className='hover:text-slate-500 transition ease-in-out duration-500'>{l.name}</Link>
            ))}
        </div>
        <div className='grid gap-1 h-[100px] pt-4'>
            <h1 className="font-extrabold mb-5">Connect With Us</h1>
            {socialLinks.map((l, index) => (
                <Link  href={l.url} key={index} className='hover:text-slate-500 transition ease-in-out duration-500'>{l.name}</Link>
            ))}
        </div>
        <div className='grid gap-1 h-[100px] pt-4'>
            <h1 className="font-extrabold mb-5">Stay Updated</h1>
            {updateLinks.map((l, index) => (
                <Link  href={l.url} key={index} className='hover:text-slate-500 transition ease-in-out duration-500'>{l.name}</Link>
            ))}
        </div>
    </footer>
  )
}

export default Footer
