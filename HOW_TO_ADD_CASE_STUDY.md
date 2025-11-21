# How to Add a New Case Study

This guide explains how to add a new case study to your portfolio.

## Step 1: Create the Markdown File

Create a new `.md` file in `content/case-studies/` folder:

```bash
content/case-studies/your-project-slug.md
```

## Step 2: Add Frontmatter

Add YAML frontmatter at the top of your markdown file:

```yaml
---
title: "Your Project Title"
tagline: "A compelling one-line description"
slug: "your-project-slug"
metricValue: "100%"
metricLabel: "Key Metric"
timeline: "Jan 2024 - Present"
duration: "6 months"
role: "Product Manager"
company: "Company Name"
featuredImage: "/placeholder.svg"
techStack:
  - React
  - Node.js
  - PostgreSQL
category:
  - B2B SaaS
  - 0→1 Product
order: 4
---
```

**Field Descriptions:**
- `title`: The project name (shown in hero)
- `tagline`: Short compelling description
- `slug`: URL-friendly identifier (must be unique)
- `metricValue`: Big number to highlight (e.g., "10x", "500+", "40%")
- `metricLabel`: What the metric represents
- `timeline`: Date range of the project
- `duration`: How long it took
- `role`: Your role on the project
- `company`: Company name
- `featuredImage`: Path to hero image
- `techStack`: Array of technologies used
- `category`: Array of categories (for filtering)
- `order`: Display order (lower = shown first)

## Step 3: Write Your Content

Write your case study content in Markdown below the frontmatter:

```markdown
## The Challenge

Describe the problem you were solving...

### Problem Statement

- **Point 1:** Description
- **Point 2:** Description

> "A compelling quote from a stakeholder" — Name, Title

---

## My Approach

Explain your methodology...

### What I Built

Detail the solution...

---

## The Results

Show the impact...

### Key Metrics

- **Metric 1:** Value
- **Metric 2:** Value

---

## Key Learnings

Share insights...
```

**Markdown Features Supported:**
- Headers: `## H2` and `### H3` (automatically added to sidebar)
- Bold: `**text**`
- Italic: `*text*`
- Links: `[text](url)`
- Lists: `- item`
- Blockquotes: `> quote`
- Horizontal rules: `---`
- Code: `` `code` `` and ``` code blocks ```

## Step 4: Import in CaseStudyPage.tsx

Open `src/pages/CaseStudyPage.tsx` and add your import:

```typescript
// Add this with other imports at the top
import yourProjectRaw from '../../content/case-studies/your-project-slug.md?raw';
```

Then add it to the CASE_STUDIES object:

```typescript
const CASE_STUDIES: Record<string, CaseStudyData> = {
  'coredge-daas-platform': parseCaseStudy(coredgeRaw),
  'vendosmart-scale': parseCaseStudy(vendosmartRaw),
  'ai-voice-agent': parseCaseStudy(aiVoiceRaw),
  'your-project-slug': parseCaseStudy(yourProjectRaw), // Add this line
};
```

## Step 5: Add Card to Portfolio (Optional)

If you want this project featured on the homepage, edit `src/components/CaseStudies.tsx`:

### For Featured Projects:

Add to the `FEATURED_PROJECTS` array:

```typescript
{
  id: "your-project",
  name: "Your Project Title",
  tagline: "Your tagline",
  metricLabel: "Key Metric",
  description: "Brief description for the card",
  tech: ["React", "Node.js"],
  categories: ["B2B SaaS", "0→1 Products"],
  heroMetric: "100+ users",
  cover: "/placeholder.svg",
  slug: "your-project-slug", // Must match your .md file slug
},
```

### For Other Projects:

Add to the `OTHER_PROJECTS` array:

```typescript
{
  id: "your-project",
  name: "Your Project Title",
  tagline: "Your tagline",
  metricLabel: "Key Metric",
  description: "Brief description",
  tech: ["React", "Node.js"],
  categories: ["B2B SaaS"],
  metricBadge: "0→1",
},
```

## Step 6: Test

1. Run the dev server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:8081/work/your-project-slug`

3. Check:
   - ✅ Content displays correctly
   - ✅ Sidebar navigation appears
   - ✅ Headings are clickable in sidebar
   - ✅ Previous/Next navigation works
   - ✅ Share buttons work

## Step 7: Build

Build for production:

```bash
npm run build
```

## Tips

1. **Images**: Place images in `public/` and reference as `/images/filename.png`
2. **Order**: Lower `order` values appear first (1, 2, 3...)
3. **Slug**: Keep slugs short, lowercase, hyphenated
4. **Metrics**: Choose impactful numbers that tell your story
5. **Headings**: Use H2 for main sections, H3 for subsections (both appear in sidebar)

## Example Structure

```
## The Challenge         <- Appears in sidebar
### Problem Statement    <- Appears in sidebar (indented)
## My Approach           <- Appears in sidebar
### Research             <- Appears in sidebar (indented)
## The Results           <- Appears in sidebar
### Key Metrics          <- Appears in sidebar (indented)
## Key Learnings         <- Appears in sidebar
```
