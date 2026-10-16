import { useState } from 'react';
import profile from '../data/profile';
import SectionHeading from '../components/ui/SectionHeading';
import ButtonLink from '../components/ui/ButtonLink';
import Icon from '../components/ui/Icon';

function Contact() {
  const [copyStatus, setCopyStatus] = useState('');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('Copied to clipboard!');
      setTimeout(() => setCopyStatus(''), 2500);
    } catch {
      setCopyStatus('Could not copy automatically');
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="page-container">
        <div className="clean-card p-8 sm:p-12">
          <SectionHeading
            id="contact-heading"
            eyebrow="05 / Contact"
            title="Let’s build something together."
            description="I’m currently open to full-stack and software developer roles. Whether you have an open position on your team or a project to discuss, my inbox is open."
            className="mb-6!"
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={profile.emailUrl} variant="primary">
              <Icon name="mail" className="size-4" />
              <span>Send an email</span>
            </ButtonLink>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-all hover:border-blue-500/60 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-500/5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Icon name={copyStatus ? 'check' : 'copy'} className="size-4 text-[var(--accent)]" />
              <span>{copyStatus || 'Copy email address'}</span>
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[var(--border-color)] pt-6 text-sm font-mono text-[var(--text-secondary)]">
            <span>Direct: <strong className="text-[var(--text-primary)]">{profile.email}</strong></span>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
            >
              <Icon name="linkedin" className="size-3.5 transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4"
            >
              <Icon name="github" className="size-3.5 transition-transform group-hover:scale-110" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
