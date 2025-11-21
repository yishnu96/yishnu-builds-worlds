import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Building2, ChevronLeft, ChevronRight, Share2, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { marked } from "marked";

// Direct imports of markdown files
import coredgeRaw from '../../content/case-studies/coredge-daas-platform.md?raw';
import vendosmartRaw from '../../content/case-studies/vendosmart-scale.md?raw';
import aiVoiceRaw from '../../content/case-studies/ai-voice-agent.md?raw';

interface CaseStudyData {
  title: string;
  tagline: string;
  slug: string;
  metricValue: string;
  metricLabel: string;
  timeline: string;
  duration: string;
  role: string;
  company: string;
  featuredImage: string;
  techStack: string[];
  category: string[];
  order: number;
  content: string;
}

// Simple browser-compatible frontmatter parser
function parseFrontmatter(rawContent: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = rawContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: rawContent };
  }

  const [, frontmatterStr, content] = match;
  const data: Record<string, any> = {};

  // Parse YAML-like frontmatter
  let currentKey = '';
  let inArray = false;
  let arrayValues: string[] = [];

  frontmatterStr.split('\n').forEach(line => {
    const trimmedLine = line.trim();

    // Array item
    if (trimmedLine.startsWith('- ') && inArray) {
      arrayValues.push(trimmedLine.slice(2).trim());
      return;
    }

    // End previous array if we hit a new key
    if (inArray && !trimmedLine.startsWith('- ') && trimmedLine.includes(':')) {
      data[currentKey] = arrayValues;
      inArray = false;
      arrayValues = [];
    }

    // Key-value pair
    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex > 0) {
      const key = trimmedLine.slice(0, colonIndex).trim();
      const value = trimmedLine.slice(colonIndex + 1).trim();

      if (value === '') {
        // Start of array
        currentKey = key;
        inArray = true;
        arrayValues = [];
      } else {
        // Simple value - remove quotes if present
        data[key] = value.replace(/^["']|["']$/g, '');
      }
    }
  });

  // Handle last array
  if (inArray) {
    data[currentKey] = arrayValues;
  }

  return { data, content };
}

// Parse a single case study
function parseCaseStudy(rawContent: string): CaseStudyData {
  const { data, content } = parseFrontmatter(rawContent);
  return {
    title: data.title || '',
    tagline: data.tagline || '',
    slug: data.slug || '',
    metricValue: data.metricValue || '',
    metricLabel: data.metricLabel || '',
    timeline: data.timeline || '',
    duration: data.duration || '',
    role: data.role || '',
    company: data.company || '',
    featuredImage: data.featuredImage || '/placeholder.svg',
    techStack: data.techStack || [],
    category: data.category || [],
    order: parseInt(data.order) || 999,
    content,
  };
}

// Parse all case studies
const CASE_STUDIES: Record<string, CaseStudyData> = {
  'coredge-daas-platform': parseCaseStudy(coredgeRaw),
  'vendosmart-scale': parseCaseStudy(vendosmartRaw),
  'ai-voice-agent': parseCaseStudy(aiVoiceRaw),
};

const CASE_STUDY_ORDER = Object.values(CASE_STUDIES)
  .sort((a, b) => a.order - b.order)
  .map(s => s.slug);

