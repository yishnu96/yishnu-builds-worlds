---
title: "Coredge DaaS Platform"
tagline: "How I Built a Cloud Platform Used by 6,000 People"
slug: "coredge-daas-platform"
metricValue: "6,000+"
metricLabel: "Active Users"
timeline: "Dec 2022 - May 2024"
duration: "18 months"
role: "Product Manager"
company: "Coredge (Adani Group)"
featuredImage: "/placeholder.svg"
techStack:
  - Kubernetes
  - WebRTC
  - GPU Instances
  - React
  - Linux
  - Docker
category:
  - B2B SaaS
  - 0→1 Product
  - Cloud
order: 1
---

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
