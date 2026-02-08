import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    className,
    variant = 'primary',
    size = 'default',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-primary text-white hover:bg-yellow-600',
        outline: 'border border-primary text-primary hover:bg-primary/10',
        ghost: 'text-text-primary hover:bg-white/10 text-text-secondary hover:text-white',
    };

    const sizes = {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 text-sm',
        lg: 'h-11 px-8 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