// Progress Bar Component
const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7209B7] via-[#06D6A0] to-[#F77F00] z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

// Sidebar Navigation
const CaseStudySidebar = ({ htmlContent }: { htmlContent: string }) => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Wait for content to be rendered
    const timer = setTimeout(() => {
      const contentElement = document.getElementById("case-study-content");
      if (!contentElement) return;

      const headingElements = contentElement.querySelectorAll("h2, h3");
      const headingsData: { id: string; text: string; level: number }[] = [];

      headingElements.forEach((heading) => {
        const id = heading.id || heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, '') || "";
        if (!heading.id) {
          heading.id = id;
        }

        headingsData.push({
          id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName[1]),
        });
      });

      setHeadings(headingsData);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-20% 0% -35% 0%" }
      );

      headingElements.forEach((heading) => observer?.observe(heading));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [htmlContent]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden lg:block">
      <div className="text-xs uppercase tracking-[0.3em] text-[#8A92A0] mb-4">
        On This Page
      </div>
      <ul className="space-y-2 border-l-2 border-white/10">
        {headings.map((heading) => (
          <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                "text-left text-sm transition-colors py-1 px-3 border-l-2 -ml-[2px]",
                activeId === heading.id
                  ? "border-[#7209B7] text-white font-medium"
                  : "border-transparent text-[#B0B8C1] hover:text-white hover:border-[#7209B7]/50"
              )}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [htmlContent, setHtmlContent] = useState("");
  const caseStudy = slug ? CASE_STUDIES[slug] : null;

  // Get adjacent case studies
  const currentIndex = slug ? CASE_STUDY_ORDER.indexOf(slug) : -1;
  const previousSlug = currentIndex > 0 ? CASE_STUDY_ORDER[currentIndex - 1] : null;
  const nextSlug = currentIndex < CASE_STUDY_ORDER.length - 1 ? CASE_STUDY_ORDER[currentIndex + 1] : null;
  const previousProject = previousSlug ? CASE_STUDIES[previousSlug] : null;
  const nextProject = nextSlug ? CASE_STUDIES[nextSlug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (caseStudy?.content) {
      // Configure marked to add IDs to headings
      const renderer = new marked.Renderer();
      const originalHeading = renderer.heading.bind(renderer);

      renderer.heading = ({ text, depth }: { text: string; depth: number }) => {
        const escapedText = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return `<h${depth} id="${escapedText}">${text}</h${depth}>`;
      };

      marked.setOptions({
        gfm: true,
        breaks: true,
        renderer,
      });

      setHtmlContent(marked.parse(caseStudy.content) as string);
    }
  }, [slug, caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-white mb-4">Case Study Not Found</h1>
          <Link to="/#case-studies" className="text-[#7209B7] hover:underline">
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${caseStudy.title} - ${caseStudy.tagline}`);
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const scrollToContent = () => {
    const contentElement = document.getElementById("case-study-content");
    contentElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <ProgressBar />

      {/* Back to Work Button */}
      <div className="fixed top-24 left-6 z-40 hidden lg:block">
        <Link
          to="/#case-studies"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#0D1B2A]/90 backdrop-blur-md text-[#B0B8C1] hover:text-white hover:border-[#7209B7] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back to Work</span>
        </Link>
      </div>

      {/* Mobile Back Button */}
      <div className="lg:hidden sticky top-20 z-40 bg-[#0D1B2A]/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-3">
          <Link
            to="/#case-studies"
            className="flex items-center gap-2 text-[#B0B8C1] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Work</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={caseStudy.featuredImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/80 via-[#0D1B2A]/70 to-[#0D1B2A]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {caseStudy.category.map((cat, index) => (
                <span
                  key={index}
                  className="text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-[#7209B7]/30 bg-[#7209B7]/10 text-[#7209B7]"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
              {caseStudy.title}
            </h1>

            <p className="text-xl md:text-2xl text-[#B0B8C1] mb-8 max-w-3xl mx-auto">
              {caseStudy.tagline}
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex flex-col items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.35)]">
                {caseStudy.metricValue}
              </div>
              <div className="text-sm uppercase tracking-[0.3em] text-[#B0B8C1]">
                {caseStudy.metricLabel}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#B0B8C1] hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-[0.4em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-[#1B2838] py-8 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
              <Calendar className="h-4 w-4 text-[#06D6A0]" />
              <span className="text-sm text-[#B0B8C1]">{caseStudy.timeline}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
              <Clock className="h-4 w-4 text-[#7209B7]" />
              <span className="text-sm text-[#B0B8C1]">{caseStudy.duration}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
              <User className="h-4 w-4 text-[#F77F00]" />
              <span className="text-sm text-[#B0B8C1]">{caseStudy.role}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
              <Building2 className="h-4 w-4 text-[#FFD700]" />
              <span className="text-sm text-[#B0B8C1]">{caseStudy.company}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {caseStudy.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-white/10 bg-white/5 text-[#B0B8C1]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[240px,1fr] gap-12 max-w-[1400px] mx-auto">
            <aside>
              <CaseStudySidebar htmlContent={htmlContent} />
            </aside>

            <article
              id="case-study-content"
              className="prose prose-invert prose-lg max-w-[800px] prose-headings:font-display prose-headings:text-white prose-p:text-[#B0B8C1] prose-p:leading-relaxed prose-a:text-[#7209B7] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-[#06D6A0] prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-[#1B2838] prose-pre:border prose-pre:border-white/10 prose-blockquote:border-l-[#7209B7] prose-blockquote:bg-[#1B2838]/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-li:text-[#B0B8C1] prose-hr:border-white/10"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="bg-[#1B2838] py-12 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display text-white mb-2">Found this helpful?</h3>
              <p className="text-[#B0B8C1]">Share this case study with your network</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>LinkedIn</span>
              </button>
              <button
                onClick={shareOnTwitter}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1DA1F2] text-white hover:bg-[#0d8bd9] transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>Twitter</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Previous/Next Navigation */}
      {(previousProject || nextProject) && (
        <section className="py-12 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              {previousProject && previousSlug ? (
                <Link
                  to={`/work/${previousSlug}`}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1B2838] to-[#0D1B2A] p-6 hover:border-[#7209B7] transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm text-[#8A92A0] mb-2">
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous Project</span>
                  </div>
                  <h4 className="text-xl font-display text-white group-hover:text-[#7209B7] transition-colors">
                    {previousProject.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}

              {nextProject && nextSlug ? (
                <Link
                  to={`/work/${nextSlug}`}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1B2838] to-[#0D1B2A] p-6 hover:border-[#7209B7] transition-colors text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-sm text-[#8A92A0] mb-2">
                    <span>Next Project</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <h4 className="text-xl font-display text-white group-hover:text-[#7209B7] transition-colors">
                    {nextProject.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CaseStudyPage;
