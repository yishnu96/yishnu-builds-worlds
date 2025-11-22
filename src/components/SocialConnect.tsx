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
  Rss,
  Video,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    tooltip: "Where I pretend to be professional",
    color: "bg-[#0077B5]",
    href: "https://www.linkedin.com/in/yishnu-product-manager/",
  },
  {
    icon: Twitter,
    label: "X/Twitter",
    tooltip: "Tech hot takes & product memes",
    color: "bg-[#1DA1F2]",
    href: "https://x.com/yishnu_",
  },
  {
    icon: FileText,
    label: "Medium",
    tooltip: "Bollywood opinions no one asked for",
    color: "bg-[#00AB6C]",
    href: "https://yishnu.medium.com/",
  },
  {
    icon: Rss,
    label: "Substack",
    tooltip: "Long-form thoughts & insights",
    color: "bg-[#FF6719]",
    href: "https://yishnu96.substack.com/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    tooltip: "Life beyond pixels",
    color: "bg-[#E4405F]",
    href: "https://www.instagram.com/yishnu_",
  },
  {
    icon: Video,
    label: "Topmate",
    tooltip: "Book a 1:1 session with me",
    color: "bg-[#9333EA]",
    href: "https://topmate.io/yishnu",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    tooltip: "Let's chat! (I reply fast)",
    color: "bg-[#25D366]",
    href: "https://wa.me/918972341673",
  },
  {
    icon: Mail,
    label: "Email",
    tooltip: "Old school but reliable",
    color: "bg-[#FFD700]",
    href: "mailto:yishnu.p@gmail.com",
  },
];

const SocialConnect = () => {
  return (
    <section id="connect" className="relative bg-[#0D1B2A] py-20 md:py-[120px]">
      <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "radial-gradient(circle at center, rgba(6,214,160,0.18), transparent 55%)" }} />
      <div className="container relative mx-auto px-6 md:px-24 max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-display text-[32px] md:text-[40px] text-white leading-tight"
        >
          I'm Everywhere (Pick Your Poison) <motion.span className="inline-block text-[72px]" animate={{ rotate: [0, -12, 12, 0] }} transition={{ duration: 4, repeat: Infinity }}>🌐</motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg text-[#B0B8C1] leading-[1.7]"
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
                className="group flex h-[120px] flex-col items-center justify-center gap-3 rounded-3xl border border-white/5 bg-[#1B2838]/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#7209B7]"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${social.color}`}>
                  <social.icon className="h-6 w-6 md:h-8 md:w-8" />
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
            className="w-full sm:w-auto h-14 rounded-full bg-gradient-to-r from-[#7209B7] to-[#06D6A0] px-8 text-white shadow-[0_18px_60px_rgba(114,9,183,0.35)] transition-transform hover:scale-[1.03]"
          >
            <a href="https://drive.google.com/file/d/1EQBQuwwpLOmxMSUi49I4LGgTGgKo7Jtv/view?usp=sharing" target="_blank" rel="noreferrer">
              <Download className="mr-2 h-5 w-5" /> Download My Resume
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto h-14 rounded-full bg-gradient-to-r from-[#F77F00] to-[#FF9F1C] px-8 text-white shadow-[0_18px_60px_rgba(247,127,0,0.35)] transition-transform hover:scale-[1.03]"
          >
            <a href="https://calendly.com/yishnupramanik96/know-about-yishnu-pramanik" target="_blank" rel="noreferrer">
              <Calendar className="mr-2 h-5 w-5" /> Book a Session
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialConnect;
