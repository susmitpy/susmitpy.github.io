import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ExpData } from "@/lib/data";

export function WorkExp() {
    const data = [
        {
            title: "2025",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        {ExpData.exp.aidax.heading}
                        <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-400 mt-1">
                            {ExpData.exp.aidax.timeline}
                        </span>
                    </h3>
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base space-y-2 list-disc list-inside">
                        {
                            ExpData.exp.aidax.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))
                        }
                    </ul>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        {ExpData.exp.xcellen.heading}
                        <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-400 mt-1">
                            {ExpData.exp.xcellen.timeline}
                        </span>
                    </h3>
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base space-y-2 list-disc list-inside">
                        {
                            ExpData.exp.xcellen.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))
                        }
                    </ul>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        {ExpData.exp.zeza_lead.heading}
                        <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-400 mt-1">
                            {ExpData.exp.zeza_lead.timeline}
                        </span>
                    </h3>
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base space-y-2 list-disc list-inside">
                        {
                            ExpData.exp.zeza_lead.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))
                        }
                    </ul>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        {ExpData.exp.fusebytes.heading}
                    </h3>
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        {ExpData.exp.zeza.heading}
                        <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-400 mt-1">
                            {ExpData.exp.zeza.timeline}
                        </span>
                    </h3>
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base space-y-2 list-disc list-inside">
                        {
                            ExpData.exp.zeza.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))
                        }
                    </ul>
                </div>
            ),
        },

        {
            title: "2020-2021",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        {ExpData.exp.flyer.heading}
                    </h3>
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base space-y-2 list-disc list-inside">
                        {
                            ExpData.exp.flyer.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))
                        }
                    </ul>
                </div>
            ),
        },
        {
            title: "Education",
            content: (
                <div className="space-y-4">
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base space-y-2 list-disc list-inside">
                        {
                            ExpData.exp.education.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))
                        }
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <div className="text-center space-y-2 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                    {ExpData.heading}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                    {ExpData.subHeading}
                </p>
            </div>
            <Timeline data={data} />
        </div>
    );
}
