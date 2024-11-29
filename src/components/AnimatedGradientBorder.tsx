import { motion } from 'framer-motion';
import React from 'react';

export const AnimatedGradientBorder: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className="relative p-[2px] overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className={`relative bg-white rounded-2xl ${className}`}>
        {children}
      </div>
    </div>
  );
};