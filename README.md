# Tongol Banguot — Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS.

## Requirements

- Node.js 22 or later
- npm

## Development

```sh
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

The production site is generated in `dist/`, which is ignored by Git.

## Deploy to Netlify

Connect the Git repository to Netlify. The included `netlify.toml` configures the build command (`npm run build`), publish directory (`dist`), and Node.js 22 runtime. Netlify can also use these settings when deploying from the CLI.

After the first deployment, configure the production domain in Netlify and update the Open Graph image URL in `index.html` to use the full deployed-domain URL if social preview crawlers require an absolute URL.
