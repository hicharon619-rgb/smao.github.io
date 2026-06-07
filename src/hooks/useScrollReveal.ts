import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight * (1 - threshold) && rect.bottom > 0) {
      setIsVisible(true);
    }
  }, [threshold]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { ref, isVisible };
}