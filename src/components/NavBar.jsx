import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
      navbar.classList.add("top-0");
      navbar.classList.remove("top-15");
    } else {
      navbar.classList.remove("top-0");
      navbar.classList.add("top-15");
    }
  });

  return (
    // <div className="w-full min-h-[50px] flex justify-between items-center z-10 absolute text-white bg-gray-700/80">
    <div
      id="navbar"
      className="w-full min-h-[50px] flex justify-between items-center z-10 fixed top-15 left-0 text-white bg-gray-700/80"
    >
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between ">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>

      {/* HAMBURGER ICON */}
      <div className="sm:hidden z-10" onClick={handleNav}>
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* MOBILE MENU */}
      <div
        onClick={handleNav}
        className={
          nav
            ? `overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 top-0 left-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col`
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* MOBILE MENU END */}
    </div>
  );
};

export default NavBar;
