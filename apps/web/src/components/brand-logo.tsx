import type { CSSProperties } from "react";

export function BrandSymbol({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  return <svg viewBox="0 0 48 48" role="img" aria-label="RoadCore" className={className}>
    <defs><linearGradient id="roadcore-gradient" x1="8" y1="42" x2="40" y2="6"><stop stopColor="var(--primary-600, #1d4ed8)"/><stop offset="1" stopColor="var(--accent-400, #3fbbf3)"/></linearGradient></defs>
    <rect width="48" height="48" rx="14" fill={inverted ? "white" : "url(#roadcore-gradient)"}/>
    <path d="M13 35.5c2.7-11.7 8.1-18.4 19.8-23.2" fill="none" stroke={inverted ? "var(--primary-700, #133490)" : "white"} strokeWidth="4.4" strokeLinecap="round"/>
    <path d="M25.8 32.5c2.4-7.4 5.1-11.1 10.2-14.8" fill="none" stroke={inverted ? "var(--primary-400, #4b74e7)" : "rgba(255,255,255,.52)"} strokeWidth="3" strokeLinecap="round"/>
    <circle cx="35.5" cy="11.5" r="3.25" fill={inverted ? "var(--accent-500, #0ea5e9)" : "white"}/>
  </svg>;
}

export function BrandLogo({ className = "", name = "RoadCore", inverted = false, compact = false }: { className?: string; name?: string; inverted?: boolean; compact?: boolean }) {
  const isCore = name === "RoadCore" || name === "RoadCore Platform";
  return <span className={`inline-flex items-center gap-3 ${className}`} style={{ "--logo-ink": inverted ? "#fff" : "var(--foreground)" } as CSSProperties}>
    <BrandSymbol className="h-10 w-10 shrink-0" inverted={inverted}/>
    {!compact && <span className="flex flex-col leading-none"><span className="text-[19px] font-bold tracking-[-.045em] text-[var(--logo-ink)]">{isCore ? <>Road<span className="text-primary-500">Core</span></> : name}</span>{isCore && <span className={`mt-1 text-[8px] font-semibold uppercase tracking-[.26em] ${inverted ? "text-slate-400" : "text-muted"}`}>move negócios</span>}</span>}
  </span>;
}
