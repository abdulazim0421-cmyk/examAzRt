import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseHeader: React.FC = () => {
    return (
        <section className="relative bg-[#1A1A1A] py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/Hero/services-br2.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-90"
                />
                {/* Затемняем только верх, чтобы плавно отделиться от сетки выше */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-transparent opacity-80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose SquareUp?</h2>
                    <p className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base">
                        Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseHeader;