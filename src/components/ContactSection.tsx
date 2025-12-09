import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sanskarjadhav015@gmail.com",
      href: "mailto:sanskarjadhav015@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sanskarjadhav015",
      href: "https://github.com/sanskarjadhav015",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Jadhav Sanskar Kishor",
      href: "https://www.linkedin.com/in/jadhav-sanskar-kishor-722a52258?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-display text-sm tracking-wider uppercase">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            I'm currently looking for Java Full Stack developer internships and web development roles.
            If you'd like to work together or discuss projects, feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="gradient-border p-5 rounded-lg bg-card hover:bg-secondary/50 transition-colors group"
              >
                <link.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-display text-sm font-medium text-foreground">{link.label}</p>
                <p className="text-muted-foreground text-xs mt-1 truncate">{link.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="mailto:sanskarjadhav015@gmail.com">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow font-display">
                <Send className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
