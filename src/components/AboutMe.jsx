import profileImage from '../assets/profile.jpeg';

function AboutMe() {
  return (
    <section id="about" className="scroll-mt-32 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-md shadow-[#0B1220]/6 sm:scroll-mt-24 sm:rounded-3xl sm:p-8 lg:p-10">
      <div className="mb-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087CFA]">A little about me</p>
        <h2 className="text-3xl font-bold tracking-tight text-[#062C78] sm:text-4xl">About Me</h2>
      </div>
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_16rem] lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-12">
        <div className="max-w-4xl space-y-5 text-[1.0625rem] leading-8 text-[#334155] sm:text-lg">
          <p>
            I’m a software developer who loves learning how things work and turning
            ideas into useful, welcoming experiences. I’m always learning and exploring new technologies, and I’m excited to continue growing as a developer.
          </p>
          <p>
            My journey into software development began in a curious way. In March of 2020,
            after finishing high school and during the COVID lockdown, I got my hands
            on an old laptop and decided to explore it. I had no prior experience with computers,
            but through trial and error, I learned basic computer skills and discovered
            Excel. The formulas fascinated me, and I wanted to learn more. A month
            later, I found{' '}
            <a
              href="https://www.w3schools.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#087CFA] underline decoration-[#087CFA]/50 underline-offset-4 transition-colors hover:text-[#062C78] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087CFA]"
            >
              W3Schools
            </a>{' '}
            and started learning HTML and CSS. I felt like
            I had discovered something magical, and soon realized I had found my
            calling. Today, building apps still gives me that same excitement.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div
            className="group h-64 w-64 overflow-hidden rounded-2xl shadow-lg shadow-[#37433e]/10 transition-transform duration-500 ease-out motion-reduce:transition-none sm:h-72 sm:w-72 lg:h-80 lg:w-80 lg:hover:-rotate-1 lg:hover:scale-[1.03]"
          >
            <img
              src={profileImage}
              alt="Tongol Banguot"
              width="1237"
              height="1599"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out motion-reduce:transition-none lg:group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;