# Next.js Rendering Demo: SSR vs CSR

A small Next.js 15 (App Router) app that compares **Server-Side Rendering** and **Client-Side Rendering** side by side, built for Full Stack Development Labs 9 & 10.

## Features
- **`/ssr`**: a Server Component fetches posts from JSONPlaceholder on the server before the page is sent to the browser
- **`/csr`**: a Client Component (`"use client"`) fetches users in the browser after load, with loading and error states
- Reusable `Navbar`, `PostCard` and `UserCard` components
- Mobile-first responsive grid built with Tailwind CSS

## Tech stack
Next.js 15 · React 19 · Tailwind CSS 3

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Project structure
```
app/
├── layout.js       # Root layout and navbar
├── page.js         # Home: links to both demos
├── ssr/page.js     # Server-side rendered posts
└── csr/page.js     # Client-side rendered users
components/         # Navbar, PostCard, UserCard
```
