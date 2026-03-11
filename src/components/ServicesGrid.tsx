import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Cpu, Briefcase,  } from 'lucide-react';

const services = [
    {
        title: 'Design',
        description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        icon: <Palette className="w-6 h-6 text-[#C5FF32]" />,
        link: '#'
    },
    {
        title: 'Engineering',
        description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        icon: <Cpu className="w-6 h-6 text-[#C5FF32]" />,
        link: '#'
    },
    {
        title: 'Project Management',
        description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        icon: <Briefcase className="w-6 h-6 text-[#C5FF32]" />,
        link: '#'
    }
];

const ServicesGrid: React.FC = () => {
    return (
        <section className="bg-[#1A1A1A] pb-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#262626] border border-[#262626]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1A1A1A] p-8 md:p-10 flex flex-col h-full group hover:bg-[#1C1C1C] transition-colors duration-300"
                        >
                            {/* Icon Container */}
                            <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center mb-8 border border-[#333333] group-hover:border-[#C5FF32]/30 transition-colors shadow-inner">
                                {service.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-semibold text-white mb-5">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 flex-grow">
                                {service.description}
                            </p>

                            {/* Button */}
                            <button className="w-full bg-[#262626] text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#333333] transition-all active:scale-[0.98] border border-[#333333]">
                                Learn More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;