# Yash Pandit — Portfolio

A fast, developer-flavoured personal portfolio: dark/light themes, a Three.js
particle hero, Framer Motion animations, terminal accents, an animated skills
deck, and per-page generated Open Graph images.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Custom CSS** with CSS variables (themeable dark/light)
- **Framer Motion** — scroll + interaction animations
- **React Three Fiber / Three.js** — hero particle background
- **EmailJS** (server-side via REST) + **Cloudflare Turnstile** — contact form + anti-spam
- **Vercel Analytics**
- Deployed on **Vercel**

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your values
npm run dev                  # http://localhost:3000
```

## Environment variables

See [`.env.example`](./.env.example). The contact form needs EmailJS credentials
(including the **private key**, since sending is server-side) and, optionally,
Cloudflare Turnstile keys for the captcha. Leave the Turnstile keys blank to fall
back to honeypot-only spam protection.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint with ESLint |

## Project structure

```
app/          routes, metadata, OG images, /api/contact
components/    UI components (Hero, Skills, Projects, Contact, …)
data/          projects, skills, and icon-slug content
lib/           site config (URL, identity)
public/        images, logos, resume
```

## Deploy

Deploys on [Vercel](https://vercel.com). Add the same environment variables from
`.env.example` in the Vercel project settings before the first production build.
