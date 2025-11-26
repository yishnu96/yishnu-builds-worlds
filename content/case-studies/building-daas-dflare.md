---
title: "DFlare Desktop-as-a-Service"
tagline: "From Zero Kubernetes Knowledge to Building a Platform Serving 6,000+ Users"
slug: "dflare-daas-platform"
metricValue: "6,000+"
metricLabel: "Active Users"
timeline: "Feb 2023 - Present"
duration: "18+ months"
role: "Product Manager"
company: "Coredge (Adani Group)"
featuredImage: "/placeholder.svg"
techStack:
  - Kubernetes
  - WebRTC
  - Prometheus
  - AWS S3
  - Linux
  - DevOps
category:
  - B2B/B2C SaaS
  - 0→1 Product
  - Cloud Infrastructure
order: 1
---

## The Challenge

February 2023. My founder called me into his office with a challenge: "Build a Desktop-as-a-Service platform from scratch."

**The Problem:** I was a product manager. I had never touched Kubernetes. I didn't know what a pod was, how clusters worked, or how to architect cloud infrastructure. Yet here I was, tasked with building a platform that could deliver full desktop environments over the internet.

### The Vision

The goal was ambitious: create a cloud desktop service that works on any device—mobile, TV, laptop, browser. Low bandwidth. Affordable pricing. Scalable to thousands of users. Think AWS WorkSpaces, but accessible to every Indian home.

**The Reality:** I was starting from zero. No Kubernetes knowledge. No cloud infrastructure experience. Just a vision and a team willing to take the leap.

---

## My Approach

### Month 1-2: Learning Kubernetes from Scratch

I spent the first 1.5 months learning the basics:
- What's a pod? What's a cluster?
- How does Kubernetes networking work?
- What's the difference between deployment and service?
- How do volumes and persistent storage work?

I wasn't trying to become an expert. I was trying to understand enough to ask smart questions and make informed product decisions.

**Resources:** Documentation, online courses, and most importantly—sitting with my DevOps team and asking endless questions.

### Month 3-4: Building the First MVPs

With a team of engineers, DevOps specialists, and designers, we started building:

- **MVP 1:** Basic desktop provisioning with Kubernetes
- **MVP 2:** WebRTC streaming for browser-based access
- **MVP 3:** User management and monitoring

Each iteration taught us something new. Launch times were slow. Storage was unreliable. But we were learning fast.

### Month 4-6: Refining Architecture

It took me four months to reach a point where I could confidently make architecture decisions. Not because I could code Kubernetes, but because I understood the constraints, trade-offs, and possibilities.

**My Role as PM:**
- Asked questions that forced engineers to rethink assumptions
- Researched competitor solutions and shared architectures
- Set ambitious targets that pushed the team
- Managed expectations without micromanaging implementation

---

## What I Built

### The Platform Takes Shape

By mid-2023, we had a working platform:

**User Flow:**
1. User selects desktop configuration (2 vCPU, 4GB RAM)
2. System provisions a Linux-based desktop (Windows/Mac-like UI)
3. Desktop accessible from any device via browser
4. Files persist across sessions
5. Real-time monitoring and analytics

**Tech Stack:**
- Kubernetes for orchestration
- WebRTC for low-latency streaming
- Prometheus for monitoring
- S3 integration for persistent storage

### Then JIO Happened

August 2023. JIO approached us to collaborate on bringing Desktop-as-a-Service to every Indian home through their Set-Top Box. 2 vCPU, 4GB RAM for ₹600/month. Massive scale.

**The Test:** They deployed our platform for testing. Then came the feedback that almost killed the deal.

### The Crisis

**Launch time: 50 minutes.**

JIO was ready to walk away. "No user will wait 50 minutes, even for first-time setup," they said. They gave us **one week** to fix it or the deal was off.

This wasn't just any customer. JIO represented 60-70% of our projected revenue.

### The Turnaround

I negotiated for four weeks. Then pushed the team harder than ever:

**The Challenge:**
- Completely redesign client-server architecture
- Dive deep into WebRTC optimization
- Rethink Kubernetes networking
- Test, iterate, deploy

**My Approach:**
- Daily standups to track progress
- Researched similar platforms and shared solutions
- Asked questions like "Why can't we connect PVC directly to the pod?" to spark ideas
- Managed JIO's expectations with weekly updates

**The Results:**
- **Initial Launch:** 50 minutes → 15 minutes → 3 minutes
- **Relaunch Time:** 1-2 minutes → 7-8 seconds
- **Target: 15 seconds. We delivered: 7 seconds.**

### Additional Optimizations

**1. Persistent Storage Problem**

