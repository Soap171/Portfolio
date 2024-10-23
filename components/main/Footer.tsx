import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="w-full flex flex-col md:flex-row items-center justify-between m-auto max-w-4xl">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; Sachinthana Jayathunga 2024. All rights reserved
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="mailto:spiyumal48@gmail.com" className="hover:underline">
            <span className="text-[#f4443d]">Email</span> : spiyumal48@gmail.com
          </a>{" "}
          |
          <a href="tel:+94771908671" className="hover:underline">
            <span className="text-[#25D366]">Whatsapp</span> : +94 771908671
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
