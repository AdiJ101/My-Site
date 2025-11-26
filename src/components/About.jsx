import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';

const About = () => {
    return (
        <div
            id="about"
            className="w-full min-h-screen bg-parchment text-ink py-20"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-story font-bold inline border-b-4 border-gold text-royal-red">
                        Chapter 1: The Tale
                    </p>
                </div>

                <div className="mt-10 p-8 border-2 border-gold/30 bg-white/40 rounded-lg shadow-lg relative">
                    {/* Decorative corners could go here */}
                    <p className="text-xl leading-loose font-body text-justify">
                        <span className="drop-cap">H</span>i, I’m Aditya — a final-year B.Tech CSE student at IIT Kanpur, originally from Sangli, Maharashtra. I’m a tech enthusiast who loves solving real-world problems through creativity, logic, and a bit of digital magic.
                    </p>

                    <br />

                    <p className="text-xl leading-loose font-body text-justify">
                        My interests span AI/ML, software development, and linguistics. Over the years, I’ve worked on projects ranging from machine learning and web development to scalable software systems. I’ve also interned at Google, and I will be joining Google again as a full-time Software Engineer.
                    </p>

                    <div className="flex justify-center gap-8 mt-12">
                        <a href="https://www.linkedin.com/in/aditya-jagdale-iitk/" target="_blank" rel="noreferrer" className="text-ink/60 hover:text-royal-red hover:scale-110 duration-300">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/AdiJ101" target="_blank" rel="noreferrer" className="text-ink/60 hover:text-royal-red hover:scale-110 duration-300">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.instagram.com/adi_j_3.17/" target="_blank" rel="noreferrer" className="text-ink/60 hover:text-royal-red hover:scale-110 duration-300">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://discord.com/users/1182665590062714900" target="_blank" rel="noreferrer" className="text-ink/60 hover:text-royal-red hover:scale-110 duration-300">
                            <FaDiscord size={30} />
                        </a>
                        <a href="mailto:adijagdale101@gmail.com" className="text-ink/60 hover:text-royal-red hover:scale-110 duration-300">
                            <FaEnvelope size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
