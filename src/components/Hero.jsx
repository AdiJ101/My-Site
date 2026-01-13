import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';

import GlassCard from './GlassCard';

const Hero = () => {
    return (
        <div
            id="home"
            className="h-screen w-full flex items-center justify-center relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sunset/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute create-bottom-1/4 right-1/4 w-96 h-96 bg-forest/30 rounded-full blur-3xl animate-pulse delay-700"></div>

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-center z-10">
                <GlassCard className="flex flex-col items-center p-12 md:p-16 border-white/10" delay={0.2}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl sm:text-2xl font-header text-sunset mb-2 tracking-[0.2em] uppercase font-bold">
                            The Portfolio Of
                        </h2>
                        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-signature text-white mb-6 drop-shadow-2xl tracking-normal">
                            Aditya Jagdale
                        </h1>
                        <p className="text-lg sm:text-xl font-body text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
                            Where algorithms meet ambition. Crafting smarter systems through <span className="text-sunset font-medium">Machine Learning</span> and <span className="text-sunset font-medium">Engineering</span>.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-block"
                        >
                            <a
                                href="https://drive.google.com/file/d/1PHuvL2MEHG9EzaewXMeqZr8tN5ubutSI/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="group text-midnight font-bold px-8 py-3 flex items-center rounded-full bg-white hover:bg-sunset transition-all duration-300 shadow-lg shadow-white/10"
                            >
                                Read Resume
                                <span className="group-hover:translate-x-1 duration-300">
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>
                </GlassCard>
            </div>
        </div>
    );
};

export default Hero;
