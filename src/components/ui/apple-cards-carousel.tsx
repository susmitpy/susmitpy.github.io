"use client";
import React, {
  useEffect,
  useState,
  createContext,
  JSX,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import CredlyBadge from "@/components/CredlyBadge";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string; // Added category
  link: string; // Existing link
  onYoutube?: boolean; // Existing onYoutube flag
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => { },
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth hide-scrollbar"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {

  return (
    <>
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        whileHover={{ scale: 1.1 }} // Expand card on hover
        className="h-52 w-48 md:h-[30rem] md:w-72 overflow-hidden flex flex-col items-start justify-start relative z-10 hover:scale-105 transition-transform cursor-pointer" // Added hover and cursor styles
        onClick={() => window.open(card.link, "_blank")} // Made card clickable
      >
        {card.onYoutube && (
          <FaYoutube className="absolute top-4 right-4 w-6 h-6 text-red-500 z-20" /> // Display YouTube icon if onYoutube is true

        )}
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category} {/* Display category */}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <img
          src={card.src}
          alt={card.title}
          className="object-contain absolute z-10 inset-0"
          fetchPriority="low"
        />
      </motion.div>
    </>
  );
};

export const BadgeCard = ({
  badge,
  index,
  layout = false,
}: {
  badge: any;
  index: number;
  layout?: boolean;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderBadgeContent = () => {
    // Only render dynamic content on client side
    if (!isClient) {
      return (
        <div className="w-full h-48 flex items-center justify-center">
          <div className="animate-pulse bg-gray-300 w-32 h-40 rounded"></div>
        </div>
      );
    }

    // If credlyId exists, render CredlyBadge component
    if (badge.credlyId) {
      return <CredlyBadge badgeId={badge.credlyId} width={150} height={270} />;
    }

    // If can_embed is true and url exists, show iframe
    if (badge.can_embed && badge.url) {
      return (
        <iframe
          src={badge.url}
          className="w-full h-48 rounded"
          frameBorder="0"
          title={badge.title}
        />
      );
    }

    // Default case: show button to view certificate
    if (badge.url) {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(badge.url, "_blank");
          }}
          className="px-4 py-2 bg-[#40E0D0] text-black font-semibold rounded hover:bg-[#38C0B0] transition-colors"
        >
          View Certificate
        </button>
      );
    }

    return null;
  };

  const handleCardClick = () => {
    // Only open URL if we're not embedding Credly inside
    if (badge.url && !badge.credlyId && (!badge.can_embed || !badge.url)) {
      window.open(badge.url, "_blank");
    }
  };

  return (
    <>
      <motion.div
        layoutId={layout ? `badge-${badge.title}` : undefined}
        whileHover={{ scale: 1.05 }}
        className="h-80 w-60 md:h-96 md:w-72 overflow-hidden flex flex-col items-center justify-center relative z-10 hover:scale-105 transition-transform cursor-pointer bg-gradient-to-r from-[#252525] to-[#1f1f1f] rounded-3xl p-4"
        onClick={handleCardClick}
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-30 pointer-events-none rounded-3xl" />
        {/* <motion.p
          layoutId={layout ? `category-${badge.category}` : undefined}
          className="text-[#40E0D0] text-sm md:text-base font-medium font-sans"
        >
          {badge.category}
        </motion.p> */}
        <div className="relative z-40 text-center mb-4">

          <motion.p
            layoutId={layout ? `title-${badge.title}` : undefined}
            className="text-white text-sm md:text-lg font-semibold max-w-xs text-center [text-wrap:balance] font-sans mt-2 leading-tight"
          >
            {badge.title}
          </motion.p>
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          {renderBadgeContent()}
        </div>
      </motion.div>
    </>
  );
};

