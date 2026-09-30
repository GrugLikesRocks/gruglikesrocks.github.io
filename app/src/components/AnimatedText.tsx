import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

type Props = { text: string; className?: string; style?: CSSProperties };

/** Paragraph whose characters brighten one by one as it scrolls through the viewport. */
export default function AnimatedText({ text, className, style }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const total = text.length;

  let at = 0;
  const words = text.split(' ').map(word => {
    const start = at;
    at += word.length + 1;
    return { word, start };
  });

  return (
    <p ref={ref} className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map(({ word, start }, w) => (
          <span key={w}>
            {/* words stay whole so a line never breaks mid word */}
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, c) => (
                <Char key={c} char={char} progress={scrollYProgress} range={[(start + c) / total, (start + c + 1) / total]} />
              ))}
            </span>{' '}
          </span>
        ))}
      </span>
    </p>
  );
}

function Char({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}
