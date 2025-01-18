"use client";
import React from 'react';
import { RepoCard } from './RepoCard';
import { ReposData } from '@/lib/data';

export default function Repos() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
            <span className="block text-center text-2xl font-bold py-2 text-gray-200">{ReposData.heading}</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-4">
                {ReposData.repos.map((repo, index) => (
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