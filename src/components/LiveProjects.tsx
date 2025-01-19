import React, { useState, useEffect } from 'react';
import { LiveProjectCard } from '@/components/LiveProjectCard'; // Import the LiveProjectCard component
import { ProjectsData } from '@/lib/data';

export default function LiveProjects() {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            setIsMobileOrTablet(width <= 1024);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);


    return (
        <div className="bg-[#2f2f2f] py-20 min-h-[600px]"> {/* Updated background color */}
            <span className="block text-center text-2xl font-bold py-2 text-[#40E0D0]">{ProjectsData.heading}</span>
            {isMobileOrTablet ? (
                <h6 className="text-gray-100 text-center mb-4">{ProjectsData.mobileMessage}</h6>
            ) : (
                    <h6 className="text-gray-100 text-center mb-4">{ProjectsData.desktopMessage}</h6>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center">
                {ProjectsData.projects.map((project) => (
                    <LiveProjectCard
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                        imagePath={project.imagePath}
                        gifPath={project.gifPath}
                    />
                ))}
            </div>
        </div>
    );
}