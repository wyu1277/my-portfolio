import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function DD() {
  return (
    <>
    <section className="mb-10">
    <img src="/images/DDHeroBanner.png" alt="Dancing Deer Hero Banner"/>
    </section>
    <section className="lg:px-[250px] max-lg:px-[20px] py-10 mb-10">
    <h1 className="font-Futura-PT-Bold text-2xl">Dancing Deer</h1>
    <h2 className="font-Futura-PT text-xl font-semibold mb-10">Designing a Family-Friendly Bakery Ecommerce Site</h2>
    <div className="lg:grid lg:grid-flow-col lg:gap-40 justify-center">
      <div>
        <h3 className="font-Futura-PT mb-5 uppercase text-gray-500">Client Background</h3>
        <p className="font-Futura-PT">Dancing Deer Baking Co. is a beloved family-owned bakery committed to creating delicious baked goods using scratch-made recipes and high-quality ingredients. Their dedication to tradition, sustainability, and non-GMO practices sets them apart in the industry. The founders, Suzanne Lombardi, Ayis Antoniou, and Trish Karter, established the company on principles of excellence, purity, and freshness in food.</p>
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
        <li className="font-Futura-PT font-semibold mt-5">Redesign the ecommerce website to reflect the warmth and values of Dancing Deer Baking Co.</li>
        <li className="font-Futura-PT font-semibold  mt-5">Create a family-friendly, playful, and visually engaging online platform.</li>
        <li className="font-Futura-PT font-semibold  mt-5">Enhance user experience to facilitate easy navigation and seamless online shopping.</li>
        <li className="font-Futura-PT font-semibold  mt-5">Emphasize the company's commitment to all-natural, non-GMO, and sustainably sourced products.</li>
      </div>
      <div>
        <p className="font-Futura-PT mt-5">I began the project by immersing ourselves in Dancing Deer Baking Co.'s ethos and target audience. The client's emphasis on family, tradition, and nature inspired us to delve deeper into their customer base. I conducted in-depth research, interviews, and surveys to develop two key personas that guided our design decisions. I also created various low fidelity sketches of the layout for Dancing Deer focusing on information clarity and how to incorporate some of the custom illustrations that were provided.</p>
      </div>
      <img className="w-9/12 mt-5 mb-10" src="/images/DDSketches.jpg" alt="Dancing Deer low fidelity wireframes"/>
    </div>
    </section>
    <section className="lg:px-[250px] max-lg:px-[20px] py-10 mb-10">
      <h1 className="font-Futura-PT-Bold text-2xl mb-10">Personas</h1>
      <div className="lg:grid lg:grid-flow-col lg:gap-40 justify-center items-center mb-10">
      <div>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5">Persona 1: Family-oriented Fiona</h3>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5">Background and Behaviors:</h3>
        <li className="font-Futura-PT font-semibold mt-5">A mother in her mid-30s with two children.</li>
        <li className="font-Futura-PT font-semibold mt-5">Seeks wholesome and all-natural treats for her family.</li>
        <li className="font-Futura-PT font-semibold mt-5">Prefers online shopping for convenience and time-saving.</li>
        <li className="font-Futura-PT font-semibold my-5">Loves to explore unique baked goods that resonate with her children.</li>
        <li className="font-Futura-PT font-semibold my-5">Values products that align with her family's health-conscious lifestyle.</li>
      </div>
      <div className="lg:flex lg:justify-end">
        <img src="/images/FionaIllustration.jpg" alt="Persona 1 Illustration" className="w-11/12"/>
      </div>
    </div>
    <div className="lg:grid lg:grid-flow-col lg:gap-40 justify-center items-center">
      <div>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5">Persona 2: Joyful Jerry</h3>
        <h3 className="font-Futura-PT uppercase text-gray-500 mb-5">Background and Behaviors:</h3>
        <li className="font-Futura-PT font-semibold mt-5">A single father in his early 40s.</li>
        <li className="font-Futura-PT font-semibold mt-5">Enjoys indulging in quality baked goods with his daughter.</li>
        <li className="font-Futura-PT font-semibold mt-5">Values memorable experiences that bring joy to their lives.</li>
        <li className="font-Futura-PT font-semibold my-5">Seeks products that have a playful and heartwarming appeal.</li>
        <li className="font-Futura-PT font-semibold my-5">Prefers simple navigation and clear product information.</li>
      </div>
      <div className="lg:flex lg:justify-end">
        <img src="/images/JerryIllustration.jpg" alt="Persona 2 Illustration" className="w-10/12"/>
      </div>
    </div>
    </section>
    <section className="mb-10">
    <div className="flex flex-col lg:px-[250px] py-[20px] max-lg:px-[20px] bg-slate-200">
      <div>
        <h1 className="font-Futura-PT-Bold text-2xl mt-10">Developing the Designs</h1>
        <p className="font-Futura-PT mt-5">The insights gained from the personas guided our design process to ensure that the website resonated with Dancing Deer Baking Co.'s audience. The persona of Family-Oriented Fiona influenced the emphasis on all-natural ingredients and family values throughout the website. Joyful Jerry's persona inspired the playful stick figure illustrations and the focus on creating a joyful and delightful shopping experience. I created my high fidelity mockups in Figma and then imported them into Invision to allow the engineers to inspect the file and export the HTML and CSS code. I worked very closely with the Front End team to spec out any missing interactions that were not covered in the high fidelity mockups.</p>

        <h2 className="font-Futura-PT text-xl font-semibold mt-10 mb-5">Design Solutions</h2>
        <h3 className="font-Futura-PT text-lg">Visual Branding:</h3>
        <p className="font-Futura-PT my-5">I introduced sketchy icons throughout the site, inspired by both personas' preferences. The icons added visual interest and catered to Fiona's need for transparency and Jerry's quest for joyfulness. The chosen typography balanced Fiona's desire for clarity and Jerry's preference for a joyful appeal. The font choice ensured readability while adding a touch of whimsy.</p>
        <h3 className="font-Futura-PT text-lg">Homepage:</h3>
        <p className="font-Futura-PT my-5">I integrated the stick figure illustrations right on the homepage, creating a sense of warmth and playfulness that resonated with both personas.</p>
        <h3 className="font-Futura-PT text-lg">Product Showcase:</h3>
        <p className="font-Futura-PT my-5">Clear and detailed product descriptions were tailored to Fiona's health-conscious concerns. Vibrant images of treats showcased the deliciousness that both Fiona and Jerry sought.</p>
        <h3 className="font-Futura-PT text-lg">User-friendly Navigation:</h3>
        <p className="font-Futura-PT my-5">Fiona's need for convenience and Jerry's desire for simplicity influenced the clear navigation and intuitive layout, allowing easy exploration of categories and products.</p>
      </div>
      <Carousel 
        opts={{
          align: "start",
        }}
        className="my-10"
        >
        <CarouselContent className="max-sm:h-[530px] h-[930px]">
          <CarouselItem className="flex justify-center basis-3/4"><img src="/images/DDHomepage.png" alt="Dancing Deer Homepage Design" className="h-min lg:w-7/12"/></CarouselItem>
          <CarouselItem className="flex justify-center"><img src="/images/DDItemPage.png" alt="Dancing Deer Item Page Design" className="h-min lg:w-7/12"/></CarouselItem>
          <CarouselItem className="flex justify-center"><img src="/images/DDAllRecipePage.png" alt="Dancing Deer All Recipe Page Design" className="h-min lg:w-7/12"/></CarouselItem>
          <CarouselItem className="flex justify-center"><img src="/images/DDRecipePage.png" alt="Dancing Deer Recipe Page Design" className="h-min lg:w-7/12"/></CarouselItem>
          <CarouselItem className="flex justify-center"><img src="/images/DDTestimonialPage.png" alt="Dancing Deer Testimonial Page Design" className="h-min lg:w-7/12"/></CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="max-lg:hidden" />
        <CarouselNext className="max-lg:hidden" />
        </Carousel>
    </div>
    </section>
    <section className="mb-10">
      <div className="flex flex-col lg:px-[250px] max-lg:px-[20px]">
        <h1 className="font-Futura-PT-Bold text-2xl mt-10">Results and Impact</h1>
        <p className="font-Futura-PT mt-5">The redesigned Dancing Deer Baking Co. ecommerce site was a harmonious blend of Fiona's health-conscious values and Jerry's joyful spirit. The incorporation of personas led to a more empathetic and tailored design that resonated with the audience. The playful elements and user-centered design increased engagement and contributed to a rise in online orders.</p>
        <p className="font-Futura-PT mt-5">Some key takeaways from this project are:</p>
        <li className="font-Futura-PT mt-5"><strong>Persona-Driven Design.</strong> Incorporating well-defined personas like Family-Oriented Fiona and Joyful Jerry provided invaluable guidance throughout the design process. Future projects should begin with a strong focus on understanding and empathizing with the target audience.</li>
        <li className="font-Futura-PT mt-5"><strong>Playful Visual Elements.</strong> The integration of custom stick figure illustrations added a playful and heartwarming touch to the website, resonating with users like Joyful Jerry. This project emphasized the importance of incorporating visual elements that align with the brand's identity and audience preferences.</li>
        <li className="font-Futura-PT mt-5"><strong>Playful Storytelling.</strong> The incorporation of playful stick figure illustrations and a warm narrative about the brand's family involvement contributed to a sense of storytelling that resonated with both personas. Future projects should explore creative storytelling elements that engage users emotionally.</li>
      </div>
    </section>
    </>  
  )
  }