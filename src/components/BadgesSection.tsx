"use client";

import { BadgesData } from "@/lib/data";
import { useEffect, useState } from "react";

export default function BadgesSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        // Load the Credly script if not already loaded
        if (!document.querySelector('script[src*="credly.com/assets/utilities/embed.js"]')) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = '//cdn.credly.com/assets/utilities/embed.js';
            document.body.appendChild(script);
        }
    }, []);

    const renderBadgeContent = (badge: any) => {
        if (badge.html_code) {
            return <div dangerouslySetInnerHTML={{ __html: badge.html_code }} />;
        } else if (badge.url) {
            if (badge.can_embed) {
                return (
                    <iframe 
                        src={badge.url}
                        width="150" 
                        height="270"
                        frameBorder="0"
                        scrolling="no"
                        className="rounded border border-gray-300"
                        title={badge.title}
                    />
                );
            } else {
                return (
                    <div className="text-center p-4">
                        <h3 className="text-white text-sm font-semibold mb-4 leading-tight">
                            {badge.title}
                        </h3>
                        <a 
                            href={badge.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#40E0D0] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#36c7b8] transition-colors duration-200"
                        >
                            View Certificate
                        </a>
                    </div>
                );
            }
        }
        return null;
    };

    return (
        <section id="badges" className="py-8 bg-[#2f2f2f] min-h-[600px]">
            <span className="block text-center text-2xl font-bold py-2 text-[#40E0D0]">
                {BadgesData.heading}
            </span>

            {/* Use place-items-center to center cards in the grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
                {BadgesData.badges.map((badge) => (
                    <div
                        key={badge.title}
                        /* Make the card fit the badge, center content */
                        className="group relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#252525] to-[#1f1f1f]
                   p-4 w-[190px] h-[310px] grid place-items-center
                   cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        title={badge.title}
                    >
                        {isMounted ? (
                            <div className="grid place-items-center">
                                {renderBadgeContent(badge)}
                            </div>
                        ) : (
                            <div className="w-[150px] h-[270px] bg-gray-600/60 animate-pulse rounded" />
                        )}
                    </div>
                ))}
            </div>
        </section>

    );
}
