import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseHeader: React.FC = () => {
    return (
        // Используем идентичные отступы (py-32) и фон
        <section className="relative bg-[#1A1A1A] py-32 overflow-hidden border-t border-[#262626]">

            {/* Background Image Container - Копия логики Services */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Hero/services-br2.png" // Убедись, что файл лежит в public/ с этим именем
                    alt="Why Choose Background"
                    // Сохраняем высокую яркость (opacity-90) и масштаб
                    className="w-full h-full object-cover object-center opacity-90 scale-105"
                />

                {/* Мягкий Overlay для переходов */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A] opacity-90" />
            </div>

            {/* Content - Идентичная структура и стили текста */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Текст заголовка из макета */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Why Choose SquareUp?
                    </h2>
                    {/* Текст описания из макета */}
                    <p className="max-w-2xl mx-auto text-gray-200 text-base md:text-lg leading-relaxed">
                        Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
                    </p>
                </motion.div>
            </div>

        </section>
    );
};

export default WhyChooseHeader;