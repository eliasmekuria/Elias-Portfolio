# Dial

A portfolio tracking app for independent Rolex dealers and serious collectors. Built as a full design-to-code project — from token architecture in Figma to a working React prototype.

## What it does

- Track watch inventory with status tags (Holding / Listed / Sold)
- Per-watch P&L calculated from purchase price and market value
- Portfolio-level summary with unrealized and realized gains
- Add new watches via a side drawer form
- Mark watches as sold with a confirmation modal that updates all totals in real time

## Tech

- React (Vite)
- Local state only — no backend, no database
- CSS custom properties mapped directly from the Figma token system

## Design

The UI was designed from scratch in Figma using a full atomic design system — tokens, atoms, molecules, organisms, and templates — before a single line of code was written. The CSS variable names in the codebase mirror the semantic token names in Figma intentionally.

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.