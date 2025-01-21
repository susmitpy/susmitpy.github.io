import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TalksData } from "@/lib/data";

export function TalksSection() {
    const cards = TalksData.talks.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <section id="talks" className="w-full h-full py-20 bg-[#2f2f2f]">
            <span className="block text-2xl font-bold py-2 text-center text-[#40E0D0] font-montserrat">
                {TalksData.headline}
            </span>
            <Carousel items={cards} />
            <div className="text-center mt-6">
                <button
                    onClick={() => window.open("https://susmitpy.github.io/talks", "_blank")}
                    className="px-6 py-3 bg-[#40E0D0] font-semibold text-black rounded hover:bg-[#38C0B0] transition-colors shadow-md"
                >
                    {TalksData.viewAll}
                </button>
            </div>
        </section>
    )
};



