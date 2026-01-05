import { motion } from 'framer-motion';
import TextReveal from './TextReveal';
import ASCIIText from './ASCIIText';

const About = () => {
    return (
        <section id="about" className="w-full min-h-screen px-6 md:px-12 py-32 bg-brand-black text-white relative z-10 flex items-center justify-center overflow-hidden">
            {/* Galaxy Abstract Background */}
            <div className="absolute inset-0 z-0 opacity-50">
                <ASCIIText
                    text="Kartikey"
                    asciiFontSize={10}
                    textFontSize={250}
                    planeBaseHeight={10}
                />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange-start/10 rounded-full mix-blend-screen filter blur-[120px]" />
                {/* Stars/Noise */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            </div>

            {/* Glass Card */}
            <div className="relative z-10 w-full max-w-4xl p-12 md:p-20 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl">
                <div className="mb-8">
                    <span className="font-body text-sm uppercase tracking-widest text-white/50 mb-2 block">About Me</span>
                    <div className="overflow-hidden">
                        <TextReveal className="text-4xl md:text-6xl font-heading font-bold uppercase text-white leading-tight">
                            Crafting Digital
                        </TextReveal>
                        <TextReveal className="text-4xl md:text-6xl font-heading font-bold uppercase text-brand-orange-end leading-tight" delay={0.2}>
                            Experiences
                        </TextReveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="font-body text-lg text-white/70 leading-relaxed"
                    >
                        I'm Kartikey, By training, I’m a Computer Science engineer. By instinct, I’m a creator. I work across full-stack development, AI-driven systems, and modern web experiences, with a strong focus on performance, interaction, and clarity.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <p className="font-body text-lg text-white/70 leading-relaxed mb-8">
                            Outside of code, I’m deeply involved in content creation and music, which shapes how I think about rhythm, flow, and user experience. That crossover is what defines my work — technical precision backed by creative instinct.
                        </p>
                        <button className="px-8 py-4 bg-brand-orange-start text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300">
                            Download Resume
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
