# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router architecture with React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Architecture

### App Router Structure
- Uses Next.js App Router (`app/` directory)
- `app/layout.tsx`: Root layout with font configuration (Geist Sans and Geist Mono)
- `app/page.tsx`: Home page component
- `app/globals.css`: Global styles with Tailwind CSS v4 and CSS variables for theming

### TypeScript Configuration
- Path alias `@/*` maps to project root (tsconfig.json:22)
- Strict mode enabled
- Uses React JSX transform (`jsx: "react-jsx"`)

### Styling
- Tailwind CSS v4 with PostCSS integration
- Custom CSS variables for background/foreground colors with dark mode support
- Geist font family loaded via `next/font/google`
- Dark mode uses `prefers-color-scheme` media query

### ESLint
- Uses new ESLint flat config format (eslint.config.mjs)
- Configured with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Implementation Details

- **Font Loading**: Fonts are loaded and configured in app/layout.tsx:5-13 using CSS variables
- **Theming**: Color theme system uses CSS variables in globals.css:3-20 with automatic dark mode
- **Image Optimization**: Uses Next.js `<Image>` component for optimized image loading
