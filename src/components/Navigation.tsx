import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Work", target: "work" },
  { label: "Superpowers", target: "superpowers" },
  { label: "Case Studies", target: "case-studies" },
  { label: "Writing", target: "writing" },
  { label: "Connect", target: "connect" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((link) => link.target));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0D1B2A]/90 backdrop-blur-[12px] border-b border-border shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto h-20 md:h-20 lg:h-20 flex items-center justify-between px-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl md:text-2xl font-display font-bold tracking-[0.2em] text-foreground transition-transform hover:scale-105"
          >
            YISHNU
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className={cn(
                  "relative text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors py-3 px-2",
                  activeSection === link.target && "text-foreground",
                )}
              >
                {link.label}
                {activeSection === link.target && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-primary"
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-[#F77F00] to-[#F48C06] text-white shadow-[0_0_20px_rgba(247,127,0,0.35)] transition-transform hover:scale-105 min-h-[44px]"
            >
              <a href="https://drive.google.com/file/d/1EQBQuwwpLOmxMSUi49I4LGgTGgKo7Jtv/view?usp=sharing" target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#F77F00] to-[#F48C06] text-white shadow-[0_0_25px_rgba(247,127,0,0.45)] transition-transform hover:scale-105 min-h-[44px]"
              onClick={() => scrollToSection("connect")}
            >
              Let's Talk
            </Button>
          </div>

          <button
            className="lg:hidden p-3 rounded-full border border-border bg-background/60 backdrop-blur-xl min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6 text-[#7209B7]" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0D1B2A]/95 backdrop-blur-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 rounded-full border border-border bg-background/80 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" />
              </button>

              <nav className="flex flex-col gap-2 text-center mb-8">
                {NAV_LINKS.map((link, idx) => (
                  <motion.button
                    key={link.target}
                    onClick={() => scrollToSection(link.target)}
                    className="text-2xl font-display text-foreground min-h-[60px] px-8 flex items-center justify-center hover:text-[#7209B7] transition-colors"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="w-full max-w-xs border-t border-white/10 pt-8 flex flex-col gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#F77F00] to-[#F48C06] text-white shadow-[0_0_20px_rgba(247,127,0,0.35)] min-h-[44px] w-full"
                >
                  <a href="https://drive.google.com/file/d/1EQBQuwwpLOmxMSUi49I4LGgTGgKo7Jtv/view?usp=sharing" target="_blank" rel="noreferrer">
                    Download Resume
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F77F00] to-[#F48C06] text-white shadow-[0_0_25px_rgba(247,127,0,0.45)] min-h-[44px] w-full"
                  onClick={() => scrollToSection("connect")}
                >
                  Let's Talk
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
