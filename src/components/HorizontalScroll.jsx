import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScroll = ({ children }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Translates the container horizontally: 0% -> -100% (plus viewport width adjustment)
    // We scroll effectively 3 sections (Projects, Services, Footer), so we need enough scroll height.
    // Length of scroll = 400vh -> 4 screens worth of scroll time.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]); // Adjust -66% based on total width (3 sections = 300vw, move 200vw = 66%)

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-brand-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
