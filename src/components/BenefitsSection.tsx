import { AnimatedSection } from '@/components/AnimatedSection';
import { Award, Lightbulb, CheckCircle, Users2 } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Publicação Oficial',
      description: 'Seu nome como coautor(a) em uma obra publicada, com ISBN e distribuição nacional.',
      color: 'primary',
    },
    {
      icon: Lightbulb,
      title: 'Amplifique sua Voz',
      description: 'Compartilhe sua experiência única e contribua para a representatividade autista.',
      color: 'secondary',
    },
    {
      icon: Users2,
      title: 'Comunidade',
      description: 'Conecte-se com outros coautores e faça parte de uma rede de apoio e troca.',
      color: 'primary',
    },
    {
      icon: CheckCircle,
      title: 'Suporte Editorial',
      description: 'Apoio completo da equipe editorial durante todo o processo de escrita.',
      color: 'secondary',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Inscrição',
      description: 'Preencha o formulário com seus dados e motivação para participar.',
    },
    {
      number: '02',
      title: 'Seleção',
      description: 'Nossa equipe avaliará sua inscrição e entrará em contato.',
    },
    {
      number: '03',
      title: 'Orientação',
      description: 'Receba as diretrizes e suporte para desenvolver seu capítulo.',
    },
    {
      number: '04',
      title: 'Publicação',
      description: 'Veja sua história transformada em parte desta obra única.',
    },
  ];

  const whoCanParticipate = [
    'Adultos no espectro autista que desejam compartilhar suas experiências',
    'Profissionais da área da saúde e educação com vivência no tema',
    'Familiares e cuidadores com histórias relevantes para contribuir',
    'Pesquisadores com insights sobre autismo na vida adulta',
  ];

  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Benefits */}
        <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-4">
            Vantagens
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que significa ser{' '}
            <span className="text-gradient-primary">coautor(a)</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" stagger={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </AnimatedSection>

        {/* How it works */}
        <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Processo
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Como funciona
          </h3>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" stagger={0.15} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <span className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* Who can participate */}
        <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto">
          <div className="p-8 lg:p-12 bg-background rounded-3xl shadow-card border border-border/50">
            <div className="text-center mb-8">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-4">
                Elegibilidade
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Quem pode participar
              </h3>
            </div>
            
            <ul className="space-y-4">
              {whoCanParticipate.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
