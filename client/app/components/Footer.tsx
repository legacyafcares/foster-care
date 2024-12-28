import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  const quickLinks = [
    {
      name: "About Us",
      url: "/about-us",
    },
    {
      name: "Our Services",
      url: "/our-services",
    },
    // {
    //   name: "Contact Us",
    //   url: "#contact",
    // },
  ];
 
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
    <footer className="md:h-[200px] h-screen w-full px-7 bg-green-800 flex max-md:flex-col justify-evenly md:items-center text-white pb-7">
      <Link href={"/"}>
        <div className="flex flex-col items-center gap-10 justify-between">
          <Image src="/logo.png" alt="Legacy AFC" width={200} height={80} />
          <h1 className='font-extralight text-sm'>&copy;LEGACY AFC 2024. ALL RIGHTS RESERVED</h1>
        </div>
      </Link>
      <div className="grid gap-3 h-[100px] lg:pt-10 pt-4 w-[300px] justify-items-start mb-12">
        <div className="flex items-center gap-2">
          <FiPhone />
          <h1>+1-860-994-8220</h1>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineEmail />
          <h1>susan@legacyafcares.com</h1>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <h2>15 Midstate Drive, Suite 212</h2>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="ml-6">Auburn MA 01501</h3>
        </div>
      </div>
      <div className="grid gap-1 h-[100px] pt-4">
        <h1 className="font-extrabold md:mb-5 mb-3">QUICK LINKS</h1>
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
        <h1 className="font-extrabold md:mb-5 mb-3">STAY UPDATED</h1>
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
