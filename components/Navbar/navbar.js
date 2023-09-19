"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import whydesignslogo from 'public/images/logo.png';
import { useRouter, usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  const isActive = (link) => pathname === link;

  // State to control the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to control the submenu for "Work" in desktop mode
  const [isWorkSubMenuOpen, setIsWorkSubMenuOpen] = useState(false);
  // Ref to submenu div for detecting mouse events
  const subMenuRef = useRef(null);
  // Ref to timer for submenu delay
  const subMenuTimerRef = useRef(null);
   // State to control the visibility of the additional links
  const [areAdditionalLinksVisible, setAreAdditionalLinksVisible] = useState(false);

  const toggleAdditionalLinks = () => {
    setAreAdditionalLinksVisible(!areAdditionalLinksVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openWorkSubMenu = () => {
    clearTimeout(subMenuTimerRef.current);
    setIsWorkSubMenuOpen(true);
  };

  const closeAdditionalLinks = () =>{
    setAreAdditionalLinksVisible(false);
  };

  const closeWorkSubMenu = () => {
    subMenuTimerRef.current = setTimeout(() => {
      setIsWorkSubMenuOpen(false);
    }, 100); // Adjust the delay time as needed
  };
  
  const closeSubMenu = () => {
      setIsWorkSubMenuOpen(false);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsWorkSubMenuOpen(false);
  };

  useEffect(() => {
    // Clear the timer when the component unmounts
    return () => {
      clearTimeout(subMenuTimerRef.current);
    };
  }, []);

  return (
    <div>
      <nav className='flex justify-between items-center bg-white lg:px-[250px] py-[20px] max-lg:px-[20px]'>
        <div className='flex'>
          <Link href='/'>
            <Image priority src={whydesignslogo} alt="Logo" className='lg:w-20 max-lg:w-12' />
          </Link>
        </div>
        {/* Conditional rendering for the mobile menu */}
        <div className='hidden lg:flex items-center'>
          <Link href="/">
            <h1 className={`font-Futura-PT ml-10 text-gray-700 hover:text-red-600 ${isActive('/') ? 'font-bold text-red-600' : ''}`}>Home</h1>
          </Link>
          <div
            className="relative group"
            onMouseEnter={openWorkSubMenu}
            onMouseLeave={closeWorkSubMenu}
          >
            <button>
              <h1 className={`font-Futura-PT ml-10 text-gray-700 group-hover:text-red-600 ${isWorkSubMenuOpen ? 'font-bold text-red-600' : ''}`}>
                Work
              </h1>
            </button>
            {/* Submenu for "Work" */}
            {isWorkSubMenuOpen && (
              <div
                className="absolute mt-2 ml-5 bg-white border border-gray-300 rounded-lg p-2 z-10 w-56"
                onMouseEnter={openWorkSubMenu}
                onMouseLeave={closeWorkSubMenu}
                ref={subMenuRef}
              >
                <Link href="/le-waf">
                  <h1 className={`font-Futura-PT text-gray-700 hover:text-red-600 ${isActive('/le-waf') ? 'font-bold text-red-600' : ''}`} onClick={closeSubMenu}>Le Waf</h1>
                </Link>
                <Link href="/dancing-deer">
                  <h1 className={`font-Futura-PT text-gray-700 hover:text-red-600 ${isActive('/dancing-deer') ? 'font-bold text-red-600' : ''}`} onClick={closeSubMenu}>Dancing Deer</h1>
                </Link>
                <Link href="/plastec-ventilation">
                  <h1 className={`font-Futura-PT text-gray-700 hover:text-red-600 ${isActive('/plastec-ventilation') ? 'font-bold text-red-600' : ''}`} onClick={closeSubMenu}>Plastec Ventilation</h1>
                </Link>
              </div>
            )}
          </div>
          <Link href="/about-me">
            <h1 className={`font-Futura-PT ml-10 text-gray-700 hover:text-red-600 ${isActive('/about-me') ? 'font-bold text-red-600' : ''}`}>About Me</h1>
          </Link>
          <Link href="/images/Wilson Yu Resume.pdf" target="_blank" rel="noopener noreferrer">
            <h1 className="font-Futura-PT ml-10 text-gray-700 hover:text-red-600">Resume</h1>
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
            <button onClick={closeMenus} className='h-[36.422px]'>
              <img src='https://uploads-ssl.webflow.com/5c80ff16b78f1322a4a9d105/5c80ff17b78f1395faa9d112_menu-icon.png' className='max-lg:w-5' />
            </button>
          </div>
          <div className='flex flex-col items-center h-full'>
            <Link href="/">
              <h1 onClick={()=>{closeMenus();closeAdditionalLinks()}} className={`font-Futura-PT text-gray-700 ${isActive('/') ? 'font-bold text-red-600' : ''} my-5 text-xl`}>Home</h1>
            </Link>
            <button onClick={toggleAdditionalLinks}>
              <h1 className={`font-Futura-PT text-gray-700 my-5 text-xl`}>Work v</h1>
            </button>
            {areAdditionalLinksVisible && (
              <div className="flex flex-col justify-center items-center bg-gray-100 w-screen h-40">
                <Link href="/le-waf">
                  <h1 className={`font-Futura-PT text-gray-700 my-1 text-lg ${isActive('/le-waf') ? 'font-bold text-red-600' : ''}`} onClick={closeMenus}>Le Waf</h1>
                </Link>
                <Link href="/dancing-deer">
                  <h1 className={`font-Futura-PT text-gray-700 my-1 text-lg ${isActive('/dancing-deer') ? 'font-bold text-red-600' : ''}`} onClick={closeMenus}>Dancing Deer</h1>
                </Link>
                <Link href="/plastec-ventilation">
                  <h1 className={`font-Futura-PT text-gray-700 my-1 text-lg ${isActive('/plastec-ventilation') ? 'font-bold text-red-600' : ''}`} onClick={closeMenus}>Plastec Ventilation</h1>
                </Link>
              </div>
            )}
            <Link href="/about-me">
              <h1 onClick={()=>{closeMenus();closeAdditionalLinks()}} className={`font-Futura-PT text-gray-700 ${isActive('/about-me') ? 'font-bold text-red-600' : ''} my-5 text-xl`}>About Me</h1>
            </Link>
            <Link href="/images/Wilson Yu Resume.pdf" target="_blank" rel="noopener noreferrer">
              <h1 className="font-Futura-PT my-5 text-xl text-gray-700 hover:text-red-600">Resume</h1>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
