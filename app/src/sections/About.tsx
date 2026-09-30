import { Atom, Dices, Disc3, Gamepad2, type LucideIcon } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { about } from '../data';

type Corner = { icon: LucideIcon; place: string; size: string; tilt: number; delay: number; x: number };

// Four tiles for what he does off duty, standing where the template put its 3D objects.
const corners: Corner[] = [
  { icon: Disc3, place: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]', size: 'w-[120px] sm:w-[160px] lg:w-[180px] xl:w-[210px]', tilt: -9, delay: 0.1, x: -80 },
  { icon: Dices, place: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]', size: 'w-[100px] sm:w-[140px] lg:w-[160px] xl:w-[180px]', tilt: 7, delay: 0.25, x: -80 },
  { icon: Gamepad2, place: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%]', size: 'w-[120px] sm:w-[160px] lg:w-[180px] xl:w-[210px]', tilt: 8, delay: 0.15, x: 80 },
  { icon: Atom, place: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]', size: 'w-[130px] sm:w-[170px] lg:w-[190px] xl:w-[220px]', tilt: -6, delay: 0.3, x: 80 },
];

export default function About() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center px-5 py-48 sm:px-8 sm:py-52 md:px-10 lg:py-48">
      {corners.map(({ icon: Icon, place, size, tilt, delay, x }, i) => (
        <div key={i} className={`absolute ${place} ${size}`}>
          <FadeIn delay={delay} x={x} y={0} duration={0.9}>
            <div
              className="flex aspect-square flex-col items-center justify-center gap-[8%] rounded-[26%] border border-[#D7E2EA]/15"
              style={{
                transform: `rotate(${tilt}deg)`,
                background: 'linear-gradient(150deg, #1D1F24 0%, #101113 60%, #0C0C0C 100%)',
                boxShadow: '0 24px 50px rgba(0, 0, 0, 0.55), 0 1px 0 rgba(215, 226, 234, 0.12) inset',
              }}
            >
              <Icon aria-hidden="true" className="h-[42%] w-[42%] text-[#BBCCD7]" strokeWidth={1.25} />
              <span className="px-2 text-center text-[9px] font-medium uppercase leading-tight tracking-widest text-[#D7E2EA]/60 sm:text-[11px] md:text-xs">
                {about.offDuty[i]}
              </span>
            </div>
          </FadeIn>
        </div>
      ))}

      <div className="relative flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
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
            text={about.text}
            className="max-w-[560px] text-center font-medium leading-relaxed text-mist"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <ContactButton />
      </div>
    </section>
  );
}
