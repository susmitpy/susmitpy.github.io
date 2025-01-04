import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";



export default function HeroSection() {
    const titles = [
        "Data Scientist",
        "Database Engineer",
        "AWS Cloud Architect",
        "Full Stack Developer",
    ]

    return (
        <div className="h-[35rem] w-full rounded-md flex md:items-center md:justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 antialiased relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="black"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Myself, <br /> Susmit Vengurlekar (susmitpy)
                </h1>
                <p className="mt-4 font-normal text-base text-white max-w-lg text-center mx-auto">
                    I am a Passionate Techie who builds Problem-Solving Tech Solutions.
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
            </div>

        </div>
    );
}

