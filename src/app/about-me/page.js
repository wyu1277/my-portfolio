import Image from 'next/image';
import profilePic from 'public/images/39021206_10212543031791906_932365596698345472_n.jpg';

export default function AboutMe() {
    return (
    <div className='flex flex-col justify-center'>
     <div className="lg:px-[250px] max-lg:px-[20px] mb-20">
      <h1 className='font-Futura-PT-Bold text-3xl my-10'>Why WhyDesigns?</h1>
      <p className="font-Futura-PT text-m my-10">I'm a creative designer and a code enthusiast who's on a mission to infuse life into every digital experience. In my world, it's all about answering the "why" behind every design choice. I'm not just a designer; I'm a relentless researcher. I believe that great design stems from solid research, and I weave this philosophy into every project I tackle. Curiosity fuels creativity, and every pixel I place serves a purpose. Whether it's crafting an intuitive user interface or weaving a brand's narrative, I'm all about making every pixel count.</p>
      <p className="font-Futura-PT text-m my-10">
      I'm a self-taught designer and coder, a perpetual student of the ever-evolving realms of UX/UI and product design. I've honed my craft through workshops, devoured blogs, and applied my knowledge to real-world projects, both at work and in my free time. From ideation to development, I'm a big-picture thinker who relishes the journey from concept to creation.
      <Image src={profilePic} className="my-10 lg:w-2/5"/>
      </p>
     </div>
     <div className="lg:px-[250px] max-lg:px-[20px] py-20 bg-red-600">
      <h1 className='font-Futura-PT-Bold text-3xl font-bold my-10 text-white'>Personal Values</h1>
      <h2 className='font-Futura-PT text-xl my-5 font-semibold text-white'>📖 Eternal Learner.</h2>
      <p className="font-Futura-PT text-m mb-10 text-white">
      Learning is a lifelong adventure. To grow, one must embrace feedback and actively seek out challenges. In my spare time, you'll often find me diving into hackathons, absorbing insights from blogs, embarking on new projects, and joining vibrant meetups. Every experience is an opportunity to evolve.
      </p>
      <h2 className='font-Futura-PT text-xl my-5 font-semibold text-white'>🖌️ Creativity Unleashed.</h2>
      <p className="font-Futura-PT text-m mb-10 text-white">
      Creativity is my sanctuary. When I'm not immersed in design and code, I'm belting out tunes, creating artworks as a form of meditation, and guiding startups to unlock their design potential. Creative expression is the heartbeat of my life.
      </p>
      <h2 className='font-Futura-PT text-xl my-5 font-semibold text-white'>🙏 Humble to the Core.</h2>
      <p className="font-Futura-PT text-m mb-10 text-white">
      No matter your title or background, respect is universal. We're all human, sharing dreams, desires, and challenges. I firmly believe in staying true to myself and extending that truth to others. Respect is the foundation of meaningful connections.
      </p>
     </div>
     <div className="lg:px-[250px] max-lg:px-[20px] my-20">
      <h1 className='font-Futura-PT-Bold text-3xl my-10'>Let's Craft Together</h1>
      <p className="font-Futura-PT text-m my-10">
      By the way, this very website you're browsing? I designed and developed it entirely using Next.js. It's a testament to my commitment to creating seamless digital experiences. So, let's connect and craft something extraordinary together. Whether it's a compelling narrative for your brand, an intuitive user interface, or a line of code that transforms an idea into reality, I'm here to help you thrive in the digital world.

      Thanks for stopping by, and let's embark on this creative journey together! 🚀
      </p>
     </div>
    </div>
    )
  }