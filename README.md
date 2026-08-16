# Avio — Landing Page

A landing page for **Avio**, a health testing and biomarker insights service. Built with React, Vite, and Tailwind CSS as part of a group academic project.

## What it does

Avio's landing page walks a visitor through the product story from top to bottom:

- **Navbar** — sticky top navigation with links and a "Get Started" call to action
- **Hero** — headline, key feature highlights, and an activity-score visual
- **Programs** — overview of the testing programs Avio offers
- **Insights** — how the biomarker insights and reporting work
- **Pricing** — plan/feature breakdown (testing, insights & action plan, 1:1 consultation)
- **Membership Grid** — membership options laid out in a grid
- **Footer** — closing links and info

## Tech stack

- **React 19** — UI components
- **Vite** — dev server and build tool
- **Tailwind CSS** — loaded via CDN in `index.html` (no build-step config needed)
- **lucide-react** — icons used throughout the page

## Project structure

```
src/
├── components/       # Page sections (Navbar, Hero, Programs, Insights, Pricing, MembershipGrid, Footer)
├── ui/               # Small reusable UI pieces (Button, Badge)
├── App.jsx           # Assembles all the sections into the full page
├── main.jsx          # React entry point
├── index.css         # Global styles and CSS variables
└── App.css           # App-level styles
public/
├── favicon.svg
└── icons.svg
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build     # Build for production
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Notes

- This project is a **frontend-only landing page** — there's no backend or database wired up yet. Buttons like "Get Started" and "Login" are currently placeholders.
- Tailwind is included via the CDN script tag in `index.html`, so there's no `tailwind.config.js` to set up.
- Code is written to be beginner-friendly, with plain comments explaining what each section and value is doing (e.g. the ring math in `Hero.jsx`).
