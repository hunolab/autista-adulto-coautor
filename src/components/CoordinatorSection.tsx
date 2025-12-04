import { AnimatedSection } from '@/components/AnimatedSection';
import { Linkedin, Instagram } from 'lucide-react';

export const CoordinatorSection = () => {
  return (
    <section id="coordenadora" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection animation="slideLeft">
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-10 blur-2xl" />
              
              {/* Photo placeholder */}
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-muted border border-border/50 shadow-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">CE</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Espaço reservado para foto da Coordenadora Editorial
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-primary/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary/20 rounded-full" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" className="lg:py-8">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-4">
              Coordenadora Editorial
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Liderança com{' '}
              <span className="text-gradient-primary">propósito</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Com vasta experiência em projetos editoriais inclusivos, nossa coordenadora traz uma visão única que combina expertise profissional com genuíno comprometimento com a causa autista.
              </p>
              <p>
                Sua missão é garantir que cada voz seja ouvida e que cada história seja contada com a autenticidade e o respeito que merece. O resultado é uma obra que não apenas informa, mas transforma perspectivas.
              </p>
              <p>
                Sob sua direção, o projeto "Adultos no Espectro Autista" se tornou uma referência em publicações colaborativas sobre neurodiversidade.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
