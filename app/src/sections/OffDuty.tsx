import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { offDuty } from '../data';

const RULE = '1px solid rgba(12, 12, 12, 0.15)';

// Same numbered list as What I do and Experience, titles only, folded away until a visitor opens it.
export default function OffDuty() {
  const [open, setOpen] = useState(false);
  const last = offDuty.items.length - 1;

  return (
    <section
      id="off-duty"
      className="relative z-40 -mt-10 rounded-t-[40px] bg-white px-5 pb-28 pt-20 text-ink sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-36 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-44 md:pt-32"
    >
      <FadeIn as="h2" y={40} className="text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="off-duty-list"
          className="inline-flex items-center gap-[0.18em] uppercase transition-opacity duration-200 hover:opacity-70"
        >
          {offDuty.heading}
          <ChevronDown
            aria-hidden="true"
            className="h-[0.42em] w-[0.42em] shrink-0 transition-transform duration-300"
            style={{ transform: open ? 'rotate(180deg)' : 'none' }}
            strokeWidth={3}
          />
        </button>
      </FadeIn>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="off-duty-list"
            key="list"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <ol className="mx-auto mt-16 max-w-5xl sm:mt-20 md:mt-24">
              {offDuty.items.map((item, i) => (
                <li
                  key={item.name}
                  className="flex items-center gap-5 py-6 sm:gap-8 sm:py-8 md:gap-12"
                  style={{ borderTop: RULE, borderBottom: i === last ? RULE : undefined }}
                >
                  <span className="w-[1.35em] shrink-0 font-black leading-none" style={{ fontSize: 'clamp(2.6rem, 7vw, 96px)' }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1.1rem, 2.6vw, 2.4rem)' }}>
                    {item.name}
                  </h3>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
