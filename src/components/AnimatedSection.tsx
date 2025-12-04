import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  stagger?: number;
}

export const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  stagger = 0,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const childElements = element.children.length > 1 ? element.children : element;

    const animations = {
      fadeUp: { y: 50, opacity: 0 },
      fadeIn: { opacity: 0 },
      slideLeft: { x: -50, opacity: 0 },
      slideRight: { x: 50, opacity: 0 },
      scale: { scale: 0.9, opacity: 0 },
    };

    gsap.set(childElements, animations[animation]);

    gsap.to(childElements, {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, [animation, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: () => window.innerHeight * speed * -0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [speed]);

  return ref;
};
