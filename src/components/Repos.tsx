"use client";
import React from 'react';
import { RepoCard } from './RepoCard';

export default function Repos() {

    const repos = [
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
            "name": "Async Word Count",
            "description": "Azure Function + Blob Storage + SignalR to count words in a document",
            "link": "https://github.com/susmitpy/AsyncWordCount",
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
    ]

    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
            <h2 className="text-white text-center mb-4 text-2xl font-semibold">GitHub Repositories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                {repos.map((repo, index) => (
                    <RepoCard
                        key={index}
                        name={repo.name}
                        description={repo.description}
                        link={repo.link}
                    />
                ))}
            </div>
        </div>


    );
}