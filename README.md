# Rizwan Pasha — Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Configuration

All personal information, project details, and social links are centralized in:

```
src/data/config.js
```

Update this single file to change your name, email, links, projects, and more.

## Contact Form

The contact form uses [EmailJS](https://www.emailjs.com/) for form submissions. To enable it:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service and template
3. Update the `emailjsConfig` section in `src/data/config.js`

Until configured, the form falls back to opening the user's email client.

## Deployment

This project is configured for Vercel deployment:

```bash
npm run build
# Push to GitHub, then connect to Vercel
```

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
- EmailJS
