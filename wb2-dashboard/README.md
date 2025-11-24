# WB2 BA Demo Day Dashboard

A fully responsive Next.js dashboard showcasing 16 World Build apps from the Buenos Aires Demo Day on November 15, 2025.

## Features

- **16 Mini Apps** across 5 categories
- **Category Filtering** with tab navigation
- **Light/Dark Mode** toggle with localStorage persistence
- **Utility vs Rewards Chart** using Chart.js scatter plot
- **Fully Responsive** - optimized for mobile, tablet, and desktop
- **Interactive Modal** explaining the Utility vs Rewards matrix
- **Modern UI** with Tailwind CSS

## Tech Stack

- **Next.js 14+** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Chart.js + react-chartjs-2**

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── components/
│   ├── AppCard.tsx           # App detail cards
│   ├── CategoryTabs.tsx      # Category filter tabs
│   ├── Header.tsx            # Dashboard header
│   ├── Modal.tsx             # Explanation modal
│   ├── ScatterChart.tsx      # Utility vs Rewards chart
│   └── ThemeToggle.tsx       # Light/dark mode toggle
├── data/
│   └── apps.ts               # All 16 apps data
├── hooks/
│   ├── useTheme.ts           # Theme management
│   └── useMediaQuery.ts      # Responsive breakpoints
├── types/
│   └── index.ts              # TypeScript interfaces
├── globals.css               # Global styles & theme
├── layout.tsx                # Root layout
└── page.tsx                  # Main dashboard page
```

## Categories

1. **Financial & Asset Management** (4 apps)
   - Stack'n Finance, Earn, Valor, Rick

2. **Prediction & Data Markets** (4 apps)
   - Ground Truth, PumPool, TBD, Fram3s

3. **Gaming, Entertainment & Education** (3 apps)
   - COLONY, Squadletics, Superstream

4. **Social & Identity Tools** (3 apps)
   - Human Labs, Whole World Catalog, Innermost

5. **Commerce & Attention** (2 apps)
   - Marketplace, MADS

## Responsive Design

- **Desktop** (>1024px): 4-column grid, max-width 1600px
- **Tablet** (768px-1024px): 2-column grid
- **Mobile** (<768px): Single column, optimized touch interactions

## Theme System

The dashboard supports light and dark modes with automatic system preference detection. Theme preference is saved to localStorage and persists across sessions.

## Deployment

This project is ready to deploy on:
- **Vercel** (recommended)
- **Replit**
- **Railway**
- Any Node.js hosting platform

No environment variables required - all data is static.

## License

Built for WB2 BA Demo Day 11.15.2025
