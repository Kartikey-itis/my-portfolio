import { motion } from 'framer-motion';

const Navbar = ({ onNavClick }) => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-6 md:px-12 z-50 backdrop-blur-md bg-brand-black/50 border-b border-white/5"
        >
            <div className="text-xl font-heading font-bold uppercase tracking-widest text-white">
                Kartikey
            </div>

            <ul className="flex gap-8 text-sm font-body font-medium uppercase tracking-wide text-white/80">
                {['About', 'Projects', 'Services', 'Contact'].map((item) => (
                    <li key={item}>
                        <button
                            onClick={() => onNavClick(`#${item.toLowerCase()}`)}
                            className="hover:text-brand-orange-start transition-colors uppercase"
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
