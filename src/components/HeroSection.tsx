import React from "react";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { prefix } from '@/lib/prefix';



export default function HeroSection() {
    const titles = [
        "Data Scientist",
        "Database Engineer",
        "AWS Cloud Architect",
        "Backend Developer",
    ]

    const secondTitles = [
        "Certified Neo4j Professional",
    ]

    return (
        <div
            className="min-h-[600px] py-8 w-full flex items-center justify-between antialiased relative overflow-hidden bg-slate-800"
        >
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col lg:flex-row">
                {/* Left Section */}
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-4xl md:text-7xl font-bold text-left text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        Susmit Vengurlekar (susmitpy)
                    </h1>
                    <p className="mt-4 font-normal text-lg md:text-xl text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        A Passionate Techie who builds Problem-Solving Tech Solutions,
                    </p>
                    <p className="mt-1 font-normal text-lg md:text-xl text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        Having 8+ YoE (4+ YoE after graduation)
                    </p>

                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 p-4">
                    <div className="mt-6 relative">
                        <div className="z-20 bg-white shadow-lg rounded-lg p-6 transform translate-y-0">
                            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
                            <p className="text-gray-700">
                                This is a placeholder for the About section. More details coming soon.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3 md:gap-6 lg:gap-8">
                        {titles.map((title, index) => (
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
                    <div className="mt-8 flex flex-wrap gap-4 md:gap-6 lg:gap-8">
                        {secondTitles.map((title, index) => (
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

