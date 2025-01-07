import React, { useState, useEffect } from 'react';
import { LiveProjectCard } from '@/components/LiveProjectCard'; // Import the LiveProjectCard component

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

    const projects = [
        {
            "name": "Pick A Chit",
            "description": "Digital Solution for the age-old game of Chits",
            "link": "https://pickachit.web.app",
            "imagePath": "/projects/pickachit.jpeg",
            "gifPath": "/projects/pickachit.gif"
        },
        {
            "name": "Cloud File Viewer",
            "description": "AWS S3 File Viewer",
            "link": "https://cloudfileviewer.web.app",
            "imagePath": "/projects/cloudfileviewer.jpeg",
            "gifPath": "/projects/cloudfileviewer.gif"
        },
        {
            "name": "Mention It",
            "description": "Templated LinkedIn, Tweets for Events",
            "link": "https://mention-it.web.app",
            "imagePath": "/projects/mentionit.jpeg",
            "gifPath": "/projects/mentionit.gif"
        },
        {
            "name": "Local Todos",
            "description": "Todo App, Data on Device",
            "link": "https://locally-todosweb.app",
            "imagePath": "/projects/localtodos.jpeg",
            "gifPath": "/projects/localtodos.gif"
        }
    ]

    return (
        <div className="bg-gray-800 p-8"> {/* Added dark background */}
            {isMobileOrTablet ? (
                <h6 className="text-gray-100 text-center mb-4">Long Press over card to see demo</h6>
            ) : (
                <h6 className="text-gray-100 text-center mb-4">Hover over card to see demo</h6>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center">
                {projects.map((project) => (
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