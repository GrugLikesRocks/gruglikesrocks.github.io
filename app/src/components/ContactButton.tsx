import { contact, MAILTO } from '../data';

export default function ContactButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={MAILTO}
      className={`inline-block shrink-0 whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.04] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        // the template's magenta to orange, recoloured into Giorgio's navy and electric blue
        background: 'linear-gradient(123deg, #050B1F 7%, #1B3FA6 40%, #2F6BFF 72%, #45C4FF 100%)',
        boxShadow: '0px 4px 4px rgba(47, 107, 255, 0.25), 4px 4px 12px #1E47C8 inset',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      {contact.button}
    </a>
  );
}
