"use client";
import { useState } from 'react'; // Import useState
import Link from 'next/link';
import Image from 'next/image';
import whydesignslogo from 'public/images/logo.png';
import { useRouter, usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  const isActive = (link) => pathname === link;

  // State to control the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className='flex justify-between items-center bg-white lg:px-[250px] py-[50px] max-lg:px-[20px]'>
        <div className='flex'>
          <Link href='/'>
            <Image priority src={whydesignslogo} alt="Logo" className='lg:w-20 max-lg:w-12' />
          </Link>
        </div>
        {/* Conditional rendering for the mobile menu */}
        <div className='hidden lg:flex items-center'>
          <Link href="/">
            <h1 className={`ml-10 text-gray-700 hover:text-red-600 ${isActive('/') ? 'font-bold text-red-600' : ''}`}>Home</h1>
          </Link>
          <Link href="/work">
            <h1 className={`ml-10 text-gray-700 hover:text-red-600 ${isActive('/work') ? 'font-bold text-red-600' : ''}`}>Work</h1>
          </Link>
          <Link href="/about-me">
            <h1 className={`ml-10 text-gray-700 hover:text-red-600 ${isActive('/about-me') ? 'font-bold text-red-600' : ''}`}>About Me</h1>
          </Link>
          <Link href="/contact">
            <h1 className={`ml-10 text-gray-700 hover:text-red-600 ${isActive('/contact') ? 'font-bold text-red-600' : ''}`}>Contact</h1>
          </Link>
        </div>
        {/* Hamburger menu button for mobile */}
        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu}>
            <img src='https://uploads-ssl.webflow.com/5c80ff16b78f1322a4a9d105/5c80ff17b78f1395faa9d112_menu-icon.png' className='max-lg:w-5' />
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-white z-50'>
            <div className='flex justify-end px-[20px] py-[50px]'>
              <button onClick={toggleMobileMenu} className='h-[36.422px]'>
                <img src='https://uploads-ssl.webflow.com/5c80ff16b78f1322a4a9d105/5c80ff17b78f1395faa9d112_menu-icon.png' className='max-lg:w-5' />
              </button>
            </div>
            <div className='flex flex-col items-center h-full'>
              <Link href="/">
                <h1 onClick={toggleMobileMenu} className={`text-gray-700 ${isActive('/') ? 'font-bold text-red-600' : ''} my-5 text-xl`}>Home</h1>
              </Link>
              <Link href="/work">
                <h1 onClick={toggleMobileMenu} className={`text-gray-700 ${isActive('/work') ? 'font-bold text-red-600' : ''} my-5 text-xl`}>Work</h1>
              </Link>
              <Link href="/about-me">
                <h1 onClick={toggleMobileMenu} className={`text-gray-700 ${isActive('/about-me') ? 'font-bold text-red-600' : ''} my-5 text-xl`}>About Me</h1>
              </Link>
              <Link href="/contact">
                <h1 onClick={toggleMobileMenu} className={`text-gray-700 ${isActive('/contact') ? 'font-bold text-red-600' : ''} my-5 text-xl`}>Contact</h1>
              </Link>
            </div>
          </div>
      )}
    </div>
  );
};

export default NavBar;
