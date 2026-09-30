import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { punchline } from '../data';

// A one-panel manga gag that plays once when it scrolls into view: the panel lands, speed lines
// burst from his face, the speech bubble pops and letters in, then the sound effect and a sweat drop.
// Two layouts share the same parts: 16:10 from 640px up, 4:5 on a phone. Coordinates are in the
// panel's own SVG units (1600x1000 or 800x1000), so the SVG scales without distortion.

type Layout = {
  w: number;
  h: number;
  face: [number, number];
  inner: [number, number];
  bubble: { cx: number; cy: number; rx: number; ry: number; tail: [number, number][] };
  text: string; // Tailwind box for the lettering, in % of the panel
  portrait: string;
  sfx: string;
  drop: string;
};

const WIDE: Layout = {
  w: 1600,
  h: 1000,
  face: [1070, 360],
  inner: [330, 560],
  bubble: { cx: 420, cy: 300, rx: 360, ry: 225, tail: [[690, 360], [640, 450], [930, 470]] },
  text: 'left-[5%] top-[9%] h-[42%] w-[42%] px-[5%]',
  portrait: 'right-[2%] bottom-0 h-full',
  sfx: 'left-[5%] bottom-[9%] text-[clamp(2rem,5.5vw,4.6rem)]',
  drop: 'left-[71%] top-[21%] w-[3.2%]',
};

const TALL: Layout = {
  w: 800,
  h: 1000,
  face: [376, 480],
  inner: [250, 420],
  bubble: { cx: 400, cy: 150, rx: 370, ry: 128, tail: [[360, 268], [460, 264], [470, 345]] },
  text: 'left-[7%] top-[4%] h-[22%] w-[86%] px-[8%]',
  portrait: 'left-0 bottom-0 w-full',
  sfx: 'left-[4%] bottom-[5%] text-[clamp(1.8rem,9vw,3rem)]',
  drop: 'left-[67%] top-[38%] w-[6%]',
};

// small seeded generator so the speed lines are the same on every visit
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function speedLines(l: Layout) {
  const rand = rng(7);
  const [fx, fy] = l.face;
  const far = Math.hypot(l.w, l.h) * 1.2;
  const lines: string[] = [];
  const n = 84;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + (rand() - 0.5) * 0.05;
    const r = l.inner[0] + rand() * (l.inner[1] - l.inner[0]);
    const half = 0.006 + rand() * 0.014; // wedge half width, in radians at the far end
    const tip = [fx + Math.cos(a) * r, fy + Math.sin(a) * r];
    const b1 = [fx + Math.cos(a - half) * far, fy + Math.sin(a - half) * far];
    const b2 = [fx + Math.cos(a + half) * far, fy + Math.sin(a + half) * far];
    lines.push(`${tip[0].toFixed(1)},${tip[1].toFixed(1)} ${b1[0].toFixed(1)},${b1[1].toFixed(1)} ${b2[0].toFixed(1)},${b2[1].toFixed(1)}`);
  }
  return lines;
}

