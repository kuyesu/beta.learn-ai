'use client';

import { useRouter } from 'next/navigation';

import BannerBadge from './BannerBadge';

import { useTranslation } from 'next-i18next';
import React from 'react';
import { FaRobot } from 'react-icons/fa';

const AppTitle = () => {
  const { i18n } = useTranslation();
const router = useRouter();
  return (
    <div
      id="title"
      className="relative flex space-y-7 flex-col pt-8 md:pt-14 items-center "
    >
      <div className="flex flex-row items-start">
        <span className="text-4xl text-center font-bold text-white xs:text-5xl sm:text-6xl">
          AI ChatGPT Prompts Template
        </span>
      </div>
      <div className="flex flex-row items-start">
        <p className="text-xl text-zinc-400 px-4 text-center  md:px-0">
          Simplify your workflow and work smarter with the power of ChatGPT.
        </p>
      </div>
      <div className="gzPeFs items-center relative group hover:pl-0 justify-between ">

      <div className="absolute z-10 -inset-0.5 bg-gradient-to-r  from-pink-600 to-purple-600 via-[#02FCF1] rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className=' z-50 w-full flex items-center hover:bg-black/50 hover:pl-4 hover:rounded-2xl  '>
          <FaRobot size={20} className="text-zinc-400"  />
        <input
          type="text"
          placeholder="Generate ChatGPT Prompts"
          className="  border-0 ring-0 outline-0 focus:border-0 focus:ring-0 focus:outline-0 rounded-md p-2 flex w-full  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          id="inputID"
        />
         <div
          className="md:flex m-2"
          onClick={() => {
            router.push(
              '/signin',

            );
          }}
        >
          <BannerBadge className=' rounded-xl bg-transparent'>
            Start with AI
          </BannerBadge>
        </div>
        </div>
      </div>
    <div className="grid gap-8 items-start justify-center">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 via-[#02FCF1] rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <span className="flex items-center space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span className="pr-6 text-gray-100">AI Lab Release 2023.09</span>
        </span>
        <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">See what's new &rarr;</span>
      </button>
    </div>
      </div>

    </div>
  );
};

export default AppTitle;
