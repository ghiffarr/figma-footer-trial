# Responsive UI Trial

A frontend implementation exercise using React, TypeScript, and CSS, starting from a Figma footer reference. This repository explores turning a design into a responsive webpage.

**[View demo](https://figma-footer-trial.vercel.app/)**

## Project scope

A UI implementation trial focused on component structure, layout, spacing, typography, and responsive styling. The project started with a footer section and later included updates to the homepage top section. It is a frontend demonstration, with no backend workflow documented here.

## Tech stack

- React and TypeScript for the interface
- CSS for styling
- Vite for local development and production builds
- ESLint for code checks
- Vercel for the hosted demo

## Run locally

Install Node.js and npm, then run these commands from the repository root:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run TypeScript build checks and generate the production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the generated build locally |

## Repository guide

- `src/` — React source and styles
- `public/` — Static assets
- `vite.config.ts` — Vite configuration
- `package.json` — Dependencies and scripts

## Review the interface

When making UI changes, check desktop, tablet, and mobile layouts, including text wrapping, spacing, and horizontal overflow.
