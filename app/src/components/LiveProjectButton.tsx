import type { ReactNode } from 'react';

type Props = { href: string; children: ReactNode; label?: string; className?: string };

/** Ghost pill link that opens in a new tab. */
export default function LiveProjectButton({ href, children, label, className = '' }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-block shrink-0 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {children}
    </a>
  );
}
