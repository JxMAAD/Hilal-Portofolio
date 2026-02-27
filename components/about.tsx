import { FaPerson } from "react-icons/fa6";
import { LuGamepad2 } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { GiShuttlecock } from "react-icons/gi";
import React from "react";

interface AboutProps {
    id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
    return (
        <div>
            <div className="relative -z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#1f252d" fillOpacity="1" d="M0,64L60,64C120,64,240,64,360,74.7C480,85,600,107,720,112C840,117,960,107,1080,96C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>

            <section id={id} className="pt-32 pb-40 bg-[#1f252d]">
                <div className="container">
                    <div className="flex flex-wrap md:flex-row-reverse justify-center">
                        <div className="w-full px-4 lg:w-1/2" data-aos="fade-up">
                            <h1 className="font-bold text-2xl mb-3 lg:text-5xl">
                                About <span className="text-green-400">Me</span>
                            </h1>
                            <h2 className="font-semibold text-lg lg:text-2xl mb-3">
                                My Name <span className="text-green-300">Hilal Ahmad Mujaddid</span>
                            </h2>
                            <p className="max-w-xl leading-relaxed text-md mb-3 lg:text-lg">
                                Hello everyone, my name is Hilal Ahmad Mujaddid. I was born in Bogor. I am a D4 Computer Engineering Technology student at IPB University Vocational School. I have worked on several website development and web design projects. I am committed to working and expanding my experience in the IT field.
                            </p>
                            <a href="./CV-Hilal Ahmad Mujaddid-new-2026.pdf" download>
                                <button className="border px-5 py-2 my-5 hover:bg-green-300 transition duration-300 ease-in-out text-lg">Download CV</button>
                            </a>
                            <a href="https://drive.google.com/drive/folders/1sXGMb3NEQeRwuHJM8AyuhFyON9riK5y8?usp=classroom_web&authuser=0" target="_blank">
                                <button className="border ml-10 px-8 py-2 my-5 hover:bg-green-300 transition duration-300 ease-in-out text-lg">Certificate</button>
                            </a>
                        </div>
                        <div className="w-full lg:w-1/2 flex md:justify-normal justify-center my-9 lg:my-0 relative">
                            <div className="absolute max-w-full px-2 bg-green-400 shadow left-2 z-10 top-2 rounded-md flex h-7 items-center justify-center font-medium" data-aos="fade-up">
                                <CiCalendarDate className="w-5" />06 September 2006
                            </div>
                            <div className="absolute w-[100px] bg-green-400 shadow -right-3 z-10 top-10 rounded-md flex h-7 items-center justify-center font-medium lg:right-20" data-aos="fade-up">
                                <LuGamepad2 className="w-5" />Gamers
                            </div>
                            <div className="absolute w-[135px] bg-green-400 shadow left-0 z-10 -bottom-0 rounded-md flex h-7 items-center justify-center font-medium text-md px-2" data-aos="fade-up">
                                <GiShuttlecock className="w-5" />Badminton
                            </div>
                            <img src="./hilalahmadmujaddid-2.jpeg" alt="image" className="w-[400px] relative top-0 rounded-md lg:w-[500px]" data-aos="flip-left" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
