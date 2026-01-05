import { motion } from 'framer-motion';

const TextReveal = ({ children, className = "", delay = 0, nowrap = false }) => {
    // Split text into words, then characters? Or just characters?
    // User asked for "text by text fade in animation", usually means character or word.
    // Let's do a staggered character reveal for titles, looks cooler.

    // Safe text extraction to prevent runtime crashes if children is an array or object
    const resolveText = (child) => {
        if (typeof child === 'string') return child;
        if (typeof child === 'number') return String(child);
        if (Array.isArray(child)) return child.map(resolveText).join('');
        return ''; // specific fallback for complex objects
    };

    const text = resolveText(children);
    const characters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: nowrap ? "nowrap" : "wrap" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {characters.map((char, index) => (
                <motion.span variants={child} key={index}>
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TextReveal;
