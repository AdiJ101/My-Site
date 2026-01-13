import React from 'react';

import GlassCard from './GlassCard';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'SWE Intern',
            company: 'Google',
            duration: 'May ’25 - July ’25',
            description: [
                'Migrated ACL rules to a config-driven system, reducing deployment time from 4 days to 5 hours.',
                'Optimized data fetching services to selectively execute evaluators based on client-specific configurations.',
                'Developed Python automation to generate and enforce mandatory client configurations for improved security.',
            ],
        },
        {
            id: 2,
            role: 'Secretary',
            company: 'Techkriti',
            duration: 'July ’23 - March ’24',
            description: [
                'Approached several colleges to arrange Technocruise workshops as Secretary in Technocruise vertical.',
                'Facilitated coordination with mentors in various cities to ensure successful execution of Techkriti 2023 workshops.',
            ],
        },
        {
            id: 3,
            role: 'Volunteer',
            company: 'Google Intern Connect Event',
            duration: 'May ’25 - June ’25',
            description: [
                'Managed registrations, logistics, and on-site support for seamless event execution.',
                'Facilitated interactive sessions to enhance networking between interns and program managers.',
            ],
        },
    ];

    return (
        <div
            id="experience"
            className="w-full min-h-screen py-20 relative"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full z-10 relative">
                <div className="pb-8 text-center">
                    <h2 className="text-5xl font-stylish font-bold inline border-b-4 border-sunset text-white tracking-widest text-glow">
                        The Journey
                    </h2>
                </div>

                <div className="mt-10 relative sm:border-l-4 sm:border-sunset/50 sm:ml-6 sm:pl-8 space-y-12">
                    {experiences.map(({ id, role, company, duration, description }) => (
                        <div key={id} className="relative group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[42px] top-6 w-6 h-6 rounded-full bg-sunset border-4 border-midnight group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(255,179,71,0.8)] duration-300 hidden sm:block"></div>

                            <GlassCard className="p-6 md:p-8 hover:bg-white/15 duration-300">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                    <div>
                                        <h3 className="text-2xl font-header font-bold text-white tracking-wide">{role}</h3>
                                        <h4 className="text-xl font-body text-sunset font-semibold italic">{company}</h4>
                                    </div>
                                    <span className="text-white/80 font-header text-sm bg-white/10 px-4 py-1 rounded-full mt-2 md:mt-0 border border-white/20">{duration}</span>
                                </div>
                                <ul className="list-disc ml-5 text-gray-200 font-body space-y-2 leading-relaxed">
                                    {description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
