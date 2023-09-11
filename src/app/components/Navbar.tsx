"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from '../images/logo.png'
import Image from "next/image";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/sections/home', label: 'Home' },
    { href: '/sections/about', label: 'About' },
    { href: '/sections/projects', label: 'Projects' },
    { href: '/sections/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-200 bg-transparent	 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Image
            src={Logo}
            className="h-8 mr-3 w-20"
            alt="my logo"
          />
      
        </div>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 ${isOpen ? 'hidden' : 'block'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <svg
            className={`w-5 h-5 ${isOpen ? 'block' : 'hidden'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul
            className={`${
              isOpen ? 'block' : 'flex flex-col'
            } font-medium mt-4 rounded-lg bg-transparent	 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent  md:dark:bg-transparent  dark:border-gray-700`}
          >
            {links.map((link) => (
              <li className="hover:text-sky-700" key={link.href}>
                <Link href={link.href}>
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block"
                  />
               
                    {link.label}
               
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
