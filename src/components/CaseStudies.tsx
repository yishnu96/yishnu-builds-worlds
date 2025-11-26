import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useViewedProjects } from "@/hooks/useViewedProjects";
import { useCardHighlight } from "@/hooks/useCardHighlight";
import { trackProjectCardClick } from "@/lib/analytics";

type ProjectCategory = "All" | "0→1 Products" | "AI & Automation" | "B2B SaaS" | "Startups";

interface ProjectSummary {
  id: string;
  name: string;
  tagline: string;
  metricLabel: string;
  description: string;
  tech: string[];
  categories: ProjectCategory[];
  cover?: string;
  metricBadge?: string;
}

interface FeaturedProject extends ProjectSummary {
  heroMetric: string;
  slug: string;
}

const FILTERS: ProjectCategory[] = ["All", "0→1 Products", "AI & Automation", "B2B SaaS", "Startups"];

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "dflare-daas",
    name: "DFlare Desktop-as-a-Service",
    tagline: "How I Built JIO's Cloud Desktop Platform Without Knowing Kubernetes",
    metricLabel: "6,000+ Active Users",
    description:
      "Built a cloud desktop platform serving 6,000+ users. Reduced launch time from 50 mins to 7 seconds by optimizing Kubernetes and WebRTC architecture.",
    tech: ["Kubernetes", "WebRTC", "AWS S3", "Linux"],
    categories: ["0→1 Products", "B2B SaaS"],
    heroMetric: "6,000+ users onboarded",
    cover: "/placeholder.svg",
    slug: "dflare-daas-platform",
  },
  {
    id: "vendosmart-sales",
    name: "Vendosmart Sales Framework",
    tagline: "How I Turned a 10% Conversion Rate into 40%",
    metricLabel: "40% Conversion",
    description:
      "Rebuilt the sales pitch using the Head-Heart-Wallet framework. Focused on buyer outcomes rather than features, increasing conversion from 10% to 40%.",
    tech: ["Sales Strategy", "User Personas", "HHW Framework"],
    categories: ["B2B SaaS", "Startups"],
    heroMetric: "4x conversion boost",
    cover: "/placeholder.svg",
    slug: "vendosmart-sales-framework",
  },
  {
    id: "ai-voice-agent",
    name: "AI Voice Agent",
    tagline: "Building an AI-Powered Voice Assistant for Customer Support",
    metricLabel: "40% Cost Reduction",
    description:
      "Designed and shipped conversational AI agents that handle 10,000+ daily calls, reducing wait times from 15 mins to <1 min and saving $800K annually.",
    tech: ["OpenAI", "Twilio", "Python", "AWS Lambda"],
    categories: ["AI & Automation", "0→1 Products"],
    heroMetric: "$800K annual savings",
    cover: "/placeholder.svg",
    slug: "ai-voice-agent",
  },
  {
    id: "vendosmart-platform",
    name: "Vendosmart Platform",
    tagline: "Building a Manufacturing Marketplace from Scratch",
    metricLabel: "16x User Growth",
    description:
      "Built the entire platform from scratch as the first employee. Scaled from 5 to 80 buyers and 10 to 300 vendors by solving data normalization challenges.",
    tech: ["Angular", "Python", "Node.js", "MongoDB"],
    categories: ["B2B SaaS", "0→1 Products", "Startups"],
    heroMetric: "16x buyer growth",
    cover: "/placeholder.svg",
    slug: "vendosmart-platform",
  },
];

