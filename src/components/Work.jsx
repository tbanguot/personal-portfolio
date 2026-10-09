import { useState } from 'react';
import work from '../data/work';

function Work() {
  const companies = Object.keys(work);
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const selectedWork = work[selectedCompany];

  return (
    <section id="work" className="scroll-mt-32 rounded-2xl border border-[#d6d9ca] bg-[#f6f5ed] p-4 shadow-md shadow-[#37433e]/6 sm:scroll-mt-24 sm:rounded-3xl sm:p-8 lg:p-10">
      <div className="mb-7">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2f7048]">Experience</p>
        <h2 className="text-3xl font-bold tracking-tight text-[#26372d] sm:text-4xl">Work</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-[minmax(10rem,0.7fr)_minmax(0,2fr)] md:gap-8">
        <ul aria-label="Companies" className="flex flex-col gap-2">
          {companies.map((company) => (
            <li key={company}>
              <button
                type="button"
                aria-pressed={selectedCompany === company}
                onClick={() => setSelectedCompany(company)}
                className={`min-h-11 w-full rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#358052] ${
                  selectedCompany === company
                    ? 'border-transparent bg-transparent text-[#2f7048] underline decoration-[#2f7048] underline-offset-4'
                    : 'border-transparent text-[#626b63] hover:border-[#cbdcc9] hover:bg-[#ebece2]'
                }`}
              >
                {company}
              </button>
            </li>
          ))}
        </ul>
        <article
          aria-live="polite"
          className="rounded-xl border border-[#dcddd2] bg-[#ebece2] p-5 sm:rounded-2xl sm:p-6"
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-[#26372d]">{selectedWork.role}</h3>
            <p className="mt-1 font-medium text-[#405248]">{selectedWork.organization}</p>
            <p className="mt-1 text-sm text-[#68776b]">{selectedWork.dates}</p>
          </div>
          <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-[#37473d] marker:text-[#2f7048] sm:text-lg sm:leading-8">
            {selectedWork.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
          {selectedWork.websites && (
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#d9ddd2] pt-4">
              {selectedWork.websites.map((website) => (
                <a
                  key={website.url}
                  href={website.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-semibold text-[#2f7048] underline decoration-[#2f7048]/50 underline-offset-4 transition-colors hover:text-[#1e5034] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#358052]"
                >
                  {website.name} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default Work;
