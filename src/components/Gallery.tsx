import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { GALLERY_IMAGES } from '../data/content';
import { Reveal } from './Reveal';

const SWIPE_THRESHOLD = 60;
const AUTOPLAY_MS = 6000;

export function Gallery() {
  const count = GALLERY_IMAGES.length;
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  /* prefers-reduced-motion */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  /* Autoplay com pausa em interação, hover/focus ou reduced-motion */
  useEffect(() => {
    if (userPaused || hoverPaused || reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [index, userPaused, hoverPaused, reducedMotion, count]);

  const manualNav = useCallback(
    (i: number) => {
      go(i);
      setUserPaused(true);
    },
    [go],
  );

  /* ---- Arraste (touch / mouse) ---- */
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    setDrag(0);
    viewportRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    setDrag(e.clientX - dragStartX.current);
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    dragStartX.current = null;
    setDrag(0);
    suppressClick.current = Math.abs(delta) > 10;
    if (delta <= -SWIPE_THRESHOLD) manualNav(index + 1);
    else if (delta >= SWIPE_THRESHOLD) manualNav(index - 1);
  };

  const maybeOpenLightbox = () => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    setLightboxOpen(true);
  };

  /* ---- Teclado no carrossel ---- */
  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      manualNav(index + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      manualNav(index - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      manualNav(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      manualNav(count - 1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
        setLightboxOpen(true);
      }
    }
  };

  /* ---- Lightbox ---- */
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') manualNav(index + 1);
      if (e.key === 'ArrowLeft') manualNav(index - 1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, index, manualNav]);

  const current = GALLERY_IMAGES[index];

  return (
    <section id="galeria" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Galeria</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest sm:text-5xl">
            Veja onde você vai se hospedar
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest/75 sm:text-lg">
            Conheça alguns dos espaços da Pousada do Tchurray e da Maria.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <div
            ref={viewportRef}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Galeria de fotos da pousada"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onMouseEnter={() => setHoverPaused(true)}
            onMouseLeave={() => setHoverPaused(false)}
            onFocus={() => setHoverPaused(true)}
            onBlur={() => setHoverPaused(false)}
            className="group relative touch-pan-y select-none overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <div
              className={`flex h-full ${reducedMotion ? '' : 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'}`}
              style={{ transform: `translateX(calc(${-index * 100}% + ${drag}px))` }}
            >
              {GALLERY_IMAGES.map((img, i) => (
                <figure key={img.src} className="relative h-full w-full shrink-0" aria-hidden={i !== index}>
                  <img
                    src={img.src}
                    alt={i === index ? img.alt : ''}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                    onClick={maybeOpenLightbox}
                    className="aspect-[4/3] w-full cursor-zoom-in object-cover sm:aspect-[3/2] lg:aspect-[16/9]"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/80 to-transparent px-6 pb-5 pt-16">
                    <span className="font-display text-lg italic text-sand">{img.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Setas */}
            <button
              type="button"
              onClick={() => manualNav(index - 1)}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-forest-deep/55 text-sand opacity-100 backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-forest-deep focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => manualNav(index + 1)}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-forest-deep/55 text-sand opacity-100 backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-forest-deep focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

            {/* Botão ampliar */}
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label={`Ampliar foto: ${current.caption}`}
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-forest-deep/55 text-sand backdrop-blur-sm transition-colors duration-300 hover:bg-gold hover:text-forest-deep"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
          </div>

          {/* Indicadores + contador */}
          <div className="mt-6 flex items-center justify-center gap-5">
            <div className="flex items-center gap-2.5" role="tablist" aria-label="Escolher foto">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ir para a foto ${i + 1}: ${img.caption}`}
                  onClick={() => manualNav(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === index ? 'w-8 bg-gold' : 'w-2.5 bg-forest/25 hover:bg-forest/50'
                  }`}
                />
              ))}
            </div>
            <span className="font-display text-sm italic text-forest/60" aria-live="polite">
              {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${current.caption}`}
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-deep/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Fechar foto ampliada"
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-sand/10 text-sand transition-colors hover:bg-gold hover:text-forest-deep"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              manualNav(index - 1);
            }}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-sand/10 text-sand transition-colors hover:bg-gold hover:text-forest-deep sm:left-6"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full max-w-5xl">
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[82vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center font-display text-lg italic text-sand/85">
              {current.caption}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              manualNav(index + 1);
            }}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-sand/10 text-sand transition-colors hover:bg-gold hover:text-forest-deep sm:right-6"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
