function TechBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-[var(--badge-border)] bg-[var(--badge-bg)] px-2.5 py-0.5 font-mono text-xs sm:text-[0.8125rem] font-medium text-[var(--badge-text)] transition-colors ${className}`}
    >
      {children}
    </span>
  );
}

export default TechBadge;
