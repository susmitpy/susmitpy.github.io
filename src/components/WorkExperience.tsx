import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ExpData } from "@/lib/data";

export function WorkExp() {
    const data = [
        {
            title: "2025",
            content: (
                <TimelineContent
                    heading={ExpData.exp.aidax.heading}
                    timeline={ExpData.exp.aidax.timeline}
                    points={ExpData.exp.aidax.points}
                />
            ),
        },
        {
            title: "2024",
            content: (
                <TimelineContent
                    heading={ExpData.exp.xcellen.heading}
                    timeline={ExpData.exp.xcellen.timeline}
                    points={ExpData.exp.xcellen.points}
                />
            ),
        },
        {
            title: "2023",
            content: (
                <TimelineContent
                    heading={ExpData.exp.zeza_lead.heading}
                    timeline={ExpData.exp.zeza_lead.timeline}
                    points={ExpData.exp.zeza_lead.points}
                />
            ),
        },
        {
            title: "2021-2023",
            content: (
                <TimelineContent
                    heading={ExpData.exp.zeza.heading}
                    timeline={ExpData.exp.zeza.timeline}
                    points={ExpData.exp.zeza.points}
                />
            ),
        },
        {
            title: "2019-2021",
            content: (
                <TimelineContent
                    heading={ExpData.exp.flyer.heading}
                    points={ExpData.exp.flyer.points}
                />
            ),
        },
        {
            title: "Education",
            content: (
                <div className="space-y-4">
                    <ul className="text-gray-300 text-sm md:text-base space-y-2 list-disc list-inside font-montserrat">
                        {ExpData.exp.education.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <section id="experience" className="w-full bg-[#2f2f2f] min-h-[600px]">
            <div className="text-center space-y-2 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat pt-4 text-[#40E0D0]">
                    {ExpData.heading}
                </h2>
                <p className="text-gray-300 font-montserrat">
                    {ExpData.subHeading}
                </p>
                <div className="pt-4">
                    <a
                        href="https://drive.google.com/file/d/1lbyVHo2VjEMGuu9algViSjuafdO7jlim/view?usp=share_link"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-montserrat font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        View Resume
                    </a>
                </div>
            </div>
            <Timeline data={data} />
        </section>
    );
}

interface TimelineContentProps {
    heading: string;
    timeline?: string;
    points?: string[];
}

const TimelineContent: React.FC<TimelineContentProps> = ({ heading, timeline, points }) => (
    <div className="space-y-4">
        <h3 className="text-white text-lg md:text-xl font-bold font-montserrat">
            {heading}
            {timeline && (
                <span className="block text-sm font-normal text-gray-300 mt-1 font-montserrat">
                    {timeline}
                </span>
            )}
        </h3>
        {points && (
            <ul className="text-gray-300 text-sm md:text-base space-y-2 list-disc list-inside font-montserrat">
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        )}
    </div>
);