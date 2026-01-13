import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';
import GlassCard from './GlassCard';
const About = () => {
    return (
        <div
            id="about"
            className="w-full min-h-screen relative flex items-center justify-center py-20"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full z-10">
                <div className="pb-8 text-center">
                    <h2 className="text-5xl font-stylish font-bold inline border-b-4 border-sunset text-white tracking-widest text-glow">
                        The Tale
                    </h2>
                </div>

                <GlassCard className="mt-10 p-8 md:p-12">
                    <p className="text-xl leading-loose font-body text-justify text-gray-100">
                        <span className="text-5xl font-header text-sunset float-left mr-2 font-bold">H</span>i, I’m Aditya — a final-year B.Tech CSE student at IIT Kanpur, originally from Sangli, Maharashtra. I’m a tech enthusiast who loves solving real-world problems through creativity, logic, and a bit of digital magic.
                    </p>

                    <br />

                    <p className="text-xl leading-loose font-body text-justify text-gray-100">
                        My interests span <span className="text-sunset font-semibold">AI/ML</span>, software development, and linguistics. Over the years, I’ve worked on projects ranging from machine learning and web development to scalable software systems. I’ve also interned at <span className="text-sunset font-semibold">Google</span>, and I will be joining Google again as a full-time Software Engineer.
                    </p>

                    <div className="flex justify-center gap-8 mt-12">
                        {[
                            { icon: <FaLinkedin size={30} />, href: "https://www.linkedin.com/in/aditya-jagdale-iitk/" },
                            { icon: <FaGithub size={30} />, href: "https://github.com/AdiJ101" },
                            { icon: <FaInstagram size={30} />, href: "https://www.instagram.com/adi_j_3.17/" },
                            { icon: <FaDiscord size={30} />, href: "https://discord.com/users/1182665590062714900" },
                            { icon: <FaEnvelope size={30} />, href: "mailto:adijagdale101@gmail.com" }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white/80 hover:text-sunset hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,179,71,0.8)] duration-300"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default About;
