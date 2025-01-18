import { MovingSkills } from '@/components/MovingSkills';
import { SkillsData } from '@/lib/data';


export default function SkillsSection() {

    return (
        <div className='py-8 bg-zinc-300'>
            <span className="block text-center text-2xl font-bold py-2 text-gray-800">{SkillsData.heading}</span>
            {Object.values(SkillsData.skillGroups).map((skills, index) => (
                <MovingSkills key={index} items={skills} />
            ))}
        </div>
    );
}