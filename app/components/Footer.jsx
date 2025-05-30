import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4E342E] text-[#FBE9E7] py-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-[#FFCCBC]">㊠ Pizza Hub</h2>
          <p className="text-sm text-[#D7CCC8] mt-1">
            Baked with Love & Coffee Aroma
          </p>
        </div>

  
        <div className="flex gap-4 text-[#FFAB91] text-xl">
          <a href="#" className="hover:text-white transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaFacebookF />
          </a>
        </div>
      </div>


      <div className="text-center mt-6 text-sm text-[#D7CCC8] border-t border-[#795548] pt-4">
        &copy; {new Date().getFullYear()} Pizza Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
