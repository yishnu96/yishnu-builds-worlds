---
title: "Vendosmart Platform Development"
tagline: "Building a Manufacturing Marketplace from Scratch as the First Employee"
slug: "vendosmart-platform"
metricValue: "16x"
metricLabel: "User Growth"
timeline: "Sep 2021 - May 2022"
duration: "8 months"
role: "Founding Member (Product & Engineering)"
company: "Vendosmart"
featuredImage: "/placeholder.svg"
techStack:
  - Angular
  - Python
  - Node.js
  - MongoDB
  - AWS
  - Prometheus
category:
  - B2B SaaS
  - 0→1 Product
  - Full-Stack
order: 4
---

## The Challenge

I joined Vendosmart as the first employee when it was just an idea and a basic UI. The vision was ambitious: build a marketplace that transforms how manufacturers turn CAD designs into physical products.

**The Reality:** Manufacturing companies were drowning in Excel sheets, email chains, and phone calls. Finding vendors took weeks. Managing orders was chaos. Getting reliable analytics? Forget it.

### The Core Problem

Buyers were losing weeks searching for vendors, floating RFQs manually, and tracking orders through email. Vendors were spending hours generating quotations and struggling to find new business. Both sides lacked visibility, analytics, and trust.

**The Competition:** SAP and other enterprise tools existed, but they were complex, expensive, and didn't solve the core workflow problems. Companies were buying these tools and then bypassing them because they were too painful to use.

---

## My Approach

### Starting from Zero

As the first employee and founding member, I wore multiple hats. My time split: 60% engineering, 40% product, with some sales mixed in. The goal was simple: build something people would actually use.

### Deep User Research

I spent the first few weeks talking directly to buyers and vendors. Not surveys. Not focus groups. Real conversations about their daily pain points.

Between the founding team and myself, we conducted 15-20+ customer interviews. I personally led 2-3 in-depth sessions with buyers to understand their workflow.

**The Insight:** The problem wasn't just connecting buyers and vendors. It was normalizing chaos into something usable.

### The Technical Reality

Every manufacturing company had their vendor data in Excel sheets. Different column names. Different formats. Different rules. Some had 10 columns, others had 50. One company called it "Vendor Name," another called it "Supplier ID."

We needed to take this mess and create a unified system that could perform operations, generate analytics, and provide real visibility.

---

## What I Built

### 1. Complete Platform Overhaul

When I joined, Vendosmart had a basic UI and not much else. I rebuilt the entire platform from scratch:

- **RFQ Process:** End-to-end request for quotation workflow
- **Quotation System:** Vendor quotation generation and comparison
- **Order Management:** Real-time order tracking and status updates
- **Analytics Dashboard:** Data visualization and insights for decision-making

### 2. The Data Normalization Engine

This was the hardest technical problem we faced. Companies had vendor data in dozens of different formats. We built a system to:

- Import Excel sheets with any column structure
- Map disparate data fields to our unified schema
- Clean and validate data automatically
- Make it queryable and analytics-ready

**The Challenge:** No two Excel sheets were the same. We had to handle hundreds of edge cases while keeping the UX simple.

### 3. Mobile-First Vendor Onboarding

Vendors weren't sitting at desks. They were in factories. We rebuilt the entire vendor onboarding flow to be mobile-friendly, reducing friction and increasing completion rates.

### 4. Tech Stack Decisions

We chose Angular for the frontend (built for large-scale applications), Python and Node.js for the backend, MongoDB and SQL for databases, and Prometheus for time-series analytics.

**In Retrospect:** We should have gone with React instead of Angular for faster iteration. We also over-engineered our analytics stack—spent too much time building custom solutions when off-the-shelf tools would have been faster.

---

## The Results

### Platform Growth

- **Buyers:** Grew from 5 to 80 (16x growth)
- **Vendors:** Scaled from 10 to 300 (30x growth)
- **Platform:** Complete rebuild from basic UI to full-featured marketplace

### User Impact

- **Vendor Discovery:** Reduced from weeks to minutes
- **RFQ Process:** Streamlined from email chains to structured workflows
- **Order Visibility:** Real-time tracking replaced manual follow-ups
- **Analytics:** First-time access to vendor performance data

### Technical Wins

- Successfully normalized data from 80+ different Excel formats
- Built scalable infrastructure supporting 300+ concurrent vendors
- Created mobile-friendly flows that vendors actually used
- Delivered analytics that changed how buyers made sourcing decisions

> "For the first time, I can actually see which vendors deliver on time and which ones don't. This data alone is worth it." — Procurement Manager, Mid-Size Manufacturer

---

## Key Learnings

### What Worked

1. **User research drove everything** - Building features users asked for, not features we thought were cool
2. **Starting simple** - We didn't try to solve every problem at once. We nailed the RFQ workflow first.
3. **Full-stack ownership** - Being hands-on with both product and engineering meant faster decisions and tighter feedback loops

### Technical Mistakes

1. **Over-engineered analytics** - Built custom solutions when simpler tools existed. Wasted 2-3 weeks that could have been spent on core features.
2. **Wrong frontend framework** - Angular was powerful but slowed us down. React would have been better for our team size and iteration speed.
3. **Tried to solve too much at once** - Should have focused on one killer feature and nailed it before expanding

### What I'd Do Differently

If I were starting over, I'd spend the first month building one perfect workflow—just the RFQ process—and get 10 companies using it daily. Then expand. We spread ourselves too thin trying to build everything at once.

### Biggest Challenge

Data normalization almost killed us. Every company's Excel sheet was a special snowflake. We spent 40% of our engineering time just handling data import edge cases. The lesson: standardization sounds boring, but it's what makes products actually useful.

### What I'm Proud Of

We took an industry that ran on Excel and phone calls and brought it into the digital age. The platform wasn't perfect, but it worked. Buyers found vendors faster. Vendors got more business. And for the first time, both sides had data to make better decisions.

As the first employee, I helped build Vendosmart from a basic UI to a platform serving hundreds of users. That's the kind of 0→1 journey that teaches you more than any class or book ever could.