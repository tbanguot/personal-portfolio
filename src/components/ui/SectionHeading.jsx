function SectionHeading({ eyebrow, title, description, id, className = '' }) {
  return (
    <div className={`mb-10 ${className}`}>
      {eyebrow && (
        <p className="mb-2 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 max-w-2xl text-base sm:text-lg text-[var(--text-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
