import FadeIn from '../components/FadeIn';
import { experience } from '../data';

const RULE = '1px solid rgba(12, 12, 12, 0.15)';

export default function Experience() {
  const last = experience.items.length - 1;
  return (
    <section
      id="experience"
      className="relative z-20 -mt-10 rounded-t-[40px] bg-white px-5 pb-28 pt-20 text-ink sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-36 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-44 md:pt-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(2.6rem, 12vw, 160px)' }}
      >
        {experience.heading}
      </FadeIn>

      <ol className="mx-auto max-w-5xl">
        {experience.items.map((item, i) => (
          <FadeIn
            as="li"
            key={item.role}
            delay={i * 0.1}
            className="flex items-start gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={{ borderTop: RULE, borderBottom: i === last ? RULE : undefined }}
          >
            <span className="w-[1.35em] shrink-0 font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {item.role}
              </h3>
              <p className="font-medium uppercase tracking-wider" style={{ fontSize: 'clamp(0.72rem, 1.2vw, 0.95rem)' }}>
                {item.org}
                <span className="mx-2 opacity-40" aria-hidden="true">
                  /
                </span>
                <span className="opacity-60">{item.when}</span>
              </p>
              <p className="max-w-2xl font-light leading-relaxed [text-wrap:pretty]" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}>
                {item.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