function useNarrow() {
  const query = '(max-width: 639px)';
  const [narrow, setNarrow] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const m = window.matchMedia(query);
    const on = () => setNarrow(m.matches);
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);
  return narrow;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Punchline() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.35 });
  const l = useNarrow() ? TALL : WIDE;
  const lines = useMemo(() => speedLines(l), [l]);
  const chars = Array.from(punchline.line);
  const typed = 1.05 + chars.length * 0.035; // when the lettering finishes
  const show = seen ? 'on' : 'off';

  return (
    <section aria-label="A running joke" className="bg-ink px-5 pb-8 pt-24 sm:px-8 sm:pt-32 md:px-10">
      <motion.div
        ref={ref}
        initial="off"
        animate={show}
        variants={{ off: { opacity: 0, scale: 0.86, rotate: -6 }, on: { opacity: 1, scale: 1, rotate: -1.5 } }}
        transition={{ type: 'spring', stiffness: 170, damping: 16 }}
        className="mx-auto max-w-[1100px] rounded-[28px] bg-[#FAFAF7] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:rounded-[36px] sm:p-3.5"
      >
        <div
          className="relative w-full overflow-hidden rounded-[20px] border-[5px] border-ink sm:rounded-[26px]"
          style={{ aspectRatio: `${l.w} / ${l.h}` }}
        >
          {/* screentone wash along the bottom of the panel */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(#0C0C0C 1.1px, transparent 1.4px)',
              backgroundSize: '7px 7px',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent 55%)',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent 55%)',
            }}
          />

          {/* speed lines */}
          <svg aria-hidden="true" viewBox={`0 0 ${l.w} ${l.h}`} className="absolute inset-0 h-full w-full">
            <motion.g
              initial="off"
              animate={show}
              variants={{ off: { opacity: 0, scale: 1.25 }, on: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
              style={{ transformOrigin: `${l.face[0]}px ${l.face[1]}px` }}
            >
              {lines.map((pts, i) => (
                <polygon key={i} points={pts} fill="#0C0C0C" />
              ))}
            </motion.g>
          </svg>

          {/* him */}
          <motion.img
            src={punchline.image}
            alt={punchline.alt}
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            className={`absolute aspect-square select-none ${l.portrait}`}
            initial="off"
            animate={show}
            variants={{ off: { opacity: 0, y: 60 }, on: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.55, delay: 0.4, ease }}
            draggable={false}
          />

          {/* speech bubble with its tail */}
          <svg aria-hidden="true" viewBox={`0 0 ${l.w} ${l.h}`} className="absolute inset-0 h-full w-full">
            <motion.g
              initial="off"
              animate={show}
              variants={{ off: { opacity: 0, scale: 0.2 }, on: { opacity: 1, scale: 1 } }}
              transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.8 }}
              style={{ transformOrigin: `${l.bubble.tail[2][0]}px ${l.bubble.tail[2][1]}px` }}
            >
              <polygon points={l.bubble.tail.map(p => p.join(',')).join(' ')} fill="#FFFFFF" stroke="#0C0C0C" strokeWidth={7} strokeLinejoin="round" />
              <ellipse cx={l.bubble.cx} cy={l.bubble.cy} rx={l.bubble.rx} ry={l.bubble.ry} fill="#FFFFFF" stroke="#0C0C0C" strokeWidth={7} />
              {/* covers the seam where the tail meets the ellipse */}
              <ellipse cx={l.bubble.cx} cy={l.bubble.cy} rx={l.bubble.rx - 4} ry={l.bubble.ry - 4} fill="#FFFFFF" />
            </motion.g>
          </svg>

          {/* lettering, typed in */}
          <p
            className={`absolute flex items-center justify-center text-center uppercase leading-[1.05] text-ink ${l.text}`}
            style={{ fontFamily: "'Bangers', 'Kanit', sans-serif", fontSize: 'clamp(1.15rem, 3.3vw, 2.7rem)', letterSpacing: '0.03em' }}
          >
            <span className="sr-only">{punchline.line}</span>
            <span aria-hidden="true">
              {chars.map((ch, i) => (
                <motion.span
                  key={i}
                  initial="off"
                  animate={show}
                  variants={{ off: { opacity: 0 }, on: { opacity: 1 } }}
                  transition={{ duration: 0.01, delay: 1.05 + i * 0.035 }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          </p>

          {/* sound effect */}
          <motion.span
            aria-hidden="true"
            className={`absolute select-none leading-none ${l.sfx}`}
            style={{
              fontFamily: "'Bangers', 'Kanit', sans-serif",
              color: '#0C0C0C',
              WebkitTextStroke: '8px #FFFFFF',
              paintOrder: 'stroke fill',
              letterSpacing: '0.04em',
            }}
            initial="off"
            animate={show}
            variants={{ off: { opacity: 0, scale: 2.4, rotate: -8 }, on: { opacity: 1, scale: 1, rotate: -8 } }}
            transition={{ type: 'spring', stiffness: 380, damping: 18, delay: typed + 0.25 }}
          >
            {punchline.sfx}
          </motion.span>

          {/* sweat drop */}
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 40 60"
            className={`absolute ${l.drop}`}
            initial="off"
            animate={show}
            variants={{ off: { opacity: 0, y: -24 }, on: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, delay: typed + 0.5, ease: 'easeOut' }}
          >
            <path d="M20 3 C 26 18, 36 28, 36 40 A 16 16 0 0 1 4 40 C 4 28, 14 18, 20 3 Z" fill="#FFFFFF" stroke="#0C0C0C" strokeWidth={4} />
            <path d="M12 38 Q 12 46 18 49" fill="none" stroke="#0C0C0C" strokeWidth={3} strokeLinecap="round" />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
}
