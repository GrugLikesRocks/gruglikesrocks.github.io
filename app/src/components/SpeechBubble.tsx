import { motion } from 'framer-motion';

type Variant = 'side' | 'above';
type Props = { text: string; show: boolean; variant: Variant; className?: string };

// 'side' sits beside the head with the tail tip at the bottom left corner of its box.
// 'above' is a flatter bubble over the head for narrow phones, tail tip on the bottom edge at 74%.
const SHAPES: Record<Variant, { box: string; tail: string; cx: number; cy: number; rx: number; ry: number; origin: string; size: string; text: React.CSSProperties }> = {
  side: {
    box: '0 0 300 200',
    tail: '62,128 104,146 2,198',
    cx: 160, cy: 84, rx: 136, ry: 78,
    origin: '0% 100%',
    size: 'clamp(1rem, 1.9vw, 1.95rem)',
    text: { left: '13%', top: '6%', width: '80%', height: '72%', padding: '0 7%' },
  },
  above: {
    box: '0 0 320 110',
    tail: '188,80 222,78 236,108',
    cx: 160, cy: 46, rx: 154, ry: 41,
    origin: '74% 100%',
    size: 'clamp(1.05rem, 5vw, 1.35rem)',
    text: { left: '4%', top: '4%', width: '92%', height: '76%', padding: '0 6%' },
  },
};

/** Manga style speech bubble that pops in and then letters in its text. */
export default function SpeechBubble({ text, show, variant, className = '' }: Props) {
  const s = SHAPES[variant];
  const chars = Array.from(text);
  const state = show ? 'on' : 'off';
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      style={{ transformOrigin: s.origin }}
      initial="off"
      animate={state}
      variants={{ off: { opacity: 0, scale: 0.3 }, on: { opacity: 1, scale: 1 } }}
      transition={{ type: 'spring', stiffness: 260, damping: 15 }}
    >
      <svg viewBox={s.box} className="block h-auto w-full overflow-visible" aria-hidden="true">
        <polygon points={s.tail} fill="#FFFFFF" stroke="#0C0C0C" strokeWidth={5} strokeLinejoin="round" />
        <ellipse cx={s.cx} cy={s.cy} rx={s.rx} ry={s.ry} fill="#FFFFFF" stroke="#0C0C0C" strokeWidth={5} />
        {/* hides the seam where the tail joins the ellipse */}
        <ellipse cx={s.cx} cy={s.cy} rx={s.rx - 3} ry={s.ry - 3} fill="#FFFFFF" />
      </svg>
      <p
        className="absolute flex items-center justify-center text-center uppercase leading-[1.05] text-[#0C0C0C]"
        style={{ ...s.text, fontFamily: "'Bangers', 'Kanit', sans-serif", fontSize: s.size, letterSpacing: '0.03em' }}
      >
        <span className="sr-only">{text}</span>
        <span aria-hidden="true">
          {chars.map((ch, i) => (
            <motion.span
              key={i}
              initial="off"
              animate={state}
              variants={{ off: { opacity: 0 }, on: { opacity: 1 } }}
              transition={{ duration: 0.01, delay: 0.3 + i * 0.035 }}
            >
              {ch}
            </motion.span>
          ))}
        </span>
      </p>
    </motion.div>
  );
}
