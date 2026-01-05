import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

const Footer = () => {
    return (
        <div id="contact" className="w-screen h-screen shrink-0 flex flex-col justify-center px-12 bg-brand-black relative border-l border-white/10">
            <div className="max-w-4xl w-full mx-auto">
                <span className="font-body text-sm uppercase tracking-widest text-brand-orange-start block mb-8">Get in touch</span>

                <div className="mb-12">
                    <div className="overflow-hidden">
                        <TextReveal nowrap className="text-[12vw] leading-[1] font-heading font-bold uppercase text-white hover:text-brand-orange-start transition-all duration-500 cursor-default">
                            Let's
                        </TextReveal>
                    </div>
                    <div className="overflow-hidden -mt-4">
                        <TextReveal nowrap delay={0.2} className="text-[12vw] leading-[1] font-heading font-bold uppercase text-white hover:text-brand-orange-start transition-all duration-500 cursor-default">
                            Talk
                        </TextReveal>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <motion.a
                        href="mailto:contact@kartikey.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl font-heading text-white hover:text-brand-orange-start transition-colors border-b-2 border-white/20 pb-1"
                    >
                        #$%^&*kartikey@gmail.com
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-10 font-body uppercase text-sm tracking-widest text-white/60"
                    >
                        <a href="https://www.linkedin.com/in/kar-tk/" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://github.com/Kartikey-itis" className="hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 left-12 right-12 flex justify-between font-body text-xs text-white/20 uppercase tracking-wider"
            >
                <span>©2026 Kartikey Srivastava</span>
                <span>Made with React & Framer Motion</span>
            </motion.div>
        </div>
    );
};

export default Footer;
