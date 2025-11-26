import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiCplusplus, SiPytorch, SiScikitlearn, SiAutodesk } from 'react-icons/si';

const Skills = () => {
    const techs = [
        { id: 1, src: <FaHtml5 size={50} />, title: 'HTML', style: 'text-orange-600' },
        { id: 2, src: <FaCss3Alt size={50} />, title: 'CSS', style: 'text-blue-600' },
        { id: 3, src: <FaJs size={50} />, title: 'JavaScript', style: 'text-yellow-500' },
        { id: 4, src: <FaReact size={50} />, title: 'React', style: 'text-blue-400' },
        { id: 5, src: <SiScikitlearn size={50} />, title: 'Scikit-learn', style: 'text-orange-500' },
        { id: 6, src: <FaNodeJs size={50} />, title: 'Node JS', style: 'text-green-600' },
        { id: 7, src: <SiAutodesk size={50} />, title: 'Fusion 360', style: 'text-orange-600' },
        { id: 8, src: <SiMongodb size={50} />, title: 'MongoDB', style: 'text-green-500' },
        { id: 9, src: <FaDatabase size={50} />, title: 'SQL', style: 'text-gray-500' },
        { id: 10, src: <SiCplusplus size={50} />, title: 'C++', style: 'text-blue-800' },
        { id: 11, src: <SiPytorch size={50} />, title: 'PyTorch', style: 'text-red-500' },
        { id: 12, src: <FaPython size={50} />, title: 'Python', style: 'text-yellow-600' },
    ];

    return (
        <div
            id="skills"
            className="w-full min-h-screen bg-parchment text-ink py-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-story font-bold border-b-4 border-gold p-2 inline text-royal-red">
                        Chapter 2: The Arsenal
                    </p>
                    <p className="py-6 font-body italic text-lg">The magical tools and spells mastered along the way</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-lg hover:scale-105 duration-500 py-6 rounded-lg bg-white/50 border border-gold/20 hover:border-gold hover:shadow-gold/20 group`}
                        >
                            <div className={`w-20 mx-auto py-2 ${style} group-hover:animate-bounce`}>{src}</div>
                            <p className="mt-4 font-story text-xl">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
