import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { hero, nav } from '../data';

export default function Hero() {
  return (
    <section className="hero-h relative flex flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" aria-label="Main" delay={0} y={-20} className="relative z-20 flex justify-between px-4 pt-6 min-[380px]:px-6 md:px-10 md:pt-8">
        {nav.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-[11px] font-medium uppercase tracking-wide text-mist transition-opacity duration-200 hover:opacity-70 min-[380px]:text-sm min-[380px]:tracking-wider md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* One line from 640px up. On a phone the name is too long for that, so it takes two. */}
      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading mt-6 w-full text-center text-[21.5vw] font-black uppercase leading-[0.86] tracking-tight sm:mt-4 sm:whitespace-nowrap sm:text-[13.6vw] sm:leading-none md:-mt-5 md:text-[14vw] lg:text-[14.4vw]"
        >
          <span className="block sm:inline">{hero.greeting}</span> <span className="block sm:inline">{hero.name}</span>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-mist sm:max-w-[220px] md:max-w-[240px] xl:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {hero.line}
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait: floats mid screen on phones and tablets, stands on the bottom edge from 1024px up. */}
      <div className="pointer-events-none absolute left-1/2 top-[54%] z-10 w-[min(86vw,46vh)] -translate-x-1/2 -translate-y-1/2 sm:top-[56%] sm:w-[min(72vw,max(52vh,270px))] lg:bottom-0 lg:top-auto lg:w-[min(680px,74vh,50vw)] lg:translate-y-0">
        <FadeIn delay={0.6} y={30}>
            <img
              src={hero.portrait}
              alt={hero.portraitAlt}
              width={800}
              height={800}
              draggable={false}
              className="block h-auto w-full select-none"
            />
        </FadeIn>
      </div>
    </section>
  );
}
