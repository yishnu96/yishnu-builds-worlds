import { motion } from "framer-motion";
import { Linkedin, Twitter, FileText, Code, Instagram, Facebook, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold mb-2">YISHNU</h3>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Yishnu Pramanik
              <br />
              Product Manager & AI Specialist
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })} className="text-muted-foreground hover:text-primary transition-colors">
              Work
            </button>
            <button onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })} className="text-muted-foreground hover:text-primary transition-colors">
              Case Studies
            </button>
            <button onClick={() => document.getElementById("writing")?.scrollIntoView({ behavior: "smooth" })} className="text-muted-foreground hover:text-primary transition-colors">
              Writing
            </button>
            <button onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })} className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          {/* Right - Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            {[
              { Icon: Linkedin, color: "hover:text-[#0077B5]" },
              { Icon: Twitter, color: "hover:text-[#1DA1F2]" },
              { Icon: FileText, color: "hover:text-[#00AB6C]" },
              { Icon: Code, color: "hover:text-[#F48024]" },
              { Icon: Instagram, color: "hover:text-[#E4405F]" },
              { Icon: Facebook, color: "hover:text-[#1877F2]" },
              { Icon: MessageCircle, color: "hover:text-[#25D366]" },
              { Icon: Mail, color: "hover:text-gold" }
            ].map(({ Icon, color }, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.2, y: -2 }}
                className={`w-8 h-8 flex items-center justify-center text-muted-foreground ${color} transition-colors`}
              >
                <Icon className="w-4 h-4" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Easter Egg */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground/50 mt-8"
        >
          Built with React, Framer Motion, and way too much coffee{" "}
          <span className="inline-block hover:animate-pulse">☕</span>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
