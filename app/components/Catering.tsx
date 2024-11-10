import Image from 'next/image';
import React from 'react';
import { marvel } from '../ui/fonts';

const Catering = () => {
  return (
    <div
      id="catering"
      className="w-full h-screen flex flex-col md:flex-row gap-10 border-b-2 border-black"
    >
      <div className="w-full h-[50%] md:h-full md:w-[50%] flex flex-col justify-center items-center gap-5">
        <h1 className={`${marvel.className} antialiased text-6xl text-center`}>
          CATERING FOR ALL OCCASIONS
        </h1>
        <p
          className={`${marvel.className} antialiased text-xl text-center px-20`}
        >
          Catering services provide expertly prepared food and beverages for
          events, ranging from weddings and corporate gatherings to private
          parties and social celebrations. These services often include menu
          customization, food presentation, and complete setup and cleanup,
          allowing hosts to focus on their guests.
        </p>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Call Us
        </button>
      </div>
      <div className="w-full h-[50%] md:h-full md:w-[50%]">
        <Image
          className="w-full h-full object-cover border-l-2 border-black"
          src="/catering.jpg"
          alt="catering"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
};

export default Catering;
