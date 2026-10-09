import skills from '../data/skills'

function Skills() {
  return (
    <section className="rounded-2xl border border-[#b9d0bc] bg-[#dfeadf] p-4 shadow-md shadow-[#37433e]/6 sm:rounded-3xl sm:p-8 lg:p-10">
      <div className="mb-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2f7048]">What I work with</p>
      </div>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li key={skill} className="inline-flex max-w-full flex-wrap items-center rounded-xl border border-[#cbdcc9] bg-[#f0f4e9] px-3 py-2.5 text-sm font-medium text-[#26372d] transition hover:border-[#70a17b] hover:bg-[#f7f8ef] sm:px-4 sm:text-base">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills