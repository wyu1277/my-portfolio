'use client';
import Link from 'next/link';
import Image from 'next/image';
import whydesignslogo from 'public/images/logo.png';
import { useRouter, usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  const isActive = (link) => pathname === link
  return (
    <nav className='flex justify-between items-center bg-white px-10 py-10'>
      <div className='flex'>
        <Image src={whydesignslogo} alt="Logo" className='max-w-100 w-20' />
      </div>
      <div className='flex items-center'>
        <Link href="/">
          <h1 className={`ml-20 text-gray-700 hover:underline ${isActive('/') ? 'font-bold' : ''}`}>Home</h1>
        </Link>
        <Link href="/about-me">
          <h1 className={`ml-20 text-gray-700 hover:underline ${isActive('/about-me') ? 'font-bold' : ''}`}>About Me</h1>
        </Link>
        <Link href="/work">
          <h1 className={`ml-20 text-gray-700 hover:underline ${isActive('/work') ? 'font-bold' : ''}`}>Work</h1>
        </Link>
        <Link href="/contact">
          <h1 className={`ml-20 text-gray-700 hover:underline ${isActive('/contact') ? 'font-bold' : ''}`}>Contact</h1>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

