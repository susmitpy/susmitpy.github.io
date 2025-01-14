import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function WorkExp() {
    const data = [
        {
            title: "2025",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        Founding Team Member at AIDAX
                        <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-400 mt-1">
                            Dec 2024 - Present
                        </span>
                    </h3>
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base space-y-2 list-disc list-inside">
                        <li>Responsible for the strategic direction and development of AIDAX, focusing on innovative AI solutions.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        Senior Data Scientist and Software Architect at Xcellen PTE Ltd
                        <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-400 mt-1">
                            Feb 2024 - Dec 2024
                        </span>
                    </h3>
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base space-y-2 list-disc list-inside">
                        <li>Developed Gen AI use cases, including identifying logic breaches in survey data and automating insights generation for PowerPoint slide decks.</li>
                        <li>Automated the creation of Diagnostic Framework PowerPoint presentations with thinkcell charts, text, and tables based on tabular data.</li>
                        <li>Prepared and documented user, logic, and data flow diagrams; developed a Bonus Payout Curve Generator; acted as technical program manager for the in-house product XBoost.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        Team Lead and Data Scientist at Zeza Technologies
                        <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-400 mt-1">
                            June 2023 - Jan 2024
                        </span>
                    </h3>
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base space-y-2 list-disc list-inside">
                        <li>Led a team of 4 developers and 3 interns, coordinating with QA Head and Project Manager to delegate tasks effectively.</li>
                        <li>Assumed additional roles such as Frontend Developer and DevOps as needed.</li>
                        <li>Planned features in advance, breaking them down into well-defined and documented tasks for estimation and progress measurement.</li>
                        <li>Oversaw the development of a Gen AI feature allowing users to extract text patterns across columns by providing examples.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        Flutter Mentor at Fuse Bytes
                    </h3>
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        Data Scientist and Backend Developer at Zeza Technologies
                        <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-400 mt-1">
                            June 2021 to June 2023
                        </span>
                    </h3>
                    <ul className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base space-y-2 list-disc list-inside">
                        <li>Developed a Data Engineering and ML-as-a-Service platform with auto ML, auto feature engineering, EDA, and explainable AI capabilities.</li>
                        <li>Reduced costs and improved performance by ~60% by rearchitecting systems using SQS, Circle CI, on-demand EC2s, Lambda functions, auto timeout systems, and static site hosting.</li>
                        <li>Developed CloudFileViewer to automate viewing Jupyter notebooks and Parquet files from AWS S3. Documented the journey in a blog: <a href="https://susmitpy.medium.com/file-viewer-for-the-cloud-65dea0455dc7" className="text-blue-500">File Viewer for the Cloud</a></li>
                    </ul>
                </div>
            ),
        },

        {
            title: "2020-2021",
            content: (
                <div className="space-y-4">
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-bold">
                        Backend Developer and Database Engineer for Flyer Lively: Interests and Hobbies
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        Developed backend services and managed databases using PostgreSQL, Node.js, Python, and the Serverless Framework.
                    </p>
                </div>
            ),
        },
        {
            title: "Education",
            content: (
                <div className="space-y-4">
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        B.Sc. in Information Technology from DG Ruparel College, Mumbai University (2018 - 2021) - CGPA: 9.73
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        HSC Commerce from D.G. Ruparel College of Arts, Science and Commerce - 86.46%
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        FYJC (11th Std.) - 82.15% | SSC - 91.4%
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <div className="text-center space-y-2 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                    Work Experience
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                    My professional journey in tech
                </p>
            </div>
            <Timeline data={data} />
        </div>
    );
}
