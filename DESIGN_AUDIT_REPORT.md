# Design Audit Report - Yishnu Portfolio Website
**Date:** 2025-11-20
**Auditor:** Claude Code

## Executive Summary
Comprehensive audit of design inconsistencies across the portfolio website. Found significant issues in 6 major categories affecting 14 component files. This report documents all findings with file locations and recommended fixes.

---

## 1. BACKGROUND COLOR INCONSISTENCIES

### Standard Colors (Target)
- **Primary Background:** `#0D1B2A` (dark navy)
- **Secondary Background:** `#1B2838` (slate)
- **Pattern:** Alternating sections should use #0D1B2A, card containers #1B2838

### Issues Found

#### ✅ CORRECT IMPLEMENTATIONS
- `MetricsBar.tsx:77` - Uses `bg-[#1B2838]`
- `Achievements.tsx:122` - Uses `bg-[#0D1B2A]`
- `Superpowers.tsx:66` - Uses `bg-[#0D1B2A]`
- `PersonalPhoto.tsx:5` - Uses `bg-background` (CSS variable = #0D1B2A)
- `IBuildStuff.tsx:22` - Uses `bg-card` (CSS variable)
- `SocialConnect.tsx:77` - Uses `bg-[#0D1B2A]`
- `Navigation.tsx:123` - Uses `bg-[#0D1B2A]/95`

#### ❌ INCONSISTENCIES REQUIRING FIXES

**Achievements.tsx:47**
- Current: `from-[#1B2838] via-[#121D2C] to-[#0D1B2A]`
- Issue: Extra intermediate color `#121D2C`
- Fix: Simplify to `from-[#1B2838] to-[#0D1B2A]`

**Superpowers.tsx:14-24** (3 cards)
- Current: Multiple non-standard gradient colors
  - `from-[#1B2838] via-[#152235] to-[#0F1D2F]`
  - `from-[#0F1F2F] via-[#0D1B2A] to-[#0B2D2A]`
  - `from-[#1A2535] via-[#0D1B2A] to-[#2A1F15]`
- Fix: All should use `from-[#1B2838] to-[#0D1B2A]`

**EngineerPM.tsx:20**
- Current: `from-[#08101F] via-[#0D1B2A] to-[#091325]`
- Issue: Non-standard colors `#08101F`, `#091325`
- Fix: `from-[#0D1B2A] via-[#1B2838] to-[#0D1B2A]`

**EngineerPM.tsx:43**
- Current: `bg-[#0F192A]/90`
- Fix: `bg-[#1B2838]/90`

**EngineerPM.tsx:53,76**
- Current: `bg-[#0A1524]/80`
- Fix: `bg-[#0D1B2A]/80`

**CaseStudies.tsx:163**
- Current: `bg-[#0A1730]`
- Fix: `bg-[#0D1B2A]`

**CaseStudies.tsx:223**
- Current: `bg-[#101E33]`
- Fix: `bg-[#1B2838]`

**CaseStudies.tsx:277**
- Current: `bg-[#101E33]/80`
- Fix: `bg-[#1B2838]/80`

**Writing.tsx:76**
- Current: `bg-[#152235]`
- Fix: `bg-[#1B2838]`

**Writing.tsx:18,23** (2 card gradients)
- Current: Non-standard gradient colors
- Fix: Both should use `from-[#1B2838] to-[#0D1B2A]`

**SocialConnect.tsx:114**
- Current: `bg-[#101E33]/80`
- Fix: `bg-[#1B2838]/80`

**TheClose.tsx:13**
- Current: `from-[#06101F] via-[#0D1B2A] to-[#050B15]`
- Fix: `from-[#0D1B2A] via-[#1B2838] to-[#0D1B2A]`

**Footer.tsx:35**
- Current: `bg-[#0A1524]`
- Fix: `bg-[#0D1B2A]`

**Total Issues:** 17 instances across 8 files

---

## 2. GLOW EFFECTS - EXCESSIVE USAGE

### Standard (Target)
**ONLY apply glow to:**
- Primary CTA buttons (orange, purple)
- Key metric numbers (₹12 Cr, 6000 users)
- Section divider elements

**Glow specs:** `box-shadow` with 15-20px blur, 30-40% opacity

### Issues Found

#### ✅ CORRECT USAGE (Keep These)
- Navigation buttons (primary CTAs) - ✅
- Hero button glows - ✅
- Metric number glows in MetricsBar - ✅
- SocialConnect CTA buttons - ✅
- TheClose CTA buttons - ✅

#### ❌ REMOVE GLOW EFFECTS

**Achievements.tsx:18,22,26**
- Current: Cards have `hover:shadow-[0_0_15px_#...]`
- Issue: Regular cards shouldn't have glow on hover
- Fix: REMOVE hover glow classes

**Achievements.tsx:68**
- Current: Emoji has `drop-shadow-[0_8px_30px_rgba(114,9,183,0.35)]`
- Fix: REMOVE drop-shadow

**Superpowers.tsx:15,19,23**
- Current: Cards have `shadow-[0_25px_60px_rgba(...,0.35)]`
- Issue: Shadows too strong for non-CTA elements
- Fix: Reduce to `shadow-[0_10px_30px_rgba(...,0.15)]` (subtle, not glow)

**Superpowers.tsx:37**
- Current: Cards have `hover:shadow-[0_0_15px_var(--shadow-color)]`
- Fix: REMOVE this hover effect

**EngineerPM.tsx:43**
- Current: `shadow-[0_25px_80px_rgba(3,10,22,0.6)]`
- Fix: Reduce to `shadow-[0_15px_40px_rgba(3,10,22,0.25)]`

**EngineerPM.tsx:54**
- Current: Animated `boxShadow` on code block
- Fix: REMOVE animation

**PersonalPhoto.tsx:24**
- Current: Photo has `shadow-[0_0_60px_rgba(114,9,183,0.4)]`
- Fix: Reduce to `shadow-[0_15px_40px_rgba(114,9,183,0.2)]`

**Writing.tsx:19,24**
- Current: Cards have `shadow-[0_25px_60px_rgba(...)]`
- Fix: Reduce to `shadow-[0_10px_30px_rgba(...,0.15)]`

**Writing.tsx:40**
- Current: Emoji has `drop-shadow-[0_12px_45px_rgba(114,9,183,0.25)]`
- Fix: REMOVE drop-shadow

**IBuildStuff.tsx:47,100**
- Current: Cards have `shadow-[0_20px_60px_rgba(...,0.2)]` with hover increase to 0.4
- Fix: Reduce to `shadow-[0_10px_30px_rgba(...,0.15)]` and remove hover increase

**CaseStudies.tsx:192**
- Current: Filter button has glow when active
- Fix: Replace glow with simple background color

**Total Issues:** 15+ instances across 7 files

---

## 3. ICON SIZE INCONSISTENCIES

### Standard (Target)
- **Section header emojis:** 72px
- **Card/achievement emojis:** 56px
- **Inline text emojis:** 40px
- **Social media icons:** 48px (desktop), 40px (mobile)

### Issues Found

#### ❌ INCORRECT SIZES

**Hero.tsx:60**
- Current: Wave emoji (no fixed size, inline animation)
- Fix: Add `text-[40px]` class

**Achievements.tsx:131**
- Current: Section header rocket emoji (animated, no size specified)
- Fix: Add `text-[72px]` class

**Achievements.tsx:68**
- Current: Card emojis use `text-6xl` (60px)
- Fix: Change to `text-[56px]`

**Superpowers.tsx:50,54**
- Current: Card emojis in container `text-5xl` (48px)
- Fix: Change to `text-[56px]`

**PersonalPhoto.tsx:28**
- Current: Placeholder emoji `text-6xl` (60px)
- Fix: Change to `text-[56px]` (card context)

**PersonalPhoto.tsx:46**
- Current: Inline emoji in heading (no size)
- Fix: Add `text-[40px]`

**PersonalPhoto.tsx:85**
- Current: Quick stat emojis `text-2xl` (24px)
- Fix: Change to `text-[40px]`

**Writing.tsx:40,86**
- Current: Section emojis `text-5xl` (48px)
- Fix: Change to `text-[72px]`

**IBuildStuff.tsx:50,103,32**
- Current: Section emojis `text-6xl` (60px)
- Fix: Change to `text-[72px]`

**SocialConnect.tsx:87**
- Current: Section header emoji (animated, no size)
- Fix: Add `text-[72px]`

**SocialConnect.tsx:117**
- Current: Social icons `h-6 w-6` (24px)
- Fix: Change to `h-12 w-12` (48px desktop), add responsive `h-10 w-10` mobile

**TheClose.tsx:76**
- Current: Inline emoji (no size)
- Fix: Add `text-[40px]` inline class

**Footer.tsx:68**
- Current: Social icons `h-4 w-4` (16px)
- Fix: Change to `h-10 w-10` (40px for footer)

**Total Issues:** 20+ instances across 8 files

---

## 4. BUTTON HIERARCHY INCONSISTENCIES

### Standard (Target)

**PRIMARY:** Filled gradient (coral orange `#F77F00`), white text, glow effect
- Use for: "Let's Talk", "Download Resume", "Schedule a Call"

**SECONDARY:** Outline 2px purple (`#7209B7`), transparent bg, purple text, hover fills purple
- Use for: "View Work", "Read More" (exploration)

**TERTIARY:** Text link with arrow (→), purple color, underline on hover
- Use for: "Read on Medium →", "View GitHub →" (external links)

### Issues Found

#### ❌ INCORRECT BUTTON STYLES

**Navigation.tsx:88-97**
- Current: "Download Resume" uses outline with `border-primary`
- Context: Should be PRIMARY (major CTA)
- Fix: Change to gradient orange with glow

**Hero.tsx:91-98**
- Current: "View My Work" uses outline purple ✅ CORRECT (SECONDARY)

**CaseStudies.tsx:187-197**
- Current: Filter buttons use gradient when active with glow
- Issue: Not CTAs, shouldn't have strong styling
- Fix: Active state should be subtle purple background, no glow

**CaseStudies.tsx:248-253**
- Current: "Read Full Story" uses outline with `border-primary`
- Issue: This is a navigation link, not major CTA
- Fix: Convert to TERTIARY style (text + arrow)

**Writing.tsx:61-69**
- Current: "Read more" uses outline purple
- Fix: Convert to TERTIARY style (text + arrow)

**IBuildStuff.tsx:80-86,133-139**
- Current: "View All Automations" / "View GitHub Profile" use outline
- Fix: Convert to TERTIARY style (text + arrow)

**TheClose.tsx:93-101**
- Current: "Or Just Say Hi" uses outline orange
- Issue: Should use consistent SECONDARY style (purple)
- Fix: Change to outline purple

**Total Issues:** 8+ button instances across 5 files

---

## 5. SPACING INCONSISTENCIES

### Standard (Target)
- **Section vertical padding:** 120px (desktop), 80px (tablet), 60px (mobile)
- **Card padding:** 40px (desktop), 30px (tablet), 20px (mobile)
- **Major element margins:** 60px
- **Related item margins:** 40px
- **Grid gaps:** 40px (desktop), 30px (tablet), 20px (mobile)

### Issues Found

#### ✅ MOSTLY CORRECT
Most sections correctly use `py-20 md:py-[120px]` pattern

#### ❌ INCONSISTENCIES

**EngineerPM.tsx:20**
- Current: `py-24 md:py-32` (96px mobile, 128px desktop)
- Fix: Change to `py-20 md:py-[120px]` (80px mobile, 120px desktop)

**Card padding is generally consistent at `p-10` (40px) ✅**

**Total Issues:** 1 major instance

---

## 6. TYPOGRAPHY INCONSISTENCIES

### Standard (Target)
- **H1 (page title):** 48px bold
- **H2 (section headers):** 40px bold
- **H3 (card titles):** 24px bold
- **Body:** 18px regular, line-height 1.7
- **Small text:** 16px
- **Fine print:** 14px

### Issues Found

#### ❌ SIZE INCONSISTENCIES

**H1 Issues:**
**Hero.tsx:63**
- Current: `text-5xl md:text-6xl xl:text-[72px]` (48/60/72px)
- Issue: Goes too large on XL screens
- Fix: Cap at 48px → `text-5xl md:text-5xl` (48px consistent)

**H2 Issues (Multiple files - all too large):**
- **Achievements.tsx:129**: `text-4xl md:text-5xl` (36/48px) → Fix: `text-[32px] md:text-[40px]`
- **Superpowers.tsx:74**: Same issue
- **EngineerPM.tsx:30**: Same issue
- **CaseStudies.tsx:171**: Same issue
- **Writing.tsx:84**: Same issue
- **TheClose.tsx:25**: `text-4xl md:text-6xl` (36/60px) → Fix: `text-[32px] md:text-[40px]`

**H3 Issues (Multiple files - all too large):**
- **Achievements.tsx:71**: `text-3xl md:text-[34px]` (30/34px) → Fix: `text-2xl md:text-2xl` (24px)
- **Superpowers.tsx:57**: `text-2xl md:text-3xl` (24/30px) → Fix: `text-2xl` (24px consistent)
- **EngineerPM.tsx:111**: `text-3xl md:text-[38px]` → Fix: `text-2xl`
- **CaseStudies.tsx:233**: `text-3xl md:text-[40px]` → Fix: `text-2xl`
- **Writing.tsx:41**: `text-3xl` (30px) → Fix: `text-2xl` (24px)

**Body text is generally correct at base 18px ✅**

**Total Issues:** 15+ instances across 8 files

---

## Summary Statistics

| Category | Files Affected | Total Issues |
|----------|---------------|--------------|
| Background Colors | 8 | 17 |
| Glow Effects | 7 | 15+ |
| Icon Sizes | 8 | 20+ |
| Button Hierarchy | 5 | 8 |
| Spacing | 1 | 1 |
| Typography | 8 | 15+ |
| **TOTAL** | **14 unique files** | **76+ issues** |

---

## Priority Recommendations

### HIGH PRIORITY (Visual Impact)
1. Fix background color inconsistencies (creates visual fragmentation)
2. Reduce excessive glow effects (currently overwhelming)
3. Standardize typography hierarchy (affects readability)

### MEDIUM PRIORITY (Polish)
4. Implement consistent button hierarchy (improves UX clarity)
5. Standardize icon sizes (visual consistency)

### LOW PRIORITY (Already mostly correct)
6. Minor spacing adjustments (only 1 issue found)

---

## Next Steps
1. Implement fixes systematically by category
2. Create reusable CSS classes for common patterns
3. Update style guide documentation
4. Test responsive behavior across breakpoints
