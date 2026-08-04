export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary-600 text-white ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19c4-9 8-13 16-15" strokeLinecap="round" />
        <circle cx="20" cy="4" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}
