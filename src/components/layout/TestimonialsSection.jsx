import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, quote, stars }) => (
    <div className="bg-white p-10 border border-slate-200 shadow-sm hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col justify-between group min-w-[350px] md:min-w-[400px] mx-4 select-none">
        <div>
            <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[20px] select-none">
                        {i < stars ? 'star' : 'star_border'}
                    </span>
                ))}
            </div>
            <p className="text-slate-muted font-serif italic text-lg leading-relaxed mb-8 group-hover:text-charcoal-text transition-colors">
                "{quote}"
            </p>
        </div>
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-xs">
                {name.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-charcoal-text uppercase tracking-wider text-xs">{name}</h4>
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase block mt-1">{role}</span>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "James Sterling",
            role: "Regular · 2 Years",
            quote: "The only place in the city that understands what a proper fade is. The atmosphere is top-tier, and the service is consistently excellent.",
            stars: 5,
        },
        {
            name: "Marcus Thorne",
            role: "First Time Client",
            quote: "Walked in looking for a change, walked out feeling like a new man. The attention to detail during the beard sculpt was impressive.",
            stars: 5,
        },
        {
            name: "David Chen",
            role: "Monthly Member",
            quote: "Booking is seamless, and they never run late. It's the kind of reliability and quality you just don't find anymore. Highly recommended.",
            stars: 5,
        },
        {
            name: "Michael Ross",
            role: "Grooming Connoisseur",
            quote: "I've visited barbershops in London, New York, and Tokyo. The Barbar stands toe-to-toe with the best of them. Truly world-class.",
            stars: 5,
        },
        {
            name: "Sarah Jenkins",
            role: "Gift Buyer",
            quote: "Bought a package for my husband. He won't stop raving about the hot towel shave. He says it's the most relaxed he's felt in months.",
            stars: 5,
        }
    ];

    // Quadruple content for seamless looping on large screens with -50% translation
    const marqueeContent = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="testimonials">
            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24 px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block opacity-80"
                    >
                        Acclaim
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-charcoal-text uppercase tracking-tight mb-6"
                    >
                        The Word on the Street
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-12 h-1 bg-primary/20"
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative w-full overflow-hidden group/marquee"
                >
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    {/* Marquee Container */}
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {marqueeContent.map((t, index) => (
                            <TestimonialCard key={`${index}-${t.name}`} {...t} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
