import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { marvel } from '../ui/fonts';

const Navbar = () => {
  return (
    <nav className="w-full h-[20vh] flex justify-center items-center p-5">
      <div className="w-[25%]">
        <ul className="flex justify-between md:justify-evenly items-center pr-5 gap-5">
          <li>
            <Link
              className={`${marvel.className} antialiased text-xl md:text-2xl hover:underline`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${marvel.className} antialiased text-xl md:text-2xl hover:underline`}
              href="/"
            >
              Menu
            </Link>
          </li>
        </ul>
      </div>
      <div className="h-full">
        <Image
          className="h-[150px] w-[150px] 2xl:h-[200px] 2xl:w-[200px]"
          src="/logo.png"
          alt="logo"
          width={500}
          height={500}
        />
      </div>
      <div className="w-[25%]">
        <ul className="flex justify-between md:justify-evenly items-center pl-5 gap-5">
          <li>
            <Link
              className={`${marvel.className} antialiased text-xl md:text-2xl hover:underline`}
              href="/"
            >
              Wine
            </Link>
          </li>
          <li>
            <Link
              className={`${marvel.className} antialiased text-xl md:text-2xl hover:underline`}
              href="/"
            >
              Catering
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
