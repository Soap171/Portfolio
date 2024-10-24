"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/navLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Sachinthana Jayathunga
          </span>
        </a>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#050314d1] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 p-4 text-white rounded-lg">
          <a href="#about-me" className="cursor-pointer py-2">
            About me
          </a>
          <a href="#skills" className="cursor-pointer py-2">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer py-2">
            Projects
          </a>
          <div className="flex flex-row gap-5 mt-4">
            {Socials.map((social) => (
              <a href={social.link} key={social.name} target="_blank">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
