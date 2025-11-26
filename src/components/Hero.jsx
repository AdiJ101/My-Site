import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div
            id="home"
            className="h-screen w-full bg-parchment flex items-center justify-center"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-center border-4 border-double border-gold/50 p-12 rounded-lg bg-white/30 shadow-xl m-4 mt-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-story text-royal-red mb-4 tracking-widest uppercase">
                        The Portfolio Of
                    </h2>
                    <h1 className="text-5xl sm:text-8xl font-story text-ink mb-8 drop-shadow-sm">
                        Aditya Jagdale
                    </h1>
                    <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                    <p className="text-xl font-body text-ink/80 max-w-2xl mx-auto italic mb-10">
                        "Where algorithms meet ambition. Crafting smarter systems through ML and engineering."
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block"
                    >
                        <a
                            href="https://drive.google.com/file/d/1PHuvL2MEHG9EzaewXMeqZr8tN5ubutSI/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="group text-parchment w-fit px-8 py-4 my-2 flex items-center rounded-sm bg-ink border-2 border-gold cursor-pointer hover:bg-royal-red hover:border-royal-red duration-500 font-story tracking-wider"
                        >
                            Read Resume
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
