import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Alex Morgan",
        role: "CTO, FinTech Co.",
        text: "Kartikey's understanding of both deep learning and modern web interfaces is rare. He built a dashboard that's not just functional but a joy to use."
    },
    {
        name: "Sarah Chen",
        role: "Lead Researcher",
        text: "The RAG agent implementation was flawless. He took our complex requirements and turned them into a seamless, intelligent system."
    }
];

const Testimonials = () => {
    return (
        <section className="w-full px-6 md:px-12 py-32 bg-brand-dark-gray text-white relative z-10">
            <div className="mb-20">
                <span className="font-body text-sm uppercase tracking-widest text-brand-orange-start mb-4 block">Testimonials</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-white">
                    What People Say
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-brand-black p-10 rounded-2xl border border-white/5 relative overflow-hidden"
                    >
                        <p className="font-body text-xl md:text-2xl leading-relaxed text-white/80 mb-8 relative z-10">
                            "{t.text}"
                        </p>
                        <div>
                            <h4 className="font-heading font-bold text-lg text-white">{t.name}</h4>
                            <span className="font-body text-sm text-brand-orange-start uppercase tracking-wider">{t.role}</span>
                        </div>

                        {/* Decorative Quote Icon Background */}
                        <div className="absolute top-4 right-8 text-9xl font-heading text-white/5 pointer-events-none">"</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
