import skills from '../data/skills'

function Skills() {
  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-md shadow-[#0B1220]/6 sm:rounded-3xl sm:p-8 lg:p-10">
      <div className="mb-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087CFA]">What I work with</p>
      </div>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li key={skill} className="inline-flex max-w-full flex-wrap items-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2.5 font-mono text-sm font-medium text-[#062C78] transition hover:border-[#087CFA] hover:bg-[#EFF6FF] sm:px-4 sm:text-base">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills