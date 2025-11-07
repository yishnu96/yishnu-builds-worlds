import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-strong border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-display font-bold">
          <span className="text-foreground">YISHNU</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("work")} className="text-sm hover:text-primary transition-colors">
            Work
          </button>
          <button onClick={() => scrollToSection("superpowers")} className="text-sm hover:text-primary transition-colors">
            Superpowers
          </button>
          <button onClick={() => scrollToSection("case-studies")} className="text-sm hover:text-primary transition-colors">
            Case Studies
          </button>
          <button onClick={() => scrollToSection("writing")} className="text-sm hover:text-primary transition-colors">
            Writing
          </button>
          <button onClick={() => scrollToSection("connect")} className="text-sm hover:text-primary transition-colors">
            Connect
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Download Resume
          </Button>
          <Button size="sm" className="bg-accent hover:bg-accent/90 glow-orange">
            Let's Talk
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
