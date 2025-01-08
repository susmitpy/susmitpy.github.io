"use client";
import { FaGithub } from "react-icons/fa";


export function RepoCard({
    name, description, link
}: {
    name: string;
    description: string;
    link: string;
}) {
    return (
        <div className="w-full relative max-w-xs h-80">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div
                className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-start transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => window.open(link, '_blank')}
            >
                <div className="absolute inset-3 h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <FaGithub className="text-white" />
                </div>

                <div className="flex flex-col">
                    <h1 className="font-bold text-xl text-white mb-4 relative z-50 mt-4">
                        {name}
                    </h1>

                    <p className="font-normal text-base text-slate-300 mb-4 relative z-50 justify-items-center">
                        {description}
                    </p>
                </div>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(link, '_blank');
                    }}
                    className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300"
                >
                    Explore
                </button>

            </div>
        </div>
    )
}