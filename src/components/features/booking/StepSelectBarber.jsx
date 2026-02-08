import React from 'react';
import { motion } from 'framer-motion';
import { Users, Check } from 'lucide-react';
import { clsx } from 'clsx';

const barbers = [
    { id: 'any', name: 'Any Professional', role: 'Max Availability', label: 'Earliest: Today 2pm', image: null, type: 'any' },
    { id: 'elias', name: 'Elias V.', role: 'Master Stylist', label: 'Beard Specialist', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=200&auto=format&fit=crop', type: 'person' },
    { id: 'marcus', name: 'Marcus K.', role: 'Senior Stylist', label: 'Fade Expert', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=200&auto=format&fit=crop', type: 'person' },
    { id: 'sarah', name: 'Sarah J.', role: 'Stylist', label: 'Colorist', image: 'https://images.unsplash.com/photo-1599351431202-6e0c06e7d251?q=80&w=200&auto=format&fit=crop', type: 'person' },
    { id: 'david', name: 'David L.', role: 'Junior Barber', label: 'Classic Cuts', image: 'https://images.unsplash.com/photo-1593702295094-aea8c5cadd28?q=80&w=200&auto=format&fit=crop', type: 'person' },
];

const StepSelectBarber = ({ selectedBarber, onSelect }) => {
    return (
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 md:py-10">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-2">Select Professional</h2>
                    <p className="text-[#5C5C5C]">Choose a specific barber or select 'Any Professional' for maximum availability.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-20">
                    {barbers.map((barber) => {
                        const isSelected = selectedBarber === barber.id;
                        return (
                            <motion.div
                                key={barber.id}
                                onClick={() => onSelect(barber.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={clsx(
                                    "group relative rounded-xl p-5 border-2 shadow-sm cursor-pointer flex flex-col items-center text-center gap-3 transition-all",
                                    isSelected ? "border-primary shadow-lg bg-white" : "border-transparent hover:border-neutral-300 bg-white"
                                )}
                            >
                                {isSelected && (
                                    <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white shadow-sm">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                )}

                                <div className={clsx("w-20 h-20 rounded-full flex items-center justify-center mb-1 overflow-hidden", isSelected && "ring-4 ring-primary/20")}>
                                    {barber.type === 'any' ? (
                                        <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                                            <Users size={32} className="text-neutral-400" />
                                        </div>
                                    ) : (
                                        <img src={barber.image} alt={barber.name} className="w-full h-full object-cover" />
                                    )}
                                </div>

                                <div>
                                    <h3 className="font-bold text-primary text-lg">{barber.name}</h3>
                                    <p className="text-sm text-[#5C5C5C]">{barber.role}</p>
                                </div>

                                <span className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 mt-1">
                                    {barber.label}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StepSelectBarber;
