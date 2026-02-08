import React from 'react';
import { motion } from 'framer-motion';

const GalleryItem = ({ image, title, category }) => (
    <motion.div
        className="relative overflow-hidden group h-[400px] w-full cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
        <motion.div
            className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out"
            style={{ backgroundImage: `url('${image}')` }}
            whileHover={{ scale: 1.1 }}
        ></motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {category}
            </span>
            <h3 className="text-white text-2xl font-black uppercase tracking-tight relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
            </h3>
        </div>
    </motion.div>
);

const HaircutGallerySection = () => {
    const cuts = [
        {
            title: "Textured Crop",
            category: "Modern",
            image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Classic Pompadour",
            category: "Timeless",
            image: "https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Skin Fade",
            category: "Precision",
            image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "Scissor Cut",
            category: "Traditional",
            image: "https://images.unsplash.com/photo-1503951914875-befbb711058c?q=80&w=2069&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-cream-bg" id="gallery">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col items-center text-center mb-16 px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block opacity-80"
                    >
                        Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-charcoal-text uppercase tracking-tight mb-6"
                    >
                        Signature Styles
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-12 h-1 bg-primary/20"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cuts.map((cut, index) => (
                        <GalleryItem key={index} {...cut} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HaircutGallerySection;