const OTHER_PROJECTS: ProjectSummary[] = [
  // {
  //   id: "gifting-registry",
  //   name: "Gifting Registry MVP",
  //   tagline: "100 users on Day 1",
  //   metricLabel: "100 early adopters",
  //   description: "Launched an MVP gifting platform in 72 hours with waitlist, notifications, and analytics.",
  //   tech: ["Next.js", "Supabase", "Stripe"],
  //   categories: ["0→1 Products", "Startups"],
  //   metricBadge: "Day 1 launch",
  // },
  // {
  //   id: "ai-agents",
  //   name: "18 Custom AI Agents",
  //   tagline: "Revenue ops, support, finance, HR",
  //   metricLabel: "18 automations",
  //   description: "Designed custom workflows that automate email triage, lead routing, and financial reconciliations.",
  //   tech: ["n8n", "Python", "LLMs"],
  //   categories: ["AI & Automation"],
  //   metricBadge: "Ops automation",
  // },
  // {
  //   id: "bfun",
  //   name: "BFun Gaming Zone",
  //   tagline: "Increased engagement by 25%",
  //   metricLabel: "25% engagement",
  //   description: "Gamified reward loops with quests, streaks, and retention cohorts for a Gen-Z audience.",
  //   tech: ["Firebase", "React", "Amplitude"],
  //   categories: ["Startups", "0→1 Products"],
  //   metricBadge: "Growth",
  // },
  // {
  //   id: "bewakoof",
  //   name: "Bewakoof Rewards System",
  //   tagline: "2% conversion lift",
  //   metricLabel: "2% lift",
  //   description: "Shipped a membership + rewards revamp that increased repeat purchase behavior.",
  //   tech: ["Segment", "Klaviyo", "React"],
  //   categories: ["B2B SaaS"],
  //   metricBadge: "Retention",
  // },
  // {
  //   id: "har-ghar-nal-jal",
  //   name: "Har Ghar Nal Jal Yojna",
  //   tagline: "IoT water monitoring",
  //   metricLabel: "State rollout",
  //   description: "Real-time monitoring dashboards for water infrastructure across rural India.",
  //   tech: ["IoT", "Grafana", "Python"],
  //   categories: ["B2B SaaS", "0→1 Products"],
  //   metricBadge: "Gov Tech",
  // },
  // {
  //   id: "rollz-india",
  //   name: "Rollz India LMS",
  //   tagline: "17% performance gain",
  //   metricLabel: "17% boost",
  //   description: "Optimised onboarding flows & analytics for a nationwide training LMS.",
  //   tech: ["Node.js", "Postgres", "React"],
  //   categories: ["B2B SaaS"],
  //   metricBadge: "LMS",
  // },
  // {
  //   id: "acap",
  //   name: "ACAP Solutions",
  //   tagline: "Assets compressed 54MB → 2MB",
  //   metricLabel: "54MB → 2MB",
  //   description: "Rebuilt deployment pipelines and progressive loading for a legacy engineering tool.",
  //   tech: ["Docker", "Python", "Svelte"],
  //   categories: ["0→1 Products", "B2B SaaS"],
  //   metricBadge: "Perf win",
  // },
  // {
  //   id: "others",
  //   name: "Plus more builds",
  //   tagline: "Products, prototypes, growth experiments",
  //   metricLabel: "Always shipping",
  //   description: "I tend to say yes to ambitious ideas—expect a conversation about the impact you want, not just features.",
  //   tech: ["Python", "React", "LLMs", "No-code"],
  //   categories: ["Startups", "AI & Automation"],
  //   metricBadge: "In progress",
  // },
];

