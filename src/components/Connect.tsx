import React from "react";
import { Vortex } from "./ui/vortex";
import { FaLinkedin, FaGithub, FaMedium, FaHackerrank, FaEnvelope } from 'react-icons/fa';
import { ConnectData } from "@/lib/data";

export function Connect() {
    return (
        <div className="w-full mx-auto h-[50rem] overflow-hidden bg-[#2f2f2f]">
            <Vortex
                className="flex flex-col items-center justify-center space-y-4 px-4 md:px-10 py-4 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold font-montserrat text-center">
                    {ConnectData.heading}
                </h2>
                <p className="text-gray-300 text-sm md:text-2xl max-w-xl mt-6 text-center font-montserrat">
                    {ConnectData.description}
                </p>
                <div className="flex space-x-4 mt-6 bg-gray-800 p-2 rounded">
                    <FaLinkedin className="text-white cursor-pointer transition-colors duration-200 hover:text-turquoise" size={30} onClick={() => window.open(ConnectData.socials.linkedin)} />
                    <FaGithub className="text-white cursor-pointer transition-colors duration-200 hover:text-turquoise" size={30} onClick={() => window.open(ConnectData.socials.github)} />
                    <FaMedium className="text-white cursor-pointer transition-colors duration-200 hover:text-turquoise" size={30} onClick={() => window.open(ConnectData.socials.medium)} />
                    <FaHackerrank className="text-white cursor-pointer transition-colors duration-200 hover:text-turquoise" size={30} onClick={() => window.open(ConnectData.socials.hackerrank)} />
                    <FaEnvelope className="text-white cursor-pointer transition-colors duration-200 hover:text-turquoise" size={30} onClick={() => window.location.href = ConnectData.socials.email} />
                </div>
            </Vortex>
        </div>
    );
}
