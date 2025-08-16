import { Carousel, BadgeCard } from "@/components/ui/apple-cards-carousel";
import { BadgesData } from "@/lib/data";

export default function BadgesSection() {
    // Transform badges data to match the carousel card format
    const cards = BadgesData.badges.map((badge, index) => (
        <BadgeCard key={badge.title} badge={badge} index={index} layout={true} />
    ));

    return (
        <section id="badges" className="w-full h-full py-20 bg-[#2f2f2f]">
            <span className="block text-2xl font-bold py-2 text-center text-[#40E0D0] font-montserrat">
                {BadgesData.heading}
            </span>
            <Carousel items={cards} />
        </section>
    );
}
