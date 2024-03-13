import Image from 'next/image'
import styles from './page.module.css'
import heroPattern from 'public/images/heroPattern.png'
import LWBanner from 'public/images/LeWafBanner.png'
import DDBanner from 'public/images/DancingDeerBanner.png'
import PBanner from 'public/images/PlastecVentilationBanner.png'
import Link from 'next/link'
import { TextGenerateEffect } from '../../components/ui/text-generate-effect'
import { SparklesCore } from '../../components/ui/sparkles'
import { TypewriterEffect } from '../../components/ui/typewriter-effect'

export default function Home() {
  const words =[
    {
      text: "Welcome",
      className:'font-Futura-PT-Bold text-xl text-center text-white max-md:text-xl max-sm:text-l'
    },
    {
      text: "to",
      className:'font-Futura-PT-Bold text-xl text-center text-white max-md:text-xl max-sm:text-l'
    },
    {
      text: "WHYDESIGNS!",
      className:'font-Futura-PT-Bold text-xl text-center text-white max-md:text-xl max-sm:text-l'
    },
  ]
  return (
   <>
   <div className='flex justify-center items-center relative bg-red-d-1 h-dvh'>
      <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={3}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      <div className='absolute flex flex-col justify-center items-center p-m'>
        <TextGenerateEffect
            words="Hello! I am Wilson, a Product Designer & Developer based in NYC."
            className='font-Futura-PT text-2xl font-extrabold text-white text-center max-md:text-xl max-sm:text-l px-4xl'
          />
        <div className='mt-2xl'> 
        <TypewriterEffect words= {words}/>
        </div> 
      </div>
   </div>
    <div className='flex flex-col justify-between items-center p-2xl bg-red-d-1 gap-y-l'>
      <div className='lg:w-[1000px]'>
        <Link href='/le-waf'>
          <Image priority src={LWBanner} className='hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-2xl'/>
        </Link>
      </div>
      <div className='lg:w-[1000px]'>
        <Link href='/dancing-deer'>
          <Image priority src={DDBanner} className='hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-2xl'/>
        </Link>
      </div>
      <div className='lg:w-[1000px]'>
        <Link href='/plastec-ventilation'>
          <Image priority src={PBanner} className='hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-2xl'/>
        </Link>
      </div>
   </div>
   </>
  )
}
