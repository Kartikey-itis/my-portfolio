import { motion, AnimatePresence } from 'framer-motion';

const WipeTransition = ({ isTransitioning }) => {
    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] bg-linear-to-r from-brand-orange-start to-brand-orange-end pointer-events-none"
                />
            )}
        </AnimatePresence>
    );
};

export default WipeTransition;
