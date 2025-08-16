import { prefix } from "./prefix"

export const HeroData = {
    name: "Susmit Vengurlekar",
    headline: "A Passionate Techie who builds Problem-Solving Tech Solutions",
    subHeadline: "Having 8+ YoE (4+ YoE after graduation)",
    aboutTitle: "About Me",
    about: "I really enjoy tackling tech problems and seeing a solution come together from beginning to end. I'm passionate about crafting high-quality code that is clean, readable, and modular. With experience in data science, cloud, and building both backend systems and functional frontend components, I strive to find the perfect technology fit for solutions that are elegant, efficient, and cost-effective."
,
    titles: [
        "Data Scientist",
        "Database Engineer",
        "AWS Cloud Architect",
        "Full Stack Developer",
    ],
    secondTitles: [
        "Certified Neo4j Professional",
    ]
}

export const SkillsData = {
    heading: "Skills & Tools I Use:",
    skillGroups: {
        "Programming Languages": [
            { name: "Python", logoPath: `${prefix}/skills/python.webp` },
            { name: "Dart", logoPath: `${prefix}/skills/dart.webp` },
            { name: "TypeScript", logoPath: `${prefix}/skills/ts.webp` },
            { logoPath: `${prefix}/skills/csharp.webp` },
        ],
        "Data": [
            { name: "sklearn", logoPath: `${prefix}/skills/sklearn.webp` },
            { logoPath: `${prefix}/skills/pandas.webp` },
            { logoPath: `${prefix}/skills/kafka.webp` },
            { logoPath: `${prefix}/skills/spark.webp` },
            { name: "Data Engineering", },
            { name: "Machine Learning", },
        ],
        "Databases": [
            { logoPath: `${prefix}/skills/firebase.webp` },
            { logoPath: `${prefix}/skills/neo4j.webp` },
            { name: "PostgreSQL", logoPath: `${prefix}/skills/postgresql.webp` },
            { logoPath: `${prefix}/skills/mongodb.webp` },
            { logoPath: `${prefix}/skills/cassandra.webp` },

        ],
        "Development": [
            { logoPath: `${prefix}/skills/nextjs.webp` },
            { logoPath: `${prefix}/skills/flutter.webp` },
            { logoPath: `${prefix}/skills/django.webp` },
            { logoPath: `${prefix}/skills/fastapi.webp` },
            { logoPath: `${prefix}/skills/flask.webp` },
            { logoPath: `${prefix}/skills/nodejs.webp` },
        ],
        "Cloud & DevOps": [
            { logoPath: `${prefix}/skills/aws.webp` },
            { name: "Serverless Framework", logoPath: `${prefix}/skills/serverless.webp` },
            { name: "GitHub", logoPath: `${prefix}/skills/github.webp` },
            { name: "Docker", logoPath: `${prefix}/skills/docker.webp` },
            { logoPath: `${prefix}/skills/circleci.webp` },
        ]
    }
}

export const ProjectsData = {
    heading: "Live Projects",
    mobileMessage: "Long Press over card to see demo",
    desktopMessage: "Hover over card to see demo",
    projects: [
        {
            "name": "Mention It",
            "description": "Templated LinkedIn, Tweets for Events",
            "link": "https://mention-it.web.app",
            "imagePath": `${prefix}/projects/mentionit.webp`,
            "gifPath": `${prefix}/projects/mentionit.gif`
        },
        {
            "name": "Cloud File Viewer",
            "description": "AWS S3 File Viewer",
            "link": "https://cloudfileviewer.web.app",
            "imagePath": `${prefix}/projects/cloudfileviewer.webp`,
            "gifPath": `${prefix}/projects/cloudfileviewer.gif`
        },
        {
            "name": "Pick A Chit",
            "description": "Digital Solution for the age-old game of Chits",
            "link": "https://pickachit.web.app",
            "imagePath": `${prefix}/projects/pickachit.webp`,
            "gifPath": `${prefix}/projects/pickachit.gif`
        }
    ]
}

