import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  FileText,
  Code,
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
  Download,
  Calendar,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    tooltip: "Where I pretend to be professional",
    color: "bg-[#0077B5]",
    href: "https://www.linkedin.com/in/yishnu",
  },
  {
    icon: Twitter,
    label: "Twitter",
    tooltip: "Tech hot takes & product memes",
    color: "bg-[#1DA1F2]",
    href: "https://twitter.com/yishnu",
  },
  {
    icon: FileText,
    label: "Medium",
    tooltip: "Bollywood opinions no one asked for",
    color: "bg-[#00AB6C]",
    href: "https://medium.com/@yishnu",
  },
  {
    icon: Code,
    label: "Stack Overflow",
    tooltip: "Helping devs not break production",
    color: "bg-[#F48024]",
    href: "https://stackoverflow.com/users/8154250/yishnu-pramanik",
  },
  {
    icon: Instagram,
    label: "Instagram",
    tooltip: "Life beyond pixels",
    color: "bg-[#E4405F]",
    href: "https://www.instagram.com/yishnu",
  },
  {
    icon: Facebook,
    label: "Facebook",
    tooltip: "For the aunties and uncles",
    color: "bg-[#1877F2]",
    href: "https://www.facebook.com/yishnu",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    tooltip: "Let's chat! (I reply fast)",
    color: "bg-[#25D366]",
    href: "https://wa.me/919167100378",
  },
  {
    icon: Mail,
    label: "Email",
    tooltip: "Old school but reliable",
    color: "bg-[#FFD700]",
    href: "mailto:hello@yishnu.me",
  },
];

const SocialConnect = () => {
  return (
    <section id="connect" className="relative bg-[#0D1B2A] py-24 md:py-32">
      <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "radial-gradient(circle at center, rgba(6,214,160,0.18), transparent 55%)" }} />
      <div className="container relative mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-display text-4xl text-white md:text-5xl"
        >
          I'm Everywhere (Pick Your Poison) <motion.span animate={{ rotate: [0, -12, 12, 0] }} transition={{ duration: 4, repeat: Infinity }}>🌐</motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-base text-[#B0B8C1]"
        >
          Pick the channel that fits your vibe. Whichever you tap, expect energy, clarity, and a calendar invite.
        </motion.p>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {SOCIAL_LINKS.map((social, idx) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="relative"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-[120px] flex-col items-center justify-center gap-3 rounded-3xl border border-white/5 bg-[#101E33]/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#7209B7]"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${social.color}`}>
                  <social.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium text-white">{social.label}</span>
              </a>
              <div className="pointer-events-none absolute -bottom-12 left-1/2 w-max -translate-x-1/2 rounded-full border border-white/5 bg-white/10 px-4 py-1 text-xs text-[#B0B8C1] opacity-0 shadow-[0_10px_30px_rgba(6,12,24,0.35)] transition-opacity duration-300 group-hover:opacity-100">
                {social.tooltip}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-gradient-to-r from-[#7209B7] to-[#06D6A0] px-8 text-white shadow-[0_18px_60px_rgba(114,9,183,0.35)] transition-transform hover:scale-[1.03]"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" /> Download My Resume
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-gradient-to-r from-[#F77F00] to-[#FF9F1C] px-8 text-white shadow-[0_18px_60px_rgba(247,127,0,0.35)] transition-transform hover:scale-[1.03]"
          >
            <a href="https://cal.com/yishnu/30min" target="_blank" rel="noreferrer">
              <Calendar className="mr-2 h-5 w-5" /> Schedule a Call
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialConnect;
