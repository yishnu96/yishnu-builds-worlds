# Portfolio Website Style Guide
**Last Updated:** 2025-11-20
**Version:** 1.0.0

This document defines the design system standards for the Yishnu Portfolio Website. All components must strictly adhere to these specifications.

---

## Table of Contents
1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Icon Sizes](#icon-sizes)
5. [Button Hierarchy](#button-hierarchy)
6. [Shadow & Glow Effects](#shadow--glow-effects)
7. [Component Patterns](#component-patterns)
8. [CSS Variables Reference](#css-variables-reference)

---

## Color Palette

### Background Colors
**Use ONLY these two colors for backgrounds:**

```css
/* Primary Background - Main sections */
#0D1B2A (dark navy)
/* Usage: Hero, Achievements, Superpowers, SocialConnect, Footer */

/* Secondary Background - Cards and alternate sections */
#1B2838 (slate)
/* Usage: MetricsBar, Writing, Card containers */
```

**Pattern:** Alternate sections between `#0D1B2A` and `#1B2838` for visual rhythm.

### Accent Colors
```css
--accent-purple: #7209B7   /* Primary brand color, CTAs, links */
--accent-green:  #06D6A0   /* Success states, highlights */
--accent-orange: #F77F00   /* Primary CTA buttons, important metrics */
--accent-blue:   #0A2463   /* Rarely used, decorative only */
--gold:          #FFD700   /* Metrics ONLY (₹12 Cr, 6000 users) */
```

### Text Colors
```css
--text-primary:   #FFFFFF  /* Headings, important text */
--text-secondary: #B0B8C1  /* Body text, descriptions */
--text-muted:     #8A92A0  /* Fine print, captions */
```

### Usage Rules
- Never create custom background colors or gradients using intermediate shades
- Card gradients should transition FROM `#1B2838` TO `#0D1B2A`
- Text on dark backgrounds should use `#FFFFFF` or `#B0B8C1`
- Use gold color ONLY for key business metrics

---

## Typography

### Type Scale
```css
/* Headings */
H1: 48px bold          /* text-5xl */
H2: 40px bold          /* text-[32px] md:text-[40px] */
H3: 24px bold          /* text-2xl */
H4: 20px bold          /* text-xl */

/* Body Text */
Body:       18px regular, line-height 1.7  /* text-base md:text-lg */
Small:      16px regular                    /* text-sm */
Fine print: 14px regular                    /* text-xs */
```

### Font Families
```css
--font-display: 'Poppins', 'Inter', sans-serif  /* Headings */
--font-sans:    'Inter', system-ui, sans-serif  /* Body text */
--font-mono:    'JetBrains Mono', monospace     /* Code blocks */
```

### Implementation Example
```tsx
// H1 - Page title
<h1 className="font-display text-5xl md:text-5xl text-white leading-tight">

// H2 - Section headers
<h2 className="font-display text-[32px] md:text-[40px] text-white leading-tight">

// H3 - Card titles
<h3 className="font-display text-2xl text-white leading-tight">

// Body text
<p className="text-base md:text-lg leading-[1.7] text-[#B0B8C1]">
```

### Typography Rules
- H1 should remain constant at 48px across all breakpoints (no XL growth)
- H2 scales from 32px (mobile) to 40px (desktop)
- H3 remains constant at 24px across all breakpoints
- Line height for headings: 1.2 (tight)
- Line height for body: 1.7 (relaxed)

---

## Spacing System

### Section Padding
```css
Desktop:  py-20 md:py-[120px]  /* 80px mobile, 120px desktop */
Tablet:   py-20                 /* 80px */
Mobile:   py-20                 /* 80px */
```

**Exception:** Hero section can use custom padding for layout purposes.

### Card Padding
```css
Desktop:  p-10    /* 40px */
Tablet:   p-8     /* 32px - optional responsive adjustment */
Mobile:   p-6     /* 24px - optional responsive adjustment */
```

### Margin Scale
```css
--spacing-major:   60px  /* Between major sections/elements */
--spacing-related: 40px  /* Between related items */
--spacing-tight:   20px  /* Within card content */
```

### Grid Gaps
```css
Desktop:  gap-10    /* 40px */
Tablet:   gap-8     /* 32px */
Mobile:   gap-6     /* 24px */
```

### Usage Example
```tsx
// Section
<section className="bg-[#0D1B2A] py-20 md:py-[120px]">

// Card
<div className="p-10 rounded-3xl bg-[#1B2838]">

// Grid
<div className="grid gap-10 md:grid-cols-3">
```

---

## Icon Sizes

### Size Standards
```css
Section header emojis:  72px  /* text-[72px] */
Card/achievement emojis: 56px  /* text-[56px] */
Inline text emojis:     40px  /* text-[40px] */
Social media icons:     48px  /* h-12 w-12 (desktop) */
                        40px  /* h-10 w-10 (mobile/footer) */
```

### Implementation
```tsx
// Section header emoji (animated)
<motion.span className="inline-block text-[72px]" animate={...}>
  🚀
</motion.span>

// Card emoji
<div className="text-[56px]">🏛️</div>

// Inline emoji
<span className="text-[40px]">👋</span>

// Social icon
<Icon className="h-12 w-12 md:h-12 md:w-12" />  // Desktop
<Icon className="h-10 w-10" />                   // Footer/Mobile
```

### Icon Rules
- Never use Tailwind scale classes (text-6xl, text-5xl) for emojis - use exact pixel values
- Animated emojis must include `inline-block` class for proper animation
- Social media icons in cards: keep at 24-32px for visual balance
- Social media icons in buttons: 20-24px

---

## Button Hierarchy

### Three-Tier System

#### 1. PRIMARY BUTTONS
**Use for:** Main CTAs ("Let's Talk", "Download Resume", "Schedule a Call")

```tsx
<Button
  className="bg-gradient-to-r from-[#F77F00] to-[#F48C06] text-white shadow-[0_0_20px_rgba(247,127,0,0.35)] transition-transform hover:scale-105"
>
  Let's Talk
</Button>
```

**Style:**
- Gradient: `from-[#F77F00] to-[#F48C06]`
- Text: White
- Glow: `shadow-[0_0_20px_rgba(247,127,0,0.35)]`
- Hover: `scale-105`

#### 2. SECONDARY BUTTONS
**Use for:** Exploratory actions ("View My Work", "Or Just Say Hi")

```tsx
<Button
  variant="outline"
  className="border-[#7209B7] text-[#7209B7] hover:bg-[#7209B7] hover:text-white"
>
  View My Work
</Button>
```

**Style:**
- Border: 2px solid `#7209B7`
- Background: Transparent
- Text: `#7209B7`
- Hover: Fills with `#7209B7`, text becomes white

#### 3. TERTIARY LINKS
**Use for:** External links, "Read more" actions

```tsx
<a
  href="#"
  className="inline-flex items-center gap-2 text-[#7209B7] transition-colors hover:underline"
>
  Read Full Story →
</a>
```

**Style:**
- No background or border
- Text: `#7209B7`
- Arrow: `→` character (not icon)
- Hover: Underline

### Button Sizing
```css
Small:   size="sm"   /* Navigation, inline */
Default: size="md"   /* Standard */
Large:   size="lg"   /* Hero, CTAs (h-14 rounded-full) */
```

---

## Shadow & Glow Effects

### When to Use Glows
**ONLY apply glow effects to:**
1. Primary CTA buttons (orange gradient)
2. Key metric numbers (₹12 Cr, 6000 users)
3. Section divider elements (rarely)

### Glow Specifications
```css
/* CTA Button Glow */
shadow-[0_0_20px_rgba(247,127,0,0.35)]     /* Orange buttons */
shadow-[0_0_20px_rgba(114,9,183,0.35)]     /* Purple accents (rare) */

/* Metric Number Glow */
drop-shadow-[0_0_22px_rgba(255,215,0,0.35)]  /* Gold metrics */

/* Maximum specs */
Blur: 20px
Opacity: 30-40%
```

### Subtle Shadows (Non-Glow)
Use for cards and containers:
```css
/* Card shadows - subtle depth, NOT glow */
shadow-[0_10px_30px_rgba(3,10,22,0.15)]    /* Standard card */
shadow-[0_15px_40px_rgba(3,10,22,0.25)]    /* Elevated card */
```

### What NOT to Glow
- Regular cards
- Text elements (except key metrics)
- Icons (except on hover for CTAs)
- Emojis
- Filter buttons
- Navigation elements

---

## Component Patterns

### Card Pattern
```tsx
<div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#1B2838] to-[#0D1B2A] p-10 shadow-[0_10px_30px_rgba(3,10,22,0.15)]">
  {/* Card content */}
</div>
```

**Standards:**
- Border radius: `rounded-3xl` (24px)
- Border: `border-white/5` (very subtle)
- Background: Gradient from secondary to primary
- Padding: `p-10` (40px)
- Shadow: Subtle, no glow

### Section Pattern
```tsx
<section
  id="section-name"
  className="relative bg-[#0D1B2A] py-20 md:py-[120px]"
>
  {/* Optional gradient overlay */}
  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(...)]" />

  <div className="container relative mx-auto px-6 md:px-24 max-w-[1400px]">
    {/* Section content */}
  </div>
</section>
```

**Standards:**
- Always include `id` for navigation
- Use `relative` for overlay positioning
- Container max-width: `1400px`
- Horizontal padding: `px-6 md:px-24`

### Gradient Overlay Pattern
```tsx
{/* Subtle background accent - NO strong glows */}
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(114,9,183,0.22),transparent_55%)]" />
```

**Rules:**
- Opacity: 20-40%
- Color opacity in rgba: 0.15-0.25
- Transition to transparent: 50-60%

---

## CSS Variables Reference

From `src/index.css`:

```css
:root {
  /* Backgrounds */
  --background: 212 58% 13%;        /* #0D1B2A */
  --card: 214 37% 20%;              /* #1B2838 */

  /* Accents */
  --primary: 276 89% 39%;           /* #7209B7 (purple) */
  --secondary: 162 85% 45%;         /* #06D6A0 (green) */
  --accent: 31 96% 51%;             /* #F77F00 (orange) */
  --gold: 51 100% 51%;              /* #FFD700 */

  /* Text */
  --foreground: 0 0% 100%;          /* #FFFFFF */
  --muted-foreground: 214 17% 72%;  /* #B0B8C1 */

  /* Borders */
  --border: 214 23% 28%;

  /* Spacing */
  --radius: 1rem;                   /* 16px base radius */
}
```

---

## Implementation Checklist

When creating or updating a component:

- [ ] Background uses ONLY `#0D1B2A` or `#1B2838`
- [ ] Typography follows size scale (H2: 40px, H3: 24px)
- [ ] Section padding is `py-20 md:py-[120px]`
- [ ] Card padding is `p-10` (40px)
- [ ] Emojis use exact pixel sizes (72px, 56px, 40px)
- [ ] Buttons follow 3-tier hierarchy
- [ ] Glow effects ONLY on CTAs and key metrics
- [ ] Shadows are subtle (0.15-0.25 opacity) for non-CTA elements
- [ ] Gradients transition from `#1B2838` to `#0D1B2A`
- [ ] Grid gaps are consistent (40px desktop, 32px tablet, 24px mobile)

---

## Quick Reference

### Most Common Patterns

**Section:**
```css
className="bg-[#0D1B2A] py-20 md:py-[120px]"
```

**Card:**
```css
className="rounded-3xl bg-gradient-to-br from-[#1B2838] to-[#0D1B2A] p-10"
```

**H2:**
```css
className="font-display text-[32px] md:text-[40px] text-white"
```

**Primary Button:**
```css
className="bg-gradient-to-r from-[#F77F00] to-[#F48C06] text-white shadow-[0_0_20px_rgba(247,127,0,0.35)]"
```

**Tertiary Link:**
```css
className="text-[#7209B7] hover:underline"
```

---

## Version History

### v1.0.0 (2025-11-20)
- Initial style guide created
- Standardized 76+ design inconsistencies
- Enforced strict color palette
- Implemented 3-tier button system
- Reduced excessive glow effects
- Standardized icon sizes across all components
- Unified typography scale
- Documented all component patterns

---

**Maintained by:** Claude Code Design System
**Contact:** See DESIGN_AUDIT_REPORT.md for detailed findings
