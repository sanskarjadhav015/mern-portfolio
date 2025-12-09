import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Users, Trophy } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "End-to-end development from UI to backend APIs",
  },
  {
    icon: Cpu,
    title: "AI/ML Explorer",
    description: "Deep learning with TensorFlow & Keras",
  },
  {
    icon: Users,
    title: "Team Leader",
    description: "SIH Team Lead & Graphics Design Head",
  },
  {
    icon: Trophy,
    title: "Athlete",
    description: "College basketball representative",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary font-display text-sm tracking-wider uppercase">About Me</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Passionate Developer & Problem Solver
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Sanskar Jadhav</span>, a Full Stack Developer 
                passionate about building modern, scalable applications. I have experience developing dynamic user 
                interfaces, backend APIs, and database systems using Java, Spring Boot, MySQL, React.js, and Node.js.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy taking a project from concept to deployment — planning architecture, writing clean code, 
                testing features, and maintaining performance. I also explore AI/ML using TensorFlow, Keras, and OpenCV.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing <span className="text-foreground font-medium">B.Tech in Computer Science</span> (Graduation: May 2026), 
                I focus on writing efficient, maintainable code and continuously learning new tools.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="gradient-border p-5 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
