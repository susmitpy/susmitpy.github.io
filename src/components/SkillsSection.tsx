import { MovingSkills } from '@/components/MovingSkills';
import { SkillsData } from '@/lib/data';


export default function SkillsSection() {

    return (
        <section id="skills" className='py-20 bg-[#2f2f2f] min-h-[600px]'>
            <span className="block text-center text-2xl font-bold py-2 text-[#40E0D0]">{SkillsData.heading}</span>
            {Object.values(SkillsData.skillGroups).map((skills, index) => (
                <MovingSkills key={index} items={skills} direction={index % 2 != 0 ? "left" : "right"} />
            ))}
        </section>
    );
}