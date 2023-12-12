import Typewriter from 'typewriter-effect';
import { FaLinkedinIn } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <div >
      {/* Hero Section  */}
      <div
        className="hero h-[100vh] hidden  md:flex"
        style={{
          backgroundImage: "url(https://i.ibb.co/CBFnKHY/White-and-Orange-Simple-Portfolio-Presentation-6.png)",
        }}
      >
        
        <div className="w-full text-right ">
          <div className="w-11/12">
          <h2 className="mb-5 text-white md:text-lg text-base font-medium">
              HI THERE! I'M
            </h2>
            <h1 className="mb-5 text-3xl md:text-6xl font-semibold text-white py-2">
            <span className='text-cyan-400'>AZZIZUL</span> HAKIM <Typewriter  
  options={{
    strings: ['WEB DEVELOPER', 'WEB DESIGNER', 'FREELANCER'],
    autoStart: true,
    loop: true,
    cursor: '_',

  }}
/>
            </h1>
            <p className="mb-5  text-white md:text-xl text-base font-normal text-right md:pl-[60%]">
              <span className='text-cyan-400'>A Front-End Developer</span> passionate about creating Interective applications and experiences on teh web.
            </p>

            <div className='md:flex grid grid-cols-1 justify-end gap-10 items-center py-2'>
              <button className=' lg:flex hidden bg-cyan-500 text-white md:px-10 py-[10px] rounded-md font-normal text-base uppercase'><a href='/src/assets/CV.pdf' download>Resume</a></button>

<div className='flex justify-end'>
<button className='w-1/2 lg:hidden block bg-cyan-500 text-white md:px-10 py-[10px] rounded-md font-normal text-base uppercase'><a href='/src/assets/CV.pdf' download>Resume</a></button>
</div>
              

              <div className='flex justify-end gap-8 '>
              <FaLinkedinIn className='text-2xl text-cyan-400 '/>
              <FaGithub className='text-2xl text-cyan-400 ' />
              <MdEmail className='text-2xl text-cyan-400 ' />
              </div>
            </div>

            
            </div>
            </div>
            </div>
{/* /////////////// For Mobile //////////////////////////////// */}
<div
        className="hero h-[100vh] md:hidden flex"
        style={{
          backgroundImage: "url(https://i.ibb.co/9cnXr2q/White-and-Orange-Simple-Portfolio-Presentation-2.png)",
        }}
      >
        
        <div className="w-full text-right ">
          <div className="w-11/12">
          <h2 className="mb-5 text-white md:text-lg text-base font-medium">
              HI THERE! I'M
            </h2>
            <h1 className="mb-5 text-3xl md:text-6xl font-semibold text-white py-2">
            <span className='text-cyan-400'>AZZIZUL</span> HAKIM <Typewriter  
  options={{
    strings: ['WEB DEVELOPER', 'WEB DESIGNER', 'FREELANCER'],
    autoStart: true,
    loop: true,
    cursor: '_',

  }}
/>
            </h1>
            <p className="mb-5  text-white md:text-xl text-base font-normal text-right md:pl-[60%]">
              <span className='text-cyan-400'>A Front-End Developer</span> passionate about creating Interective applications and experiences on teh web.
            </p>

            <div className='md:flex grid grid-cols-1 justify-end gap-10 items-center py-2'>
              <button className=' lg:flex hidden bg-cyan-500 text-white md:px-10 py-[10px] rounded-md font-normal text-base uppercase'><a href='/src/assets/CV.pdf' download>Resume</a></button>

<div className='flex justify-end'>
<button className='w-1/2 lg:hidden block bg-cyan-500 text-white md:px-10 py-[10px] rounded-md font-normal text-base uppercase'><a href='/src/assets/CV.pdf' download>Resume</a></button>
</div>
              

              <div className='flex justify-end gap-8 '>
              <FaLinkedinIn className='text-2xl text-cyan-400 '/>
              <FaGithub className='text-2xl text-cyan-400 ' />
              <MdEmail className='text-2xl text-cyan-400 ' />
              </div>
            </div>

            
            </div>
            </div>
            </div>

            
    </div>
  );
};

export default Home;