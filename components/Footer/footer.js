import Image from "next/image";
const Footer = () => {
    return (
      <footer className="flex flex-col items-center justify-center py-20 lg:px-[250px] max-lg:px-[20px]">
        <h1 className="font-Futura-PT text-xl font-semibold my-1">Let's connect</h1>
        <p className="font-Futura-PT text-sm mb-5">Get in touch for opportunities or just to say hi! 👋</p>
        <div className="flex mt-4">
          <a href="https://www.linkedin.com/in/whydesigns/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" // Replace with the actual path to your LinkedIn logo image
              alt="LinkedIn"
              className="w-10 h-10 mr-4 hover:opacity-60"
            />
          </a>
          <a href="https://github.com/wyu1277" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png" // Replace with the actual path to your GitHub logo image
              alt="GitHub"
              className="w-10 h-10 hover:opacity-80"
            />
          </a>
          <a href="mailto:why@whydesigns.co">
            <img
              src="/images/email.png" // Replace with the actual path to your GitHub logo image
              alt="Email"
              className="w-10 h-10 ml-4 hover:opacity-80"
            />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;