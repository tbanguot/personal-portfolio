function Footer() {
  return (
    <footer className="mt-8 bg-[#0B1220] text-white sm:mt-10">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-8 sm:flex-row sm:items-end sm:pb-10">
          <div className="max-w-xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#60A5FA]">Thanks for stopping by</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let’s keep in touch.</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#CBD5E1] sm:text-base">
              Have an idea to build or just want to say hello? I’d love to hear from you.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:tongolmalual@gmail.com?subject=Portfolio%20inquiry"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#087CFA] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0668D3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email me
            </a>
            <nav aria-label="Social links" className="flex items-center gap-1">
          <a
            href="https://github.com/tbanguot"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2.5 text-[#CBD5E1] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.03.75 2.08v3.04c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/tbanguot/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2.5 text-[#CBD5E1] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.96V9.34h2.97v9.56ZM6.44 8.03a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.46 10.87h-2.96v-4.65c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.66V9.34h2.84v1.31h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53v5.26Z" />
            </svg>
          </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-5 text-center text-sm text-[#94A3B8] sm:flex-row sm:text-left">
          <p>"Discovered" and built with React and Tailwind CSS by Tongol Banguot</p>
          <a href="#home" className="inline-flex items-center gap-2 rounded-md font-semibold text-[#60A5FA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
