import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { projects, type Project, type Shot } from '../data';

const ROUND = 'rounded-[28px] sm:rounded-[40px] md:rounded-[52px]';

// Image heights also answer to viewport height, so a whole card fits under the sticky offset.
// 85vh is the sticky slot. 330px and 320px are what the rest of a card takes on a phone and on a desktop.
// The first value is a floor for screens too short to stick, where the cards scroll normally.
const TOP_H = 'max(96px, min(130px, (85vh - 330px) * 0.4), min(16vw, (85vh - 320px) * 0.4, 230px))';
const BOTTOM_H = 'max(120px, min(160px, (85vh - 330px) * 0.6), min(22vw, (85vh - 320px) * 0.6, 340px))';

function Picture({ shot, className = '' }: { shot: Shot; className?: string }) {
  return (
    <img
      src={shot.src}
      alt={shot.alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover ${ROUND} ${className}`}
      style={{ objectPosition: shot.position }}
    />
  );
}

function Card({ project, index, total, progress }: { project: Project; index: number; total: number; progress: MotionValue<number> }) {
  // every card shrinks a little as the ones after it slide over the top
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const [top, bottom, tall] = project.shots;

  return (
    <div className="stack-slot sticky top-24 h-[85vh] md:top-32">
      <motion.article
        className="stack-card relative origin-top rounded-[40px] border-2 border-[#D7E2EA] bg-ink p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{ scale, top: index * 28 }}
      >
        <div className="mb-4 flex flex-col gap-3 md:mb-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex items-center gap-4 md:gap-7">
            <span
              className="hero-heading shrink-0 font-black leading-none"
              style={{ fontSize: 'clamp(3rem, min(10vw, 13vh), 140px)' }}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-0.5 md:gap-1">
              <span className="text-[11px] font-medium uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{project.category}</span>
              <h3 className="font-medium uppercase leading-tight text-mist" style={{ fontSize: 'clamp(1.25rem, 2.4vw, 2.1rem)' }}>
                {project.name}
              </h3>
              <p className="hidden max-w-xl font-light leading-snug text-[#D7E2EA]/70 md:block" style={{ fontSize: 'clamp(0.85rem, 1.25vw, 1.05rem)' }}>
                {project.text}
              </p>
            </div>
          </div>
          <p className="text-sm font-light leading-snug text-[#D7E2EA]/70 md:hidden">{project.text}</p>
          <LiveProjectButton
            href={project.url}
            label={`${projects.button}: ${project.name}`}
            className="self-start px-6 py-2.5 text-xs sm:px-10 sm:py-3.5 sm:text-base md:self-center"
          >
            {projects.button}
          </LiveProjectButton>
        </div>

        <div className="grid grid-cols-[2fr_3fr] gap-3 md:gap-4">
          <div className="flex flex-col gap-3 md:gap-4">
            <div style={{ height: TOP_H }}>
              <Picture shot={top} />
            </div>
            <div style={{ height: BOTTOM_H }}>
              <Picture shot={bottom} />
            </div>
          </div>
          <div className="relative">
            <Picture shot={tall} className="absolute inset-0" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const stack = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stack, offset: ['start start', 'end end'] });
  const { items, more } = projects;

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-5 pb-32 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-40 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-48 md:pt-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {projects.heading}
      </FadeIn>

      <div ref={stack} className="mx-auto max-w-[1400px]">
        {items.map((project, i) => (
          <Card key={project.name} project={project} index={i} total={items.length} progress={scrollYProgress} />
        ))}
      </div>

      <FadeIn className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-6 text-center md:mt-16">
        <div>
          <p className="font-medium uppercase tracking-wide text-mist" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2rem)' }}>
            {more.lead}
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{more.label}</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {more.items.map(item => (
            <li key={item.name}>
              {item.url ? (
                <LiveProjectButton href={item.url} className="px-5 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm">
                  {item.name}
                </LiveProjectButton>
              ) : (
                <span className="inline-block rounded-full border-2 border-[#D7E2EA]/25 px-5 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60 sm:px-6 sm:py-2.5 sm:text-sm">
                  {item.name}
                  {item.note ? ` · ${item.note}` : ''}
                </span>
              )}
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
