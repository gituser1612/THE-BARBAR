import React from 'react';
import { Check, User, Clock, CheckCircle } from 'lucide-react';
import { clsx } from 'clsx';

const BookingSidebar = ({ currentStep }) => {
    const steps = [
        { id: 1, label: 'Service', subLabel: 'Select Service', icon: Check, status: currentStep > 1 ? 'completed' : currentStep === 1 ? 'active' : 'pending' },
        { id: 2, label: 'Barber', subLabel: 'Select Professional', icon: User, status: currentStep > 2 ? 'completed' : currentStep === 2 ? 'active' : 'pending' },
        { id: 3, label: 'Time', subLabel: 'Select Date & Time', icon: Clock, status: currentStep > 3 ? 'completed' : currentStep === 3 ? 'active' : 'pending' },
        { id: 4, label: 'Confirm', subLabel: 'Review Details', icon: CheckCircle, status: currentStep === 4 ? 'active' : 'pending' },
    ];

    return (
        <div className="hidden md:flex w-80 bg-[#EFEBE0] flex-col justify-between p-8 border-r border-neutral-200">
            <div>
                <div className="mb-10">
                    <h1 className="text-primary text-2xl font-bold tracking-tight">THE BARBAR</h1>
                    <p className="text-[#5C5C5C] text-sm mt-1">EST. 2024</p>
                </div>

                <div className="flex flex-col gap-6 relative">
                    {/* Vertical Line Connector - simplified for now */}
                    <div className="absolute left-4 top-4 bottom-4 w-px bg-neutral-300 -z-10"></div>

                    {steps.map((step) => (
                        <div key={step.id} className={clsx("flex items-center gap-4 transition-opacity duration-300", step.status === 'pending' && "opacity-50")}>
                            <div
                                className={clsx(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors duration-300",
                                    step.status === 'completed' || step.status === 'active' ? "bg-primary text-white" : "border-2 border-neutral-300 bg-[#EFEBE0] text-neutral-400",
                                    step.status === 'active' && "ring-4 ring-primary/20"
                                )}
                            >
                                {step.status === 'completed' ? (
                                    <Check size={14} />
                                ) : (
                                    step.icon ? <step.icon size={14} /> : <span className="text-xs font-bold">{step.id}</span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className={clsx("font-medium text-sm transition-colors", step.status === 'active' ? "text-primary font-bold" : "text-neutral-600")}>
                                    {step.label}
                                </span>
                                {step.status === 'active' || step.status === 'completed' ? (
                                    <span className="text-[#5C5C5C] text-xs">{step.subLabel}</span>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Service Summary Card (Static for now as per design) */}
            <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm mt-auto">
                <p className="text-xs text-[#5C5C5C] uppercase tracking-wider font-semibold mb-3">Current Selection</p>
                <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-lg bg-neutral-200 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=150&auto=format&fit=crop')" }}></div>
                    <div>
                        <p className="text-primary font-bold text-sm">Signature Cut</p>
                        <p className="text-[#5C5C5C] text-xs">$55.00 • 45 min</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSidebar;
