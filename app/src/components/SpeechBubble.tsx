import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';

type Variant = 'side' | 'above';
type Props = { text: string; show: boolean; variant: Variant; className?: string };

type Shape = {
  box: string;
  tail: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  origin: string;
  size: string;
  text: CSSProperties;
  marks: string; // where the manga emphasis strokes sit, in the box's own units
};

// 'side' sits beside the head with the tail tip at the bottom left corner of its box.
// 'above' is a flatter bubble over the head for narrow phones, tail tip on the bottom edge at 74%.
const SHAPES: Record<Variant, Shape> = {
  side: {
    box: '0 0 300 200',
    tail: '62,128 104,146 2,198',
    cx: 160, cy: 84, rx: 136, ry: 78,
    origin: '0% 100%',
    size: 'clamp(1rem, 1.9vw, 1.95rem)',
    text: { left: '13%', top: '6%', width: '80%', height: '72%', padding: '0 7%' },
    marks: 'translate(272 6)',
  },
  above: {
    box: '0 0 320 110',
    tail: '188,80 222,78 236,108',
    cx: 160, cy: 46, rx: 154, ry: 41,
    origin: '74% 100%',
    size: 'clamp(1.05rem, 5vw, 1.35rem)',
    text: { left: '4%', top: '4%', width: '92%', height: '76%', padding: '0 6%' },
    marks: 'translate(292 -4) scale(0.8)',
  },
};

const TYPE_START = 0.35;
const TYPE_STEP = 0.035;

/**
 * Manga style speech bubble. Pops in with a tilt and letters its text in, then keeps bobbing,
 * flashes emphasis strokes and jiggles the last word for as long as it is shown. Hiding it and
 * showing it again replays the whole thing.
 */
export default function SpeechBubble({ text, show, variant, className = '' }: Props) {
  const s = SHAPES[variant];
  const state = show ? 'on' : 'off';

  const cut = text.lastIndexOf(' ');
  const lead = Array.from(text.slice(0, cut + 1));
  const punch = text.slice(cut + 1);
  const typed = TYPE_START + lead.length * TYPE_STEP;

  const letter = (i: number) => ({
    off: { opacity: 0, transition: { duration: 0 } },
    on: { opacity: 1, transition: { duration: 0.01, delay: TYPE_START + i * TYPE_STEP } },
  });

  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      style={{ transformOrigin: s.origin }}
      initial="off"
      animate={state}
      variants={{
        off: { opacity: 0, scale: 0.2, rotate: -14, transition: { duration: 0.2 } },
        on: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 280, damping: 13 } },
      }}
    >
      {/* idle loop: a slow bob and sway while the bubble is out */}
      <motion.div
        style={{ transformOrigin: s.origin }}
        animate={show ? { y: [0, -7, 0], rotate: [-1.6, 1.6, -1.6] } : { y: 0, rotate: 0 }}
        transition={show ? { duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 } : { duration: 0.2 }}
      >
        <svg viewBox={s.box} className="block h-auto w-full overflow-visible" aria-hidden="true">
          <polygon points={s.tail} fill="#FFFFFF" stroke="#0C0C0C" strokeWidth={5} strokeLinejoin="round" />
          <ellipse cx={s.cx} cy={s.cy} rx={s.rx} ry={s.ry} fill="#FFFFFF" stroke="#0C0C0C" strokeWidth={5} />
          {/* hides the seam where the tail joins the ellipse */}
          <ellipse cx={s.cx} cy={s.cy} rx={s.rx - 3} ry={s.ry - 3} fill="#FFFFFF" />
          {/* manga emphasis strokes, flashing on a loop */}
          <g transform={s.marks}>
            <motion.g
              style={{ transformOrigin: '0px 40px' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={show ? { opacity: [0, 1, 1, 0], scale: [0.5, 1.15, 1, 0.6] } : { opacity: 0, scale: 0.5 }}
              transition={show ? { duration: 1.1, times: [0, 0.2, 0.7, 1], repeat: Infinity, repeatDelay: 1.6, delay: typed } : { duration: 0 }}
            >
              <line x1={0} y1={30} x2={16} y2={4} stroke="#FFFFFF" strokeWidth={6} strokeLinecap="round" />
              <line x1={10} y1={40} x2={36} y2={24} stroke="#FFFFFF" strokeWidth={6} strokeLinecap="round" />
              <line x1={14} y1={54} x2={42} y2={52} stroke="#FFFFFF" strokeWidth={6} strokeLinecap="round" />
            </motion.g>
          </g>
        </svg>

        <p
          className="absolute flex items-center justify-center text-center uppercase leading-[1.05] text-[#0C0C0C]"
          style={{ ...s.text, fontFamily: "'Bangers', 'Kanit', sans-serif", fontSize: s.size, letterSpacing: '0.03em' }}
        >
          <span className="sr-only">{text}</span>
          <span aria-hidden="true">
            {lead.map((ch, i) => (
              <motion.span key={i} initial="off" animate={state} variants={letter(i)}>
                {ch}
              </motion.span>
            ))}
            {/* the punchline lands bigger, then gives a jiggle every few seconds */}
            <motion.span
              className="inline-block"
              style={{ fontSize: '1.3em' }}
              initial="off"
              animate={state}
              variants={{
                off: { opacity: 0, scale: 0.4, rotate: 0, transition: { duration: 0 } },
                on: {
                  opacity: 1,
                  scale: [0.4, 1.35, 1, 1.12, 1],
                  rotate: [0, -8, 6, -4, 0],
                  transition: {
                    opacity: { duration: 0.01, delay: typed },
                    scale: { duration: 0.7, delay: typed, repeat: Infinity, repeatDelay: 2.4 },
                    rotate: { duration: 0.7, delay: typed, repeat: Infinity, repeatDelay: 2.4 },
                  },
                },
              }}
            >
              {punch}
            </motion.span>
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}
