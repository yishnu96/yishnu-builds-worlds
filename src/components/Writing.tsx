import { motion } from "framer-motion";
import { FileText, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const WritingCard = ({ 
  icon: Icon, 
  emoji,
  title, 
  description, 
  cta,
  glowColor,
  delay 
}: { 
  icon: any; 
  emoji: string;
  title: string; 
  description: string; 
  cta: string;
  glowColor: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: glowColor === "purple" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      className={`p-12 bg-card rounded-2xl hover:glow-${glowColor} transition-all duration-300`}
    >
      <div className="text-5xl mb-6 hover:scale-110 transition-transform inline-block">{emoji}</div>
      
      <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6 min-h-[80px]">{description}</p>
      <p className="text-sm text-muted-foreground/70 italic mb-6">Because PMs are humans too.</p>
      
      <Button variant="outline" className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        {cta}
        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};

const Writing = () => {
  return (
    <section id="writing" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-display font-bold text-center mb-6"
        >
          I Write Stuff Too <span className="inline-block hover:rotate-12 transition-transform">✍️</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          When I'm not building products, I share my thoughts on everything from Bollywood to business strategy.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <WritingCard
            icon={FileText}
            emoji="🎬"
            title="Random Musings"
            description="Where I write about Bollywood, life, politics, and whatever crosses my mind."
            cta="Read on Medium"
            glowColor="purple"
            delay={0.2}
          />

          <WritingCard
            icon={Code}
            emoji="💻"
            title="Tech & Product Insights"
            description="Where I actually help people solve AI, business, and product problems. The useful stuff."
            cta="Check Stack Overflow"
            glowColor="green"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Writing;
