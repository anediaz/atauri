# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Atauri" is a multilingual React application showcasing two main sections: Gatza and Araotz. It's a portfolio-style website with photo galleries powered by Flickr API integration. The site is deployed to GitHub Pages and supports Basque (eu), English (en), Spanish (es), and French (fr) languages.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Testing

The project uses Vitest with jsdom environment:
- Tests are configured to run with global test functions
- Use `npm test` or `npx vitest` to run tests
- Test files should be placed alongside components or in a `__tests__` directory

## Architecture

### Routing System
- Uses React Router with localized routes via `/:lang` parameter
- Routes are defined declaratively in `router/router.constants.ts`
- `buildRoute()` and `buildRoutes()` utilities handle route generation
- Base path is `/atauri/` for GitHub Pages deployment
- Each route supports nested children via `RouteInfo` interface

### Internationalization
- Uses react-i18next for translations
- Default language: Basque (`eu`)
- Language detection via URL pathname using `useLocaleFromPathname` hook
- Translation files in `src/i18n/locales/` (eu.json, en.json, es.json, fr.json)
- Language switching updates both URL and i18next context

### Component Structure
- `AppLayout` provides consistent header/footer with language selector
- `PageWithGallery` is a reusable component for photo gallery pages
- Components organized by feature (gatza/, araotz/, shared/)
- Each component typically has its own CSS file using CSS modules pattern

### Photo Integration
- Flickr API integration via `FlickrAPI.ts`
- Separate API keys for different page types (Gatza/Araotz)
- Environment variables: `VITE_FLICKR_GATZA_API_KEY`, `VITE_FLICKR_ARAOTZ_API_KEY`
- Photo transformation utilities in `transform-flickr-result.ts`

### State Management
- Primarily uses React hooks (`useState`, `useEffect`)
- Custom hooks in `hooks/` directory for reusable logic
- No external state management library (Redux, Zustand, etc.)

## File Organization

- `/src/components/` - React components organized by feature
- `/src/router/` - Routing configuration and utilities  
- `/src/i18n/` - Internationalization setup and locale files
- `/src/hooks/` - Custom React hooks
- `/src/utils/` - Utility functions and API integrations
- `/src/AppLayout/` - Main layout components

## Build Configuration

- Vite with React and TypeScript
- SVG support via vite-plugin-svgr with default exports
- TypeScript path aliases configured via vite-tsconfig-paths
- Source maps enabled in production builds
- Base URL set to `/atauri/` for GitHub Pages

## Environment Variables

Required for Flickr API integration:
- `VITE_FLICKR_GATZA_API_KEY` - API key for Gatza photo sets
- `VITE_FLICKR_ARAOTZ_API_KEY` - API key for Araotz photo sets

## Deployment

The app is deployed to GitHub Pages:
- Build output goes to `dist/` directory
- `404.html` is copied from `index.html` for SPA routing support
- Uses `gh-pages` package for deployment automation