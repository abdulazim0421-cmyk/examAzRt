import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const tags = [
        { text: 'Startups', active: false },
        { text: 'Enterprise leaders', active: false },
        { text: 'Media & Publishers', active: false },
        { text: 'Social Good', active: false },
    ];



    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#1A1A1A] overflow-hidden px-4 pt-20">

            {/* Background Pattern (сетка на фоне, если нужно) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight"
                >
                    A Digital Product Studio <br />
                    <span className="text-white">that will Work</span>
                </motion.h1>

                {/* Tags Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="bg-[#262626]/50 backdrop-blur-md border border-[#333333] rounded-2xl p-4 md:p-6 mb-10"
                >
                    <div className="flex flex-wrap items-center justify-center gap-3 text-gray-400 text-sm md:text-base">
                        <span>For</span>
                        {tags.map((tag, index) => (
                            <React.Fragment key={tag.text}>
                <span className="bg-[#2D2D2D] text-white px-4 py-2 rounded-lg border border-[#3d3d3d] hover:border-[#C5FF32] transition-colors cursor-default">
                  {tag.text}
                </span>
                                {index < tags.length - 1 && index !== 2 && <span className="hidden sm:inline">,</span>}
                                {index === 2 && <span className="mx-1">and</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-4"
                >
                    <button className="bg-[#262626] text-white px-8 py-3 rounded-xl font-medium border border-[#333333] hover:bg-[#333333] transition-all active:scale-95">
                        Our Works
                    </button>
                    <button className="bg-[#C5FF32] text-black px-8 py-3 rounded-xl font-medium hover:bg-[#d4ff63] transition-all active:scale-95 shadow-[0_0_20px_rgba(197,255,50,0.2)]">
                        Contact Us
                    </button>
                </motion.div>
            </div>

            {/* Animated Mountain */}
            <motion.div
                className="absolute bottom-0 w-full z-0 pointer-events-none"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                    opacity: 1,
                    y: [0, -25, 0], // Движение вверх-вниз
                }}
                transition={{
                    opacity: { duration: 1.5 },
                    y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <img
                    src="/"
                    alt="Abstract Mountain"
                    className="w-full h-auto object-cover opacity-80"
                    style={{ filter: 'drop-shadow(0 -10px 20px rgba(197,255,50,0.05))' }}
                />
            </motion.div>

        </section>
    );
};

export default Hero;