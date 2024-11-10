import Image from 'next/image';
import React from 'react';
import { marvel } from '../ui/fonts';

const Wine = () => {
  return (
    <div
      id="wine"
      className="w-full h-screen flex flex-col md:flex-row gap-10 border-b-2 border-black"
    >
      <div className="w-full h-[50%] md:h-full md:w-[50%]">
        <Image
          className="w-full h-full object-cover border-r-2 border-black"
          src="/wine.jpg"
          alt="wine"
          width={1200}
          height={1200}
        />
      </div>
      <div className="w-full h-[50%] md:h-full md:w-[50%] flex flex-col justify-center items-center gap-5">
        <h1 className={`${marvel.className} antialiased text-6xl`}>
          QUALITY TASTE
        </h1>
        <p
          className={`${marvel.className} antialiased text-xl text-center px-20`}
        >
          Wine plays a significant role in the dining experience at restaurants,
          enhancing flavors and elevating meals with thoughtful pairings. A
          well-curated wine list offers options that complement the cuisine,
          whether rich reds for hearty dishes or crisp whites for lighter fare.
          Knowledgeable sommeliers or staff can guide guests in choosing wines
          to match their tastes and preferences, creating a memorable
          experience.
        </p>
      </div>
    </div>
  );
};

export default Wine;
