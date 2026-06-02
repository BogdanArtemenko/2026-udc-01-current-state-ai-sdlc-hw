---
name: vercel-react-best-practices
description: React and Next.js best practices reviewer. Use when writing or reviewing React/TSX components to enforce structure, hooks, accessibility, performance, and TypeScript quality.
source: https://www.skills.sh/vercel-labs/agent-skills/vercel-react-best-practices
---

# React Best Practices

Apply these rules when authoring or reviewing React / Next.js components.

## Component structure

- One component per concern; keep files small and focused.
- Co-locate component-only helpers; lift shared logic into hooks/utilities.
- Prefer composition over deeply nested conditional rendering.

## Hooks

- Call hooks unconditionally at the top level — never inside conditions or loops.
- Derive values with `useMemo`/`useCallback` only when there is a measurable cost; do not over-memoize.
- Keep effect dependencies complete and honest; avoid disabling the exhaustive-deps lint.
- Do not store derived state in `useState` — compute it during render.

## Accessibility

- Every interactive element is reachable and labeled (`aria-label`, associated `<label>`).
- Use semantic elements (`button`, `form`, `ul/li`) instead of click handlers on `div`s.
- Maintain visible focus states and logical tab order.

## Performance

- Avoid unnecessary re-renders; stabilize props passed to memoized children.
- Lazy-load heavy, below-the-fold components.
- Prefer Server Components for non-interactive UI; mark only interactive leaves `"use client"`.

## TypeScript

- No `any`. Type props and domain models explicitly.
- Use discriminated unions for variant state instead of boolean soup.
- Prefer `type` for props; export shared types from a single module.

## Review checklist

1. Is state minimal and derived where possible?
2. Are hooks rules respected?
3. Is the UI accessible and semantic?
4. Are there obvious re-render or bundle-size issues?
5. Are types precise (no `any`, no unused)?
