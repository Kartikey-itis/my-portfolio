import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import img1 from "../assets/img1.png";

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const textX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Parallax for text

    return (
        <section ref={ref} className="h-screen w-full sticky top-0 z-0 overflow-hidden flex items-center justify-center bg-brand-black perspective-1000">
            {/* Background Marquee Text (Behind Image) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-50">
                <motion.div
                    style={{ x: textX }}
                    className="w-full whitespace-nowrap flex absolute"
                >
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity
                        }}
                        className="flex whitespace-nowrap"
                    >
                        {/* Bevel Effect via Text Shadow */}
                        <span
                            className="text-[25vh] font-heading font-black text-brand-dark-gray uppercase mr-20"
                            style={{
                                textShadow: '2px 2px 4px rgba(255,255,255,0.1), -2px -2px 4px rgba(0,0,0,0.5)'
                            }}
                        >
                            Kartikey Srivastava — Kartikey Srivastava —
                        </span>
                        <span
                            className="text-[25vh] font-heading font-black text-brand-dark-gray uppercase mr-20"
                            style={{
                                textShadow: '2px 2px 4px rgba(255,255,255,0.1), -2px -2px 4px rgba(0,0,0,0.5)'
                            }}
                        >
                            Kartikey Srivastava — Kartikey Srivastava —
                        </span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Central Image (On Top) */}
            <motion.div style={{ y }} className="relative z-20 flex flex-col items-center">
                <div className="w-[300px] h-[400px] md:w-[400px] md:h-[550px] bg-brand-dark-gray rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl shadow-black/50 group">
                    <div className="absolute inset-0 z-10">
                        <img
                            src={img1}
                            alt="Kartikey Srivastava"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </motion.div>

            <div className="absolute bottom-12 left-6 md:left-12 z-30">
                <p className="font-body text-white/50 text-sm uppercase tracking-widest max-w-[200px]">
                    Scroll to Explore
                </p>
            </div>
        </section>
    );
};

export default Hero;
