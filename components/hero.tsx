
import Link from 'next/link';
import { Particles } from './particles';

  interface HeroProps {
    id : string
  }

export const Hero : React.FC<HeroProps>= ({id}) => {
  
  return (
    <section  className="pt-10 pb-20">
      <Particles className='absolute inset-0 -z-10'/>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[35%] self-end px-4 ">
            <div className="relative mt-10 mb-10 lg:top lg:mt-0 xl:left-6 md:right-0">
              <img src="./hilalahmadmujaddid.jpeg" alt="not showing" className="max-w-full mx-auto rounded-full overflow-hidden bg-gradient-to-r lg:w-[500px] w-[310px]  from-green-500 bg-lime-400 to-emerald-400 " data-aos-delay='400' data-aos='fade-up' />
              <div className="absolute top-2 -z-10 bg-green-500/30 h-[410px] max-w-[500px] mx-auto inset-8 blur-3xl rounded-full"></div>
            </div>
          </div>
          <div className="w-full pl-24 pr-24 lg:w-[65%] self-center px-4">
            <h1 className="text-lg mb-3 md:text-3xl" data-aos='fade-down' data-aos-delay='200' >
              Hello I&apos;M, <span>Hilal Ahmad Mujaddid</span>
            </h1>
            <h2 className="text-xl font-extrabold mb-10 md:text-4xl lg:text-7xl lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-400 to-green-200" data-aos="fade-right" >
              Junior <span className="font-bold lg:block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-green-200" data-aos="fade-right">Web Developer</span>
              <span className="text-green-400 font-bold lg:block" data-aos="fade-right"> & Student</span>
            </h2>
            <Link data-aos="fade-right" href="#about"className="lg:border-4 border-2 rounded-tr-xl rounded-bl-xl font-semibold text-green-400 text-lg border-green-400 px-8 py-3 lg:text-2xl hover:bg-green-400 transition duration-300 ease-out hover:text-white">
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>  
  );
};
