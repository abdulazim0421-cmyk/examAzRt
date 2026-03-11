import React from 'react';

const Navbar: React.FC = () => {
    const navLinks = [
        { name: 'Home', href: '#', active: true },
        { name: 'Services', href: '#' },
        { name: 'Work', href: '#' },
        { name: 'Process', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
    ];

    return (
        // Добавили sticky top-0 z-50 для фиксации при скролле
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#262626]">
            {/* Logo */}
            <div className="flex items-center gap-2">
                {/* Путь к твоему SVG в папке public */}
                <img src="/logo.svg" alt="SquareUp Logo" className="w-10 h-10" />
                <span className="text-white font-semibold text-xl tracking-tight">SquareUp</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center bg-[#262626] rounded-lg p-1 border border-[#333333]">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                            link.active
                                ? 'bg-[#333333] text-white shadow-inner'
                                : 'text-gray-400 hover:text-white hover:bg-[#2d2d2d]'
                        }`}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Contact Button */}
            <a
                href="#contact"
                className="bg-[#C5FF32] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#d4ff63] transition-colors shadow-sm active:scale-95"
            >
                Contact Us
            </a>
        </nav>
    );
};

export default Navbar;