export const ReposData = {
    heading: "GitHub Repositories",
    repos: [
{
"name":"Kong API Gateway with Fast API, Open Telemetry and OpenObserve in Docker",
            "description": "Demonstrates end-to-end observability in a microservices architecture", "link": "https://github.com/susmitpy/docker-kong-fastapi-otel-openobserve"
},
        {
            "name": "AWS CDK Example",
            "description": "Demonstrates how to use AWS Lambda with AWS CDK to schedule the start and stop of EC2 instances.",
            "link": "https://github.com/susmitpy/aws_cdk_example"
        },
        {
            "name": "Mini Data Analyst using LLM Agent",
            "description": "setup of a data analyst which has the ability to answer user questions about the data",
            "link": "https://github.com/susmitpy/Mini-Data-Analyst-LLM",
        },
        {
            "name": "QnA on Knowledge Graph",
            "description": "question answering system based on RAG with a knowledge graph in Neo4j (graph database)",
            "link": "https://github.com/susmitpy/QnA-on-Neo4j-Knowledge-Graph",
        },
        {
            "name": "MongoDB - Kafka - Neo4j",
            "description": "Propagating data from MongoDB to Neo4j via Kafka",
            "link": "https://github.com/susmitpy/mongodb-kafka-neo4j",
        },
        {
            "name": "Real Time Word Count",
            "description": "Azure Function + Blob Storage + SignalR to count words in a document",
            "link": "https://github.com/susmitpy/RealTimeWordCount",
        },
        {
            "name": "Local File Transfer",
            "description": "Allows clients to connect over local network and send/download files to/from the server",
            "link": "https://github.com/susmitpy/LocalFileTransfer",
        },
        {
            "name": "MySQL To Neo4j Migration",
            "description": "Migration script and auto creating AWS Lambda functions",
            "link": "https://github.com/susmitpy/Neo4j_Social_Media",
        },
        {
            "name": "Streamlit Active Connections Tracker",
            "description": "Track active client connections to your Streamlit apps",
            "link": "https://github.com/susmitpy/streamlit_active_connections_tracker",
        },
    ]
}

export const BlogsData = {
    heading: "Tech Blogs",
    blogs: [
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
    ],
    footer: "View All"
}

export interface Talk {
    title: string;
    category: string;
    src: string;
    link: string;
    onYoutube: boolean;
}


export const TalksData = {
    headline: "Opportunities to Speak",
    viewAll: "View All Slide Decks",
    talks: [
        {
            title: "Auth with Kong API Gateway",
            category: "Kong Mumbai",
            src: `${prefix}/speaker/kong_auth.jpeg`,
            link: "https://youtu.be/5Il3ddDElRM",
            onYoutube: true
        },
        {
            title: "AWS Lambda in Action: Use Cases & AWS CDK",
            category: "AWS User Group Mumbai",
            src: `${prefix}/speaker/aws_lambda.jpg`,
            link: "https://youtu.be/3rr95M8gyl8",
            onYoutube: true
        },
        {
            title: "QnA on Neo4j Knowledge Graph",
            category: "GraphDatabase Mumbai Meetup",
            src: `${prefix}/speaker/qna.jpeg`,
            link: "https://youtu.be/JpysxH4Z5Fw",
            onYoutube: true
        },
        {
            title: "Firestore Security Rules",
            category: "DevFest Mumbai 2024",
            src: `${prefix}/speaker/devfest.jpg`,
            link: "https://susmitpy.github.io/talks/firestore_rules",
            onYoutube: false
        },
        {
            title: "Github Actions in Action",
            category: "Git Together - Oct 2024",
            src: `${prefix}/speaker/github_actions_in_action.jpeg`,
            link: "https://www.youtube.com/watch?v=_SCigi0XPG0",
            onYoutube: true
        },
        {
            title: "Recommendation Engine using Neo4j",
            category: "Global Azure Bootcamp 2024",
            link: "https://www.youtube.com/watch?v=V05Pz1tVovs",
            src: `${prefix}/speaker/azure_neo4j.jpeg`,
            onYoutube: true
        },
        {
            title: "Tracking Changes with MongoDB Change Stream",
            category: "Mumbai MUG",
            link: "https://youtu.be/kfMux6R-SXw",
            src: `${prefix}/speaker/mongo_change.jpg`,
            onYoutube: true,
        },
        {
            title: "Apache Kafka in Short",
            category: "Kafka Meetup",
            link: "https://susmitpy.github.io/talks/kafka",
            src: `${prefix}/speaker/kafka.jpeg`,
            onYoutube: false,
        },
        {
            title: "Bloom Filter",
            category: "Impromptu Talk at Kafka Meetup",
            link: "https://blog.det.life/bloom-filter-in-short-339890f84e1b",
            src: `${prefix}/speaker/bloom.jpg`,
            onYoutube: false,
        }
    ] as Talk[]
}

export const TestimonialsData = {
    heading: "What People Say",
    testimonials: [
        {
            name: "Josiah James",
            designation: "Intern, Zeza Tech",
            review:
                "I entered in knowing absolutely nothing but you never treated me like a novice, you shared your intellect with me just as any other developer, and I won't ever forget that. You also brought the fun memories in Zeza, and I have never seen anyone else with this much knowledge and experience be so down to earth and funny. All in all, you have inspired me, and I won't ever forget what I learned through you.",
        },
        {
            name: "Nikhil Gupta",
            designation: "Partner, Xcellen",
            review:
                "Susmit would be an excellent addition to any team and would bring a great deal of value. He consistently demonstrated a strong work ethic, attention to detail, and a commitment to achieving the highest level of quality in his work. I believe that he would be an asset to any organization that is looking for a dedicated, hard-working, and highly skilled individual. I highly recommend him for any position that he may be applying for.",
        },
        {
            name: "Dr. Hemlata Bagla",
            designation: "Principal, KC College",
            review:
                "Thank you for the software enabling SYJC student's information to be uploaded on the HSC Board website. It is a fairly useful program.",
        }
    ]
}

