# Next.js Rendering Demo: SSR vs CSR

**A small website that shows the difference between a page built on the server and a page built in the browser.**

Why it exists: built for Full Stack Development Labs 9 & 10, to compare Server-Side Rendering and Client-Side Rendering in Next.js 15 side by side.

## How to run

1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000 and compare the `/ssr` and `/csr` pages.

---

## Technical details

## Features
- **`/ssr`**: a Server Component fetches posts from JSONPlaceholder on the server before the page is sent to the browser
- **`/csr`**: a Client Component (`"use client"`) fetches users in the browser after load, with loading and error states
- Reusable `Navbar`, `PostCard` and `UserCard` components
- Mobile-first responsive grid built with Tailwind CSS

## Tech stack
Next.js 15 · React 19 · Tailwind CSS 3

## Project structure
```
app/
├── layout.js       # Root layout and navbar
├── page.js         # Home: links to both demos
├── ssr/page.js     # Server-side rendered posts
└── csr/page.js     # Client-side rendered users
components/         # Navbar, PostCard, UserCard
```
