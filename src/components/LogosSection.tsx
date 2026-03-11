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

// Удваиваем массив для бесконечного эффекта
const doubledBrands = [...brands, ...brands];

const LogosSection: React.FC = () => {
    return (
        <section className="bg-[#1A1A1A] py-16 relative overflow-hidden">

            {/* Надпись-бейдж */}
            <div className="flex justify-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#262626]/80 backdrop-blur-sm border border-[#333333] px-6 py-2.5 rounded-full"
                >
          <span className="text-gray-300 text-sm font-medium tracking-wide">
            Trusted By 250+ Companies
          </span>
                </motion.div>
            </div>

            {/* Контейнер ленты */}
            <div className="relative border-y border-[#262626] py-10 bg-[#1C1C1C]/50 flex items-center">

                {/* Градиентные маски по бокам для "глубины" */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />

                <motion.div
                    className="flex gap-24 items-center"
                    animate={{
                        x: ["0%", "-50%"] // Двигаем ленту на половину её длины
                    }}
                    transition={{
                        duration: 30, // Скорость (чем больше число, тем медленнее)
                        ease: "linear",
                        repeat: Infinity
                    }}
                    // Остановка при наведении — признак профи-подхода
                    whileHover={{ opacity: 0.8 }}
                >
                    {doubledBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex items-center justify-center w-[120px] md:w-[150px]"
                        >
                            <img
                                src={brand.src}
                                alt={brand.name}
                                className="h-8 md:h-9 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LogosSection;