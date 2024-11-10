import React from 'react';
import { marvel } from '../ui/fonts';

const Footer = () => {
  return (
    <div
      className={`${marvel.className} antialiased w-full h-[10vh] flex justify-center items-center text-3xl`}
    >
      The Cuisine Restaurant 2024.
    </div>
  );
};

export default Footer;