Kubernetes pods are ephemeral. If a pod restarts or moves, storage gets destroyed. Users would lose their files.

**Solution:** Integrated S3-like storage that persists across pod relocations. Added S3 integration for enterprise customers.

**2. Bandwidth Optimization**

JIO needed the platform to work in rural India where internet is limited.

**Challenge:** Reduce from 1 Mbps to 120 Kbps
**Solution:** Compression, adaptive streaming, WebRTC tuning

**3. Monitoring & Reliability**

Built comprehensive monitoring with Prometheus:
- Frame rate (smooth experience?)
- Click responsiveness (interactions registering?)
- Cluster health (infrastructure stable?)
- Internet speed (bandwidth performance?)
- Uptime tracking

---

## The Results

### Scale & Adoption

- **6,000+ Active Users** across multiple customers
- **2,500-3,000 Users from JIO** alone
- **60-70% of Revenue** from JIO partnership
- **Multiple Deployment Models:** Cloud and on-premises for different customer segments

### Performance Metrics

- **Launch Time:** 50 minutes → 3 minutes (94% improvement)
- **Relaunch Time:** 1-2 minutes → 7-8 seconds (93% improvement)
- **Bandwidth:** 1 Mbps → 120 Kbps (88% reduction)
- **Beat Target:** Aimed for 15 seconds, delivered 7 seconds

### Business Impact

- **Won JIO** as anchor customer providing majority of revenue
- **Enabled mass adoption** of cloud desktops in India
- **Expanded customer base** beyond JIO to developers, AI/ML teams, enterprises
- **Proven scalability** supporting thousands of concurrent users

### Customer Segments

- **Consumer (via JIO):** Affordable desktops for every home
- **Enterprise:** Secure, scalable remote work solutions
- **Developers:** High-performance environments for AI/ML workloads

> "We were ready to walk away when launch time was 50 minutes. What they delivered in 4 weeks saved the partnership." — JIO Stakeholder

---

## Key Learnings

### What Worked

1. **Learning by doing** - I didn't wait to become a Kubernetes expert. I learned while building.
2. **Asking naive questions** - "Why can't we do X?" forced engineers to explain constraints and often led to breakthroughs.
3. **Research-driven PM** - Studying competitor architectures gave us shortcuts and avoided dead ends.
4. **Ambitious targets** - Setting 15-second goal pushed us to 7 seconds. Stretch goals work.
5. **Managing pressure** - Negotiating timelines with JIO while pushing the team created space for quality work.

### What I'd Do Differently

1. **Hire specialized expertise earlier** - Someone with deep client-server connection experience would have accelerated MVP development significantly.
2. **Explore OS licensing upfront** - We wanted Windows support but hit licensing issues late. Should have investigated earlier.
3. **Start with simpler architecture** - We over-engineered some components. Could have shipped MVP faster and iterated.
4. **Performance testing from day one** - Should have load-tested earlier instead of discovering scalability issues at 4,000 users.

### The Turning Point

When JIO gave us one week to fix 50-minute launch times, I had two choices: accept defeat or buy time. I negotiated for four weeks by showing incremental progress and managing expectations.

Those four weeks changed everything. We rebuilt the architecture, delivered 7-second launch times, and won JIO as our biggest customer.

**The Lesson:** As a PM, sometimes your job isn't to deliver faster—it's to create the conditions for your team to deliver right.

### Learning Complex Technology as a PM

Going from "What's a pod?" to making Kubernetes architecture decisions in four months taught me:

- **You don't need to be the expert** - You need to ask the right questions
- **Research is your superpower** - Understanding how others solved similar problems accelerates everything
- **Trust but verify** - Trust engineers' expertise, but verify you understand the trade-offs
- **Focus on outcomes** - Users don't care about your tech stack. They care about launch time and reliability.

### The Hardest Part

Managing JIO's expectations while pushing the engineering team felt like being squeezed from both sides. JIO wanted it faster. Engineers needed time to rebuild properly.

My job was to hold that tension without breaking either relationship. Communicate progress. Show movement. Buy time when needed. Push when possible.

We delivered. JIO became our biggest customer. Engineers respected that I fought for the time they needed.

---

## What I'm Proud Of

I was handed an impossible task: build a Desktop-as-a-Service platform without knowing Kubernetes. 

I learned a complex technology stack from scratch. Built and iterated on MVPs. Managed a crisis when our biggest customer almost walked away. Delivered a platform now serving 6,000+ users with 7-second launch times.

This wasn't just a product launch. It was a masterclass in learning under pressure, managing stakeholder expectations, and delivering outcomes that matter when the stakes are real.

**The founder bet on me to build something from nothing. We delivered a platform that changed how thousands of users access computing.**