import FadeIn from '../components/FadeIn';
import { skills } from '../data';

// Dark band between the white Experience and Off duty sections, pulled up over Experience.
// Numbers, heading and pills reuse the styles of the Projects section.
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-30 -mt-10 rounded-t-[40px] bg-ink px-5 pb-28 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-36 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-44 md:pt-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {skills.heading}
      </FadeIn>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2 md:gap-y-16">
        {skills.groups.map((group, i) => (
          <FadeIn key={group.name} delay={(i % 2) * 0.1} className="flex flex-col gap-5">
            <div className="flex items-end gap-4 border-b border-[#D7E2EA]/15 pb-4">
              <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="pb-1 font-medium uppercase leading-tight text-mist" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.6rem)' }}>
                {group.name}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2 sm:gap-2.5">
              {group.items.map(item => (
                <li
                  key={item}
                  className="rounded-full border-2 border-[#D7E2EA]/25 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-[#D7E2EA]/80 sm:px-5 sm:py-2 sm:text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