// Featured Project Card Component
const FeaturedProjectCard = ({ project, index }: { project: FeaturedProject; index: number }) => {
  const navigate = useNavigate();
  const { isViewed } = useViewedProjects();
  const isHighlighted = useCardHighlight(project.id);
  const viewed = isViewed(project.slug);

  const handleClick = () => {
    trackProjectCardClick(project.id, project.name);
    navigate(`/work/${project.slug}`, { state: { fromProject: project.id } });
  };

  return (
    <motion.article
      id={`project-${project.id}`}
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "grid items-center gap-10 lg:grid-cols-[3fr,2fr] cursor-pointer group relative",
        isHighlighted && "ring-2 ring-[#7209B7] rounded-3xl shadow-[0_0_30px_rgba(114,9,183,0.5)]"
      )}
      onClick={handleClick}
    >
      {/* Visited Indicator */}
      {viewed && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7209B7]/90 backdrop-blur-sm"
        >
          <Eye className="h-3 w-3 text-white" />
          <span className="text-xs text-white font-medium">Viewed</span>
        </motion.div>
      )}

      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="order-2 overflow-hidden rounded-3xl border border-white/5 bg-[#1B2838] shadow-[0_20px_60px_rgba(6,12,24,0.45)] lg:order-1"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7209B7]/40 via-transparent to-[#06D6A0]/30" />
          <img src={project.cover ?? "/placeholder.svg"} alt={`${project.name} preview`} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>

      <div className="order-1 space-y-6 text-white lg:order-2">
        <p className="text-sm uppercase tracking-[0.3em] text-[#06D6A0]">{project.heroMetric}</p>
        <h3 className="font-display text-2xl group-hover:text-[#7209B7] transition-colors">{project.name}</h3>
        <p className="text-lg text-[#B0B8C1]">{project.tagline}</p>
        <div className="flex items-center gap-3 text-[#FFD700]">
          <span className="text-2xl font-display">{project.metricLabel}</span>
          <span className="text-sm uppercase tracking-[0.3em] text-white/50">Impact</span>
        </div>
        <p className="max-w-xl text-base leading-8 text-[#B0B8C1]">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#B0B8C1]">
              {tech}
            </span>
          ))}
        </div>
        <div className="inline-flex items-center gap-2 text-[#7209B7] group-hover:underline transition-colors">
          Read Full Story <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.article>
  );
};

const CaseStudies = () => {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const visibleFeatured = useMemo(() => {
    if (filter === "All") return FEATURED_PROJECTS;
    return FEATURED_PROJECTS.filter((project) => project.categories.includes(filter));
  }, [filter]);

  const visibleOthers = useMemo(() => {
    if (filter === "All") return OTHER_PROJECTS;
    return OTHER_PROJECTS.filter((project) => project.categories.includes(filter));
  }, [filter]);

  return (
    <section id="case-studies" className="relative bg-[#0D1B2A] py-20 md:py-[120px]">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(135deg, rgba(114,9,183,0.08) 0%, transparent 60%)" }} />
      <div className="container relative mx-auto px-6 md:px-24 max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-display text-[32px] md:text-[40px] text-white leading-tight"
        >
          Some Things I've Built (The Full Stories)
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {FILTERS.map((item) => {
            const isActive = item === filter;
            return (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={cn(
                  "rounded-full border px-6 py-2 text-sm uppercase tracking-[0.2em] transition-all duration-300",
                  isActive
                    ? "border-transparent bg-[#7209B7] text-white"
                    : "border-white/20 text-[#B0B8C1] hover:border-[#7209B7] hover:text-white",
                )}
              >
                {item}
              </button>
            );
          })}
        </motion.div>

        <div className="mt-20 space-y-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-featured`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-20"
            >
              {visibleFeatured.map((project, index) => (
                <FeaturedProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-grid`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="columns-1 gap-6 md:columns-2 lg:columns-3"
            >
              {visibleOthers.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-white/5 bg-[#1B2838]/80 p-6 shadow-[0_18px_50px_rgba(8,12,24,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-[#7209B7]"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#7209B7]/35 via-[#06D6A0]/25 to-transparent" />
                    <img src={project.cover ?? "/placeholder.svg"} alt={`${project.name} snapshot`} className="h-full w-full object-cover opacity-80" />
                  </div>
                  <div className="mt-6 space-y-3 text-white">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#FFD700]">
                      <span className="rounded-full border border-[#FFD700]/40 px-3 py-1">
                        {project.metricBadge ?? "Impact"}
                      </span>
                      <span>{project.metricLabel}</span>
                    </div>
                    <h4 className="font-display text-2xl">{project.name}</h4>
                    <p className="text-sm text-[#B0B8C1]">{project.tagline}</p>
                    <p className="text-sm leading-6 text-[#8A92A0]">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#B0B8C1]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

