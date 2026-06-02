# AGENTS.md — udc-demo (app)

Guidance for AI agents working inside the `app/` Next.js project.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript (strict mode)
- No backend / no database — state lives in the client for the demo

## Commands

- Install: `npm install`
- Dev server: `npm run dev` (http://localhost:3000)
- Production build: `npm run build`
- Lint: `npm run lint`

## Conventions

- App Router only: route code under `app/`, reusable UI under `components/`.
- Client interactivity requires the `"use client"` directive at the top of the file.
- Use TypeScript types for component props and domain models; no `any`.
- Keep components small and focused; derive state with `useMemo` instead of duplicating it.
- Use the `@/*` path alias for internal imports.

## Guardrails

- Do NOT add a backend, database, or auth — this is a single-session greenfield demo.
- Do NOT commit secrets, `.env*`, or `node_modules/`.
- Do NOT introduce new dependencies without a clear reason; prefer the standard library and React.
- Ask before large refactors or renaming the public component API.

## Definition of Done

- `npm run dev` starts without errors and the feature works in the browser.
- `npm run build` succeeds.
- No `any` types and no unused variables.
