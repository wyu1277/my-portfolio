import Image from 'next/image'
import styles from './page.module.css'
import heroPattern from 'public/images/heroPattern.png'
import LWBanner from 'public/images/LeWafBanner.png'
import DDBanner from 'public/images/DancingDeerBanner.png'
import CBKBanner from 'public/images/CBKBanner.png'
import Link from 'next/link'

export default function Home() {
  return (
   <>
   <div className='flex justify-center items-center relative'>
      <Image priority src={heroPattern} className='lg:h-[700px]'/>
      <div className='absolute flex flex-col justify-center items-center mt-10'>
        <h1 className='font-Futura-PT-Bold lg:text-5xl lg:my-2 max-lg:text-2xl'>Hello! I am Wilson,</h1>
        <h1 className='font-Futura-PT lg:text-5xl font-extrabold text-red-600 lg:my-2 max-lg:text-2xl'>a UX Designer & Developer</h1>
        <h1 className='font-Futura-PT-Bold lg:text-5xl lg:my-2 max-lg:text-2xl'>based in NYC.</h1>
        <h2 className='font-Futura-PT-Bold lg:text-xl lg:my-10 max-lg:text-sm max-lg:my-3 text-gray-500'>Welcome to WHYDESIGNS!</h2>
      </div>
   </div>
   <h2 className='lg:px-[250px] pt-[40px] max-lg:px-[20px] font-Futura-PT text-gray-600'>MY RECENT WORK</h2>
   <div className='flex flex-col justify-between items-center bg-white lg:px-[250px] max-lg:px-[20px]'>
    <Link href='/le-waf'>
    <Image priority src={LWBanner} className='lg:my-5 max-lg:my-2 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-2xl'/>
    </Link>
    <Link href='/dancing-deer'>
    <Image priority src={DDBanner} className='lg:my-5 max-lg:my-2 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-2xl'/>
    </Link>
    <Link href='/cherrybrook-kitchen'>
    <Image priority src={CBKBanner} className='lg:my-5 max-lg:my-2 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-2xl'/>
    </Link>
   </div>
   </>
  )
}
