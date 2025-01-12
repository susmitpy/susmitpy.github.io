"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { prefix } from '@/lib/prefix';

const blogs = [
    {
        title: "Bloom Filter in Short",
        description: "Set.contains() at scale with some False Positives",
        link: "https://blog.det.life/bloom-filter-in-short-339890f84e1b",
        img: "https://miro.medium.com/v2/resize:fit:1302/format:webp/1*FwFWbVC5afSD_5WK2znXcg.gif"
    },
    {
        title: "Apache Kafka: In-Short",
        description: "Fundamental Concepts explained concisely",
        link: "https://blog.det.life/apache-kafka-in-short-fa56cc197114",
        img: "https://miro.medium.com/v2/resize:fit:962/format:webp/1*6cn-HSF482J9qU-VFZlwjg.png"
    },
    {
        title: "Data Engineering and ML Platform",
        description: "Platform Architecture, Codebase, and Interesting Features",
        link: "https://medium.com/zeza-tech/data-engineering-and-ml-platform-part-1-platform-architecture-e5d869cae94f",
        img: `${prefix}/blogs/data_eng_ml_blog.gif`
    },
    {
        title: "Building a Recommendation Engine Using Neo4j Hands-On",
        description: "From Data Model to Loading Data to Making Recommendations",
        link: "https://medium.com/neo4j/building-a-recommender-system-using-neo4j-hands-on-part-1-e82bcd881906",
        img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8Xxbom2nonrSVLLpeg832A.png"
    },
    {
        title: "Apache Spark Architecture",
        description: "Commence on the path of becoming a sparkling big data engineer",
        link: "https://medium.com/zeza-tech/apache-spark-architecture-411565908a1",
        img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*pE5zBQR9Js_eVjvrQ6BzgA.png"
    },
    {
        title: "Using date, time, and date-time features in ML",
        description: "A guide on encoding and engineering date time features",
        link: "https://medium.com/zeza-tech/using-date-time-and-date-time-features-in-ml-96970be72329",
        img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4mqz7cqt_GOFjFlkVNOaYQ.jpeg"
    }
];

