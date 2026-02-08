import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import BookingSidebar from './BookingSidebar';
import StepSelectBarber from './StepSelectBarber';
import StepSelectService from './StepSelectService';
import StepSelectDateTime from './StepSelectDateTime';
import { useAuth } from '../../../context/AuthContext';
import { useState } from 'react';

const BookingModal = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedBarber, setSelectedBarber] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    if (!isOpen) return null; // Assuming useAuth exposes isAuthenticated

    const handleNext = () => {
        if (currentStep < 4) setCurrentStep(currentStep + 1);
    };

    const handleConfirm = () => {
        if (isAuthenticated) {
            navigate('/confirmation');
        } else {
            // Pass current location state to redirect back after login if needed (simplified here)
            navigate('/login', { state: { from: { pathname: '/confirmation' } } });
        }
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const canProceed = () => {
        if (currentStep === 1) return !!selectedService;
        if (currentStep === 2) return !!selectedBarber;
        if (currentStep === 3) return !!selectedTime;
        return true;
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-6xl h-[85vh] bg-background-light rounded-2xl shadow-2xl flex overflow-hidden relative"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full hover:bg-neutral-100 transition-colors"
                >
                    <X size={20} />
                </button>

                <BookingSidebar currentStep={currentStep} />

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col bg-[#F9F7F2] relative overflow-hidden">
                    {/* Step Content */}
                    <div className="flex-1 overflow-hidden flex flex-col">
                        {currentStep === 1 && <StepSelectService selectedService={selectedService} onSelect={setSelectedService} />}
                        {currentStep === 2 && <StepSelectBarber selectedBarber={selectedBarber} onSelect={setSelectedBarber} />}
                        {currentStep === 3 && <StepSelectDateTime selectedTime={selectedTime} onSelectTime={setSelectedTime} />}
                        {currentStep === 4 && (
                            <div className="flex-1 flex items-center justify-center flex-col p-10 text-center">
                                <h2 className="text-3xl font-serif mb-4">Confirm Changes?</h2>
                                <p>This is a demo, so no actual booking will be made.</p>
                            </div>
                        )}
                    </div>

                    {/* Sticky Footer Navigation */}
                    <div className="bg-white border-t border-neutral-200 p-4 md:px-12 md:py-6 flex justify-between items-center z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                        {currentStep > 1 ? (
                            <button onClick={handleBack} className="flex items-center gap-2 text-[#5C5C5C] hover:text-primary transition-colors text-sm font-medium">
                                <ArrowLeft size={18} /> BACK
                            </button>
                        ) : (
                            <div></div> // Spacer
                        )}

                        <button
                            onClick={currentStep === 4 ? handleConfirm : handleNext}
                            disabled={!canProceed()}
                            className="bg-primary hover:bg-[#1a1a1a] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            {currentStep === 4 ? "CONFIRM BOOKING" : "CONTINUE"} <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default BookingModal;
