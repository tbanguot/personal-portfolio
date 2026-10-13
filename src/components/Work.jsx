import { useState } from 'react';
import work from '../data/work';

function Work() {
  const companies = Object.keys(work);
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const selectedWork = work[selectedCompany];

  return (
    <section id="work" className="scroll-mt-32 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-md shadow-[#0B1220]/6 sm:scroll-mt-24 sm:rounded-3xl sm:p-8 lg:p-10">
      <div className="mb-7">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087CFA]">Experience</p>
        <h2 className="text-3xl font-bold tracking-tight text-[#062C78] sm:text-4xl">Work</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-[minmax(10rem,0.7fr)_minmax(0,2fr)] md:gap-8">
        <ul aria-label="Companies" className="flex flex-col gap-2">
          {companies.map((company) => (
            <li key={company}>
              <button
                type="button"
                aria-pressed={selectedCompany === company}
                onClick={() => setSelectedCompany(company)}
                className={`min-h-11 w-full rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087CFA] ${
                  selectedCompany === company
                    ? 'border-transparent bg-transparent text-[#087CFA] underline decoration-[#087CFA] underline-offset-4'
                    : 'border-transparent text-[#475569] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]'
                }`}
              >
                {company}
              </button>
            </li>
          ))}
        </ul>
        <article
          aria-live="polite"
          className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:rounded-2xl sm:p-6"
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-[#062C78]">{selectedWork.role}</h3>
            <p className="mt-1 font-medium text-[#334155]">{selectedWork.organization}</p>
            <p className="mt-1 text-sm text-[#64748B]">{selectedWork.dates}</p>
          </div>
          <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-[#334155] marker:text-[#087CFA] sm:text-lg sm:leading-8">
            {selectedWork.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
          {selectedWork.websites && (
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#E2E8F0] pt-4">
              {selectedWork.websites.map((website) => (
                <a
                  key={website.url}
                  href={website.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-semibold text-[#087CFA] underline decoration-[#087CFA]/50 underline-offset-4 transition-colors hover:text-[#062C78] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087CFA]"
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