export function BlogsSection() {
    return (
        <div className="py-8 bg-zinc-700">
            <span className="block text-center text-2xl font-bold py-2 text-gray-200">Tech Blogs</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center justify-items-center">
                {blogs.map((blog) => (
                    <div
                        onClick={() => window.open(blog.link, "_blank")}
                        key={blog.title}
                        className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <Rays />
                        <Beams />
                        <div className="relative z-10 justify-items-center mb-2">
                            <img src={blog.img} className="h-44 rounded-2xl justify-items-center" />
                        </div>

                        <h2 className="text-white text-2xl text-left font-bold">
                            {blog.title}
                        </h2>
                        <p className="text-neutral-200 text-left  mt-4">
                            {blog.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <button
                    onClick={() => window.open("https://susmitpy.medium.com/", "_blank")}
                    className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors shadow-md"
                >
                    View All
                </button>
            </div>
        </div>
    );
}


const Beams = () => {
    return (
        <svg
            width="380"
            height="315"
            viewBox="0 0 380 315"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
        >
            <g filter="url(#filter0_f_120_7473)">
                <circle cx="34" cy="52" r="114" fill="#6925E7" />
            </g>
            <g filter="url(#filter1_f_120_7473)">
                <circle cx="332" cy="24" r="102" fill="#8A4BFF" />
            </g>
            <g filter="url(#filter2_f_120_7473)">
                <circle cx="191" cy="53" r="102" fill="#802FE3" />
            </g>
            <defs>
                <filter
                    id="filter0_f_120_7473"
                    x="-192"
                    y="-174"
                    width="452"
                    height="452"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="56"
                        result="effect1_foregroundBlur_120_7473"
                    />
                </filter>
                <filter
                    id="filter1_f_120_7473"
                    x="70"
                    y="-238"
                    width="524"
                    height="524"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="80"
                        result="effect1_foregroundBlur_120_7473"
                    />
                </filter>
                <filter
                    id="filter2_f_120_7473"
                    x="-71"
                    y="-209"
                    width="524"
                    height="524"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="80"
                        result="effect1_foregroundBlur_120_7473"
                    />
                </filter>
            </defs>
        </svg>
    );
};

const Rays = ({ className }: { className?: string }) => {
    return (
        <svg
            width="380"
            height="397"
            viewBox="0 0 380 397"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
                "absolute left-0 top-0  pointer-events-none z-[1]",
                className
            )}
        >
            <g filter="url(#filter0_f_120_7480)">
                <path
                    d="M-37.4202 -76.0163L-18.6447 -90.7295L242.792 162.228L207.51 182.074L-37.4202 -76.0163Z"
                    fill="url(#paint0_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.3"
                filter="url(#filter1_f_120_7480)"
            >
                <path
                    d="M-109.54 -36.9027L-84.2903 -58.0902L178.786 193.228L132.846 223.731L-109.54 -36.9027Z"
                    fill="url(#paint1_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.86"
                filter="url(#filter2_f_120_7480)"
            >
                <path
                    d="M-100.647 -65.795L-69.7261 -92.654L194.786 157.229L139.51 197.068L-100.647 -65.795Z"
                    fill="url(#paint2_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.31"
                filter="url(#filter3_f_120_7480)"
            >
                <path
                    d="M163.917 -89.0982C173.189 -72.1354 80.9618 2.11525 34.7334 30.1553C-11.495 58.1954 -106.505 97.514 -115.777 80.5512C-125.048 63.5885 -45.0708 -3.23233 1.15763 -31.2724C47.386 -59.3124 154.645 -106.061 163.917 -89.0982Z"
                    fill="#8A50FF"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                filter="url(#filter4_f_120_7480)"
            >
                <path
                    d="M34.2031 13.2222L291.721 269.534"
                    stroke="url(#paint3_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                filter="url(#filter5_f_120_7480)"
            >
                <path
                    d="M41 -40.9331L298.518 215.378"
                    stroke="url(#paint4_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                filter="url(#filter6_f_120_7480)"
            >
                <path
                    d="M61.3691 3.8999L317.266 261.83"
                    stroke="url(#paint5_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                filter="url(#filter7_f_120_7480)"
            >
                <path
                    d="M-1.46191 9.06348L129.458 145.868"
                    stroke="url(#paint6_linear_120_7480)"
                    strokeWidth="2"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_120_7480"
                    x="-49.4199"
                    y="-102.729"
                    width="304.212"
                    height="296.803"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="6"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter1_f_120_7480"
                    x="-115.54"
                    y="-64.0903"
                    width="300.326"
                    height="293.822"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="3"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter2_f_120_7480"
                    x="-111.647"
                    y="-103.654"
                    width="317.434"
                    height="311.722"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="5.5"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter3_f_120_7480"
                    x="-212.518"
                    y="-188.71"
                    width="473.085"
                    height="369.366"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="48"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter4_f_120_7480"
                    x="25.8447"
                    y="4.84521"
                    width="274.234"
                    height="273.065"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="4"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter5_f_120_7480"
                    x="32.6416"
                    y="-49.3101"
                    width="274.234"
                    height="273.065"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="4"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter6_f_120_7480"
                    x="54.0078"
                    y="-3.47461"
                    width="270.619"
                    height="272.68"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="3.5"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter7_f_120_7480"
                    x="-9.2002"
                    y="1.32812"
                    width="146.396"
                    height="152.275"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="3.5"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_120_7480"
                    x1="-57.5042"
                    y1="-134.741"
                    x2="403.147"
                    y2="351.523"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.214779" stopColor="#AF53FF" />
                    <stop offset="0.781583" stopColor="#B253FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_120_7480"
                    x1="-122.154"
                    y1="-103.098"
                    x2="342.232"
                    y2="379.765"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.214779" stopColor="#AF53FF" />
                    <stop offset="0.781583" stopColor="#9E53FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_120_7480"
                    x1="-106.717"
                    y1="-138.534"
                    x2="359.545"
                    y2="342.58"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.214779" stopColor="#9D53FF" />
                    <stop offset="0.781583" stopColor="#A953FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_120_7480"
                    x1="72.701"
                    y1="54.347"
                    x2="217.209"
                    y2="187.221"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#AF81FF" />
                    <stop offset="1" stopColor="#C081FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_120_7480"
                    x1="79.4978"
                    y1="0.191681"
                    x2="224.006"
                    y2="133.065"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#AF81FF" />
                    <stop offset="1" stopColor="#C081FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_120_7480"
                    x1="79.6568"
                    y1="21.8377"
                    x2="234.515"
                    y2="174.189"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B981FF" />
                    <stop offset="1" stopColor="#CF81FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_120_7480"
                    x1="16.119"
                    y1="27.6966"
                    x2="165.979"
                    y2="184.983"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A981FF" />
                    <stop offset="1" stopColor="#CB81FF" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}