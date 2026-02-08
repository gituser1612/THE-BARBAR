
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ServicesSection from '../components/layout/ServicesSection';
import SpaceSection from '../components/layout/SpaceSection';
import TestimonialsSection from '../components/layout/TestimonialsSection';
import HaircutGallerySection from '../components/layout/HaircutGallerySection';
import BookingModal from '../components/features/booking/BookingModal';
import { motion } from 'framer-motion';

const LandingPage = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="bg-cream-bg min-h-screen flex flex-col font-display text-charcoal-text">
            <Navbar onBookClick={() => setIsBookingOpen(true)} />

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            <main className="pt-20">
                {/* Hero Section - Split Layout */}
                <section className="min-h-[calc(100vh-80px)] w-full flex flex-col lg:flex-row relative">
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 xl:p-32 bg-cream-bg z-10">
                        <div className="flex flex-col gap-8 max-w-lg animate-fade-in-up">
                            <div className="w-12 h-1 bg-primary mb-4"></div>

                            {/* Interactive Hero Title */}
                            <div className="flex flex-col text-5xl md:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tighter text-charcoal-text uppercase cursor-default group perspective-1000">
                                <div className="relative flex select-none gap-[0.01em]" aria-label="Precision Grooming">
                                    {/* P r e c i s i o n -> P r e m i u m */}
                                    {/* Static visual for P r e */}
                                    <span>P</span>
                                    <span>r</span>
                                    <span>e</span>

                                    {/* Flipping Letters */}
                                    {/* c -> m */}
                                    <div className="relative h-[1em] w-[0.6em] group-hover:w-[0.9em] transition-[width] duration-500">
                                        <span className="absolute inset-0 transition-all duration-500 group-hover:[transform:rotateX(-180deg)] [backface-visibility:hidden] origin-center flex justify-center">c</span>
                                        <span className="absolute inset-0 transition-all duration-500 [transform:rotateX(180deg)] group-hover:[transform:rotateX(0deg)] [backface-visibility:hidden] origin-center text-primary flex justify-center">m</span>
                                    </div>

                                    <span>i</span>

                                    {/* s -> u */}
                                    <div className="relative h-[1em] w-[0.55em] group-hover:w-[0.7em] transition-[width] duration-500">
                                        <span className="absolute inset-0 transition-all duration-500 delay-75 group-hover:[transform:rotateX(-180deg)] [backface-visibility:hidden] origin-center flex justify-center">s</span>
                                        <span className="absolute inset-0 transition-all duration-500 delay-75 [transform:rotateX(180deg)] group-hover:[transform:rotateX(0deg)] [backface-visibility:hidden] origin-center text-primary flex justify-center">u</span>
                                    </div>

                                    {/* i -> m */}
                                    <div className="relative h-[1em] w-[0.25em] group-hover:w-[0.9em] transition-[width] duration-500">
                                        <span className="absolute inset-0 transition-all duration-500 delay-150 group-hover:[transform:rotateX(-180deg)] [backface-visibility:hidden] origin-center flex justify-center">i</span>
                                        <span className="absolute inset-0 transition-all duration-500 delay-150 [transform:rotateX(180deg)] group-hover:[transform:rotateX(0deg)] [backface-visibility:hidden] origin-center text-primary flex justify-center">m</span>
                                    </div>

                                    {/* O and N fade out/flip away */}
                                    <span className="transition-all duration-500 delay-200 group-hover:opacity-0 group-hover:w-0 group-hover:translate-x-4 overflow-hidden inline-block origin-left">o</span>
                                    <span className="transition-all duration-500 delay-300 group-hover:opacity-0 group-hover:w-0 group-hover:translate-x-4 overflow-hidden inline-block origin-left">n</span>
                                </div>

                                <span>Grooming</span>
                            </div>
                            <p className="text-lg md:text-xl text-slate-muted font-light max-w-md leading-relaxed">
                                Old world service for the modern man. Experience the art of traditional barbering in an atmosphere of industrial luxury.
                            </p>
                            <div className="pt-4">
                                <button
                                    onClick={() => setIsBookingOpen(true)}
                                    className="group relative overflow-hidden bg-primary text-white text-sm font-bold tracking-[0.15em] px-10 py-4 rounded uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(183,134,11,0.3)]"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Book Now
                                        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </span>
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-auto relative overflow-hidden bg-[#e5e0d6] group">
                        <motion.div
                            className="absolute inset-0 bg-cover bg-center moody-img"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        ></motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden"></div>
                    </div>
                </section>

                <ServicesSection />

                <HaircutGallerySection />

                <SpaceSection />

                <TestimonialsSection />

                {/* CTA Section (From Code) */}
                <section className="py-20 bg-primary relative overflow-hidden">
                    {/* Simple pattern overlay simulation */}
                    <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-8">Ready for your upgrade?</h2>
                        <button
                            onClick={() => setIsBookingOpen(true)}
                            className="bg-charcoal-text text-[#F9F7F2] hover:bg-[#F9F7F2] hover:text-charcoal-text border border-charcoal-text text-sm font-bold tracking-[0.15em] px-12 py-4 rounded uppercase transition-all duration-300 shadow-xl"
                        >
                            Book Appointment
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;

