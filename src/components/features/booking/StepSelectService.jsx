import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Info } from 'lucide-react';
import { clsx } from 'clsx';

const services = [
    { id: 'signature', name: 'Signature Cut', price: '$55', duration: '45 min', description: 'Precision cut, hot towel finish, straight razor line-up, styling.' },
    { id: 'beard', name: 'Beard Sculpt', price: '$35', duration: '30 min', description: 'Razor edging, hot towel, beard oil treatment, deep conditioning.' },
    { id: 'full', name: 'The Full Service', price: '$80', duration: '75 min', description: 'Complete package: Haircut + Beard Sculpt + Facial treatment.' },
    { id: 'kids', name: "Kid's Cut", price: '$30', duration: '30 min', description: 'For gentlemen under 12 years old. Patience included.' },
];

const StepSelectService = ({ selectedService, onSelect }) => {
    return (
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 md:py-10">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-primary dark:text-white tracking-tight">Select Service</h2>
                        <p className="text-primary/60 dark:text-neutral-400 mt-2">Choose from our premium grooming services.</p>
                    </div>
                </div>

                <div className="space-y-4 pb-20">
                    {services.map((service) => {
                        const isSelected = selectedService === service.id;
                        return (
                            <motion.div
                                key={service.id}
                                onClick={() => onSelect(service.id)}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={clsx(
                                    "group relative flex flex-col md:flex-row items-start md:items-center justify-between p-5 rounded-lg border transition-all cursor-pointer shadow-sm",
                                    isSelected
                                        ? "border-primary bg-white ring-1 ring-primary shadow-md"
                                        : "border-neutral-200 bg-white hover:border-primary hover:shadow-md"
                                )}
                            >
                                <div className="flex items-start gap-4 mb-4 md:mb-0">
                                    <div className="relative flex items-center justify-center mt-1">
                                        <div className={clsx("h-5 w-5 rounded-full border flex items-center justify-center transition-colors", isSelected ? "border-primary bg-primary" : "border-neutral-300")}>
                                            {isSelected && <div className="h-2 w-2 bg-white rounded-full" />}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary">{service.name}</h3>
                                        <p className="text-sm text-[#5C5C5C] mt-1 pr-4">{service.description}</p>
                                        <div className="flex items-center gap-4 mt-3">
                                            <span className="flex items-center gap-1 text-xs font-medium text-[#5C5C5C] uppercase tracking-wide">
                                                <Clock size={14} /> {service.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left md:text-right pl-9 md:pl-4 md:border-l border-neutral-100 min-w-[80px]">
                                    <span className="block text-xl font-bold text-primary">{service.price}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Info Box */}
                <div className="mt-8 p-4 bg-neutral-100 rounded-lg border border-dashed border-neutral-300 flex items-center gap-3">
                    <Info size={20} className="text-primary/70" />
                    <p className="text-sm text-primary/70">All services include a complimentary beverage and consultation.</p>
                </div>
            </div>
        </div>
    );
};

export default StepSelectService;
