import React, { useState } from "react";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ConnectData, HeroData } from "@/lib/data";
import { FaLinkedin, FaGithub, FaMedium, FaHackerrank, FaEnvelope } from 'react-icons/fa';

export default function HeroSection() {
    const [isAboutExpanded, setIsAboutExpanded] = useState(false);

    const toggleAbout = () => {
        setIsAboutExpanded(!isAboutExpanded);
    };

    return (
        <section id="about" className="min-h-[600px] py-12 w-full flex flex-col items-center justify-between antialiased relative overflow-hidden bg-[#2f2f2f] font-montserrat">
            <div className="px-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col">
                {/* First Row */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                        <h1 className="text-5xl md:text-7xl font-bold text-center lg:text-left text-[#EEEEEE]">
                            {HeroData.name}
                        </h1>
                        <p className="mt-6 font-normal text-xl md:text-2xl text-[#EEEEEE] text-center lg:text-left">
                            {HeroData.headline}
                        </p>
                        <p className="mt-3 font-normal text-lg md:text-xl text-[#AAAAAA] text-center lg:text-left">
                            {HeroData.subHeadline}
                        </p>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-3">
                        <a
                            href="https://drive.google.com/file/d/1lbyVHo2VjEMGuu9algViSjuafdO7jlim/view?usp=share_link"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-montserrat font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                    fillRule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            View Resume
                        </a>
                        <div className="flex space-x-4 bg-gray-800 p-2 rounded">
                                <FaLinkedin className="text-white cursor-pointer transition-colors duration-200 hover:text-[#40E0D0]" size={30} onClick={() => window.open(ConnectData.socials.linkedin)} />
                                <FaGithub className="text-white cursor-pointer transition-colors duration-200 hover:text-[#40E0D0]" size={30} onClick={() => window.open(ConnectData.socials.github)} />
                                <FaMedium className="text-white cursor-pointer transition-colors duration-200 hover:text-[#40E0D0]" size={30} onClick={() => window.open(ConnectData.socials.medium)} />
                                <a href={`mailto:${ConnectData.socials.email}`}>
                                    <FaEnvelope className="text-white cursor-pointer transition-colors duration-200 hover:text-[#40E0D0]" size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Right Section */} 
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="z-20 bg-[#2f2f2f] shadow-lg rounded-lg p-6">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#40E0D0]">
                                    {HeroData.aboutTitle}
                                </h2>
                                <div className="bg-[#181818] rounded-lg p-5">
                                    <p className="text-[#EEEEEE] text-base md:text-lg font-normal leading-relaxed">
                                        <span className="hidden lg:block">{HeroData.about}</span>
                                        <span className="block lg:hidden">
                                            {isAboutExpanded ? HeroData.about : `${HeroData.about.split('. ').slice(0, 2).join('. ')}...`}
                                        </span>
                                    </p>
                                    <button
                                        className="mt-4 text-[#40E0D0] hover:text-[#30b0a0] transition-colors lg:hidden"
                                        onClick={toggleAbout}
                                    >
                                        {isAboutExpanded ? 'Show Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second Row */}
                <div className="w-full flex flex-col items-center mt-12">
                    <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-8 justify-center">
                        {HeroData.titles.map((title, index) => (
                            <HoverBorderGradient
                                key={index}
                                containerClassName="rounded-full bg-[#40E0D0] text-[#2f2f2f] text-sm font-normal px-3 py-2"
                                as="button"
                                className="flex items-center space-x-2"
                            >
                                <span>{title}</span>
                            </HoverBorderGradient>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 justify-center mt-6">
                        {HeroData.secondTitles.map((title, index) => (
                            <HoverBorderGradient
                                key={index}
                                containerClassName="rounded-full bg-[#40E0D0] text-[#2f2f2f] text-sm font-normal px-2 py-1"
                                as="button"
                                className="flex items-center space-x-2"
                            >
                                <span>{title}</span>
                            </HoverBorderGradient>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

