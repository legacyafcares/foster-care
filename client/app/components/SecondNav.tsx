import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { LuMenuSquare } from "react-icons/lu";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ContactModal from "./ContactModal";
import SecondContactModal from "./SecondContactModal";

export interface SecondNavProps {
  page: string;
}

const Navbar = ({page}: SecondNavProps) => {
  const navlinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Our Services",
      url: "/our-services",
    },
    {
        name: 'About Us',
        url: '/about-us'
    },
    {
      name: "Blog",
      url: "/blog",
    },
  ];
  return (
    <div className="flex justify-between items-center py-2 md:py-4 lg:px-16 px-4 absolute z-10 text-green-700 w-full">
      <Link href={"/"}>
        <div className="flex items-center justify-center max-md:w-[50px] max-md:h-[50px] max-lg:w-[60px] max-lg:h-[60px] h-[50px]">
          <Image src="/logo-white.png" alt="Legacy AFC" width={160} height={160} />
          {/* <h1 className='lg:text-2xl max-lg:hidden font-bold'>Legacy AFC</h1> */}
        </div>
      </Link>
      <div className="max-lg:hidden flex items-center justify-between space-x-10 text-green-700">
        {navlinks.map((l, index) => (
          <Link
            href={l.url}
            key={index}
            className="lg:text-lg md:text-md hover:text-green-400 transition ease-in-out duration-700 hover:scale-95"
          >
            {l.name}
          </Link>
        ))}
        <ContactModal page={page}/>
      </div>
      {/* <div>
        <h1 className="lg:text-md md:text-sm font-bold ml-6 max-md:hidden font-afacad">
          +1-860-994-8220 | susan@legacyafcares.com
        </h1>
      </div> */}
      <div className="lg:hidden">
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
            <SecondContactModal page={page} />
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
