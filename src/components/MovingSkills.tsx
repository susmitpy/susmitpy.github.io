"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { HoverBorderGradient } from './ui/hover-border-gradient'; // Import HoverBorderGradient

export const SkillCard = ({
    logoPath,
    text,
}: {
    logoPath?: string;
    text?: string;
}) => {
    return (
        <HoverBorderGradient
            containerClassName="rounded-full"
            as="div"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
            {logoPath && (
                <img
                    src={logoPath}
                    alt={text}
                    className="h-10 md:h-12 sm:h-14 w-auto"
                />
            )}
            {text && <span>{text}</span>}
        </HoverBorderGradient>
    );
};

export const MovingSkills = ({
    items, // Ensure this prop is correctly used
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: { name?: string; logoPath?: string }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <SkillCard key={idx} logoPath={item.logoPath} text={item.name} />
                ))}
            </ul>
        </div>
    );
};
