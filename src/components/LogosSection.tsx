import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    { name: 'Zapier', src: '/logos/zapier.svg' },
    { name: 'Spotify', src: '/logos/spotify.svg' },
    { name: 'Zoom', src: '/logos/zoom.svg' },
    { name: 'Slack', src: '/logos/slack.svg' },
    { name: 'Amazon', src: '/logos/amazon.svg' },
    { name: 'Adobe', src: '/logos/adobe.svg' },
];

const doubledBrands = [...brands, ...brands];

const LogosSection: React.FC = () => {
    return (
        <section className="bg-[#1A1A1A] pt-16 pb-10 relative overflow-hidden">

            {/* Контейнер ленты с линиями */}
            <div className="relative border-y border-[#262626] bg-[#1C1C1C]/30 flex items-center">

                {/* Надпись-бейдж: текст как в оригинале, но позиционирование на линии */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#1A1A1A] border border-[#262626] px-6 py-1.5 rounded-full">
            <span className="text-gray-300 text-sm font-medium whitespace-nowrap">
              Trusted By 250+ Companies
            </span>
                    </div>
                </div>

                {/* Градиенты для мягкого исчезновения по бокам */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent z-10" />

                <motion.div
                    className="flex py-12 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {doubledBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex items-center justify-center w-36 h-10 mx-10"
                        >
                            <img
                                src={brand.src}
                                alt={brand.name}
                                className="max-w-full max-h-full w-auto h-auto object-contain opacity-40 grayscale hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LogosSection;