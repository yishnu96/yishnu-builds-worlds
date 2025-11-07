import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, FileText, Code, Instagram, Facebook, MessageCircle, Mail, Download, Calendar } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", tooltip: "Where I pretend to be professional", color: "hover:text-[#0077B5]" },
  { icon: Twitter, label: "Twitter", tooltip: "Tech hot takes & product memes", color: "hover:text-[#1DA1F2]" },
  { icon: FileText, label: "Medium", tooltip: "Bollywood opinions no one asked for", color: "hover:text-[#00AB6C]" },
  { icon: Code, label: "Stack Overflow", tooltip: "Helping devs not break production", color: "hover:text-[#F48024]" },
  { icon: Instagram, label: "Instagram", tooltip: "Life beyond pixels", color: "hover:text-[#E4405F]" },
  { icon: Facebook, label: "Facebook", tooltip: "For the aunties and uncles", color: "hover:text-[#1877F2]" },
  { icon: MessageCircle, label: "WhatsApp", tooltip: "Let's chat! (I reply fast)", color: "hover:text-[#25D366]" },
  { icon: Mail, label: "Email", tooltip: "Old school but reliable", color: "hover:text-gold" }
];

const SocialConnect = () => {
  return (
    <section id="connect" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-display font-bold text-center mb-6"
        >
          I'm Everywhere (Pick Your Poison) <span className="inline-block hover:rotate-12 transition-transform">🌐</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Choose your favorite platform to connect. I'm pretty active everywhere (maybe too active).
        </motion.p>

        {/* Social Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {socialLinks.map((social, idx) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <button className={`w-full aspect-square flex flex-col items-center justify-center gap-3 bg-background rounded-2xl hover:scale-110 transition-all duration-300 ${social.color}`}>
                <social.icon className="w-8 h-8" />
                <span className="text-sm font-medium">{social.label}</span>
              </button>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                {social.tooltip}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-gradient-purple text-white glow-purple">
            <Download className="mr-2 h-5 w-5" />
            Download My Resume
          </Button>
          <Button size="lg" className="bg-accent hover:bg-accent/90 glow-orange">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialConnect;
