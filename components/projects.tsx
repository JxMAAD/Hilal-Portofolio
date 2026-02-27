export const Project = () => {
  return (
    <div>
      <section id="projects" className="pt-32 pb-20 bg-[#1f252d]">
        <div className="container">
          <div className="w-full px-4 mb-16">
            <div className="text-center font-semibold">
              <h2 className="text-2xl mb-5 md:text-3xl lg:text-5xl">
                Projects i&apos;ve <span className="text-green-400">Created</span>
              </h2>
              <p className="font-medium px-4 md:text-xl lg:text-2xl">Some of the projects I have made to increase my skills</p>
            </div>
          </div>
          <div className="flex flex-wrap w-full px-4 justify-center gap-8" data-aos="fade-up" data-aos-duration="1000">
            <div className="mb-12 lg:w-1/3 border border-green-400 shadow-green-600 rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden">
                <img src="./Ujilevel.png" className=" sm:h-full" alt="ujilevel" width="w-full" />
              </div>
              <h3 className="font-bold mb-3 mt-[1.5rem] text-2xl px-2">Information System Skanic Library</h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">
              I made this project as a final assignment from my school to create something useful for the school. Finally I thought about creating this information system skanic library.
              </p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./React-icon.svg.png" alt="react" />
                </div>
                <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="././tailwind.svg" alt="tailwind" />
                </div>
                <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./Laravel.svg.png" alt="laravel" />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://youtu.be/iGHd_VAX77w?si=EXQ4j_E-MnyyNifM" target="_blank">
                  <button className="inline px-7 py-3 font-medium text-[1.1rem] rounded-md bg-green-400 hover:bg-green-600">Panduan</button>
                </a>
                <a href="#" target="_blank" className="px-7 py-3 mx-3 bg-green-400 font-medium text-lg rounded-md hover:bg-green-600">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-green-400 shadow-green-600 rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <img src="./Personalweb.png" className="h-full" alt="foto-kelas" width="w-full" />
              </div>
              <h3 className="font-bold mb-3 mt-16 text-2xl px-2">My Personal Website Class 10</h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">
              This is my portfolio website that I first created when I was in 10th grade, this website aims to introduce myself when I was in 10th grade.
              </p>
              <div className="flex gap-x-2 px-2 py-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./logo-html-removebg-preview.png" alt="html" />
                </div>
                <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./logo-css-removebg-preview.png" alt="css" />
                </div>
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./Unofficial_JavaScript_logo_2.svg.png" alt="js" />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://personal-web-kelas-10.vercel.app/" target="_blank" className="px-7 py-3 bg-green-400 font-medium text-lg rounded-md hover:bg-green-600">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-green-400 shadow-green-600 rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <img src="./Myportofolio.png" className="h-full" alt="foto-kelas" width="w-full" />
              </div>
              <h3 className="font-bold mb-3 mt-16 text-2xl px-2">My Portofolio </h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">This project is made to show about my data in a portfolio. This project also helps me in finding a job or internship.</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./iduLChSb1a.jpeg" alt="nextjs" />
                </div>
                <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./tailwind.svg" alt="tailwind" />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="#" className="px-7 py-3 bg-green-400 font-medium text-lg rounded-md hover:bg-green-600">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-green-400 shadow-green-600 rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <img src="./trafficlights.png" className="h-full" alt="foto-kelas" width="w-full" />
              </div>
              <h3 className="font-bold mb-3 mt-6 text-2xl px-2">My project arduino Traffic Lights </h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">This project was created to learn about the traffic light system. This project also helped me to learn how the traffic light works to match the real one, for example I made a traffic light at a T-junction.</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./logo-c++-removebg-preview.png" alt="c++" />
                </div>
                <div className="py-3 max-w-20 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./arduino-logo-removebg-preview.png" alt="arduino" />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://www.tinkercad.com/things/caj06V8LGUO-smooth-blorr-crift?sharecode=DAjK9ryFf9Nfu6HUl9j5kWFV5y7DioWd3OdZe2r4FeI" target="_blank" className="px-7 py-3 bg-green-400 font-medium text-lg rounded-md hover:bg-green-600">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-green-400 shadow-green-600 rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <img src="./in-hale-image.png" className="h-full" alt="foto-kelas" width="w-full" />
              </div>
              <h3 className="font-bold mb-3 mt-6 text-2xl px-2">My project global game jam 2026 </h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">This project was developed during Global Game Jam 2026 to explore and understand how game developer systems work. In this project, I recreated a 3-day, 2-night game called In Hale.</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./unity-logo.png" alt="unity" />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://globalgamejam.org/games/2026/hale-3" target="_blank" className="px-7 py-3 bg-green-400 font-medium text-lg rounded-md hover:bg-green-600">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-green-400 shadow-green-600 rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden ">
                <img src="./web-tekom.png" className="h-full" alt="foto-kelas" width="w-full" />
              </div>
              <h3 className="font-bold mb-3 mt-6 text-2xl px-2">My project in campus website tekom </h3>
              <p className="font-extralight leading-relaxed tracking-[2px] px-2">This project was created to help friends in the Computer Engineering Technology study program to monitor each class and to introduce this study program to the public.</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./ex-logo.png" alt="express" />
                </div>
                <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./ts-logo.png" alt="typescript" />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="#" target="_blank" className="px-7 py-3 bg-green-400 font-medium text-lg rounded-md hover:bg-green-600">
                  Lihat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
