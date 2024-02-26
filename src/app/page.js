import Image from 'next/image'
import styles from './page.module.css'
import heroPattern from 'public/images/heroPattern.png'
import LWBanner from 'public/images/LeWafBanner.png'
import DDBanner from 'public/images/DancingDeerBanner.png'
import PBanner from 'public/images/PlastecVentilationBanner.png'
import Link from 'next/link'

export default function Home() {
  return (
   <>
   <div className='flex justify-center items-center relative bg-red-d-1'>
      <Image priority src={heroPattern} className='lg:h-[900px]'/>
      <div className='absolute flex flex-col justify-center items-center p-m'>
        <h1 className='font-Futura-PT-Bold text-2xl text-white max-md:text-xl max-sm:text-l'>Hello! I am Wilson,</h1>
        <h1 className='font-Futura-PT text-2xl font-extrabold text-white text-center max-md:text-xl max-sm:text-l'>a Product Designer & Developer</h1>
        <h1 className='font-Futura-PT-Bold text-2xl text-white max-md:text-xl max-sm:text-l'>based in NYC.</h1>
        <h2 className='font-Futura-PT-Bold text-xl text-white max-md:text-xl max-sm:text-l'>Welcome to WHYDESIGNS!</h2>
      </div>
   </div>
    <div className='flex flex-col justify-between items-center py-2xl bg-red-d-1 gap-y-l'>
      <Link href='/le-waf'>
        <Image priority src={LWBanner} className='hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-2xl'/>
      </Link>
      <Link href='/dancing-deer'>
        <Image priority src={DDBanner} className='hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-2xl'/>
      </Link>
      <Link href='/plastec-ventilation'>
        <Image priority src={PBanner} className='hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-2xl'/>
      </Link>
   </div>
   </>
  )
}
