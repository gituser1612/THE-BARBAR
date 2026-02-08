import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { clsx } from 'clsx';

const StepSelectDateTime = ({ selectedDate, selectedTime, onSelectTime }) => {
    // Mock calendar data
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);
    const timeSlots = [
        '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
        '3:30 PM', '4:00 PM'
    ];

    return (
        <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden">
            {/* Calendar Section */}
            <div className="w-full md:w-[320px] bg-cream-bg border-r border-[#e5e0d6] p-8 flex flex-col overflow-y-auto">
                <h2 className="text-2xl font-serif italic mb-6">Select Date</h2>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                    <div className="flex items-center justify-between mb-6">
                        <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors"><ChevronLeft size={20} /></button>
                        <span className="font-bold">October 2023</span>
                        <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors"><ChevronRight size={20} /></button>
                    </div>

                    <div className="grid grid-cols-7 gap-y-2 text-center mb-2">
                        {days.map(day => (
                            <div key={day} className="text-xs font-bold text-neutral-400 uppercase">{day}</div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center">
                        {/* Offset for start of month - just dummy */}
                        <div className="p-2"></div><div className="p-2"></div><div className="p-2"></div>
                        {dates.map(date => (
                            <button
                                key={date}
                                className={clsx(
                                    "aspect-square flex items-center justify-center rounded-full text-sm font-medium transition-colors",
                                    date === 24 ? "bg-primary text-white shadow-md" : "hover:bg-neutral-100 text-charcoal-text",
                                    date < 24 && "text-neutral-300 cursor-not-allowed"
                                )}
                                disabled={date < 24}
                            >
                                {date}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Time Slots Section */}
            <div className="flex-1 bg-white p-8 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-serif italic">Available Slots</h2>
                    <span className="text-sm text-neutral-500">Tuesday, Oct 24</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {timeSlots.map(time => {
                        const isSelected = selectedTime === time;
                        return (
                            <motion.button
                                key={time}
                                onClick={() => onSelectTime(time)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={clsx(
                                    "relative flex items-center justify-center p-3 rounded-lg border transition-all",
                                    isSelected ? "border-primary bg-primary text-white shadow-lg" : "border-neutral-200 bg-white hover:border-primary/50 hover:bg-primary/5"
                                )}
                            >
                                {isSelected && <span className="absolute -top-2 -right-2 bg-charcoal-text text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Selected</span>}
                                <span className={clsx("text-base font-medium", isSelected ? "text-white font-bold" : "text-charcoal-text")}>{time}</span>
                            </motion.button>
                        )
                    })}
                    {/* Unavailable slot demo */}
                    <div className="flex items-center justify-center p-3 rounded-lg border border-neutral-200 bg-neutral-100 opacity-50 cursor-not-allowed">
                        <span className="text-base font-medium text-neutral-400 line-through">1:00 PM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepSelectDateTime;
