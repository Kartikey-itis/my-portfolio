import { motion, AnimatePresence } from 'framer-motion';

const FlipTransition = ({ isFlipping }) => {
    return (
        <AnimatePresence>
            {isFlipping && (
                <div className="fixed inset-0 z-[60] perspective-2000 pointer-events-none">
                    {/* The "Page" that flips */}
                    <motion.div
                        initial={{ rotateY: -90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: 90, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
                        className="absolute inset-0 bg-brand-orange-start shadow-2xl flex items-center justify-center backface-hidden"
                    >
                        <h2 className="text-white font-heading text-9xl font-bold opacity-20 uppercase tracking-tighter">
                            Loading...
                        </h2>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FlipTransition;
