import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsHeader: React.FC = () => {
    return (
        // Убираем верхний отступ (pt-0), чтобы секция прилегала к сетке Why Choose
        <section className="relative bg-[#1A1A1A] pt-0 pb-32 overflow-hidden">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Hero/servicer-br3.png" // Убедись, что файл в public/
                    alt="Testimonials Background"
                    className="w-full h-full object-cover object-center opacity-90 scale-105"
                />
                {/* Градиент: делаем верх более плотным для бесшовного стыка с темной сеткой */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-transparent opacity-100" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="pt-32" // Переносим отступ внутрь контента для контроля фона
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        What our Clients say About us
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-200 text-sm md:text-lg leading-relaxed px-4">
                        At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients.
                        Here's what some of our satisfied clients have to say about their experience working with us.
                    </p>
                </motion.div>
            </div>

        </section>
    );
};

export default TestimonialsHeader;