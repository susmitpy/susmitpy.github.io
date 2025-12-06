import { MovingSkills } from '@/components/MovingSkills';
import { SkillsData } from '@/lib/data';
import { SectionHeader } from './ui/SectionHeader';
import { motion } from 'framer-motion';


export default function SkillsSection() {

    return (
        <section className="py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
                    {SkillsData.heading}
                </h2>
                 <p className="text-white/50 mb-12 max-w-lg">
                          {SkillsData.description}
                        </p>
            </motion.div>
            
            <div className="relative overflow-hidden rounded-xl bg-obsidian-800/30 border border-white/[0.05] py-6">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-obsidian-900 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-obsidian-900 to-transparent z-10 pointer-events-none" />

                {Object.values(SkillsData.skillGroups).map((skills, index) => (
                    <MovingSkills key={index} items={skills} direction={index % 2 != 0 ? "left" : "right"} />
                ))}
            </div>
        </section>
    )

    return (
        <section id="skills" className='py-20 bg-[#2f2f2f] min-h-[600px]'>
            <span className="block text-center text-2xl font-bold py-2 text-[#40E0D0]">{SkillsData.heading}</span>
            {Object.values(SkillsData.skillGroups).map((skills, index) => (
                <MovingSkills key={index} items={skills} direction={index % 2 != 0 ? "left" : "right"} />
            ))}
        </section>
    );
}