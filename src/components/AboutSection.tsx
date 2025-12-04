import { AnimatedSection } from '@/components/AnimatedSection';
import { BookOpen, Heart, Users } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-4">
            Sobre o Livro
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Uma obra que nasce da{' '}
            <span className="text-gradient-primary">experiência real</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            "Adultos no Espectro Autista" é mais do que um livro – é um movimento para dar voz às experiências únicas de pessoas autistas que navegam a vida adulta. Cada capítulo, escrito por coautores diversos, oferece perspectivas autênticas sobre desafios, conquistas e a riqueza da neurodiversidade.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" stagger={0.1} className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="group p-8 bg-background rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Histórias Reais</h3>
            <p className="text-muted-foreground leading-relaxed">
              Narrativas autênticas que refletem as vivências, desafios e vitórias de adultos no espectro.
            </p>
          </div>

          <div className="group p-8 bg-background rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Empatia e Compreensão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Construindo pontes de entendimento entre pessoas neurodivergentes e neurotípicas.
            </p>
          </div>

          <div className="group p-8 bg-background rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Comunidade Unida</h3>
            <p className="text-muted-foreground leading-relaxed">
              Juntos, criamos uma rede de apoio e representatividade para a comunidade autista.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
