import React from 'react';
import { Palette, Cpu, Briefcase } from 'lucide-react';

const services = [
    {
        title: 'Design',
        icon: <Palette className="w-6 h-6 text-[#C5FF32]" />,
        description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
    },
    {
        title: 'Engineering',
        icon: <Cpu className="w-6 h-6 text-[#C5FF32]" />,
        description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
    },
    {
        title: 'Project Management',
        icon: <Briefcase className="w-6 h-6 text-[#C5FF32]" />,
        description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
    }
];

const ServicesGrid: React.FC = () => {
    return (
        <section className="bg-[#1A1A1A] pb-0 px-4 md:px-0">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#262626] border-y border-[#262626]">
                    {services.map((service, index) => (
                        <div key={index} className="bg-[#1A1A1A] p-10 md:p-14 flex flex-col items-start min-h-[500px]">
                            {/* Контейнер иконки как на фото */}
                            <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center mb-10 border border-[#333333] shadow-inner">
                                {service.icon}
                            </div>

                            {/* Заголовок */}
                            <h3 className="text-3xl font-semibold text-white mb-6">
                                {service.title}
                            </h3>

                            {/* Описание с правильным межстрочным интервалом */}
                            <p className="text-gray-400 text-base leading-relaxed mb-12 flex-grow">
                                {service.description}
                            </p>

                            {/* Кнопка */}
                            <button className="mt-auto w-full bg-[#262626] hover:bg-[#2a2a2a] text-white py-4 rounded-xl border border-[#333333] transition-colors font-medium">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;