import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  const quickLinks = [
    // {
    //     name: 'About Us',
    //     url: '/about-us'
    // },
    {
      name: "Our Services",
      url: "#services",
    },
    {
      name: "Contact Us",
      url: "#contact",
    },
  ];
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
      name: "Newsletter Sign Up",
      url: "/",
    },
    {
      name: "Join Our Community",
      url: "/auth/signup",
    },
    {
      name: "Get Involved Today",
      url: "/",
    },
  ];
  return (
    <footer className="md:h-[200px] h-screen px-7 bg-green-800 flex max-md:flex-col justify-evenly md:items-center text-white pb-7">
      <Link href={"/"}>
        <div className="flex items-center gap-2 justify-center">
          <Image src="/logo.png" alt="Legacy AFC" width={200} height={80} />
          {/* <h1 className='font-extrabold text-2xl'>Legacy AFC</h1> */}
        </div>
      </Link>
      <div className="grid gap-3 h-[100px] pt-4">
        {/* {socialLinks.map((l, index) => (
                <Link  href={l.url} key={index} className='hover:text-slate-500 transition ease-in-out duration-500'>{l.name}</Link>
            ))} */}
        <div className="flex items-center justify-center gap-2">
          <MdOutlineEmail />
          <h1>susan@legacyafcares.com</h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CiLocationOn />
          <h2>15 Midstate Drive, Suite 212</h2>
          <h3>Auburn MA 01501</h3>
        </div>
      </div>
      <div className="grid gap-1 h-[100px] pt-4">
        <h1 className="font-extrabold md:mb-5 mb-3">Quick Links</h1>
        {quickLinks.map((l, index) => (
          <Link
            href={l.url}
            key={index}
            className="hover:text-slate-300 transition ease-in-out duration-500"
          >
            {l.name}
          </Link>
        ))}
      </div>

      <div className="grid gap-1 h-[100px] pt-4">
        <h1 className="font-extrabold md:mb-5 mb-3">Stay Updated</h1>
        {updateLinks.map((l, index) => (
          <Link
            href={l.url}
            key={index}
            className="hover:text-slate-400 transition ease-in-out duration-500"
          >
            {l.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
