# Personal Website – README

Welcome to the repository for my personal website! This project is built using **Svelte**, **TypeScript**, and **Tailwind CSS**.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Modern Svelte app** with TypeScript for type safety
- **Tailwind CSS** for rapid, utility-first styling
- Responsive and accessible design
- Easy customization of content and theme
- Clean, component-based architecture

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/your-personal-website.git
cd your-personal-website
npm install
```

### Running the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` (or as indicated in your terminal) to view your site.

## Project Structure

```plaintext
├── src/
│   ├── components/    # Reusable Svelte components
│   ├── routes/        # Route-based pages
│   ├── lib/           # Utilities and helpers
│   ├── app.html       # HTML template
├── static/            # Static assets (images, favicon, etc.)
├── tailwind.config.cjs
├── svelte.config.js
├── tsconfig.json
└── package.json
```

## Available Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build the site for production
- `npm run preview` – Preview the production build locally
- `npm run check` – Type-check the project

## Tech Stack

| Technology   | Purpose                        |
| ------------ | ------------------------------ |
| Svelte       | Frontend framework             |
| TypeScript   | Static typing                  |
| Tailwind CSS | Utility-first styling          |
| Vite         | Fast build tool and dev server |

## Deployment

You can deploy the built site to any static hosting provider (e.g., Vercel, Netlify, GitHub Pages):

```bash
npm run build
```

Upload the contents of the `build/` or `dist/` directory to your hosting provider.
