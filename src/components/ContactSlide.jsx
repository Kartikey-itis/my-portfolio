import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContactSlide = ({ children }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Content stays fixed while container scrolls.
    // Slide x: 100% -> 0%
    const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
    const textX = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.05, 0.02]);

    return (
        // Container for the slide transition (so we see Services behind)
        <section ref={targetRef} className="relative h-[200vh] z-50">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center border-l border-white/10 relative">
                {/* Background Text that drifts and fades */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.span
                        style={{ x: textX, opacity: textOpacity }}
                        className="text-white font-heading text-[25vw] font-bold uppercase tracking-tighter mix-blend-overlay"
                    >
                        Contact
                    </motion.span>
                </div>

                <motion.div style={{ x }} className="relative z-20 w-full h-full bg-brand-black">
                    {/* Solid background on the slider content to cover previous sections */}
                    {children}
                </motion.div>

                {/* Infinite Name Marquee Bar */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-r from-brand-orange-start to-brand-orange-end flex items-center overflow-hidden whitespace-nowrap z-30">
                    <div className="flex animate-marquee">
                        {[...Array(10)].map((_, i) => (
                            <span key={i} className="text-black font-heading font-bold text-2xl uppercase mr-12">
                                Kartikey Srivastava —
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSlide;
