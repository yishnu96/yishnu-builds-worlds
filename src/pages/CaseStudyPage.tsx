import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Building2, ChevronLeft, ChevronRight, Share2, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Case study data
const CASE_STUDIES = {
  "coredge-daas-platform": {
    title: "Coredge DaaS Platform",
    tagline: "How I Built a Cloud Platform Used by 6,000 People",
    metricValue: "6,000+",
    metricLabel: "Active Users",
    timeline: "Dec 2022 - May 2024",
    duration: "18 months",
    role: "Product Manager",
    company: "Coredge (Adani Group)",
    featuredImage: "/placeholder.svg",
    techStack: ["Kubernetes", "WebRTC", "GPU Instances", "React", "Linux", "Docker"],
    category: ["B2B SaaS", "0→1 Product", "Cloud"],
    content: `
## The Challenge

When I joined Coredge, they had a vision: productize their entire data center offering into a self-service cloud platform. The problem? No one had defined what "Desktop-as-a-Service" actually meant for enterprise customers.

**The Reality:** Enterprises were manually provisioning cloud desktops through support tickets. Average setup time? 15 minutes per desktop. This had to change.

### The Problem Statement

- **Manual Provisioning:** IT teams spending hours configuring individual desktops
- **No Self-Service:** Every request required human intervention
- **Poor UX:** Users had no visibility into their desktop status
- **Scalability Issues:** Process couldn't scale beyond 100-200 concurrent users

---

## My Approach

### Research & Discovery

I spent the first month understanding the pain points:

1. Interviewed 20+ enterprise IT admins
2. Shadowed support teams handling desktop requests
3. Analyzed competitor offerings (AWS WorkSpaces, Azure Virtual Desktop)
4. Mapped the entire user journey from request to usage

> "We need this yesterday. Manual provisioning is killing our productivity." — IT Director, Fortune 500 Company

### Prioritization Framework

I used the RICE scoring model to prioritize features:

- **Month 1-2:** Core MVP - Self-service provisioning, WebRTC streaming, basic monitoring
- **Month 3-4:** Enterprise Features - SSO integration, RBAC, audit logs, usage analytics
- **Month 5-6:** GPU Support - NVIDIA GPU instances for ML/AI workloads
- **Month 7-12:** Scale & Polish - Multi-region, auto-scaling, advanced networking

---

## What I Built

### 1. Self-Service Provisioning

Users can now spin up cloud desktops in under 3 minutes.

**Before:** 15-minute manual process involving support tickets, email approvals, and manual configuration by IT staff

**After:** 3-minute self-service flow with instant provisioning, automated setup, and real-time status updates

### 2. WebRTC Streaming

Implemented browser-based access (no downloads required) using WebRTC, TURN Servers, H.264 Encoding, and Adaptive Bitrate streaming.

### 3. GPU Instances

Added support for ML/AI workloads with real-time GPU utilization monitoring and training job performance analytics.

### Technical Decisions

**Kubernetes for Orchestration:** Chose K8s over custom scripts for scalability and reliability. This decision enabled us to scale from 10 to 6,000 concurrent users.

---

## The Results

### Key Metrics

- **6,000+** Active Users
- **3 min** Setup Time (from 15 min)
- **99.9%** Uptime SLA

### User Impact

- **Deployment Time:** Reduced from 15 minutes to 3 minutes (80% improvement)
- **User Satisfaction:** NPS score of 72 (considered excellent for B2B)
- **Support Tickets:** Dropped 60% after self-service launch

### Business Outcomes

- **Revenue:** Platform contributing to company's cloud revenue targets
- **Customer Retention:** 94% renewal rate among DaaS customers
- **Market Position:** Featured at Vibrant Gujarat Summit and GPAI conference

> "This platform is exactly what we needed. Setup that used to take our team hours now takes minutes." — CTO, Enterprise Customer (500+ seats)

---

## Key Learnings

### What Worked Well

1. **Early User Involvement:** Weekly feedback sessions with beta customers shaped the product
2. **Iterative Approach:** Shipping MVP in 90 days built momentum
3. **Documentation:** Invested heavily in docs, reducing support load by 60%

### What I'd Do Differently

1. **Earlier Performance Testing:** Hit scaling issues at 4,000 users that could've been caught earlier
2. **More Granular Analytics:** Should have instrumented user behavior from day one
3. **Pricing Strategy:** Initial pricing was too complex; simplified it in month 6

### Biggest Challenge

**WebRTC at Scale:** Getting real-time video streaming to work reliably for 6,000+ concurrent users across variable network conditions was brutally hard. Required 3 months of optimization.

### What I'm Proud Of

This wasn't just a product launch—it was a complete paradigm shift in how enterprises provision cloud infrastructure. We turned a 15-minute manual process into a 3-minute self-service flow that delights users.
    `,
  },
  "vendosmart-scale": {
    title: "VendoSmart Growth",
    tagline: "Scaling a B2B Vendor Management Platform from 50 to 500+ Users",
    metricValue: "10x",
    metricLabel: "User Growth",
    timeline: "Jun 2024 - Present",
    duration: "6 months",
    role: "Product Manager",
    company: "VendoSmart",
    featuredImage: "/placeholder.svg",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "SendGrid"],
    category: ["B2B SaaS", "Growth", "Scale"],
    content: `
## The Challenge

VendoSmart had product-market fit but was hitting growth walls. The platform was designed for early adopters, not enterprise scale.

**The Reality:** Customer onboarding took 2 weeks. Support tickets were growing 40% month-over-month. Churn was creeping up.

### The Problem Statement

- **Onboarding Friction:** New customers took 14+ days to see value
- **Manual Processes:** Account setup required extensive support involvement
- **Feature Gaps:** Enterprise customers needed SSO, audit logs, and advanced permissions
- **Performance Issues:** Platform slowed significantly above 100 concurrent users

---

## My Approach

### Research & Discovery

I conducted a comprehensive analysis:

1. Analyzed churned customer exit interviews
2. Mapped the entire onboarding journey with heatmaps and session recordings
3. Benchmarked against competitors (Coupa, SAP Ariba)
4. Interviewed 15 power users to understand their workflows

> "I love the product, but getting my team onboarded was painful. We almost gave up in week one." — Head of Procurement, Mid-Market Customer

### The ICE Framework

Used the ICE framework to prioritize initiatives:

- **Month 1:** Quick Wins - Self-service onboarding wizard, in-app tooltips, automated welcome sequence
- **Month 2:** Enterprise Features - SSO integration (Okta, Azure AD), role-based access control, audit logs
- **Month 3-4:** Performance & Scale - Database optimization, caching layer, CDN implementation
- **Month 5-6:** Growth Loops - Referral program, team collaboration features, integrations marketplace

---

## What I Built

### 1. Self-Service Onboarding

Completely redesigned the first-time user experience.

**Before:** 14-day onboarding with 5+ support calls, manual data import, and custom training sessions

**After:** 3-day self-service onboarding with interactive tutorials, automated data import, and contextual help

### 2. Enterprise Security Suite

Built enterprise-grade security features including Okta SSO, Azure AD, RBAC, Audit Logs, IP Allowlisting, and 2FA.

### 3. Performance Optimization

Achieved 3x performance improvement through:

- **Database:** Query optimization and connection pooling
- **Caching:** Redis layer for frequently accessed data
- **CDN:** CloudFront for static assets and API responses
- **Frontend:** Code splitting and lazy loading

---

## The Results

### Key Metrics

- **10x** User Growth
- **3 days** Time to Value (from 14)
- **78%** Onboarding Completion

### Business Impact

- **Onboarding Time:** Reduced from 14 days to 3 days (79% improvement)
- **Support Tickets:** Dropped 45% after self-service launch
- **Net Revenue Retention:** Improved from 95% to 112%

> "The new onboarding is incredible. Our team was productive within a week instead of a month." — VP of Operations, Enterprise Customer (200+ seats)

---

## Key Learnings

### What Worked Well

1. **Data-Driven Prioritization:** Session recordings revealed friction points we never anticipated
2. **Incremental Delivery:** Shipping every 2 weeks maintained momentum and allowed course correction
3. **Customer Co-Development:** Beta customers helped shape enterprise features

### What I'd Do Differently

1. **Earlier Performance Testing:** Should have load tested from day one
2. **More A/B Testing:** Relied too heavily on qualitative feedback
3. **Documentation:** Should have invested in docs earlier
    `,
  },
  "ai-voice-agent": {
    title: "AI Voice Agent",
    tagline: "Building an AI-Powered Voice Assistant for Customer Support",
    metricValue: "40%",
    metricLabel: "Cost Reduction",
    timeline: "Jan 2024 - Apr 2024",
    duration: "4 months",
    role: "Product Manager",
    company: "Stealth Startup",
    featuredImage: "/placeholder.svg",
    techStack: ["OpenAI", "Twilio", "Python", "FastAPI", "Redis", "AWS Lambda"],
    category: ["AI/ML", "0→1 Product", "Voice"],
    content: `
## The Challenge

A fast-growing e-commerce company was drowning in support calls. Their 50-person support team couldn't keep up with 10,000+ daily calls, leading to 15-minute average wait times.

**The Reality:** Customer satisfaction scores were plummeting. 30% of callers hung up before reaching an agent. The company was losing $2M annually in potential revenue from abandoned calls.

### The Problem Statement

- **Volume Overload:** 10,000+ daily calls with only 50 agents
- **Long Wait Times:** Average 15-minute hold time
- **High Abandonment:** 30% of callers hanging up
- **Repetitive Queries:** 60% of calls were for order status, returns, and FAQs

---

## My Approach

### Research & Discovery

Deep dive into the support operation:

1. Analyzed 1,000+ call recordings to categorize query types
2. Shadowed support agents for a week
3. Mapped the decision tree for common queries
4. Evaluated AI voice platforms (Twilio, Amazon Connect, Google CCAI)

> "Most of my calls are just people asking where their order is. I could handle 10x more complex issues if someone else handled the basics." — Senior Support Agent

### The AI Strategy

Rather than replacing agents, we augmented them:

- **Week 1-2:** Discovery & Design - Query analysis, conversation flows, success criteria definition
- **Week 3-6:** MVP Development - Order status bot, basic NLU, Twilio integration, escalation flows
- **Week 7-10:** Iteration - Return processing, FAQ handling, sentiment detection, human handoff
- **Week 11-16:** Scale & Optimize - Multi-language support, A/B testing, continuous learning pipeline

---

## What I Built

### 1. Intelligent Call Routing

AI determines intent within 10 seconds and routes appropriately.

**Before:** All calls go to general queue, 15-minute wait, agent manually determines intent

**After:** AI identifies intent in 10 seconds, handles 60% automatically, routes complex issues to specialists

### 2. Conversational Order Status

Natural language order tracking with OpenAI GPT-4, Twilio Voice, Speech-to-Text, and real-time processing.

### 3. Smart Escalation

AI knows when to hand off to humans. The system monitors caller frustration in real-time. If sentiment drops below threshold, it immediately offers human escalation—no dead ends.

---

## The Results

### Key Metrics

- **40%** Cost Reduction
- **< 1 min** Avg Wait Time (from 15 min)
- **60%** Auto-Resolution Rate

### Impact Summary

- **Wait Time:** Reduced from 15 minutes to under 1 minute
- **Call Abandonment:** Dropped from 30% to 8%
- **Agent Productivity:** Increased by 3x (handling complex issues only)
- **Customer Satisfaction:** NPS improved from 32 to 58

### Business Outcomes

- **Annual Savings:** $800K in support costs
- **Revenue Recovery:** $1.2M from reduced cart abandonment
- **Agent Retention:** Support team turnover dropped 40%

> "I actually enjoy my job now. I get to solve real problems instead of reading order numbers all day." — Support Agent

---

## Key Learnings

### What Worked Well

1. **Human-in-the-Loop:** AI augments, not replaces—agents are happier, customers better served
2. **Graceful Degradation:** When AI fails, seamless handoff to humans
3. **Continuous Learning:** Feedback loop improves accuracy weekly

### What I'd Do Differently

1. **Start Simpler:** Initial NLU was over-engineered; simpler rules worked better initially
2. **More Edge Case Testing:** Accents and background noise caused early issues
3. **Earlier Agent Buy-In:** Should have involved support team from day one

### Biggest Challenge

**Latency:** Getting response time under 2 seconds was critical for natural conversation. Required extensive optimization—caching common responses, streaming audio, and edge deployment.
    `,
  },
};

