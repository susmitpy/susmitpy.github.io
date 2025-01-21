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
            title: "2022",
            content: (
                <TimelineContent
                    heading={ExpData.exp.fusebytes.heading}
                />
            ),
        },
        {
            title: "2021",
            content: (
                <TimelineContent
                    heading={ExpData.exp.zeza.heading}
                    timeline={ExpData.exp.zeza.timeline}
                    points={ExpData.exp.zeza.points}
                />
            ),
        },
        {
            title: "2020-2021",
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