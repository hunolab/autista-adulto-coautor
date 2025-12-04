import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import bookMockup from '@/assets/book-mockup.png'; // <-- Caminho IDEAL

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo('.hero-subtitle', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      .fromTo('.hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-book', { x: 60, opacity: 0, rotate: 5 }, { x: 0, opacity: 1, rotate: 0, duration: 1 }, '-=0.8');

    if (bookRef.current) {
      gsap.to(bookRef.current, {
        y: -15,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const scrollToForm = () => {
    document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="hero-subtitle inline-block text-sm font-semibold tracking-widest uppercase text-secondary">
                Chamada para coautores
              </span>

              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
                Adultos no <span className="text-gradient-primary">Espectro Autista</span>
              </h1>

              <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Sua história pode transformar vidas. Participe como coautor(a) desta obra única e
                ajude a construir uma nova narrativa sobre o autismo adulto.
              </p>
            </div>

            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() =>
                  window.open(
                    'https://wa.me/5511950184848?text=Olá!%20Quero%20ser%20coautor(a)%20do%20livro%20Adultos%20no%20Espectro%20Autista.',
                    '_blank'
                  )
                }
                size="lg"
                className="bg-gradient-secondary text-secondary-foreground hover:opacity-90 transition-all duration-300 shadow-soft hover:shadow-glow text-lg px-8 py-6 rounded-full font-semibold"
              >
                Quero ser coautor(a)
              </Button>
            </div>
          </div>

          {/* Book mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                ref={bookRef}
                src={bookMockup}
                alt="Mockup do livro Adultos no Espectro Autista"
                className="hero-book relative w-72 md:w-80 lg:w-96 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
