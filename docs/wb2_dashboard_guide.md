# WB2 BA Demo Day Dashboard - Development Guide

## Context
- You are building the WB2 BA Demo Day Nov 15 2025 dashboard
- WB2 = World Build 2, BA = Buenos Aires
- This is a **web application** built with Next.js/React + TypeScript + Tailwind CSS
- **Fully mobile responsive** - optimized for mobile, tablet, and desktop
- The dashboard displays 16 mini apps built on World App platform
- Features include: category filtering, light/dark mode, utility vs rewards visualization, and detailed app cards

---

## Data Structure
Each app has:
- name: string
- category: "Financial & Asset Management" | "Prediction & Data Markets" | "Gaming, Entertainment & Education" | "Social & Identity Tools" | "Commerce & Attention"
- description: string
- tag: string (product category like "RWA investments", "micro-lending", etc.)
- metric: string (suggested key metrics for growth)
- utilityScore: number (0-100)
- rewardsScore: number (0-100)
- appLink: string | null (World App ecosystem link)
- demoLink: string | null (YouTube/Loom pitch video)
- team: string (founder names)

---

## Features

### 1. Navigation Tabs
- All Apps (shows all 16 apps)
- Financial & Asset Management (4 apps)
- Prediction & Data Markets (4 apps)
- Gaming, Entertainment & Education (3 apps)
- Social & Identity Tools (3 apps)
- Commerce & Attention (2 apps)
- Utility vs Rewards (scatter plot visualization)

### 2. App Cards
Each card displays:
- App name (18px, bold)
- Product category tag (red text, light red background with border)
- Description
- Team members (small italic gray text: "Team: [names]")
- App/Demo buttons with external link icons (if links exist)
- Suggested key metrics for growth
- Utility score and Rewards score

### 3. Utility vs Rewards Chart
- Scatter plot using Chart.js
- X-axis: Utility Score (0-100%)
- Y-axis: Rewards Dependency (0-100%)
- Color-coded by category
- "What does this mean?" button that opens explanatory modal
- Modal explains the four quadrants and what investors look for

### 4. Theme Toggle
- Light/dark mode switch in header
- Persists preference to localStorage
- Smooth transitions between themes

---

## Design Requirements

### Header
- Title: "WB2 BA DEMO DAY 11.15.2025"
- Right side: "APPS: 16" + Theme toggle button (☀️ Light Mode / 🌙 Dark Mode)
- **Mobile:** Stack vertically, center align, smaller font sizes

### Color Palette
**Dark Mode (default):**
- Background: #0a0a0a
- Cards: #141414
- Borders: #1f1f1f
- Text: #e5e5e5
- Muted text: #888
- Tags: #fef2f2 background, #fecaca border, #dc2626 text
- Accent: #7c3aed (purple)
- Status: #10b981 (green)

**Light Mode:**
- Background: #ffffff
- Cards: #ffffff
- Borders: #e5e5e5
- Text: #1a1a1a
- Muted text: #666
- Tags: same as dark mode
- Accent/Status: same as dark mode

### Typography
- Font: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- App names: 18px desktop, 16px mobile, font-weight 600
- Body text: 13-14px desktop, 12-13px mobile
- Tags: 12px desktop, 11px mobile
- Metrics label: 10px uppercase

### Responsive Layout

**Desktop (> 1024px)**
- Max width: 1600px centered
- Grid: repeat(auto-fill, minmax(300px, 1fr))
- Padding: 30px 40px
- Tabs: Horizontal scroll if needed

**Tablet (768px - 1024px)**
- Grid: repeat(auto-fill, minmax(280px, 1fr))
- Padding: 20px 30px
- Tabs: Horizontal scroll

**Mobile (< 768px)**
- Grid: Single column (1fr)
- Padding: 20px
- Header: Stack title and status vertically
- Tabs: Horizontal scroll with touch
- Cards: Full width
- Modal: Full screen on mobile
- Chart: Reduce height to 400px

### Card Styling
- Padding: 20px desktop, 16px mobile
- Border-radius: 8px
- Hover: translateY(-2px) with border color change (disabled on touch devices)

