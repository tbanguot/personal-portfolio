# Tongol Banguot — Software Developer Portfolio

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-F58025?logo=oxc&logoColor=white)](https://oxc.rs/)
[![Deploy Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)

A modern, fast, and accessible software developer portfolio built with **React 19**, **Vite 8**, and **Tailwind CSS v4**.

Designed with an original **Obsidian & Electric Cobalt** visual language, concise human-written descriptions, and a focused presentation of full-stack engineering work.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Featured Projects](#featured-projects)
- [Technical Stack](#technical-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Available Scripts](#available-scripts)
- [Accessibility & Performance](#accessibility--performance)
- [Deployment](#deployment)
- [Contact & Connect](#contact--connect)
- [License](#license)

---

## Overview

This repository houses the source code for the personal portfolio of **Tongol Banguot**, a software developer with full-stack experience spanning relational databases, server-side APIs, and interactive frontend interfaces (React).

The application is engineered as a single-page React app emphasizing:
- **Fast Load Times**: Bundled with Vite and modern ESM transforms for lightning-fast delivery.
- **Accessible Design**: Compliant with WCAG guidelines, semantic HTML5 elements, and keyboard navigation.
- **Original Aesthetics**: Custom theme tokens with fluid typography, responsive layout, and an instant Dark/Light mode switcher with system preference detection.

---

## Key Features

- **Obsidian & Cobalt Theme System**: Seamless toggle between deep obsidian dark canvas (`#09090b`) and crisp alabaster light canvas (`#fafafa`) with persistent `localStorage` preference and zero flash of incorrect theme (FOIT).
- **Sticky Navigation**: Streamlined header with brand monogram, quick section links, theme toggle, and a direct "Let's talk" action. Fully responsive with mobile slide-down menu.
- **Hero & Status Indicator**: Live availability pill (`Available immediately for full-time roles`), high-impact typography, and instant social touchpoints.
- **Featured Projects Showcase**: Grid cards displaying real project screenshots, live deployment URLs, GitHub repository links, and technology badges.
- **Structured Capabilities Matrix**: Categorized skill breakdown across Languages, Backend & Frameworks, and Tools & Deployment.
- **Work Experience Timeline**: Detailed engineering history with highlighted contributions, tech badges, and an interactive disclosure for field and university roles.
- **Interactive Contact Card**: Direct email action with one-click copy-to-clipboard functionality and confirmation feedback.

---

## Featured Projects

| Project | Type | Tech Stack | Links |
| :--- | :--- | :--- | :--- |
| **Nyanchiew Studio** | Full-Stack Web App | React, JavaScript, HTML, CSS, Netlify | [Live Site](https://nyanchiew-malual.netlify.app/) · [GitHub](https://github.com/tbanguot/chiogong-blog) |
| **Tenzies Pro** | Interactive React App | React, JavaScript, CSS, State Hooks | [Live Site](https://tenziez-pro.netlify.app/) · [GitHub](https://github.com/tbanguot/tenzies-pro) |
| **Nile Gazette** | Live News Platform | WordPress, PHP, HTML, CSS, JavaScript | [Live Site](https://nilegazette.com/) |
| **Tony Talks Football** | Live Sports Platform | WordPress, PHP, JavaScript, CSS | [Live Site](https://tonytalksfootball.com/) |

---

## Technical Stack

### Core Technologies
- **Framework**: [React 19](https://react.dev/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Linting & Code Quality**: [Oxlint](https://oxc.rs/)

### Languages & Frameworks
- **Languages**: Python, C++, Java, JavaScript, TypeScript, HTML, CSS
- **Backend & Libraries**: React, Node.js, MySQL, MongoDB Atlas, Tailwind CSS, Bootstrap, WordPress, REST APIs, Supabase
- **Tools & Deployment**: Git, GitHub, Linux, JSON, Jira, Vercel, Netlify, Vite, VSCode

---

## Project Structure

```text
portfolio/
├── public/                     # Static assets served as-is
│   ├── favicon.svg             # SVG site favicon
│   ├── social-preview.png      # OpenGraph social card image
│   └── projects/               # Real project preview screenshots
│       ├── chiogong-blog.png
│       ├── tenzies-pro.png
│       ├── nile-gazette.webp
│       └── tony-talks-football.webp
├── src/
│   ├── assets/                 # Profile images and local media
│   ├── components/
│   │   ├── experience/         # ExperienceItem cards
│   │   ├── layout/             # Sticky Navbar & Footer
│   │   ├── projects/           # ProjectCard components
│   │   └── ui/                 # Reusable UI primitives (Icon, TechBadge, ButtonLink, SectionHeading)
│   ├── context/                # ThemeContext, ThemeProvider, useTheme hook
│   ├── data/                   # Structured content data
│   │   ├── experience.js       # Career history & contributions
│   │   ├── navigation.js       # Section navigation links
│   │   ├── profile.js          # Author info & social URLs
│   │   ├── projects.js         # Portfolio project details
│   │   └── skills.js           # Categorized skill taxonomy
│   ├── sections/               # Top-level page sections
│   │   ├── Hero.jsx            # Impactful introduction & status
│   │   ├── Projects.jsx        # Work showcase grid
│   │   ├── Skills.jsx          # Technical capabilities
│   │   ├── Experience.jsx      # Professional history
│   │   ├── About.jsx           # Personal background narrative & portrait
│   │   └── Contact.jsx         # Direct contact & email copy action
│   ├── App.jsx                 # Application shell & section assembly
│   ├── index.css               # Design system tokens, utilities, and theme classes
│   └── main.jsx                # React root mount point
├── index.html                  # HTML5 shell, SEO meta tags, JSON-LD schema
├── netlify.toml                # Netlify deployment configuration
├── package.json                # Project dependencies and npm scripts
└── vite.config.js              # Vite configuration & SEO head transform
```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended; v20/v22 LTS preferred) and **npm** installed on your system.

```sh
node --version
npm --version
```

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/tbanguot/portfolio.git
   cd portfolio
   ```

2. **Install project dependencies:**
   ```sh
   npm ci
   ```

### Development Server

Start the local Vite development server with hot module replacement (HMR):

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Production Build

Create an optimized, minified production build:

```sh
npm run build
```

The compiled assets will be output to the `dist/` directory.

To preview the production build locally:

```sh
npm run preview
```

---

## Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `vite` | Starts the local dev server with HMR on port `5173` |
| `npm run build` | `vite build` | Compiles and optimizes assets into `dist/` |
| `npm run lint` | `oxlint` | Runs fast Oxlint checks across all project files |
| `npm run preview` | `vite preview` | Serves the local `dist/` production bundle |

---

## Accessibility & Performance

- **WCAG Compliant Contrast**: Carefully tuned color palettes in both light and dark modes to satisfy WCAG AA/AAA contrast ratios.
- **Skip Link**: Includes an accessible `#main-content` skip link for keyboard users.
- **Semantic Structure**: Meaningful HTML5 tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<figure>`).
- **Focus Rings**: High-contrast, custom `:focus-visible` outlines for accessible tab navigation.
- **Screen Reader Support**: Descriptive `aria-label` tags on icons, external link announcements, and ARIA attributes for theme buttons.
- **Lightweight Assets**: Optimized images and responsive sizing for fast First Contentful Paint (FCP).

---

## Deployment

The application is pre-configured for automated continuous deployment with **Netlify**.

The included `netlify.toml` automatically handles:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Environment**: Configured for Node `22`

---

## Contact & Connect

- **Author**: Tongol Banguot
- **Role**: Software Developer
- **Email**: [tongolmalual@gmail.com](mailto:tongolmalual@gmail.com)
- **GitHub**: [@tbanguot](https://github.com/tbanguot)
- **LinkedIn**: [linkedin.com/in/tbanguot](https://www.linkedin.com/in/tbanguot/)

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use this codebase as inspiration for your own portfolio.
