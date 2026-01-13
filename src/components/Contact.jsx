import React from 'react';

import GlassCard from './GlassCard';

const Contact = () => {
    return (
        <div
            id="contact"
            className="w-full min-h-screen p-4 flex items-center justify-center relative"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full z-10 w-full">
                <div className="pb-8 text-center">
                    <h2 className="text-5xl font-stylish font-bold inline border-b-4 border-sunset text-white tracking-widest text-glow">
                        Contact
                    </h2>
                    <p className="py-6 font-body italic text-xl text-gray-300">Send a message to start a new adventure</p>
                </div>

                <div className="flex justify-center items-center">
                    <GlassCard className="flex flex-col w-full md:w-1/2 p-8 shadow-2xl">
                        <form
                            action="https://formsubmit.co/adijagdale101@gmail.com"
                            method="POST"
                            className="flex flex-col w-full"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset font-body placeholder-gray-400 transition-all"
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                className="my-4 p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset font-body placeholder-gray-400 transition-all"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="10"
                                className="p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset font-body placeholder-gray-400 transition-all"
                            ></textarea>

                            <button className="text-midnight bg-white px-8 py-3 my-8 mx-auto flex items-center rounded-full hover:bg-sunset hover:text-white duration-300 font-header font-bold tracking-wider shadow-lg hover:shadow-sunset/50 transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default Contact;
