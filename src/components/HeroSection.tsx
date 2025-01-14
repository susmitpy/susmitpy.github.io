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

    const backgroundImage = `${prefix}/images/bg.jpg`;

    return (
        <div
            className="min-h-[600px] py-8 w-full rounded-md flex md:items-center md:justify-center bg-cover bg-center antialiased relative overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Myself, <br /> Susmit Vengurlekar (susmitpy)
                </h1>
                <p className="mt-4 font-normal text-lg md:text-xl text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 max-w-lg text-center mx-auto">
                    A Passionate Techie who builds Problem-Solving Tech Solutions,
                </p>
                <p className="mt-1 font-normal text-lg md:text-xl text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 max-w-lg text-center mx-auto">
                    Having 8+ YoE (4+ YoE after graduation)
                </p>
                <div className="mt-8 flex flex-wrap justify-center text-center gap-4 md:gap-6 lg:gap-8">
                    {titles.map((title, index) => (
                        <HoverBorderGradient
                            key={index}
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-white bg-black text-white dark:text-black flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3"
                        >
                            <span>{title}</span>
                        </HoverBorderGradient>
                    ))
                    }
                </div>
                <div className="mt-8 flex flex-wrap justify-center text-center gap-4 md:gap-6 lg:gap-8">
                    {secondTitles.map((title, index) => (
                        <HoverBorderGradient
                            key={index}
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-white bg-black text-white dark:text-black flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3"
                        >
                            <span>{title}</span>
                        </HoverBorderGradient>
                    ))
                    }
                </div>
            </div>

        </div>
    );
}

