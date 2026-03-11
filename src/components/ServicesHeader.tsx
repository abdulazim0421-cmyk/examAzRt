import React from 'react';
import { motion } from 'framer-motion';

const ServicesHeader: React.FC = () => {
    return (
        <section className="relative bg-[#1A1A1A] py-32 overflow-hidden">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Hero/services-br.png" // Убедись, что файл лежит в public/ с этим именем
                    alt="Abstract Background"
                    // Убрал grayscale, увеличил opacity, добавил небольшой зум для масштаба
                    className="w-full h-full object-cover object-center opacity-90 scale-105"
                />

                {/* Более мягкий Overlay: затемняем только самый верх и низ для плавного перехода */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A] opacity-90" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Our Services
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-200 text-base md:text-lg leading-relaxed">
                        Transform your brand with our innovative digital solutions that captivate and engage your audience.
                    </p>
                </motion.div>
            </div>

        </section>
    );
};

export default ServicesHeader;