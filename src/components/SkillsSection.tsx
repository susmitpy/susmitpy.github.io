import { MovingSkills } from '@/components/MovingSkills';
import { prefix } from '@/lib/prefix';

export default function SkillsSection() {
    const skillGroups: {
        [key: string]: { name?: string; logoPath?: string }[];
    } = {
        "Programming Languages": [
            { name: "Python", logoPath: `${prefix}/skills/python.jpeg` },
            { name: "Dart", logoPath: `${prefix}/skills/dart.jpeg` },
            { name: "TypeScript", logoPath: `${prefix}/skills/ts.jpeg` },
            { logoPath: `${prefix}/skills/csharp.jpeg` },
        ],
        "Data Science": [
            { name: "sklearn", logoPath: `${prefix}/skills/sklearn.jpeg` },
            { logoPath: `${prefix}/skills/pandas.jpeg` },
            { logoPath: `${prefix}/skills/spark.jpeg` },
            { name: "Data Engineering", },
            { name: "Machine Learning", },
        ],
        "Databases": [
            { logoPath: `${prefix}/skills/neo4j.jpeg` },
            { logoPath: `${prefix}/skills/aws.jpeg` },
            { logoPath: `${prefix}/skills/firebase.jpeg` },
            { name: "PostgreSQL", logoPath: `${prefix}/skills/postgresql.jpeg` },
            { logoPath: `${prefix}/skills/mongodb.jpeg` },
            { logoPath: `${prefix}/skills/cassandra.jpeg` },
        ],
        "Frameworks": [
            { logoPath: `${prefix}/skills/nextjs.jpeg` },
            { logoPath: `${prefix}/skills/flutter.jpeg` },
            { logoPath: `${prefix}/skills/django.jpeg` },
            { logoPath: `${prefix}/skills/fastapi.jpeg` },
            { logoPath: `${prefix}/skills/flask.jpeg` },
            { logoPath: `${prefix}/skills/nodejs.jpeg` },
        ],
        "Cloud & DevOps": [
            { logoPath: `${prefix}/skills/aws.jpeg` },
            { name: "Serverless Framework", logoPath: `${prefix}/skills/serverless.jpeg` },
            { logoPath: `${prefix}/skills/firebase.jpeg` },
            { name: "GitHub", logoPath: `${prefix}/skills/github.jpeg` },
            { name: "Docker", logoPath: `${prefix}/skills/docker.jpeg` },
            { logoPath: `${prefix}/skills/circleci.jpeg` },
        ]
    };

    return (
        <div style={{ background: 'linear-gradient(135deg, #ffffff, #f0f0f0)' }}>
            <span className="block text-center text-2xl font-bold py-4 text-gray-800">Skills & Tools I Use:</span>
            {Object.values(skillGroups).map((skills, index) => (
                <MovingSkills key={index} items={skills} />
            ))}
        </div>
    );
}