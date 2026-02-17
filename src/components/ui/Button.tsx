import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    variant = 'primary',
    fullWidth = false,
    icon,
    className = '',
    ...props
}, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-medium tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-cyan text-lab-dark hover:bg-cyan-400 focus:ring-cyan",
        secondary: "bg-lab-dark border border-white/20 text-white hover:border-cyan hover:text-cyan focus:ring-white",
        outline: "bg-transparent border border-cyan text-cyan hover:bg-cyan/10",
    };

    return (
        <motion.button
            ref={ref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {/* Corner accents for tech feel */}
            <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-current opacity-50" />
            <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-current opacity-50" />

            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </motion.button>
    );
});

Button.displayName = "Button";
