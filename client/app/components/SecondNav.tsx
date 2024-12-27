import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { LuMenuSquare } from "react-icons/lu";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  const navlinks = [
    {
      name: "Our Services",
      url: "/our-services",
    },
    {
        name: 'About Us',
        url: '/about-us'
    },
    // {
    //   name: "Contact Us",
    //   url: "#contact",
    // },
  ];
  return (
    <div className="flex justify-between items-center py-2 md:py-4 lg:px-16 px-4 absolute z-10 text-green-700 w-full">
      <Link href={"/"}>
        <div className="lg:w-[200px] lg:h-[75px] w-[100px] h-[25px] flex items-center justify-center">
          <Image src="/logo.png" alt="Legacy AFC" width={120} height={75} className="w-auto h-auto"/>
          {/* <h1 className='lg:text-2xl max-lg:hidden font-bold'>Legacy AFC</h1> */}
        </div>
      </Link>
      <div className="max-sm:hidden flex items-center justify-between space-x-10">
        {navlinks.map((l, index) => (
          <Link
            href={l.url}
            key={index}
            className="lg:text-lg md:text-md hover:text-green-400 transition ease-in-out duration-700 hover:scale-95"
          >
            {l.name}
          </Link>
        ))}
      </div>
      <div>
        <h1 className="lg:text-xl md:text-sm font-bold ml-6 max-md:hidden">
          +1-860-994-8220
        </h1>
      </div>
      <div className="md:hidden">
        <Menu>
          <MenuButton>
            <LuMenuSquare className="text-xl h-6 mt-4" />
          </MenuButton>
          <MenuList color={"black"}>
            {navlinks.map((l, index) => (
              <Link href={l.url} key={index}>
                <MenuItem className="text-black hover:text-green-500 transition ease-in-out duration-700 hover:scale-105">
                  {l.name}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
