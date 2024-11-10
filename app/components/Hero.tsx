import Image from 'next/image';
import React from 'react';
import { marvel } from '../ui/fonts';

const Hero = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-5 md:mt-5 lg:mt-10 p-10">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className={`${marvel.className} antialiased text-6xl text-center`}>
          FINE DINING AT ITS BEST
        </h1>
      </div>
      <div className="w-full h-full p-5 border-2 border-black">
        <Image
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
          src="/hero_1.jpg"
          alt="hero_1"
          width={1200}
          height={1200}
        />
      </div>
      <div className="w-full h-full p-5 border-2 border-black">
        <Image
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
          src="/hero_2.jpg"
          alt="hero_2"
          width={1200}
          height={1200}
        />
      </div>
      <div className="w-full h-full p-5 border-2 border-black">
        <Image
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
          src="/hero_3.jpg"
          alt="hero_3"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
};

export default Hero;
