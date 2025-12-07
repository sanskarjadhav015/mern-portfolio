import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Palette } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Star of MGM Award",
    year: "2023 & 2024",
    description: "Awarded twice for excellence in Basketball at intercollegiate level.",
  },
  {
    icon: Users,
    title: "SIH Team Lead",
    year: "2024",
    description: "Managed a team for Smart India Hackathon, improving teamwork, strategy, and time management.",
  },
  {
    icon: Palette,
    title: "Graphics Design Lead",
    year: "College",
    description: "Led college graphics design team, organizing events and driving creative initiatives.",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-display text-sm tracking-wider uppercase">Achievements</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Beyond Coding
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="gradient-border p-6 rounded-lg bg-card text-center group hover:bg-card/80 transition-colors"
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <achievement.icon size={28} />
                </div>
                <span className="block text-primary text-sm font-display mb-2">{achievement.year}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
