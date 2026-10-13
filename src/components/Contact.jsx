function Contact() {
  return (
    <section id="contact" className="scroll-mt-32 rounded-2xl border border-[#E2E8F0] bg-white p-4 text-[#334155] shadow-md shadow-[#0B1220]/6 sm:scroll-mt-24 sm:rounded-3xl sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087CFA]">Get in touch</p>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#062C78] sm:text-4xl">Let’s build something together.</h2>
        <p className="mb-6 text-base leading-7 text-[#334155] sm:text-lg">
          Have a project in mind or just want to say hello? Send me an email and let’s talk.
        </p>

        <a
          href="mailto:tongolmalual@gmail.com?subject=Portfolio%20inquiry"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#087CFA] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0668D3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087CFA] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Email me
        </a>
      </div>
    </section>
  );
}

export default Contact;
