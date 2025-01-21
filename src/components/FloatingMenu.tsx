import { motion, AnimatePresence } from 'framer-motion';
import { FaCompass, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'GitHub Repos', id: 'repos' },
    { label: 'Blogs', id: 'blogs' },
    { label: 'Talks', id: 'talks' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Work Experience', id: 'experience' },
    { label: 'Connect', id: 'contact' },
];

export const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);

        element?.scrollIntoView({ behavior: 'smooth' });


        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute bottom-16 right-0 mb-2 bg-white rounded-lg shadow-lg"
                    >
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                            >
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-primary text-white p-4 rounded-full shadow-lg"
            >
                {isOpen ? (
                    <FaChevronUp className="h-6 w-6" />
                ) : (
                    <FaCompass className="h-6 w-6" />
                )}
            </motion.button>
        </div>
    );
};