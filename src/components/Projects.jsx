import { ArrowUpRight } from 'lucide-react';
import TextReveal from './TextReveal';
import CircularGallery from './CircularGallary';

const projectsData = [
    {
        id: "01",
        title: "Resnet50 (ongoing)",
        role: "Deep Learning",
        desc: "Soil health detection via Hyperspectral Imaging",
        gradient: "from-orange-500/20 to-red-500/20",
        stack: ["Python", "TensorFlow", "Pandas"],
        images: [
            { image: "#ff8c00,#ff2d00", text: "Training" },
            { image: "#4d2b00,#221100", text: "Dataset" },
            { image: "#660000,#220000", text: "Inference" }
        ]
    },
    {
        id: "02",
        title: "LSTM",
        role: "Finance AI",
        desc: "High-accuracy stock trend prediction model",
        gradient: "from-blue-500/20 to-purple-500/20",
        stack: ["Python", "Keras", "Scikit-Learn"],
        images: [
            { image: "#00c6ff,#0072ff", text: "Analysis" },
            { image: "#004e92,#000428", text: "Prediction" }
        ]
    },
    {
        id: "03",
        title: "RAG Agent (ongoing)",
        role: "Generative AI",
        desc: "Context-aware Q&A system with retrieval",
        gradient: "from-green-500/20 to-emerald-500/20",
        stack: ["LangChain", "OpenAI", "Pinecone"],
        images: [
            { image: "#00f260,#0575E6", text: "Architecture" },
            { image: "#003311,#001a08", text: "Vector DB" }
        ]
    },
    {
        id: "04",
        title: "Portfolio V1",
        role: "Web Dev",
        desc: "The website you are currently looking at",
        gradient: "from-pink-500/20 to-rose-500/20",
        stack: ["React", "Vite", "Tailwind"],
        images: [
            { image: "#ee0979,#ff6a00", text: "Design" },
            { image: "#440022,#220011", text: "Vibe" }
        ]
    }
];

// Quadruple for longer infinite loop
const projects = [...projectsData, ...projectsData, ...projectsData, ...projectsData];

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative h-[650px] w-full max-w-2xl mx-auto rounded-3xl bg-brand-dark-gray border border-white/5 overflow-hidden flex flex-col shrink-0">
            {/* Gallery Section */}
            <div className="relative h-[400px] w-full border-b border-white/5 bg-black/40">
                <CircularGallery
                    items={project.images}
                    bend={3}
                    textColor="#ffffff44"
                    borderRadius={0.05}
                    scrollEase={0.02}
                />
            </div>

            {/* Gradient Background Effect */}
            <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative z-10 p-8 flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                    <span className="font-heading text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">{project.id}</span>
                    <div className="bg-white/5 p-3 rounded-full backdrop-blur-sm group-hover:bg-brand-orange-start group-hover:text-white transition-colors duration-300 cursor-pointer">
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2">{project.title}</h3>
                    <p className="font-body text-white/50 text-sm mb-6 leading-relaxed">{project.desc}</p>

                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-wider text-white/40 border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
        </div>
    );
};

const Projects = () => {
    const galleryItems = projectsData.map(project => ({
        image: project.images[0].image,
        text: project.title
    }));

    return (
        <section id="projects" className="w-full h-screen sticky top-0 z-0 bg-brand-black overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute top-20 left-0 w-full text-center z-20 pointer-events-none">
                <span className="font-body text-sm uppercase tracking-widest text-brand-orange-start mb-2 block">Selected Works</span>
                <div className="overflow-hidden">
                    <TextReveal nowrap className="text-6xl font-heading font-bold uppercase text-white">
                        Project Gallery
                    </TextReveal>
                </div>
                <p className="text-xs text-white/30 uppercase tracking-widest mt-4">Drag to Explore or Scroll</p>
            </div>

            <div className="w-full h-full relative z-10">
                <CircularGallery
                    items={galleryItems}
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.02}
                />
            </div>

            {/* Bottom Labels / Instruction */}
            <div className="absolute bottom-10 left-0 w-full text-center z-20 pointer-events-none opacity-40">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white">
                    WebGL Powered Experience
                </p>
            </div>

            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none z-30" />
        </section>
    );
};

export default Projects;