const CASE_STUDY_ORDER = ["coredge-daas-platform", "vendosmart-scale", "ai-voice-agent"];

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
const CaseStudySidebar = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const contentElement = document.getElementById("case-study-content");
    if (!contentElement) return;

    const headingElements = contentElement.querySelectorAll("h2, h3");
    const headingsData: { id: string; text: string; level: number }[] = [];

    headingElements.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

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
  const navigate = useNavigate();
  const caseStudy = slug ? CASE_STUDIES[slug as keyof typeof CASE_STUDIES] : null;

  // Get adjacent case studies
  const currentIndex = slug ? CASE_STUDY_ORDER.indexOf(slug) : -1;
  const previousSlug = currentIndex > 0 ? CASE_STUDY_ORDER[currentIndex - 1] : null;
  const nextSlug = currentIndex < CASE_STUDY_ORDER.length - 1 ? CASE_STUDY_ORDER[currentIndex + 1] : null;
  const previousProject = previousSlug ? CASE_STUDIES[previousSlug as keyof typeof CASE_STUDIES] : null;
  const nextProject = nextSlug ? CASE_STUDIES[nextSlug as keyof typeof CASE_STUDIES] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
              <CaseStudySidebar />
            </aside>

            <article
              id="case-study-content"
              className="prose prose-invert prose-lg max-w-[800px] prose-headings:font-display prose-headings:text-white prose-p:text-[#B0B8C1] prose-p:leading-relaxed prose-a:text-[#7209B7] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-[#06D6A0] prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-[#1B2838] prose-pre:border prose-pre:border-white/10 prose-blockquote:border-l-[#7209B7] prose-blockquote:bg-[#1B2838]/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-li:text-[#B0B8C1] prose-hr:border-white/10"
              dangerouslySetInnerHTML={{ __html: formatContent(caseStudy.content) }}
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

// Simple markdown to HTML converter
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr />')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // Wrap consecutive li elements in ul
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Ordered lists (numbered)
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    // Paragraphs (lines that aren't already wrapped)
    .split('\n\n')
    .map(block => {
      if (block.startsWith('<') || block.trim() === '') return block;
      return `<p>${block}</p>`;
    })
    .join('\n');
}

export default CaseStudyPage;
