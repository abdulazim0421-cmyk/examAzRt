import React from 'react';
import { motion } from 'framer-motion';

const ServicesHeader: React.FC = () => {
    return (
        <section className="relative bg-[#1A1A1A] py-24 overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Hero/services-br.png" // Путь к твоему фото фона в папке public
                    alt="Abstract Background"
                    className="w-full h-full object-cover opacity-40 grayscale"
                />
                {/* Overlay для плавного перехода в основной фон */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Services
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
                        Transform your brand with our innovative digital solutions that captivate and engage your audience.
                    </p>
                </motion.div>
            </div>

            {/* Декоративный паттерн из точек (если хочешь усилить эффект с фото) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#C5FF32_1px,transparent_1px)] [background-size:20px_20px]" />
        </section>
    );
};

export default ServicesHeader;