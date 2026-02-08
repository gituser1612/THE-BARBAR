import React from 'react';
import Button from '../ui/Button';

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="max-w-lg">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                            Ready for the <span className="text-primary">Upgrade?</span>
                        </h2>
                        <p className="text-text-secondary mb-8 text-lg">
                            Book your appointment today and experience the difference. Walk-ins welcome, but appointments are recommended.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="primary">
                                Book Assignment
                            </Button>
                            <Button size="lg" variant="outline">
                                Call (555) 123-4567
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/3 aspect-square max-w-xs">
                        {/* Abstract Map Graphic or QR Code placeholder */}
                        <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}></div>
                        <div className="absolute inset-4 border border-primary/40 rounded-full animate-spin-reverse-slow" style={{ animationDuration: '15s' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-sm uppercase tracking-widest text-text-secondary mb-1">Open Daily</p>
                                <p className="text-2xl font-serif text-white">9AM - 8PM</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
