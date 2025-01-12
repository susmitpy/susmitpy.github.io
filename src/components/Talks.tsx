import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { prefix } from '@/lib/prefix';

export function TalksSection() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <div className="w-full h-full py-20 bg-slate-800">
            <span className="block text-center text-2xl font-bold py-2 text-gray-200">
                Opportunities to Speak
            </span>
            <Carousel items={cards} />
            <div className="text-center mt-6">
                <button
                    onClick={() => window.open("https://susmitpy.github.io/talks", "_blank")}
                    className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors shadow-md"
                >
                    View All Slide Decks
                </button>
            </div>
        </div>
    )


};

interface Talk {
    title: string;
    category: string;
    src: string;
    link: string;
    onYoutube: boolean;
}

const data: Talk[] = [
    {
        title: "Firestore Security Rules",
        category: "DevFest Mumbai 2024",
        src: `${prefix}/talks/devfest.jpg`,
        link: "https://susmitpy.github.io/talks/firestore_rules",
        onYoutube: false
    },
    {
        title: "Github Actions in Action",
        category: "Git Together - Oct 2024",
        src: `${prefix}/talks/github_actions_in_action.jpeg`,
        link: "https://www.youtube.com/watch?v=_SCigi0XPG0",
        onYoutube: true
    },
    {
        title: "Recommendation Engine using Neo4j",
        category: "Global Azure Bootcamp 2024",
        link: "https://www.youtube.com/watch?v=V05Pz1tVovs",
        src: `${prefix}/talks/azure_neo4j.jpeg`,
        onYoutube: true
    },
    {
        title: "Tracking Changes with MongoDB Change Stream",
        category: "Mumbai MUG",
        link: "https://youtu.be/kfMux6R-SXw",
        src: `${prefix}/talks/mongo_change.jpg`,
        onYoutube: true,
    },
    {
        title: "Apache Kafka in Short",
        category: "Kafka Meetup",
        link: "https://susmitpy.github.io/talks/kafka",
        src: `${prefix}/talks/kafka.jpeg`,
        onYoutube: false,
    },
    {
        title: "Bloom Filter",
        category: "Impromptu Talk at Kafka Meetup",
        link: "https://blog.det.life/bloom-filter-in-short-339890f84e1b",
        src: `${prefix}/talks/bloom.jpg`,
        onYoutube: false,
    }
]

