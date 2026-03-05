# Cura AI (Two-Page Marketing Site)

A small React + Vite site with two main pages (Home + About), a shared navigation bar and footer, Tailwind CSS utility styling, and the Outfit font.

## Pages

- / (Home)
- /about (About)

## Project structure

Key files:

- src/App.jsx routes
- src/main.jsx app bootstrap and router
- src/components/layout shared layout components
  - Navbar.jsx
  - Footer.jsx
  - SiteLayout.jsx
- src/pages page components
  - Home.jsx
  - About.jsx
  - NotFound.jsx

## Tailwind and font setup

- Tailwind is enabled via the Vite plugin.
- src/index.css imports Tailwind.
- Outfit is loaded in index.html (Google Fonts).
- tailwind.config.js sets the default sans font to Outfit.
- The top-level layout applies the sans font so all text uses Outfit.

## Color palette

The UI uses the following source colors (implemented as CSS variables in `src/index.css`):

- Pink: #FF3B8E
- Blue: #2E2FFF
- Red: #FF0000
- White: #FBFFFF
- Gray (translucent): #FFFFFF33
- Light-gray (translucent): #1617F51A
- Black: #0E1125

## Development

    npm install
    npm run dev

## Build

    npm run build
    npm run preview

## Deployment (SPA routing)

This site uses client-side routing (React Router). On static hosts you must rewrite all routes to index.html so direct links like /about work.

Netlify

- Build command: npm run build
- Publish directory: dist
- Add public/_redirects with this single line:

    /*  /index.html  200

Vercel

- Build command: npm run build
- Output directory: dist
- If deep links break, add vercel.json:

    {
      "rewrites": [{ "source": "/(.*)", "destination": "/" }]
    }

GitHub Pages

GitHub Pages is static-only and needs SPA handling.

- Simplest: use hash routing for deployment, or
- Use a 404.html fallback that routes to index.html (common SPA workaround).
