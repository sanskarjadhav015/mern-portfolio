import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* ✅ PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full blur-md opacity-75 animate-pulse" />

              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/50 overflow-hidden bg-secondary">
                
                {/* ✅ REAL IMAGE */}
                <img
                  src="/sanskar.jpeg"
                  alt="Sanskar Jadhav"
                  className="w-full h-full object-cover"
                />

              </div>
            </div>
          </motion.div>

          {/* Internship Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              Available for Internships
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient glow-text">Sanskar Jadhav</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-xl md:text-2xl text-primary mb-6"
          >
            AI & ML Fresher
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body"
          >
            Building intelligent and scalable applications using{" "}
            <span className="text-foreground">
              Python, Machine Learning, TensorFlow, MySQL, React, and Node.js
            </span>.
            I turn data into meaningful insights and smart, user-friendly software.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow font-display"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary hover:text-foreground font-display"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/sanskarjadhav015"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>

            <a
              href="https://linkedin.com/in/jadhav-sanskar-kishor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:sanskarjadhav015@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="animate-bounce" size={24} />
        </a>
      </motion.div>

    </section>
  );
};

export default HeroSection;
