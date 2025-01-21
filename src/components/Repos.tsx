"use client";
import React from 'react';
import { RepoCard } from './RepoCard';
import { ReposData } from '@/lib/data';

export default function Repos() {
    return (
        <section id="repos" className="bg-[#2f2f2f] py-20 min-h-[600px]">
            <span className="block text-center text-2xl font-bold py-2 text-[#40E0D0]">{ReposData.heading}</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-4">
                {ReposData.repos.map((repo, index) => (
                    <RepoCard
                        key={index}
                        name={repo.name}
                        description={repo.description}
                        link={repo.link}
                    />
                ))}
            </div>
        </section>
    );
}