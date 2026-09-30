import { useEffect, useRef } from 'react';
import { marquee } from '../data';

type Tile = { src: string; alt: string };

// each row is tripled so it never runs out of tiles on either side
const triple = (tiles: Tile[]) => [...tiles, ...tiles, ...tiles];

export default function Marquee() {
  const section = useRef<HTMLElement>(null);
  const rowOne = useRef<HTMLDivElement>(null);
  const rowTwo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const place = () => {
      frame = 0;
      const el = section.current;
      if (!el || !rowOne.current || !rowTwo.current) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      // start one set in, so there are tiles to the left as the row travels right
      const setOne = rowOne.current.scrollWidth / 3;
      const setTwo = rowTwo.current.scrollWidth / 3;
      rowOne.current.style.transform = `translateX(${offset - 200 - setOne}px)`;
      rowTwo.current.style.transform = `translateX(${-(offset - 200) - setTwo}px)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(place);
    };
    place();
    window.addEventListener('resize', onScroll);
    // the rows hold still for visitors who ask for less motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const row = (tiles: Tile[]) =>
    triple(tiles).map((t, i) => (
      <img
        key={i}
        src={t.src}
        alt={i < tiles.length ? t.alt : ''}
        aria-hidden={i < tiles.length ? undefined : true}
        width={420}
        height={270}
        loading="lazy"
        decoding="async"
        className="h-[180px] w-[280px] shrink-0 rounded-2xl object-cover sm:h-[270px] sm:w-[420px]"
      />
    ));

  return (
    <section ref={section} aria-label="Product screens" className="overflow-hidden bg-ink pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <div ref={rowOne} className="flex w-max gap-3" style={{ willChange: 'transform' }}>
          {row(marquee.rowOne)}
        </div>
        <div ref={rowTwo} className="flex w-max gap-3" style={{ willChange: 'transform' }}>
          {row(marquee.rowTwo)}
        </div>
      </div>
    </section>
  );
}
