import React, { useState } from "react";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { HeroData } from "@/lib/data";

export default function HeroSection() {
    const [isAboutExpanded, setIsAboutExpanded] = useState(false);

    const toggleAbout = () => {
        setIsAboutExpanded(!isAboutExpanded);
    };

    return (
        <div
            className="min-h-[600px] py-8 w-full flex flex-col items-center justify-between antialiased relative overflow-hidden bg-slate-800"
        >
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col">
                {/* First Row */}
                <div className="w-full flex flex-col lg:flex-row">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/2 p-4">
                        <h1 className="text-4xl md:text-7xl font-bold text-left text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            {HeroData.name}
                        </h1>
                        <p className="mt-4 font-normal text-lg md:text-xl text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            {HeroData.headline}
                        </p>
                        <p className="mt-1 font-normal text-lg md:text-xl text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            {HeroData.subHeadline}
                        </p>
                    </div>
                    {/* Right Section */}
                    <div className="w-full lg:w-1/2 p-4">
                        <div className="mt-6 relative">
                            <div className="z-20 bg-white shadow-lg rounded-lg p-6 transform translate-y-0">
                                <h2 className="text-2xl font-semibold mb-2">{HeroData.aboutTitle}</h2>
                                <p className={`text-gray-700 lg:block`}>
                                    {isAboutExpanded ? HeroData.about : `${HeroData.about.split('. ').slice(0, 2).join('. ')}...`}
                                </p>
                                <button
                                    className="mt-2 text-blue-500 lg:hidden"
                                    onClick={toggleAbout}
                                >
                                    {isAboutExpanded ? 'Show Less' : 'Read More'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second Row */}
                <div className="w-full flex flex-col items-center mt-8">
                    <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-8 justify-center">
                        {HeroData.titles.map((title, index) => (
                            <HoverBorderGradient
                                key={index}
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-white bg-black text-white dark:text-black flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3"
                            >
                                <span>{title}</span>
                            </HoverBorderGradient>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 justify-center mt-4">
                        {HeroData.secondTitles.map((title, index) => (
                            <HoverBorderGradient
                                key={index}
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-white bg-black text-white dark:text-black flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3"
                            >
                                <span>{title}</span>
                            </HoverBorderGradient>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

