# Chaitanya Portfolio

Personal portfolio website for **Kadavakollu Chaitanya** — Software Engineer at Pocket Rocket Labs, showcasing professional experience, projects, achievements, and contact information.

## Live site

[https://chaitanya-portfolio-2es6.vercel.app/](https://chaitanya-portfolio-2es6.vercel.app/)

Push to `main` triggers a new Vercel deployment.

## Repository structure

```
chaitanya-portfolio/
├── chaitanyas-digital-canvas/   # Vite + React app (source code)
│   ├── src/
│   │   ├── data/portfolio.ts    # Portfolio content (edit here)
│   │   └── components/
│   └── package.json
├── vercel.json                  # Vercel build config (monorepo root)
└── .github/workflows/           # CI build on push
```

## Local development

**Requirements:** Node.js 18+ and npm

```sh
git clone https://github.com/chaitanya07422/chaitanya-portfolio.git
cd chaitanya-portfolio/chaitanyas-digital-canvas
npm ci
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Other commands

```sh
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Updating content

Most portfolio content lives in a single file:

`chaitanyas-digital-canvas/src/data/portfolio.ts`

Edit experience, projects, skills, bio, and contact details there, then commit and push.

## Tech stack

- **Framework:** React 18, TypeScript, Vite
- **UI:** shadcn/ui, Tailwind CSS, Radix UI
- **Animations:** Lottie React
- **Contact form:** EmailJS
- **Deploy:** Vercel

## Deployment

### Vercel (recommended)

The root `vercel.json` points build commands at `chaitanyas-digital-canvas/`:

- **Install:** `cd chaitanyas-digital-canvas && npm ci`
- **Build:** `cd chaitanyas-digital-canvas && npm run build`
- **Output:** `chaitanyas-digital-canvas/dist`

Alternatively, set **Root Directory** to `chaitanyas-digital-canvas` in Vercel project settings.

### GitHub Actions

CI runs on every push to `main` — installs dependencies and verifies the production build.

## Contact

- **Email:** kadavakolluchaitanya@gmail.com
- **LinkedIn:** [chaitanya-kadavakollu](https://linkedin.com/in/chaitanya-kadavakollu)
- **GitHub:** [chaitanya07422](https://github.com/chaitanya07422)
