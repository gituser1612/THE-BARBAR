import React from 'react';
import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1599351431202-6e0c06e7d251?q=80&w=1000&auto=format&fit=crop", // Barber cutting hair
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop", // Shop interior
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop", // Tools
    "https://images.unsplash.com/photo-1593702295094-aea8c5cadd28?q=80&w=1000&auto=format&fit=crop", // Styling
];

const GallerySection = () => {
    return (
        <section id="gallery" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                            Masterpiece <span className="text-primary">Gallery</span>
                        </h2>
                        <p className="text-text-secondary">
                            A visual journey through our craft. Every cut is a statement of style and precision.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden rounded-lg group h-80 ${index === 1 ? 'md:col-span-2' : ''
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-serif tracking-widest text-lg border border-white/50 px-6 py-2">
                                    VIEW
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
