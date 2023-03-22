import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { styles } from '../../styles';
import { navLinks } from '../../constants';
import { menu, close, logoColor } from '../../assets';
import Image from 'next/image';

type Props = {}

interface Link {
  id: string;
  title: string;
}

const Navbar = (props: Props): JSX.Element => {

  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary border border-red-500`}>
      <div className="w-full lg:w-[80%] flex justify-center items-center max-w-7xl mx-4 lg:mx-auto  border-2 border-blue-900">
        <Link href="/" className="flex items-center gap-2 mr-auto" onClick={() => {
          setActive("");
          window.scrollTo(0,0)
        }}>
          <Image src={logoColor} alt="logo" className="w-[15%] md:w-[10%] object-contain rounded-full" />
          <p className="text-white text-base sm:text-lg font-bold cursor-pointer">devHudson</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((link: Link) => (
              <li 
                key={link.id} 
                className={`${ active === link.title ? "text-white" : "text-secondary"} hover:text-white text-lg font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
                >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
        <Image 
          src={toggle ? close : menu}
          alt="menu"
          className="sm:hidden flex items-center w-7 h-7 object-contain cursor-pointer z-22"
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20
          right-0 mx-8 my-2 min-w-[8.75rem] z-10 rounded-xl`}>
          <ul className="list-none flex flex-col gap-4 justify-end items-start mx-auto">
            {
              navLinks.map((link: Link) => (
                <li 
                  key={link.id} 
                  className={`${ 
                    active === link.title 
                      ? "text-white" 
                      : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-base`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                  >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar