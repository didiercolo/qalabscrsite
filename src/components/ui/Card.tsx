import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -4 } : {}}
            className={`relative bg-lab-dark/50 backdrop-blur-sm border border-white/10 p-6 ${className}`}
        >
            {/* corner accents implemented via CSS class or manual spans if needed, but using tech-border class from index.css is better if applicable */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-DEFAULT/30" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-DEFAULT/30" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-DEFAULT/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-DEFAULT/30" />

            {children}
        </motion.div>
    );
};
