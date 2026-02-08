import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        navigate(from, { replace: true });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] px-4 font-display">
            <div className="w-full max-w-[440px] bg-[#F9F7F2] p-10 md:p-14 shadow-2xl relative">

                {/* Branding */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight uppercase mb-2">The Barbar</h1>
                    <p className="text-[10px] md:text-xs font-bold text-[#5A5A5A] tracking-[0.3em] uppercase">Editorial Grooming</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-10">
                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#5A5A5A] tracking-widest uppercase">Email Address</label>
                        <div className="relative border-b border-[#D1D5DB] focus-within:border-[#1a1a1a] transition-colors group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent py-3 pr-8 text-[#1a1a1a] placeholder:text-[#9CA3AF] focus:outline-none font-medium"
                                placeholder="client@example.com"
                                required
                            />
                            <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-[#1a1a1a] transition-colors" size={18} />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#5A5A5A] tracking-widest uppercase">Password</label>
                        <div className="relative border-b border-[#D1D5DB] focus-within:border-[#1a1a1a] transition-colors group">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent py-3 pr-8 text-[#1a1a1a] placeholder:text-[#9CA3AF] focus:outline-none tracking-widest font-medium"
                                placeholder="••••••••"
                                required
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#1a1a1a] transition-colors cursor-pointer">
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        <div className="flex justify-end pt-2">
                            <a href="#" className="text-[10px] font-bold text-[#9CA3AF] hover:text-[#1a1a1a] transition-colors">Forgot Password?</a>
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#1a1a1a] text-[#F9F7F2] h-12 md:h-14 font-bold text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#333] transition-colors shadow-lg"
                    >
                        Sign In <ArrowRight size={16} />
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-12 text-center border-t border-[#E5E7EB] pt-8">
                    <p className="text-xs text-[#5A5A5A]">New here? <a href="#" className="font-bold text-[#1a1a1a] hover:underline">Create Account</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
