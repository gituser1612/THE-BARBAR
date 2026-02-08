import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Calendar, MapPin, ArrowLeft, Download } from 'lucide-react';

const BookingConfirmationPage = () => {
    return (
        <div className="bg-cream-bg min-h-screen flex flex-col font-display text-charcoal-text relative overflow-hidden">
            {/* Background Effect */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none grayscale"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 py-12">

                {/* Success Icon Animation container */}
                <div className="mb-8 animate-fade-in-up">
                    <div className="w-24 h-24 rounded-full border-[3px] border-primary flex items-center justify-center bg-white shadow-xl">
                        <Check size={48} className="text-primary" strokeWidth={3} />
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-primary mb-10 text-center uppercase leading-none">
                    You're All Set.
                </h1>

                {/* Appointment Summary Card */}
                <div className="w-full max-w-lg bg-white rounded-xl p-8 md:p-10 border border-primary/10 shadow-xl mb-10 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="flex items-center gap-2 mb-6 text-slate-muted border-b border-dashed border-neutral-200 pb-4">
                        <Calendar size={18} />
                        <p className="text-sm font-bold tracking-wider uppercase">Appointment Summary</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-baseline border-b border-neutral-100 pb-4">
                            <span className="text-sm text-slate-muted font-medium">Service</span>
                            <span className="text-xl font-bold text-primary">Signature Cut</span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-neutral-100 pb-4">
                            <span className="text-sm text-slate-muted font-medium">Barber</span>
                            <span className="text-lg font-bold text-primary">Elias V.</span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-neutral-100 pb-4">
                            <span className="text-sm text-slate-muted font-medium">Date & Time</span>
                            <span className="text-lg font-bold text-primary">Tue, Oct 24 @ 2:00 PM</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <span className="text-sm text-slate-muted font-medium">Location</span>
                            <div className="flex items-center gap-1 text-primary">
                                <MapPin size={16} />
                                <span className="text-lg font-bold">123 Wakad, Pune</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-5 items-center w-full max-w-xs">
                    <button className="w-full h-14 bg-primary text-white text-base font-bold tracking-wide rounded-lg hover:bg-[#9a7009] transition-all flex items-center justify-center gap-2 shadow-lg">
                        <Download size={20} />
                        ADD TO CALENDAR
                    </button>
                    <Link to="/" className="text-sm font-bold text-slate-muted hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-wider">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>

                <p className="mt-12 text-slate-muted/60 text-sm italic">
                    A confirmation email has been sent to your inbox.
                </p>
            </div>
        </div>
    );
};

export default BookingConfirmationPage;
