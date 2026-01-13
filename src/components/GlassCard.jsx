import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay }}
            className={`glass-panel rounded-2xl p-8 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
