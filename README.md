# Fajar Site

Personal site starter built with Astro, TypeScript, and Markdown.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Add a blog post

Create a new Markdown file in `src/content/blog/`:

```md
---
title: "Your title"
description: "A short summary."
publishedAt: 2026-08-10
tags: ["topic"]
status: "seed"
draft: false
---

Write your post here.
```

The post will appear in the writing archive and get its own URL from the filename.

Use `seed`, `growing`, or `evergreen` for the post status. The status is part of the site's editorial language: an early idea, a developing note, or a durable reference.

## Deploy to Railway

1. Push this folder to a GitHub repository.
2. Create a new Railway project from that repository.
3. Railway will use the `npm run build` script and serve the generated Astro site.
4. Generate a domain from the service's Networking settings.

Replace the placeholder email and GitHub links in `src/components/Footer.astro`, `src/pages/about.astro`, and `src/pages/index.astro` before publishing.
