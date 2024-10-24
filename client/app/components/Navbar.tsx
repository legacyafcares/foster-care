import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { LuMenuSquare } from "react-icons/lu";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
    const navlinks = [
        {
            name: 'Our Services',
            url: '#services'
        },
        // {
        //     name: 'About Us',
        //     url: '/about-us'
        // },
        {
            name: 'Contact Us',
            url: '#contact'
        },
    ]
  return (
        <div className='flex justify-between items-center lg:px-16 px-8 py-2 absolute z-10 text-white w-full'>
        <Link href={'/'}>
            <div className='flex gap-2 justify-center items-center'>
                <Image src='/logo.png' alt='Legacy AFC' width={100} height={40}/>
                {/* <h1 className='lg:text-2xl max-lg:hidden font-bold'>Legacy AFC</h1> */}
            </div>
        </Link>
        <div className="max-sm:hidden">
            {navlinks.map((l, index) => (
                <Link href={l.url} key={index} className='ml-10 text-lg hover:text-green-400 transition ease-in-out duration-700 hover:scale-95'>{l.name}</Link>
            ))}
        </div>
        <div>
            <h1 className='text-xl font-bold ml-6 max-md:hidden'>+1-860-994-8220</h1>
        </div>
        <div className='md:hidden'>
            <Menu>
                <MenuButton>
                    <LuMenuSquare className='text-xl'/>
                </MenuButton>
                <MenuList color={'black'}>
                    {navlinks.map((l, index) => (
                        <Link href={l.url} key={index}>
                            <MenuItem className='text-black hover:text-green-500 transition ease-in-out duration-700 hover:scale-105'>{l.name}</MenuItem>
                        </Link>
                    ))}
                </MenuList>
            </Menu>
        </div>
        </div>
  )
}

export default Navbar
