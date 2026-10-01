import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import { about } from '../data';

export default function About() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center px-5 py-28 sm:px-8 sm:py-32 md:px-10">
      <div className="flex w-full max-w-5xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {about.heading}
        </FadeIn>

        <AnimatedText
          text={about.lead}
          className="max-w-[760px] text-center font-medium leading-relaxed text-mist"
          style={{ fontSize: 'clamp(1.1rem, 2.3vw, 1.6rem)' }}
        />

        <dl className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
          {about.stats.map((stat, i) => (
            <FadeIn
              key={stat.label}
              delay={i * 0.1}
              className="flex flex-col items-center gap-2 rounded-[28px] border border-[#D7E2EA]/15 px-4 py-7 text-center sm:rounded-[36px] md:py-10"
            >
              <dt className="order-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{stat.label}</dt>
              <dd className="hero-heading order-1 font-black leading-none" style={{ fontSize: 'clamp(2.4rem, 4.4vw, 4rem)' }}>
                {stat.value}
              </dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
