import React from 'react';

const Contact = () => {
    return (
        <div
            id="contact"
            className="w-full min-h-screen bg-parchment text-ink p-4"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-story font-bold inline border-b-4 border-gold text-royal-red">
                        Epilogue: The Next Chapter
                    </p>
                    <p className="py-6 font-body italic text-lg">Send a raven (or a message) to start a new adventure</p>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        action="https://formsubmit.co/adijagdale101@gmail.com"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2 bg-white/50 p-8 rounded-lg border-2 border-gold/30 shadow-xl"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="p-2 bg-parchment border-2 border-gold/50 rounded-sm text-ink focus:outline-none focus:border-royal-red font-body placeholder-ink/50"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            className="my-4 p-2 bg-parchment border-2 border-gold/50 rounded-sm text-ink focus:outline-none focus:border-royal-red font-body placeholder-ink/50"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="10"
                            className="p-2 bg-parchment border-2 border-gold/50 rounded-sm text-ink focus:outline-none focus:border-royal-red font-body placeholder-ink/50"
                        ></textarea>

                        <button className="text-parchment bg-ink px-6 py-3 my-8 mx-auto flex items-center rounded-sm hover:bg-royal-red duration-300 font-story tracking-wider border-2 border-transparent hover:border-gold">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
