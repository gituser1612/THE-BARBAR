import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ href, children, mobile = false, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const content = (
        <a
            href={href}
            className={`relative flex items-center justify-center font-semibold tracking-widest uppercase transition-colors ${mobile ? 'text-lg py-2' : 'text-sm'
                } ${isHovered ? 'text-primary' : 'text-slate-muted'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <span className="relative z-10 flex items-center gap-1">
                <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-primary font-bold"
                >
                    [
                </motion.span>

                {children}

                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-primary font-bold"
                >
                    ]
                </motion.span>
            </span>

            {/* Subtle background glow for mobile */}
            {mobile && isHovered && (
                <motion.div
                    layoutId="mobileNavHighlight"
                    className="absolute inset-0 bg-primary/5 rounded-lg -z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
            )}
        </a>
    );

    return content;
};

const Navbar = (props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream-bg/95 backdrop-blur-sm border-b border-[#e5e0d6]">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 text-primary">
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 2v11h3v9l7-12h-4l4-8z"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-black tracking-widest text-charcoal-text uppercase">THE BARBAR</h2>
                </div>
                <div className="flex items-center gap-12">
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink href="#services">Services</NavLink>
                        <NavLink href="#space">Our Space</NavLink>
                    </nav>
                    <button
                        onClick={props.onBookClick}
                        className="bg-charcoal-text hover:bg-[#1a1a1a] text-[#F9F7F2] text-xs font-bold tracking-widest px-6 py-3 rounded uppercase transition-colors border border-transparent hover:border-primary/50 hidden sm:block"
                    >
                        Book Appointment
                    </button>
                    <button
                        className="md:hidden text-charcoal-text"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cream-bg border-b border-[#e5e0d6] overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            <NavLink href="#services" mobile onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
                            <NavLink href="#space" mobile onClick={() => setIsMobileMenuOpen(false)}>Our Space</NavLink>
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    if (props.onBookClick) props.onBookClick();
                                }}
                                className="bg-charcoal-text hover:bg-[#1a1a1a] text-[#F9F7F2] text-xs font-bold tracking-widest px-6 py-3 rounded uppercase transition-colors border border-transparent hover:border-primary/50"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
