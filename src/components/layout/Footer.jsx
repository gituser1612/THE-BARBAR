import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-[#0D0D0D] text-[#ECECEC] font-sans py-20 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* 1. Brand Statement */}
                <div className="flex flex-col md:flex-row gap-8 mb-20 md:mb-28">
                    <div className="md:w-12 pt-2">
                        {/* Abstract Brand Mark - Red/Orange D shape from reference, adapted to Gold for Barbar */}
                        <div className="w-8 h-8 md:w-10 md:h-10 text-primary">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                <path d="M12,2L2,22h20L12,2z" /> {/* Stylized triangle/shape placeholder */}
                            </svg>
                        </div>
                    </div>
                    <div className="md:w-2/3 max-w-2xl">
                        <p className="text-xl md:text-2xl leading-relaxed font-light text-slate-muted">
                            Welcome to <span className="text-white font-medium">The Barbar</span>, where tradition meets precision.
                            We believe that a haircut is not just a service, but an experience.
                            Our mission is to empower men to look and feel their absolute best through
                            the art of classic grooming. We believe in quality, not quantity.
                            The Barbar is a sanctuary for the modern gentleman.
                        </p>
                    </div>
                </div>

                {/* 2. Navigation Grid (6 Cols) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24 border-b border-white/5 pb-12">
                    {/* Col 1 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium mb-2">Explore</h4>
                        <FooterLink href="#">Services</FooterLink>
                        <FooterLink href="#">Our Story</FooterLink>
                        <FooterLink href="#">Team</FooterLink>
                    </div>

                    {/* Col 2 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium mb-2">Experience</h4>
                        <FooterLink href="#">Gallery</FooterLink>
                        <FooterLink href="#">The Lounge</FooterLink>
                        <FooterLink href="#">Events</FooterLink>
                    </div>

                    {/* Col 3 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium mb-2">Shop</h4>
                        <FooterLink href="#">Products</FooterLink>
                        <FooterLink href="#">Gift Cards</FooterLink>
                        <FooterLink href="#">Membership</FooterLink>
                    </div>

                    {/* Col 4 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium mb-2">Resources</h4>
                        <FooterLink href="#">Grooming Tips</FooterLink>
                        <FooterLink href="#">FAQ</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                    </div>

                    {/* Col 5 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium mb-2">Legal</h4>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Terms of Service</FooterLink>
                        <FooterLink href="#">Cookies</FooterLink>
                    </div>

                    {/* Col 6 */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-medium mb-2">Contact</h4>
                        <FooterLink href="#">Book Now</FooterLink>
                        <FooterLink href="#">Email Us</FooterLink>
                        <FooterLink href="#">Locations</FooterLink>
                    </div>
                </div>

                {/* 3. Bottom Row: Socials & Copyright */}
                <div className="flex flex-col items-center gap-8">
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <SocialLink icon={<InstagramIcon />} label="Instagram" />
                        <SocialLink icon={<TwitterIcon />} label="Twitter" />
                        <SocialLink icon={<FacebookIcon />} label="Facebook" />
                        <SocialLink icon={<LinkedInIcon />} label="LinkedIn" />
                    </div>

                    {/* Copyright */}
                    <div className="text-slate-600 text-xs tracking-wide flex items-center gap-1">
                        &copy; {new Date().getFullYear()} All rights reserved
                        <span className="text-red-500">|</span>
                        <span className="text-white font-bold">The Barbar</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ icon, label }) => (
    <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary hover:bg-transparent transition-all duration-300 group">
        <span className="sr-only">{label}</span>
        {React.cloneElement(icon, { className: "w-4 h-4 group-hover:scale-110 transition-transform" })}
    </a>
)


// Simple Icons
const InstagramIcon = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
)

const TwitterIcon = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
)

const FacebookIcon = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
)

const LinkedInIcon = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
)
const FooterLink = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            className="text-slate-muted hover:text-primary transition-colors text-sm w-fit flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="relative flex items-center">
                <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.2 }}
                    className="text-primary font-bold mr-1"
                >
                    [
                </motion.span>
                {children}
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-primary font-bold ml-1"
                >
                    ]
                </motion.span>
            </span>
        </a>
    );
};

export default Footer;
