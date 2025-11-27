"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Blogs', id: 'blogs' },
    { label: 'Open Source', id: 'opensource' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Books', id: 'books' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Connect', id: 'connect' },
];

export const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth', block: "start" });
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-24 right-6 z-40">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute bottom-14 right-0 mb-2 bg-obsidian-800/95 backdrop-blur-md rounded-xl border border-white/10 shadow-xl overflow-hidden min-w-[180px]"
                    >
                        {menuItems.map((item, idx) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => scrollToSection(item.id)}
                                className="block w-full px-4 py-2.5 text-left hover:bg-white/5 text-sm font-mono text-white/70 hover:text-indigo-400 transition-colors border-b border-white/5 last:border-0"
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-obsidian-800/90 backdrop-blur-md text-white/80 rounded-full shadow-lg border border-white/10 flex items-center justify-center hover:border-indigo-500/30 hover:text-indigo-400 transition-all"
            >
                {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                ) : (
                        <Compass className="w-5 h-5" />
                )}
            </motion.button>
        </div>
    );
};