export const ConnectData = {
    heading: "Let's Connect",
    description: "I'm always enthusiastic to get exposed to different problems and challenges.",
    socials: {
        linkedin: "https://www.linkedin.com/in/susmit-vengurlekar/",
        github: "https://github.com/susmitpy",
        medium: "https://susmitpy.medium.com",
        hackerrank: "https://www.hackerrank.com/profile/susmit_py",
        email: "susmit.dev@outlook.com"
    }
}

export const ExpData = {
    heading: "Work Experience",
    subHeading: "My professional journey in tech",
    exp: {
        aidax: {
            heading: "Founding Team Member at AIDAX",
            timeline: "Dec 2024 - Present",
            points: [
                "Responsible for the strategic direction and development of AIDAX, focusing on innovative AI solutions."
            ]
        },
        xcellen: {
            heading: "Senior Data Scientist and Software Architect at Xcellen PTE Ltd",
            timeline: "Feb 2024 - Dec 2024",
            points: [
                "Developed Gen AI use cases, including identifying logic breaches in survey data and automating insights generation for PowerPoint slide decks.",
                "Automated the creation of Diagnostic Framework PowerPoint presentations with thinkcell charts, text, and tables based on tabular data.",
                "Prepared and documented user, logic, and data flow diagrams; developed a Bonus Payout Curve Generator; acted as technical program manager for the in-house product XBoost."
            ]
        },
        zeza_lead: {
            heading: "Team Lead and Data Scientist at Zeza Technologies",
            timeline: "June 2023 - Jan 2024",
            points: [
                "Led a team of 4 developers and 3 interns, coordinating with QA Head and Project Manager to delegate tasks effectively.",
                "Assumed additional roles such as Frontend Developer and DevOps as needed.",
                "Planned features in advance, breaking them down into well-defined and documented tasks for estimation and progress measurement.",
                "Oversaw the development of a Gen AI feature allowing users to extract text patterns across columns by providing examples."
            ]
        },
        fusebytes: {
            heading: "Flutter Mentor at Fusebytes",
        },
        zeza: {
            heading: "Data Scientist and Backend Developer at Zeza Technologies",
            timeline: "June 2021 to June 2023",
            points: [
                "Developed a Data Engineering and ML-as-a-Service platform with auto ML, auto feature engineering, EDA, and explainable AI capabilities.",
                "Reduced costs and improved performance by ~60% by rearchitecting systems using SQS, Circle CI, on-demand EC2s, Lambda functions, auto timeout systems, and static site hosting."
            ]
        },
        flyer: {
            heading: "Backend Developer and Database Engineer for Flyer Lively: Interests and Hobbies",
            points: [
                "Developed backend services and managed databases using PostgreSQL, Node.js, Python, and the Serverless Framework."
            ]
        },
        education: [
            "B.Sc. in Information Technology from DG Ruparel College, Mumbai University (2018 - 2021) - CGPA: 9.73",
            "HSC Commerce from D.G. Ruparel College of Arts, Science and Commerce - 86.46%",
            "FYJC (11th Std.) - 82.15%",
            "SSC - 91.4%" 
        ]
    }

}

export const BadgesData = {
    heading: "Professional Courses and Badges",
    badges: [
        {
            title: "Introduction to Stream Processing and Apache Flink®",
            html_code: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="5441673d-45e5-4431-b97b-99f563e746a8" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`
        },
        {
            title: "MongoDB Advanced Schema Design Patterns and Anti-patterns Skill Badge",
            html_code: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="441ae8d7-7143-4bf8-9bf4-d59cec545bbf" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`
        },
        {
            title: "MongoDB Aggregation Fundamentals",
            html_code: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="5496be60-1c57-428a-8749-5c8c7f93fde0" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`
        },
        {
            title: "Building AI Agents with MongoDB",
            html_code: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="5f6f4be9-329e-4f38-b9e2-bbf4eef2d369" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`
        },
        {
            title: "Building RAG Apps Using MongoDB",
            html_code: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="0622a2ac-9223-4843-9ea3-709ee1486894" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`
        },
        {
            title: "Building AI-Powered Search with MongoDB Vector Search",
            html_code: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="6a74ed86-c7dc-436e-a76f-e0f7822cb0cb" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`
        },
        {
            title: "Introduction to Apache Flink® SQL",
            html_code: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f6669cc2-2de3-49a7-84a1-26e1c5652543" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`
        },
        {
            title: "MongoDB Query Optimization Techniques",
            html_code: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="dd0471fb-4fe4-40d1-82df-d2d16f53b726" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`
        },
        {
            title: "Neo4j Graph Data Science Fundamentals",
            url: "https://graphacademy.neo4j.com/c/faea5510-a6c8-4b10-89cb-cb6b1183eb7f#content",
            can_embed: false
        },
        {
            title: "Neo4j - Introduction to Vector Indexes and Unstructured Data",
            url: "https://graphacademy.neo4j.com/c/236d38d4-3361-4e1d-895c-c2e70ee075d9#content",
            can_embed: false
        }
    ]
}


