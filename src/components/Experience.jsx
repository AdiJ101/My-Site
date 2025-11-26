import React from 'react';

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
            className="w-full min-h-screen bg-parchment text-ink py-20"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-story font-bold inline border-b-4 border-gold text-royal-red">
                        Chapter 3: The Journey
                    </p>
                </div>

                <div className="mt-10 relative border-l-4 border-gold ml-6 pl-8 space-y-12">
                    {experiences.map(({ id, role, company, duration, description }) => (
                        <div key={id} className="relative group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-royal-red border-4 border-parchment group-hover:scale-125 duration-300"></div>

                            <div className="bg-white/40 p-6 rounded-lg shadow-md border border-gold/20 hover:shadow-xl duration-300">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                    <div>
                                        <h3 className="text-2xl font-story font-bold text-ink">{role}</h3>
                                        <h4 className="text-xl font-body text-royal-red italic">{company}</h4>
                                    </div>
                                    <span className="text-ink/60 font-story text-sm bg-gold/20 px-3 py-1 rounded-full mt-2 md:mt-0">{duration}</span>
                                </div>
                                <ul className="list-disc ml-5 text-ink/80 font-body space-y-2">
                                    {description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
