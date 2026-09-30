import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import LiveProjectButton from '../components/LiveProjectButton';
import { contact, EMAIL, MAILTO } from '../data';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-30 -mt-10 rounded-t-[40px] bg-ink px-5 pt-24 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-28 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-36"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center sm:gap-12">
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {contact.heading}
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col items-center gap-4">
          <p className="max-w-[560px] font-medium leading-relaxed text-mist" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
            {contact.text}
          </p>
          {/* each part stays on one line, so a narrow screen breaks the line only between parts */}
          <p className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
            {contact.availability.split(' · ').map((part, i) => (
              <span key={part}>
                {i > 0 && ' · '}
                <span className="whitespace-nowrap">{part}</span>
              </span>
            ))}
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col items-center gap-5">
          <ContactButton />
          <a href={MAILTO} className="break-all font-light text-mist underline-offset-4 transition-opacity duration-200 hover:underline hover:opacity-70" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)' }}>
            {EMAIL}
          </a>
        </FadeIn>

        <FadeIn as="ul" delay={0.3} className="flex flex-wrap justify-center gap-3">
          {contact.links.map(link => (
            <li key={link.label}>
              <LiveProjectButton href={link.url} className="px-7 py-2.5 text-xs sm:px-9 sm:py-3 sm:text-sm">
                {link.label}
              </LiveProjectButton>
            </li>
          ))}
        </FadeIn>
      </div>

      <footer className="mt-24 border-t border-[#D7E2EA]/15 py-7 text-center text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50 sm:mt-28">
        © {new Date().getFullYear()} {contact.footer}
      </footer>
    </section>
  );
}
