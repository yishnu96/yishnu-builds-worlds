import { motion } from "framer-motion";
import yishnuImg from "@/assets/yishnu.png";

const PersonalPhoto = () => {
  return (
    <section id="about" className="relative bg-background py-20 md:py-[120px]">
      <div className="container relative mx-auto px-6 md:px-24">
        <div className="grid items-center gap-16 lg:grid-cols-[40%,60%]">
          {/* Photo Container - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] mx-auto rounded-full border-4 border-transparent bg-gradient-to-br from-primary via-secondary to-accent p-1"
              style={{
                background: "linear-gradient(135deg, hsl(276 89% 39%), hsl(162 85% 45%))",
              }}
            >
              <div className="relative h-full w-full rounded-full bg-card overflow-hidden shadow-[0_15px_40px_rgba(114,9,183,0.2)]">
                <img
                  src={yishnuImg}
                  alt="Yishnu Pramanik"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <h2 className="font-display text-3xl md:text-[40px] text-foreground leading-tight">
              Who Is This Guy Anyway? <span className="text-[40px]">🤔</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Started as a software engineer who couldn't stop asking "why are we building this?"
                That curiosity led me to product management, where I get to build things AND ask
                annoying questions.
              </p>
              <p>
                When I'm not shipping products, I'm probably writing hot takes about Bollywood on
                Medium, helping founders automate their chaos, or trying to convince ChatGPT that
                I'm actually funny.
              </p>
              <p>
                Based in Mumbai. Always caffeinated. Occasionally makes sense.
              </p>
            </div>

            {/* Quick Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-muted-foreground"
            >
              {[
                { icon: "🎓", text: "B.Tech CSE" },
                { icon: "📍", text: "Mumbai" },
                { icon: "☕", text: "Coffee Addict" },
                { icon: "🎬", text: "Bollywood Fan" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.text}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 text-base"
                >
                  <span className="text-[40px]">{stat.icon}</span>
                  <span>{stat.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPhoto;