### Interactive Elements
- Tabs: Active tab has purple bottom border (#7c3aed)
- **Mobile tabs:** Swipeable horizontal scroll, snap to center
- Cards: Hover effect with slight lift (desktop only)
- Buttons: Purple bordered with fill on hover
- External link icons: SVG inline, 12px × 12px
- Modal: Backdrop blur with centered content, full screen on mobile

---

## Technical Requirements

### Dependencies
- React 18+
- TypeScript
- Tailwind CSS
- Chart.js + react-chartjs-2 (for scatter plot)
- No localStorage for data (just for theme preference)

### Responsive Design with Tailwind
Use Tailwind breakpoints:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

Example classes:
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Padding: `px-4 md:px-8 lg:px-10`
- Text: `text-sm md:text-base`

### File Structure
```
/app
  - page.tsx (main dashboard)
  - components/
    - AppCard.tsx
    - CategoryTabs.tsx
    - ScatterChart.tsx
    - Modal.tsx
    - ThemeToggle.tsx
    - Header.tsx
  - data/
    - apps.ts (app data array)
  - types/
    - index.ts (TypeScript interfaces)
  - hooks/
    - useMediaQuery.ts (responsive breakpoint detection)
```

### Key Interfaces
```typescript
interface App {
  name: string;
  category: Category;
  description: string;
  tag: string;
  metric: string;
  utilityScore: number;
  rewardsScore: number;
  appLink: string | null;
  demoLink: string | null;
  team: string;
}

type Category = 
  | "Financial & Asset Management"
  | "Prediction & Data Markets"
  | "Gaming, Entertainment & Education"
  | "Social & Identity Tools"
  | "Commerce & Attention";
```

### Chart Configuration
- Use Chart.js scatter plot
- Points: 6-8px radius desktop, 5-6px mobile, 8-12px on hover
- Grid lines: Match theme (#1f1f1f dark, #e5e5e5 light)
- Tooltips: Show app name + scores
- Legend: Show categories with color coding, responsive font sizes
- Responsive: maintainAspectRatio: false
  - Desktop: height: 600px
  - Mobile: height: 400px

---

## Mobile-Specific Features

### Touch Interactions
- Tab navigation: Horizontal scroll with smooth snap
- Cards: Remove hover effects, use active states
- Modal: Swipe down to close (optional enhancement)
- Links: Larger tap targets (min 44px × 44px)

### Performance
- Lazy load chart when tab is active
- Optimize images if any are added
- Minimize re-renders on tab change
- Use CSS transitions instead of JavaScript animations

### Accessibility
- Ensure all interactive elements are keyboard accessible
- ARIA labels on buttons and tabs
- Focus states visible on all interactive elements
- Semantic HTML (header, nav, main, section)
- Color contrast meets WCAG AA standards

---

## Important Details

1. **LIVE status**: All apps show green dot + "LIVE" text in card header
2. **External links**: Open in new tabs (target="_blank")
3. **Tag styling**: Light red background (#fef2f2), red border (#fecaca), red text (#dc2626)
4. **No arrow separator**: App name and tag are on separate lines
5. **Modal**: Explains utility vs rewards matrix, quadrants, and investor perspective
6. **Responsive**: Mobile-first approach, grid adjusts to single column on mobile
7. **Theme persistence**: Use localStorage key "theme" with values "light" or "dark"
8. **Touch-friendly**: All buttons and links have adequate tap targets (min 44px)

---

## Deploy

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Deploy on Vercel (Recommended)
1. Push code to GitHub repository
2. Import repository on Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy with one click
5. Environment variables: None needed (all data is static)
6. **Mobile testing:** Use Vercel's preview deployments to test on real devices

### Alternative: Deploy on Railway
1. Install Railway CLI: `npm install -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Deploy: `railway up`
5. Add start command in railway.json:
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm run start",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

---

## Testing Checklist

### Responsive Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad (Safari)
- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Test tab scrolling on narrow screens
- [ ] Test modal on mobile (full screen)
- [ ] Test chart readability on small screens
- [ ] Verify touch targets are >= 44px
- [ ] Test landscape and portrait orientations

### Functionality Testing
- [ ] Theme toggle works and persists
- [ ] All tabs filter correctly
- [ ] External links open in new tabs
- [ ] Modal opens and closes properly
- [ ] Chart displays correctly in both themes
- [ ] Cards display all information correctly

---

## Notes
- All app data is static (no API calls)
- Chart re-renders on theme change for proper colors
- Modal closes on backdrop click or X button
- Tab state is not persisted (always opens on "All Apps")
- External link icon is inline SVG (no image dependencies)
- Dashboard title: "WB2 BA DEMO DAY 11.15.2025" (World Build 2, Buenos Aires, November 15, 2025)
- **Mobile-first CSS:** Write mobile styles first, then add responsive breakpoints
- **Performance:** Aim for <3s initial load time on 3G networks
