"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface VehicleGalleryProps {
  images: string[];
  title: string;
  notice: string;
  noticeTone?: "neutral" | "warning";
}

export function VehicleGallery({ images, title, notice, noticeTone = "neutral" }: VehicleGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const hasMultipleImages = images.length > 1;

  const showPrevious = () => {
    if (hasMultipleImages) setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };
  const showNext = () => {
    if (hasMultipleImages) setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <section aria-label={`Galeria de fotos de ${title}`}>
      <div
        className="group relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-[#171717] text-primary-600 shadow-[0_24px_60px_-32px_rgba(0,0,0,.65)] sm:rounded-3xl"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") showPrevious();
          if (event.key === "ArrowRight") showNext();
        }}
        onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
          if (Math.abs(distance) > 45) {
            if (distance > 0) showPrevious();
            else showNext();
          }
          touchStartX.current = null;
        }}
        tabIndex={0}
      >
        {images[activeIndex] ? (
          <Image src={images[activeIndex]} alt={`${title} — foto ${activeIndex + 1} de ${images.length}`} fill priority={activeIndex === 0} sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
        ) : (
          <svg viewBox="0 0 24 24" width="180" fill="none" stroke="currentColor" aria-hidden="true"><path d="M3 16V7h10v9M3 16h1m0 0a2 2 0 1 0 4 0m-4 0h9m4 0h2v-5l-3-3h-3v8m0 0a2 2 0 1 0 4 0" /></svg>
        )}
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-black uppercase shadow-sm sm:left-5 sm:top-5 ${noticeTone === "warning" ? "bg-amber-400 text-amber-950" : "bg-white text-[#171717]"}`}>{notice}</span>
        {hasMultipleImages && <>
          <button type="button" onClick={showPrevious} aria-label="Foto anterior" className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-xl text-white backdrop-blur transition hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">←</button>
          <button type="button" onClick={showNext} aria-label="Próxima foto" className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-xl text-white backdrop-blur transition hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">→</button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-2 backdrop-blur sm:bottom-5" aria-label="Selecionar foto">
            {images.map((src, index) => (
              <button
                key={`dot-${src}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir para foto ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${index === activeIndex ? "w-5 bg-white" : "w-2 bg-white/55 hover:bg-white/85"}`}
              />
            ))}
          </div>
        </>}
        <div aria-live="polite" className="absolute bottom-4 right-4 rounded-full bg-black/65 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur sm:bottom-5 sm:right-5">{images.length ? activeIndex + 1 : 0} de {images.length} fotos</div>
      </div>
      {images.length > 1 && <div className="mt-3 flex gap-3 overflow-x-auto pb-1" aria-label="Miniaturas da galeria">
        {images.map((src, index) => <button key={src} type="button" onClick={() => setActiveIndex(index)} aria-label={`Ver foto ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined} className={`relative aspect-[4/3] w-[92px] shrink-0 overflow-hidden rounded-xl border-2 bg-neutral-200 transition sm:w-[116px] ${index === activeIndex ? "border-primary shadow-sm" : "border-transparent opacity-70 hover:opacity-100"}`}><Image src={src} alt="" fill sizes="116px" className="object-cover" /></button>)}
      </div>}
    </section>
  );
}
