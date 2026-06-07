import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

export default function ScrollReveal({ children, className = '', threshold = 0.15, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(threshold);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}