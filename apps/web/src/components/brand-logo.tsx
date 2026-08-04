import type { CSSProperties } from "react";
import Image from "next/image";

export function BrandSymbol({className="",inverted=false}:{className?:string;inverted?:boolean}){
  const road=inverted?"#111112":"#fff";
  return <svg viewBox="0 0 52 52" role="img" aria-label="Símbolo RoadCore" className={className}>
    <defs><linearGradient id="rc-red" x1="8" y1="46" x2="45" y2="5"><stop stopColor="#a70f16"/><stop offset="1" stopColor="#f2383f"/></linearGradient></defs>
    <path d="M12 2h28c5.5 0 10 4.5 10 10v28c0 5.5-4.5 10-10 10H12C6.5 50 2 45.5 2 40V12C2 6.5 6.5 2 12 2Z" fill={inverted?"#fff":"#111112"}/>
    <path d="M11.5 39.5c3.8-14.8 11-23 27.8-29" fill="none" stroke={inverted?"url(#rc-red)":"url(#rc-red)"} strokeWidth="5" strokeLinecap="round"/>
    <path d="M28 37c2.7-8.4 6.2-13 12.5-17.2" fill="none" stroke={road} strokeWidth="3.2" strokeLinecap="round" opacity={inverted?.25:.9}/>
    <path d="m34.4 9.8 5.4.6-1.4 5.2" fill="none" stroke={road} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

export function BrandLogo({className="",name="RoadCore",inverted=false,compact=false}:{className?:string;name?:string;inverted?:boolean;compact?:boolean}){
  const core=name==="RoadCore"||name==="RoadCore Platform";
  const ink=inverted?"#fff":"#111112";
  if(core&&!compact)return <span className={`inline-flex items-center ${className}`}><Image src={inverted?"/brand/roadcore-horizontal-light.svg":"/brand/roadcore-horizontal.svg"} alt="RoadCore — força em movimento" width={225} height={48} priority className="h-12 w-auto"/></span>;
  return <span className={`inline-flex items-center gap-3 ${className}`} style={{"--logo-ink":ink} as CSSProperties}>
    <BrandSymbol className="h-11 w-11 shrink-0" inverted={inverted}/>
    {!compact&&(core?<span className="inline-flex items-center"><span className="leading-none"><span className="block text-[18px] font-black uppercase italic tracking-[-.055em] text-[var(--logo-ink)]">Road<span className="text-primary-500">Core</span></span><span className={`mt-1.5 block text-[7px] font-bold uppercase tracking-[.34em] ${inverted?"text-slate-400":"text-neutral-500"}`}>força em movimento</span></span><span className={`ml-3 hidden h-8 border-l pl-3 text-[8px] font-semibold uppercase leading-[1.45] tracking-[.16em] sm:block ${inverted?"border-white/15 text-slate-500":"border-black/10 text-neutral-400"}`}>Heavy<br/>Business</span></span>:<span className="text-base font-bold text-[var(--logo-ink)]">{name}</span>)}
  </span>
}
