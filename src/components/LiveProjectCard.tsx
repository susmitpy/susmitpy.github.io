"use client";
import { cn } from "@/lib/utils";
import { FaExternalLinkAlt } from 'react-icons/fa'; // Add icon import

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
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-70 rounded-md shadow-xl mx-auto p-4", // Changed h-75 to h-80 for fixed height
                    "bg-gray-700", // Changed to darker grey background
                    "border border-transparent dark:border-transparent", // Removed existing border
                    "transition-transform duration-500 transform hover:scale-105",
                    "hover:border-gradient" // Added gradient border on hover
                )}
                onClick={() => window.open(link, '_blank')}
            >
                {/* Text Content */}
                <div className="text-center relative z-10 transition-opacity duration-500 group-hover:opacity-0">
                    <h2 className="text-lg font-semibold text-white">
                        {name}
                    </h2>
                    <p className="text-sm text-gray-300 mt-1">
                        {description}
                    </p>
                </div>

                {/* Image */}
                <img
                    src={imagePath}
                    alt={name}
                    className="object-contain transition-opacity duration-500 group-hover:opacity-0 py-2 h-40 w-full" // Added fixed height and width
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
                <a href={link} target="blank" className="pt-2 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded flex items-center text-sm">
                        <FaExternalLinkAlt className="mr-2" />
                        Visit
                    </button>
                </a>
            </div>
        </div>
    );
}
