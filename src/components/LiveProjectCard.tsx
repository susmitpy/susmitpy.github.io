"use client";
import { cn } from "@/lib/utils";
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BackgroundGradient } from "./ui/background-gradient";

interface CardProps {
    name: string;
    description: string;
    link: string;
    imagePath: string;
    gifPath: string;
}

export function LiveProjectCard({ name, description, link, imagePath, gifPath }: CardProps) {
    return (

        <div className="max-w-xs w-full">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-gray-800 dark:bg-zinc-900" animate={false}>
                <div
                    className={cn(
                        "group w-full cursor-pointer overflow-hidden relative card h-70 rounded-md shadow-xl mx-auto p-4",
                        "bg-[#2f2f2f]",
                        "transition-transform duration-500 transform hover:scale-105",
                        "hover:border-gradient"
                    )}
                    onClick={() => window.open(link, '_blank')}
                >
                    {/* Text Content */}
                    <div className="text-center relative z-10 transition-opacity duration-500 group-hover:opacity-0">
                        <h2 className="text-xl font-bold text-white font-montserrat">
                            {name}
                        </h2>
                        <p className="text-sm font-normal text-gray-300 font-montserrat">
                            {description}
                        </p>
                    </div>

                    {/* Image */}
                    <img
                        src={imagePath}
                        alt={name}
                        className="object-contain transition-opacity duration-500 group-hover:opacity-0 h-40 w-full"
                    />

                    {/* GIF Overlay */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-contain bg-no-repeat bg-center"
                        style={{
                            backgroundImage: `url(${gifPath})`,
                            zIndex: 0,
                        }}
                    ></div>

                    {/* Visit Button */}
                    <a href={link} target="blank" className="pt-2 flex items-center justify-center">
                        <button className="px-2 py-1 bg-[#40E0D0] text-white rounded flex items-center text-sm transition-colors duration-300 hover:bg-white hover:text-[#40E0D0]">
                            <FaExternalLinkAlt className="mr-2" />
                            Visit
                        </button>
                    </a>
                </div>
            </BackgroundGradient>
        </div >

    );
}
