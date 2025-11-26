import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Adversarial Defense',
            description: 'Unified defense framework to detect and purify adversarial inputs, achieving ~98% recovery accuracy on MNIST.',
            tech: ['PyTorch', 'Python', 'Deep Learning'],
            github: 'https://github.com/AdiJ101/CS776-Project',
            demo: '#',
        },
        {
            id: 2,
            title: 'Elysium',
            description: 'Integrated platform for booking sports facilities and scheduling counseling sessions using MERN stack.',
            tech: ['React', 'Node.js', 'MongoDB'],
            github: 'https://github.com/aleph-7',
            demo: '#',
        },
        {
            id: 3,
            title: 'Domain Adaptation',
            description: 'Framework using confidence-threshold pseudo-labeling to learn from unlabeled datasets with Vision Transformers.',
            tech: ['Python', 'ML', 'ViT'],
            github: 'https://github.com/AdiJ101/CS771-Projects',
            demo: '#',
        },
        {
            id: 4,
            title: 'Parallel Computing',
            description: 'MPI-based code for computing extremas over 3D time-series datasets using 3D domain decomposition.',
            tech: ['C++', 'MPI', 'HPC'],
            github: 'https://github.com/AdiJ101/CS633-Parallel-Computing-Project',
            demo: '#',
        },
        {
            id: 5,
            title: 'Car Rental System',
            description: 'OOP-based car rental system managing cars, customers, and records via Command Line Interface.',
            tech: ['C++', 'OOP', 'CLI'],
            github: 'https://github.com/AdiJ101/CS253-Assignments',
            demo: '#',
        },
        {
            id: 6,
            title: 'Interactive Web Apps',
            description: 'Animated portfolio with React & Framer Motion, and an interactive Simon game using jQuery.',
            tech: ['React', 'Firebase', 'jQuery'],
            github: 'https://github.com/AdiJ101/react-fire',
            demo: '#',
        },
    ];

    return (
        <div
            id="projects"
            className="w-full min-h-screen bg-parchment text-ink py-20"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-story font-bold inline border-b-4 border-gold text-royal-red">
                        Chapter 4: Chronicles
                    </p>
                    <p className="py-6 font-body italic text-lg">Tales of creation and innovation</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({ id, title, description, tech, github, demo }) => (
                        <div key={id} className="shadow-xl rounded-lg duration-300 hover:scale-105 bg-white border-4 border-double border-gold/40 p-6 flex flex-col justify-between group hover:border-royal-red/50">
                            <div>
                                <h3 className="text-2xl font-story font-bold mb-2 text-royal-red group-hover:underline decoration-gold underline-offset-4">{title}</h3>
                                <p className="text-ink/80 text-sm mb-4 font-body leading-relaxed">{description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {tech.map((t, i) => (
                                        <span key={i} className="bg-parchment border border-gold/30 text-ink/70 text-xs px-2 py-1 rounded-sm font-story">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4 mt-4">
                                <a href={github} target="_blank" rel="noreferrer" className="w-1/2 px-4 py-2 duration-200 hover:scale-105 flex items-center justify-center gap-2 bg-ink text-parchment rounded-sm font-story text-sm hover:bg-royal-red">
                                    <FaGithub /> Code
                                </a>
                                <a href={demo} target="_blank" rel="noreferrer" className="w-1/2 px-4 py-2 duration-200 hover:scale-105 flex items-center justify-center gap-2 border-2 border-gold text-ink font-bold rounded-sm font-story text-sm hover:bg-gold hover:text-white">
                                    <FaExternalLinkAlt /> Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
