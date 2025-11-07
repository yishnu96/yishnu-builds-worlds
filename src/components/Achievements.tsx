import { motion } from "framer-motion";
import { Building2, DollarSign, Cloud } from "lucide-react";

const AchievementBlock = ({ 
  icon: Icon, 
  title, 
  points, 
  translation, 
  glowColor,
  delay 
}: { 
  icon: any; 
  title: string; 
  points: string[]; 
  translation: string; 
  glowColor: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`relative p-8 lg:p-12 bg-gradient-to-br from-card to-card/50 rounded-2xl border-l-4 ${
        glowColor === "purple" ? "border-primary" : glowColor === "green" ? "border-secondary" : "border-accent"
      } hover:glow-${glowColor} transition-all duration-300`}
    >
      <div className="flex items-start gap-6">
        <div className={`p-4 rounded-xl ${
          glowColor === "purple" ? "bg-primary/10" : glowColor === "green" ? "bg-secondary/10" : "bg-accent/10"
        }`}>
          <Icon className={`w-8 h-8 ${
            glowColor === "purple" ? "text-primary" : glowColor === "green" ? "text-secondary" : "text-accent"
          }`} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">{title}</h3>
          <ul className="space-y-3 mb-4">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-secondary mt-1">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground/70 italic">{translation}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="work" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-display font-bold text-center mb-16"
        >
          Okay, Let Me Brag a Little <span className="inline-block hover:rotate-12 transition-transform">🚀</span>
        </motion.h2>

        <div className="space-y-12">
          <AchievementBlock
            icon={Building2}
            title="Showcased at National Stage"
            points={[
              "My DaaS platform got featured at:",
              "• Digital Transformation by Lay Government",
              "• Global AI Summit (GPAI)",
              "• Vibrant Gujarat"
            ]}
            translation="Translation: Big people thought it was worth showing off."
            glowColor="purple"
            delay={0.2}
          />

          <AchievementBlock
            icon={DollarSign}
            title="Built a ₹12 Cr/Month Business"
            points={[
              "As founding member at Vendosmart:",
              "• Took revenue from ₹0 → ₹12 Cr in 10 months",
              "• Led product strategy & team",
              "• Learned what 'scale' really means"
            ]}
            translation="(Still proud of this one)"
            glowColor="green"
            delay={0.4}
          />

          <AchievementBlock
            icon={Cloud}
            title="6,000 Users Don't Lie"
            points={[
              "Built Coredge's DaaS platform from scratch:",
              "• 0 → 6,000 users in 10 months",
              "• Co-founder personally appraised it",
              "• Reduced deployment time from 15 min → 3 min"
            ]}
            translation="This is what I do. I make things people actually use."
            glowColor="orange"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
