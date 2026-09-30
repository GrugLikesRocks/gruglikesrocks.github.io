import FadeIn from '../components/FadeIn';
import { services } from '../data';

export default function Services() {
  return (
    <section
      id="what-i-do"
      className="relative rounded-t-[40px] bg-white px-5 pb-28 pt-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:pb-36 sm:pt-24 md:rounded-t-[60px] md:px-10 md:pb-44 md:pt-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {services.heading}
      </FadeIn>

      <ol className="mx-auto max-w-5xl">
        {services.items.map((item, i) => (
          <FadeIn
            as="li"
            key={item.name}
            delay={i * 0.1}
            className="flex items-center gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)', borderBottom: i === services.items.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined }}
          >
            <span className="w-[1.35em] shrink-0 font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {item.name}
              </h3>
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
