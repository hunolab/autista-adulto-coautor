import { AnimatedSection } from '@/components/AnimatedSection';
import { Linkedin, Instagram } from 'lucide-react';

export const CoordinatorSection = () => {
  return (
    <section
      id="coordenadora"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* --- Foto da Coordenadora --- */}
          <AnimatedSection animation="slideLeft">
            <div className="relative">

              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-10 blur-2xl" />

              {/* Container da foto */}
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-muted border border-border/50 shadow-card">
                <img
                  src="/src/assets/barbara.png"
                  alt="Foto da Coordenadora Editorial"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Elementos decorativos */}
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-primary/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary/20 rounded-full" />

            </div>
          </AnimatedSection>

          {/* --- Texto da Coordenadora --- */}
          <AnimatedSection animation="slideRight">
            <div className="lg:py-8">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-4">
                Coordenadora Editorial
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Bárbara Laureano
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                 Bárbara Laureano é psicóloga com atuação desde 2017. Especializada em Psicoterapia Comportamental e Análise do Comportamento Aplicada ao Transtorno do Espectro Autista (TEA), com foco no diagnóstico tardio em mulheres. Atualmente mestranda, onde desenvolve pesquisa sobre camuflagem e identidade no contexto do TEA feminino.
              </p>

              <div className="flex gap-4">
            

                <a
                  href="https://www.instagram.com/barbaralaureano.psi/"
                  className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition"
                >
                  <Instagram size={22} />
                  Instagram
                </a>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
