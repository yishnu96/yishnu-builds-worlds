import { motion } from "framer-motion";
import { Brain, Target, Lightbulb } from "lucide-react";

const SuperpowerCard = ({ 
  icon: Icon, 
  title, 
  description, 
  tagline, 
  glowColor,
  delay 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  tagline: string; 
  glowColor: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`p-8 bg-card rounded-2xl hover:glow-${glowColor} transition-all duration-300`}
    >
      <div className={`inline-flex p-4 rounded-xl mb-6 ${
        glowColor === "purple" ? "bg-primary/10" : glowColor === "green" ? "bg-secondary/10" : "bg-accent/10"
      }`}>
        <Icon className={`w-12 h-12 ${
          glowColor === "purple" ? "text-primary" : glowColor === "green" ? "text-secondary" : "text-accent"
        }`} />
      </div>
      
      <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
      <p className="text-sm text-muted-foreground/70 italic">{tagline}</p>
    </motion.div>
  );
};

const Superpowers = () => {
  return (
    <section id="superpowers" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-display font-bold text-center mb-16"
        >
          My Superpowers (No Cape Required)
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <SuperpowerCard
            icon={Brain}
            title="Analytical Thinking & Problem Solving"
            description="I see patterns others miss, connect dots faster than your AI model, and come up with solutions that actually stick."
            tagline="Think: Sherlock Holmes, but for product problems."
            glowColor="purple"
            delay={0.2}
          />

          <SuperpowerCard
            icon={Target}
            title="Creative Leadership & People Skills"
            description="I don't 'manage' people. I bring ideas, creativity, and fairness—and somehow people want to join in."
            tagline="Probably because I was an engineer once. I speak their language."
            glowColor="green"
            delay={0.4}
          />

          <SuperpowerCard
            icon={Lightbulb}
            title="Visionary Intuition & Mentorship"
            description="I go deeper than 'fix this bug.' I think about growth, purpose, and where this product will be in 3 years."
            tagline="Also, I mentor people. Because good leaders create more leaders."
            glowColor="orange"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Superpowers;
