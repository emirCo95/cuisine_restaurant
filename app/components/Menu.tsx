import Image from 'next/image';
import React from 'react';
import { marvel } from '../ui/fonts';
import Link from 'next/link';

const Menu = () => {
  return (
    <div
      id="menu"
      className="w-full h-screen grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-5 p-10 border-b-2 border-black"
    >
      <div className="flex flex-col justify-center items-center">
        <h1
          className={`${marvel.className} antialiased text-6xl text-center mb-5`}
        >
          DOWNLOAD OUR MENU
        </h1>
        <div className="flex justify-center items-center">
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-5 me-2 mb-2 mt-5">
            MENU
          </button>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-5 me-2 mb-2 mt-5">
            <Link href="#wine">WINE</Link>
          </button>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center border-2 border-black p-5">
        <Image
          className="w-full h-full object-cover"
          src="/menu.jpg"
          alt="menu"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
};

export default Menu;
