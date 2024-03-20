import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function PlastecVentilation() {
  return (
    <>
    <section className="mb-10">
    <img src="/images/PlastecHeroBanner.png" alt="Plastec Ventilation Hero Banner"/>
    </section>
    <section className="lg:px-[250px] max-lg:px-[20px] py-10 mb-10">
    <h1 className="font-Futura-PT-Bold text-2xl">Plastec Ventilation</h1>
    <h2 className="font-Futura-PT text-xl font-semibold mb-10">Plastec Ventilation Online Presence Redesign</h2>
    <div className="lg:grid lg:grid-flow-col lg:gap-40 justify-center">
      <div>
        <h3 className="font-Futura-PT mb-5 uppercase text-gray-500">Client Background</h3>
        <p className="font-Futura-PT">Plastec Ventilation is a leading global manufacturer of anti-corrosion resistant fans and blowers, specializing in solutions for conveying corrosive, chemically laden, and polluted air environments. With over 50 years of experience, Plastec serves a diverse range of industries, from maritime transport to chemical processing, providing innovative and durable ventilation solutions.</p>
      </div>
      <div>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5 max-lg:mt-5">Role</h3>
        <p className="font-Futura-PT text-lg font-semibold">Product Designer</p>
        <p className="font-Futura-PT">User Research, Interaction, Visual design, Prototyping & Testing</p>
      </div>
    </div>
    </section>
    <section className="mb-10">
    <div className="flex flex-col lg:px-[250px] py-[20px] max-lg:px-[20px] bg-slate-200">
      <div>
        <h1 className="font-Futura-PT-Bold text-2xl mt-10">Project Goals</h1>
        <li className="font-Futura-PT font-semibold mt-5">Rebrand the website: Create a visually appealing and modern design that reflects Plastec's commitment to innovation and excellence.</li>
        <li className="font-Futura-PT font-semibold  mt-5">Enhance user experience: Improve navigation and overall user experience for visitors seeking corrosion-resistant ventilation solutions.</li>
        <li className="font-Futura-PT font-semibold  mt-5">Highlight core values: Showcase Plastec's core values, including support, reactivity, competitiveness, and innovation.</li>
      </div>
      <div>
        <p className="font-Futura-PT mt-5">The design approach aimed to create a clean, modern, and informative website that aligned with Plastec's mission. Bright, fresh visuals and a focus on core values were at the forefront of the design strategy. I conducted competitive research to understand the market and industry standards, analyzed Plastec's existing website, identified pain points, and gathered insights from customer feedback, and explored Plastec's core values and its dedication to providing anti-corrosion solutions.</p>
      </div>
      <img className="w-9/12 mt-5 mb-10" src="/images/PlastecSketches.jpg" alt="Plastec low fidelity wireframes"/>
    </div>
    </section>
    <section className="lg:px-[250px] max-lg:px-[20px] py-10 mb-10">
      <h1 className="font-Futura-PT-Bold text-2xl mb-10">Personas</h1>
      <div className="lg:grid lg:grid-flow-col lg:gap-40 justify-center items-center mb-10">
      <div>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5">Persona 1: Engineering Enthusiast Ed</h3>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5">Background:</h3>
        <p className="font-Futura-PT mb-5">Ed is a mechanical engineer working in the maritime industry. He's detail-oriented and values products that meet industry standards.</p>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5">Goals and Behaviors:</h3>
        <li className="font-Futura-PT font-semibold mt-5">Seeks reliable and corrosion-resistant ventilation solutions.</li>
        <li className="font-Futura-PT font-semibold mt-5">Values websites with comprehensive technical information.</li>
        <li className="font-Futura-PT font-semibold mt-5">Prefers straightforward navigation for quick access to product specifications.</li>
      </div>
      <div className="lg:flex lg:justify-end">
        <img src="/images/431.jpg" alt="Persona 1 Illustration" className="w-11/12"/>
      </div>
    </div>
    <div className="lg:grid lg:grid-flow-col lg:gap-40 justify-center items-center">
      <div>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5">Persona 2: Sustainability Sarah</h3>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5">Background:</h3>
        <p className="font-Futura-PT mb-5">Sarah is an environmentalist with a focus on sustainable practices. She works in a research institute and seeks eco-friendly solutions.</p>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5">Goals and Behaviors:</h3>
        <li className="font-Futura-PT font-semibold mt-5">Looks for ventilation systems that are environmentally responsible.</li>
        <li className="font-Futura-PT font-semibold mt-5">Values companies that prioritize sustainability.</li>
        <li className="font-Futura-PT font-semibold mt-5">Prefers websites with clear information on the environmental impact of products.</li>
      </div>
      <div className="lg:flex lg:justify-end">
        <img src="/images/4320863.jpg" alt="Persona 2 Illustration" className="w-10/12"/>
      </div>
    </div>
    </section>
    <section className="mb-10">
    <div className="flex flex-col lg:px-[250px] py-[20px] max-lg:px-[20px] bg-slate-200">
      <div>
        <h1 className="font-Futura-PT-Bold text-2xl mt-10">Developing the Designs</h1>
        <p className="font-Futura-PT mt-5">Our design process for the Plastec Ventilation website was underpinned by insights gathered from extensive research and user personas, ensuring that the final design would resonate with our target audience, including Engineering Enthusiast Ed and Sustainability Sarah. I utilized a combination of Figma and Invision and close collaboration with the Front End team to bring our vision to life.</p>

        <h2 className="font-Futura-PT text-xl font-semibold mt-10 mb-5">Design Solutions</h2>
        <h3 className="font-Futura-PT text-lg">Visual Branding:</h3>
        <p className="font-Futura-PT my-5">Created a modern and clean visual identity for Plastec, featuring a bright color palette of white and sky blue and incorporated imagery of clear skies and water to symbolize the freshness of Plastec's solutions.</p>
        <h3 className="font-Futura-PT text-lg">Homepage:</h3>
        <p className="font-Futura-PT my-5">Designed a welcoming homepage with a rotating banner showcasing Plastec's solutions in action and included clear calls-to-action for quick access to product categories, technical information, and core values.</p>
        <h3 className="font-Futura-PT text-lg">Product Showcase:</h3>
        <p className="font-Futura-PT my-5">Provided comprehensive technical specifications and data for engineering professionals like Ed and highlighted eco-friendly aspects and sustainability practices for users like Sarah.</p>
        <h3 className="font-Futura-PT text-lg">Core Values Section:</h3>
        <p className="font-Futura-PT my-5">Implemented an intuitive navigation system for easy exploration of products, industries served, and technical resources and ensured responsiveness for a seamless experience across devices.</p>
      </div>
      <Carousel>
      <CarouselContent className="max-sm:h-[530px] h-[930px]">
          <CarouselItem className="flex justify-center basis-3/4"><img src="/images/PlastecHomepage.png" alt="Plastec Homepage Design" className="h-min lg:w-7/12"/></CarouselItem>
          <CarouselItem className="flex justify-center"><img src="/images/PlastecItemPage.png" alt="Plastec Item Page Design" className="h-min lg:w-7/12"/></CarouselItem>
          <CarouselItem className="flex justify-center"><img src="/images/PlastecGeneralApplicationsPage.png" alt="Plastec General Applications Page Design" className="h-min lg:w-7/12"/></CarouselItem>
          <CarouselItem className="flex justify-center"><img src="/images/PlastecAboutUsPage.png" alt="Plastec About Us Page Design" className="h-min lg:w-7/12"/></CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="max-lg:hidden" />
        <CarouselNext className="max-lg:hidden" />
      </Carousel>
    </div>
    </section>
    <section className="mb-10">
      <div className="flex flex-col lg:px-[250px] max-lg:px-[20px]">
        <h1 className="font-Futura-PT-Bold text-2xl mt-10">Results and Impact</h1>
        <p className="font-Futura-PT mt-5">The redesigned Plastec Ventilation website successfully conveyed the brand's core values and commitment to innovation and excellence. This transformation led to an improved user experience and navigation, resulting in increased engagement and longer time spent on the site. Clear technical information catered to professionals like Ed, while the deliberate emphasis on sustainability resonated strongly with environmentally conscious users like Sarah.</p>
        <p className="font-Futura-PT mt-5">Some key takeaways from this project are:</p>
        <li className="font-Futura-PT mt-5"><strong>Visual Branding.</strong> A modern and visually appealing design can significantly impact a website's user experience and brand perception.</li>
        <li className="font-Futura-PT mt-5"><strong>User-Centered Design.</strong>  Understanding user personas and tailoring the design to their needs is crucial for a successful project.</li>
        <li className="font-Futura-PT mt-5"><strong>Clear Information.</strong> Providing comprehensive technical information and addressing sustainability concerns can cater to a diverse audience.</li>
      </div>
    </section>
    </>  
  )
  }