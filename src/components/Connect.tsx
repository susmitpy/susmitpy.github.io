import React from "react";
import { Vortex } from "./ui/vortex";
import { FaLinkedin, FaGithub, FaMedium, FaHackerrank, FaEnvelope } from 'react-icons/fa';

export function Connect() {
    return (
        <div className="w-full mx-auto rounded-md  h-[50rem] overflow-hidden">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    Let's Connect
                </h2>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                    I'm always enthusiastic to get exposed to different problems and challenges.
                </p>
                <div className="flex space-x-4 mt-6">
                    <FaLinkedin className="text-white cursor-pointer" size={30} onClick={() => window.open('https://www.linkedin.com/in/susmit-vengurlekar/')} />
                    <FaGithub className="text-white cursor-pointer" size={30} onClick={() => window.open('https://github.com/susmitpy')} />
                    <FaMedium className="text-white cursor-pointer" size={30} onClick={() => window.open('https://susmitpy.medium.com')} />
                    <FaHackerrank className="text-white cursor-pointer" size={30} onClick={() => window.open('https://www.hackerrank.com/profile/susmit_py')} />
                    <FaEnvelope className="text-white cursor-pointer" size={30} onClick={() => window.location.href = 'mailto:susmit.dev@outlook.com'} />
                </div>
            </Vortex>
        </div>
    );
}
