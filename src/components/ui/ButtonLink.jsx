import Icon from './Icon';

const variants = {
  primary:
    'bg-[var(--accent)] text-white shadow-xs transition-all hover:bg-[var(--accent-hover)] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-all hover:border-blue-500/60 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-500/5 hover:scale-[1.02] active:scale-[0.98]',
  ghost:
    'text-[var(--text-secondary)] transition-colors hover:text-blue-600 dark:hover:text-blue-400',
};

function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  ...props
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${variants[variant] || variants.primary} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
      {external && (
        <>
          <Icon name="arrow-up-right" className="size-3.5 shrink-0 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}

export default ButtonLink;
