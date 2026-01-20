# Epic-Sound

A product-focused e-commerce frontend for a premium audio brand.

---

## Overview

This is a landing page and product catalog for Epic-Sound, a fictional headphone company. The goal was to build something that feels like a real brand site—not a demo, not a template.

The project started as a way to explore what it takes to make an e-commerce interface feel considered rather than generated. Most product sites lean too hard on trends or fall back on component library defaults. This one tries to avoid both.

It's a frontend-only build. No backend, no CMS. Just a clean React app that could realistically be handed to a marketing team or connected to an API later.

---

## Design Philosophy

The visual direction is intentionally restrained. A lot of headphone brands go heavy on dark themes and neon accents—this goes the opposite way. Warm neutrals, a single accent color, and typography that doesn't fight for attention.

A few specific decisions:

- **Reduced border radius.** Most component libraries default to rounded-xl everywhere. That's fine, but it starts to feel soft and indistinct. This uses tighter radii to give cards and buttons more structure.
- **Muted animations.** Scroll effects and hover states are present, but they're subtle. The floating product animation is slow enough to feel ambient rather than distracting.
- **Clear hierarchy.** Headlines are set in Outfit, body text in Inter. Weight distribution is deliberate—semibold for headings, medium for buttons, regular for everything else.

The goal was something that could work for a real client without needing a redesign in six months.

---

## Tech Stack

| Tool | Why |
|------|-----|
| **React 18** | Standard choice. Works well with the ecosystem I wanted. |
| **TypeScript** | Type safety for component props and context. Catches dumb mistakes. |
| **Vite** | Fast dev server, simple config. No reason to use anything heavier. |
| **Tailwind CSS** | Utility-first means fewer context switches. Customized the design tokens in the config. |
| **React Router** | Client-side routing. Nothing fancy, just works. |
| **Sonner** | Toast notifications. Lightweight, good defaults. |
| **Lucide** | Icon library. Consistent stroke weights, tree-shakeable. |

No state management library. Context handles cart and wishlist state—overkill solutions weren't needed for this scope.

---

## Project Structure

```
src/
├── assets/          # Static images (headphone, hero person)
├── components/      # Shared UI and page sections
│   └── ui/          # Base primitives (button, card, etc.)
├── contexts/        # Cart and wishlist state
├── hooks/           # Scroll animation, smooth scroll utilities
├── pages/           # Route-level components
├── lib/             # Utility functions
└── index.css        # Global styles, design tokens
```

Components are split between page sections (Hero, HotProducts) and reusable primitives (in `ui/`). Hooks handle scroll-triggered animations and navigation behavior. Design tokens live in `index.css` and `tailwind.config.ts`—both need to stay in sync when adding colors.

---

## Getting Started

```bash
# Clone the repo
git clone <repo-url>
cd epic-sound

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app runs at `localhost:5173` by default.

For production builds:

```bash
npm run build
npm run preview
```

---

## Development Notes

**Cart and wishlist are client-side only.** State resets on page refresh. This was intentional—the scope didn't include persistence, and localStorage felt like a half-measure without a real backend.

**Product data is hardcoded.** The AllProducts page generates 50 demo items programmatically. In a real scenario, this would come from an API or CMS.

**Scroll animations use Intersection Observer.** The `useScrollAnimation` hook triggers fade-in effects when elements enter the viewport. Thresholds are set low (0.1) to trigger early—feels more natural than waiting for elements to be fully visible.

**No dark mode toggle.** Dark mode variables exist in the CSS, but there's no UI to switch between them. The brand aesthetic works better in light mode, so that's where the effort went.

---

## Deployment

The project includes a `vercel.json` for single-page app routing. Deploy to Vercel with:

```bash
vercel --prod
```

Or connect the GitHub repo directly—Vercel auto-detects Vite projects.

For other platforms (Netlify, Cloudflare Pages), you'll need equivalent rewrite rules to handle client-side routing.

---

## Future Improvements

These are realistic next steps, not wishlist items:

- **Product filtering and sorting.** The All Products page has search and pagination, but no category or price filters.
- **Persistent cart.** Either localStorage with hydration checks, or a proper backend integration.
- **Image optimization.** Currently using static PNGs. Would benefit from responsive images and lazy loading beyond the browser default.
- **Accessibility audit.** Focus states and keyboard navigation exist but haven't been thoroughly tested. Screen reader behavior needs review.
- **CMS integration.** Sanity or similar for product data. Would make the demo more useful for showcasing content editing.

---

## License

MIT. Use it however you want. Attribution appreciated but not required.

---

Built as a portfolio piece and design exploration. If you're using this as a starting point, swap out the placeholder content and make it yours.
