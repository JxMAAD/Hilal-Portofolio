import { useEffect } from 'react';

export const Navbar = () => {
  useEffect(() => {
    const header = document.querySelector('header');

    window.onscroll = () => {
      if (!header) return;
      const navFixed = header.offsetTop;

      if (window.pageYOffset > navFixed) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };

    

    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    const handleClick = () => {
      hamburger?.classList.toggle('hamburger-active');
      navMenu?.classList.toggle('hidden');
    };

    hamburger?.addEventListener('click', handleClick);

    // Cleanup event listener on component unmount
    return () => {
      hamburger?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <header className="absolute bg-transparent flex items-center top-0 w-full z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
          <div className="px-4">
              <a href="#home" className="text-primary lg:text-2xl md:text-xl font-semibold pt-7 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-400 to-blue-400 text-lg block py-6">
                <img src="./Logo_Hilal-removebg-preview.png" alt="Hilal Ahmad Mujaddid" className="w-16 h-16 inline-block" /> Maad
              </a>
            </div>
            <div className=" flex px-4 items-center">
              <button className="block absolute right-5 lg:hidden " id="hamburger-menu" type="button">
                <span className="hamburger-menu rounded transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-menu rounded transition duration-300 ease-in-out"></span>
                <span className="hamburger-menu rounded transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav id="nav-menu" className="hidden absolute bg-transparent backdrop-blur-lg border shadow-lg top-full rounded-sm max-w-full w-full right-1 lg:block lg:static lg:bg-transparent lg:max-w-full lg:border-none lg:shadow-none lg:rounded-none lg:backdrop-blur-0 ">
                <ul className="block font-bold lg:flex bg-slate-800 p-3 lg:bg-transparent lg:p-0">
                  <li className="group lg:my-3">
                    <a href="#home" className=" mx-8 rounded group-hover:text-green-400 text-md ">
                      Home
                    </a>
                  </li>
                  <li className="group my-3">
                    <a href="#about" className=" mx-8 rounded group-hover:text-green-400 text-md ">
                      About
                    </a>
                  </li>
                  <li className="group my-3">
                    <a href="#skills" className="mx-8 rounded group-hover:text-green-400 text-md ">
                      Skills
                    </a>
                  </li>
                  <li className="group my-3">
                    <a href="#projects" className="mx-8 rounded group-hover:text-green-400 text-md ">
                      Project
                    </a>
                  </li>
                  <li className="group lg:my-3">
                    <a href="#contact" className="mx-8 rounded group-hover:text-green-400 text-md ">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
