"use client";
import { useState } from 'react'; // Import useState
import Link from 'next/link';
import Image from 'next/image';
import whydesignslogo from 'public/images/logo.png';
import { useRouter, usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  const isActive = (link) => pathname === link;

  // State to control the mobile menu modal
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='flex justify-between items-center bg-white lg:px-[300px] py-[50px] max-lg:px-[20px] py:[10px]'>
      <div className='flex'>
        <Link href='/'>
        <Image priority src={whydesignslogo} alt="Logo" className= 'lg:w-20 max-lg:w-12' />
        </Link>
      </div>
      {/* Conditional rendering for the mobile menu */}
      <div className='hidden lg:flex items-center'>
        <Link href="/">
          <h1 className={`ml-5 text-gray-700 hover:underline ${isActive('/') ? 'font-bold no-underline' : ''}`}>Home</h1>
        </Link>
        <Link href="/about-me">
          <h1 className={`ml-5 text-gray-700 hover:underline ${isActive('/about-me') ? 'font-bold no-underline' : ''}`}>About Me</h1>
        </Link>
        <Link href="/work">
          <h1 className={`ml-5 text-gray-700 hover:underline ${isActive('/work') ? 'font-bold no-underline' : ''}`}>Work</h1>
        </Link>
        <Link href="/contact">
          <h1 className={`ml-5 text-gray-700 hover:underline ${isActive('/contact') ? 'font-bold no-underline' : ''}`}>Contact</h1>
        </Link>
      </div>
      {/* Hamburger menu button for mobile */}
      <div className='lg:hidden'>
        <button onClick={toggleMobileMenu}>
          <img src='https://uploads-ssl.webflow.com/5c80ff16b78f1322a4a9d105/5c80ff17b78f1395faa9d112_menu-icon.png'className='max-lg:w-5'/>
        </button>
      </div>
      {/* Mobile menu modal */}
      {isMobileMenuOpen && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-white flex flex-col items-center justify-center z-50'>
          <button onClick={toggleMobileMenu} className='absolute top-2 right-2 text-gray-700 hover:underline'>
            &times;
          </button>
          <Link href="/">
            <h1 onClick={closeMobileMenu} className={`text-gray-700 hover:underline ${isActive('/') ? 'font-bold' : ''}`}>Home</h1>
          </Link>
          <Link href="/about-me">
            <h1 onClick={closeMobileMenu} className={`text-gray-700 hover:underline ${isActive('/about-me') ? 'font-bold' : ''}`}>About Me</h1>
          </Link>
          <Link href="/work">
            <h1 onClick={closeMobileMenu} className={`text-gray-700 hover:underline ${isActive('/work') ? 'font-bold' : ''}`}>Work</h1>
          </Link>
          <Link href="/contact">
            <h1 onClick={closeMobileMenu} className={`text-gray-700 hover:underline ${isActive('/contact') ? 'font-bold' : ''}`}>Contact</h1>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;


