function Contact() {
  return (
    <section id="contact" className="scroll-mt-32 rounded-2xl border border-[#e5bd73] bg-[#f4dfa9] p-4 text-[#3d392c] shadow-md shadow-[#62471f]/8 sm:scroll-mt-24 sm:rounded-3xl sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#814d1e]">Get in touch</p>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#26372d] sm:text-4xl">Let’s build something together.</h2>
        <p className="mb-6 text-base leading-7 text-[#4b4638] sm:text-lg">
          Have a project in mind or just want to say hello? Send me an email and let’s talk.
        </p>

        <a
          href="mailto:tongolmalual@gmail.com?subject=Portfolio%20inquiry"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#286342] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#1e5034] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#286342] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4dfa9]"
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
