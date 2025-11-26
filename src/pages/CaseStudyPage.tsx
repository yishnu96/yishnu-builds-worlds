import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Building2, ChevronLeft, ChevronRight, Share2, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { marked } from "marked";
import Breadcrumbs from "@/components/Breadcrumbs";
import SwipeHandler from "@/components/SwipeHandler";
import { useViewedProjects } from "@/hooks/useViewedProjects";
import { trackPageView, useTimeOnPage, useScrollDepth } from "@/lib/analytics";

// Direct imports of markdown files
import dflareRaw from '../../content/case-studies/building-daas-dflare.md?raw';
import vendosmartSalesRaw from '../../content/case-studies/vendosmart-sales-framework.md?raw';
import aiVoiceRaw from '../../content/case-studies/ai-voice-agent.md?raw';
import vendosmartPlatformRaw from '../../content/case-studies/vendosmart-platform-devlopment.md?raw';

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
  'dflare-daas-platform': parseCaseStudy(dflareRaw),
  'vendosmart-sales-framework': parseCaseStudy(vendosmartSalesRaw),
  'ai-voice-agent': parseCaseStudy(aiVoiceRaw),
  'vendosmart-platform': parseCaseStudy(vendosmartPlatformRaw),
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
      <div className="text-xs uppercase tracking-[0.3em] text-[#8A92A0] mb-3">
        On This Page
      </div>
      <ul className="space-y-1 border-l-2 border-white/10">
        {headings.map((heading) => (
          <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                "text-left text-[13px] transition-all duration-200 py-2 px-3 border-l-2 -ml-[2px] w-full",
                activeId === heading.id
                  ? "border-[#7209B7] text-white font-medium shadow-[0_0_8px_rgba(114,9,183,0.3)]"
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
  const { markAsViewed } = useViewedProjects();
  const { startTracking, stopTracking } = useTimeOnPage(slug || '');
  const { trackScroll } = useScrollDepth(slug || '');

  // Get adjacent case studies
  const currentIndex = slug ? CASE_STUDY_ORDER.indexOf(slug) : -1;
  const previousSlug = currentIndex > 0 ? CASE_STUDY_ORDER[currentIndex - 1] : null;
  const nextSlug = currentIndex < CASE_STUDY_ORDER.length - 1 ? CASE_STUDY_ORDER[currentIndex + 1] : null;
  const previousProject = previousSlug ? CASE_STUDIES[previousSlug] : null;
  const nextProject = nextSlug ? CASE_STUDIES[nextSlug] : null;

  useEffect(() => {
    // Scroll restoration is handled by useScrollRestoration hook in App.tsx
    // Don't manually scroll to top here as it interferes with user scrolling

    // Track page view and mark as viewed
    if (slug && caseStudy) {
      trackPageView(`/work/${slug}`, caseStudy.title);
      markAsViewed(slug);
      startTracking();
    }

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

    return () => {
      // Stop tracking time on page when component unmounts
      stopTracking();
    };
  }, [slug, caseStudy, markAsViewed, startTracking, stopTracking]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      trackScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScroll]);

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
    <SwipeHandler
      previousSlug={previousSlug}
      nextSlug={nextSlug}
      currentSlug={slug || ''}
    >
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

        {/* Mobile Back Button + Breadcrumbs */}
        <div className="lg:hidden sticky z-40 bg-[#0D1B2A]/95 backdrop-blur-md border-b border-white/5">
          <div className="container mx-auto px-6 py-3 space-y-3">
            <Link
              to="/#case-studies"
              state={{ fromProject: caseStudy ? CASE_STUDY_ORDER.find(s => CASE_STUDIES[s].title === caseStudy.title) : undefined }}
              className="flex items-center gap-2 text-[#B0B8C1] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Work</span>
            </Link>
            <Breadcrumbs currentPage={caseStudy?.title || ''} />
          </div>
        </div>

        {/* Desktop Breadcrumbs */}
        <div className="hidden lg:block bg-[#0D1B2A]/95 backdrop-blur-md border-b border-white/5">
          <div className="container mx-auto px-6 md:px-24 py-4">
            <Breadcrumbs currentPage={caseStudy?.title || ''} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Enhanced Background */}
          <div className="absolute inset-0 -z-10">
            <img
              src={caseStudy.featuredImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 via-[#0D1B2A]/85 to-[#0D1B2A]" />
            {/* Purple/Green gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(114,9,183,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(6,214,160,0.1),transparent_50%)]" />
          </div>

          <div className="container mx-auto px-6 text-center relative z-10 py-20 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              {/* Category Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {caseStudy.category.map((cat, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-[#7209B7]/40 bg-[#7209B7]/15 text-[#7209B7] backdrop-blur-sm"
                  >
                    {cat}
                  </motion.span>
                ))}
              </div>

              {/* Title - Responsive sizing */}
              <h1 className="font-display text-[32px] md:text-5xl lg:text-6xl text-white leading-tight mb-6 px-4">
                {caseStudy.title}
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl lg:text-2xl text-[#B0B8C1] mb-8 max-w-3xl mx-auto px-4">
                {caseStudy.tagline}
              </p>

              {/* Metric Badge - Smaller on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex flex-col items-center gap-2 px-6 md:px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md w-auto max-w-[200px] md:max-w-none shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                  {caseStudy.metricValue}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#B0B8C1]">
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

        {/* Main Content Area - Enhanced */}
        <section className="py-12 md:py-20 bg-[#0D1B2A]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[250px,1fr] gap-8 lg:gap-12 max-w-[1400px] mx-auto">
              <aside>
                <CaseStudySidebar htmlContent={htmlContent} />
              </aside>

              {/* Content wrapper with background */}
              <div className="bg-[#1B2838] rounded-2xl lg:rounded-tl-2xl p-5 md:p-10 lg:p-14 border border-white/5">
                <article
                  id="case-study-content"
                  className="prose prose-invert max-w-[700px] mx-auto
                    
                    /* Headings */
                    prose-headings:font-display prose-headings:text-white prose-headings:tracking-tight
                    prose-h1:text-[32px] md:prose-h1:text-3xl prose-h1:mt-20 prose-h1:mb-6 prose-h1:first:mt-0 prose-h1:leading-tight prose-h1:border-b prose-h1:border-gradient-to-r prose-h1:from-[#7209B7] prose-h1:to-transparent prose-h1:pb-4
                    prose-h2:text-2xl md:prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:leading-snug
                    prose-h3:text-xl md:prose-h3:text-1xl prose-h3:mt-10 prose-h3:mb-4
                    
                    /* Body text */
                    prose-p:text-base md:prose-p:text-lg prose-p:text-[#B0B8C1] prose-p:leading-[1.8] prose-p:mb-6
                    
                    /* Links */
                    prose-a:text-[#7209B7] prose-a:no-underline hover:prose-a:underline prose-a:transition-colors prose-a:duration-200
                    
                    /* Strong/Bold - White color */
                    prose-strong:text-white prose-strong:font-semibold
                    
                    /* Emphasis/Italic */
                    prose-em:text-[#B0B8C1] prose-em:italic
                    
                    /* Inline code */
                    prose-code:text-[#06D6A0] prose-code:bg-[#243447] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
                    
                    /* Code blocks */
                    prose-pre:bg-[#243447] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:my-6 prose-pre:p-4
                    
                    /* Blockquotes - Enhanced testimonials */
                    prose-blockquote:border-l-4 prose-blockquote:border-l-[#7209B7] prose-blockquote:bg-[#243447] prose-blockquote:px-6 prose-blockquote:py-5 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-white prose-blockquote:my-8 prose-blockquote:shadow-lg
                    prose-blockquote:before:content-[''] prose-blockquote:after:content-['']
                    
                    /* Lists - Purple bullets, better spacing */
                    prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-4
                    prose-li:text-[#B0B8C1] prose-li:text-base md:prose-li:text-lg prose-li:leading-[1.8] prose-li:pl-7 prose-li:relative
                    prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[0.65em] prose-li:before:w-2 prose-li:before:h-2 prose-li:before:rounded-full prose-li:before:bg-[#7209B7] prose-li:before:shadow-[0_0_8px_rgba(114,9,183,0.6)]
                    
                    /* Ordered lists */
                    prose-ol:pl-6 prose-ol:space-y-4
                    prose-ol>li:text-[#B0B8C1] prose-ol>li:text-base md:prose-ol>li:text-lg prose-ol>li:marker:text-[#7209B7] prose-ol>li:marker:font-bold
                    
                    /* Horizontal rules */
                    prose-hr:border-white/10 prose-hr:my-12
                    
                    /* Images */
                    prose-img:rounded-xl prose-img:shadow-2xl prose-img:border prose-img:border-white/10 prose-img:my-8
                    
                    /* Tables */
                    prose-table:border-collapse prose-table:w-full
                    prose-th:bg-[#243447] prose-th:text-white prose-th:font-semibold prose-th:p-3 prose-th:text-left
                    prose-td:border-t prose-td:border-white/10 prose-td:p-3 prose-td:text-[#B0B8C1]"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Share Section - Enhanced */}
        <section className="bg-[#0D1B2A] py-16 border-t border-[#3A4A5C]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-white mb-2">Found this helpful?</h3>
                <p className="text-base text-[#B0B8C1]">Share this case study with your network</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <motion.button
                  onClick={shareOnLinkedIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A66C2] text-white font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(10,102,194,0.5)] min-h-[44px]"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share on LinkedIn</span>
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] transition-opacity" />
                </motion.button>
                <motion.button
                  onClick={shareOnTwitter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1DA1F2] text-white font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(29,161,242,0.5)] min-h-[44px]"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share on Twitter</span>
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] transition-opacity" />
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Previous/Next Navigation - Enhanced */}
        {(previousProject || nextProject) && (
          <section className="bg-[#0D1B2A] py-16 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className={`grid gap-6 ${previousProject && nextProject
                ? 'md:grid-cols-2'
                : 'grid-cols-1 max-w-md mx-auto'
                }`}>
                {previousProject && previousSlug ? (
                  <Link
                    to={`/work/${previousSlug}`}
                    state={{ fromProject: slug }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1B2838] to-[#0D1B2A] hover:border-[#7209B7] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(114,9,183,0.3)]"
                  >
                    {/* Purple glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(114,9,183,0.1),transparent_70%)]" />
                    </div>

                    <div className="relative z-10 grid grid-cols-[100px,1fr] gap-5 p-6">
                      <div className="relative aspect-square w-[100px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#7209B7]/20 to-[#06D6A0]/10">
                        <img
                          src={previousProject.featuredImage}
                          alt={previousProject.title}
                          className="h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-sm text-[#8A92A0] mb-2">
                          <ChevronLeft className="h-4 w-4" />
                          <span className="uppercase tracking-wider">Previous Project</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-display text-white group-hover:text-[#7209B7] transition-colors">
                          {previousProject.title}
                        </h4>
                        <p className="text-sm text-[#B0B8C1] mt-1 line-clamp-1">
                          {previousProject.tagline}
                        </p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextProject && nextSlug ? (
                  <Link
                    to={`/work/${nextSlug}`}
                    state={{ fromProject: slug }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1B2838] to-[#0D1B2A] hover:border-[#7209B7] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(114,9,183,0.3)]"
                  >
                    {/* Purple glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(114,9,183,0.1),transparent_70%)]" />
                    </div>

                    <div className="relative z-10 grid grid-cols-[1fr,100px] gap-5 p-6">
                      <div className="flex flex-col justify-center text-right">
                        <div className="flex items-center justify-end gap-2 text-sm text-[#8A92A0] mb-2">
                          <span className="uppercase tracking-wider">Next Project</span>
                          <ChevronRight className="h-4 w-4" />
                        </div>
                        <h4 className="text-xl md:text-2xl font-display text-white group-hover:text-[#7209B7] transition-colors">
                          {nextProject.title}
                        </h4>
                        <p className="text-sm text-[#B0B8C1] mt-1 line-clamp-1">
                          {nextProject.tagline}
                        </p>
                      </div>
                      <div className="relative aspect-square w-[100px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#7209B7]/20 to-[#06D6A0]/10">
                        <img
                          src={nextProject.featuredImage}
                          alt={nextProject.title}
                          className="h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </SwipeHandler>
  );
};

export default CaseStudyPage;
