import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Brain,
    title: "Brain Tumor Detector",
    subtitle: "Deep Learning Project",
    date: "June 2025",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    description: "Deep learning system to automatically classify brain MRI images into four categories: No Tumor, Glioma, Meningioma, and Pituitary.",
    highlights: [
      "Used VGG16 architecture for feature extraction",
      "Achieved 96% accuracy on tumor detection",
      "Built complete training pipeline and prediction UI",
    ],
    gradient: "from-purple-500/20 to-cyan-500/20",
  },
  {
    icon: Home,
    title: "Estate Hub",
    subtitle: "Real Estate Web Application",
    date: "Nov 2024",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    description: "Responsive real estate platform for users to browse, search, and save properties with secure authentication.",
    highlights: [
      "Implemented secure user authentication",
      "Developed backend modules for property storage",
      "Built clean, interactive UI components",
    ],
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-display text-sm tracking-wider uppercase">Projects</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Featured Work
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative gradient-border bg-card p-8 rounded-xl h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <project.icon size={28} />
                    </div>
                    <span className="text-muted-foreground text-sm font-display">{project.date}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">{project.subtitle}</p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="font-display text-xs">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/sanskarjadhav015"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="font-display">
                <Github className="mr-2 h-4 w-4" />
                See More on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
