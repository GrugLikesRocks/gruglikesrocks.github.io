import { useMemo, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

/** Fades and slides its children in the first time they enter the viewport. */
export default function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, as = 'div', ...rest }: Props) {
  // motion.create() lets one wrapper animate any element type
  const Tag = useMemo(() => motion.create(as as 'div'), [as]);
  return (
    <Tag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...(rest as object)}
    >
      {children}
    </Tag>
  );
}
