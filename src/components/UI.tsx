import { ComponentPropsWithoutRef, Key, ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const variants = {
    primary: 'bg-accent text-ink hover:bg-accent-hover shadow-lg shadow-accent/30 hover:shadow-[0_10px_30px_rgba(253,181,21,0.32)] hover:-translate-y-0.5',
    secondary: 'bg-white text-black hover:bg-gray-100',
    outline: 'bg-transparent border border-metalGold/60 text-metalGold hover:bg-metalGold/10 hover:border-metalGold hover:text-cream hover:-translate-y-0.5',
    ghost: 'bg-transparent hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-medium',
    icon: 'p-3',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </motion.button>
  );
}

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export function Section({ children, className, id, containerClassName, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 px-6 md:px-12 relative overflow-hidden', className)} {...rest}>
      <div className={cn('max-w-7xl mx-auto', containerClassName)}>{children}</div>
    </section>
  );
}

interface FadeInProps {
  key?: Key;
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = 'up', duration = 0.6, className }: FadeInProps) {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
