import { motion } from "framer-motion";
import {
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
  Code,
} from "lucide-react";
import ProfilePhoto from "@/components/ProfilePhoto";

const quickLinks = [
  { label: "Work", id: "work" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Writing", id: "writing" },
  { label: "Contact", id: "connect" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/yishnu", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yishnu", label: "Twitter" },
  { icon: FileText, href: "https://medium.com/@yishnu", label: "Medium" },
  { icon: Code, href: "https://stackoverflow.com/users/8154250/yishnu-pramanik", label: "Stack Overflow" },
  { icon: Instagram, href: "https://www.instagram.com/yishnu", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/yishnu", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/919167100378", label: "WhatsApp" },
  { icon: Mail, href: "mailto:hello@yishnu.me", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0D1B2A] py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
            {/* Profile photo */}
            <div className="flex-shrink-0">
              <ProfilePhoto variant="footer" />
            </div>

            {/* Text content */}
            <div className="space-y-3">
              <p className="font-display text-xl tracking-[0.3em] text-white">YISHNU</p>
              <p className="text-sm text-[#8A92A0]">
                © {currentYear} Yishnu Pramanik
                <br /> Product Manager & AI Specialist
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-[#8A92A0]">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#B0B8C1] transition-colors hover:border-[#7209B7] hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-xs text-[#8A92A0]"
        >
          Built with React, Framer Motion, and way too much coffee ☕
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
