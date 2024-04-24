"use client"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import heroPattern from 'public/images/heroPattern.png';
import LWBanner from 'public/images/LeWafBanner.png';
import DDBanner from 'public/images/DancingDeerBanner.png';
import PBanner from 'public/images/PlastecVentilationBanner.png';
import ITFCBanner from 'public/images/ITFCBanner.png'
import STVBanner from 'public/images/STVBanner.png'
import Link from 'next/link';
import { TextGenerateEffect } from '../../components/ui/text-generate-effect';
import { SparklesCore } from '../../components/ui/sparkles';
import { TypewriterEffect } from '../../components/ui/typewriter-effect';


export default function Home() {
  const [shouldRunTypewriterEffect, setShouldRunTypewriterEffect] = useState(false);

  const words = [
    {
      text: "Welcome",
      className: 'font-Futura-PT-Bold text-xl text-center text-white max-md:text-xl max-sm:text-l'
    },
    {
      text: "to",
      className: 'font-Futura-PT-Bold text-xl text-center text-white max-md:text-xl max-sm:text-l'
    },
    {
      text: "WHYDESIGNS!",
      className: 'font-Futura-PT-Bold text-xl text-center text-white max-md:text-xl max-sm:text-l'
    },
  ];

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShouldRunTypewriterEffect(true);
    }, 2500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

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
            words="Hello! I am Wilson, a Digital Designer & Developer based in NYC."
            className='font-Futura-PT text-2xl font-extrabold text-white text-center max-md:text-xl max-sm:text-l px-4xl'
          />
          <div className='mt-2xl'>
            {shouldRunTypewriterEffect && <TypewriterEffect words={words} />}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-center p-2xl bg-red-d-1 gap-y-l'>
        <div className='lg:w-[1000px]'>
          <InViewImage href="/le-waf" src={LWBanner} />
        </div>
        <div className='lg:w-[1000px]'>
          <InViewImage href="/dancing-deer" src={DDBanner} />
        </div>
        <div className='lg:w-[1000px]'>
          <InViewImage href="/plastec-ventilation" src={PBanner} />
        </div>
        <div className='lg:w-[1000px]'>
          <InViewImage href="/ITFC" src={ITFCBanner} />
        </div>
        <div className='lg:w-[1000px]'>
          <InViewImage href="/shop-the-village" src={STVBanner} />
        </div>
      </div>
    </>
  );
}

const InViewImage = ({ href, src }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px', // Adjust this value to control when the animation triggers
  });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Image
          src={src}
          className="hover:scale-105 transform transition-transform duration-300 ease-in-out hover:shadow-2xl"
        />
      </motion.div>
    </Link>
  );
};
