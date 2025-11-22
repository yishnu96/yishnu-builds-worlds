import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import ProfilePhoto from "@/components/ProfilePhoto";

const Hero = () => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setShowIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById("metrics");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToConnect = () => {
    const element = document.getElementById("connect");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(114,9,183,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(6,214,160,0.14),transparent_60%)] before:content-[''] before:-z-10"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(114,9,183,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(114,9,183,0.05) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <motion.div
          className="absolute -top-16 -right-12 md:-right-24 h-48 w-48 md:h-96 md:w-96 rounded-full bg-[#7209B7]/25 blur-[140px]"
          animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-60px] left-[-30px] md:bottom-[-120px] md:left-[-60px] h-[240px] w-[240px] md:h-[420px] md:w-[420px] rounded-full bg-[#06D6A0]/20 blur-[150px]"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-[3fr,2fr]">
          {/* Mobile/Tablet: Profile photo centered below */}
          <div className="md:hidden flex justify-center order-first">
            <ProfilePhoto variant="hero" priority={true} />
          </div>

          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-base md:text-lg text-[#B0B8C1] tracking-[0.2em] uppercase text-center md:text-left">
                Hey, I'm Yishnu
                <motion.span
                  className="ml-3 inline-block text-[32px] md:text-[40px]"
                  animate={{ rotate: [0, 12, -6, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  👋
                </motion.span>
              </p>
              <h1 className="font-display text-[32px] leading-tight text-white md:text-[48px] lg:text-5xl text-center md:text-left mt-4">
                I build products that go from
                <br />
                <span className="text-white/80">"just an idea"</span> to
                <br />
                <span className="bg-gradient-to-r from-[#7209B7] via-[#06D6A0] to-[#F77F00] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(114,9,183,0.35)]">
                  ₹12 Cr/month
                </span>
              </h1>
              <p className="text-base md:text-xl italic text-[#B0B8C1] text-center md:text-left">(And yes, I can code them too)</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl text-sm leading-7 text-[#8A92A0] md:text-base lg:text-lg text-center md:text-left px-4 md:px-0"
            >
              From scrappy napkin sketches to boardroom-ready launches, I obsess over every step—customer research, UX flows, GTM, and the
              technical architecture that keeps engineers smiling.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 md:flex-row px-5 md:px-0"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full md:w-auto border-[#7209B7] text-[#7209B7] transition-transform hover:-translate-y-1 hover:bg-[#7209B7] hover:text-white min-h-[44px]"
                onClick={scrollToNext}
              >
                View My Work <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-[#F77F00] via-[#F77F00] to-[#FF9F1C] text-white shadow-[0_8px_35px_rgba(247,127,0,0.35)] transition-transform hover:scale-[1.05] min-h-[44px]"
                onClick={scrollToConnect}
              >
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="max-w-lg text-sm text-[#8A92A0] text-center md:text-left px-4 md:px-0"
            >
              Currently helping founders automate stuff with AI. Previously built a cloud platform used by 6,000+ people. Sometimes I write
              random thoughts about Bollywood on Medium 🎬
            </motion.p>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] md:max-w-none">
            {/* Tablet/Desktop: Profile photo at top */}
            <div className="hidden md:flex justify-center mb-8">
              <ProfilePhoto variant="hero" priority={true} />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative rounded-[32px] border border-white/10 bg-[#112238]/70 p-6 backdrop-blur-xl shadow-[0_30px_80px_rgba(8,12,24,0.45)]"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#B0B8C1]">
                <span>build-momentum.tsx</span>
                <span>auto-save ✓</span>
              </div>
              <div className="mt-6 grid gap-4">
                <motion.div
                  className="rounded-2xl border border-white/10 bg-[#0F1C2E]/80 p-4"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#06D6A0]">AI Automation</p>
                  <p className="mt-2 text-lg font-display text-white">18 agents deployed</p>
                  <p className="text-sm text-[#B0B8C1]">Ops time saved · 50 hrs/week</p>
                </motion.div>

                <motion.div
                  className="rounded-2xl border border-white/10 bg-[#0F1C2E]/80 p-4"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#FFD700]">Revenue</p>
                  <div className="mt-2 flex items-end gap-4">
                    <div className="flex-1">
                      <p className="text-4xl font-display text-white">₹12 Cr</p>
                      <p className="text-xs text-[#B0B8C1]">MRR in 10 months</p>
                    </div>
                    <div className="h-16 w-20 rounded-xl bg-gradient-to-br from-[#7209B7]/40 to-[#06D6A0]/40 p-2">
                      <div className="h-full w-full rounded-lg bg-[conic-gradient(from_180deg_at_50%_50%,#06D6A0_0deg,#7209B7_240deg,#F77F00_360deg)] opacity-70" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-2xl border border-white/10 bg-[#0F1C2E]/80 p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#F77F00]">Ship Speed</p>
                  <div className="mt-3 space-y-2 text-sm text-[#B0B8C1]">
                    <div className="flex items-center justify-between">
                      <span>MVP Prototype</span>
                      <span className="font-display text-white">72 hrs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Launch to users</span>
                      <span className="font-display text-white">Day 5</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-12 top-10 hidden h-32 w-32 rounded-full bg-gradient-to-br from-[#7209B7]/40 to-[#06D6A0]/40 blur-3xl sm:block"
              animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.6, 0.9, 0.7, 0.6] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {showIndicator && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#B0B8C1]"
        >
          Scroll
          <motion.span animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="h-5 w-5" />
          </motion.span>
        </motion.button>
      )}
    </section>
  );
};

export default Hero;
