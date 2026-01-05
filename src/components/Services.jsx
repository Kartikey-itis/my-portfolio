import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

const services = [
    { number: "01", title: "Strategy", items: ["Discovery", "Research"] },
    { number: "02", title: "Design", items: ["Branding", "UI/UX"] },
    { number: "03", title: "Development", items: ["React/Next.js", "System Arch"] },
    { number: "04", title: "AI Solutions", items: ["RAG Systems", "Predictive Models"] }
];



const Services = () => {
    return (
        <section id="services" className="w-full min-h-screen px-6 md:px-12 py-32 bg-brand-black text-white relative z-20 border-t border-white/5 shadow-2xl shadow-brand-black">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20">
                    <span className="font-body text-sm uppercase tracking-widest text-brand-orange-start mb-4 block">Services</span>
                    <div className="overflow-hidden">
                        <TextReveal className="text-5xl md:text-7xl font-heading font-bold uppercase text-white">
                            What I Do
                        </TextReveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-12 border border-white/10 rounded-2xl hover:border-brand-orange-start transition-colors duration-300 bg-brand-dark-gray/20 group"
                        >
                            <span className="text-stroke text-5xl font-heading font-bold opacity-30 group-hover:opacity-100 group-hover:text-brand-orange-start transition-all duration-300 block mb-8">
                                /{service.number}
                            </span>
                            <h3 className="text-3xl font-heading font-bold mb-6 text-white">{service.title}</h3>
                            <div className="flex gap-4">
                                {service.items.map(item => (
                                    <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-sm font-body text-white/50 uppercase tracking-widest border border-white/5">{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
