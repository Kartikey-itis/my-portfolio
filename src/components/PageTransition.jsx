import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageTransition = ({ children }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div key="page-transition">
                {/* Intro Overlay (Orange Wipe) */}
                <motion.div
                    className="fixed inset-0 z-[100] bg-gradient-orange pointer-events-none origin-bottom"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Content Fade */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
