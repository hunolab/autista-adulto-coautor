import { useState } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle } from 'lucide-react';

export const FormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Inscrição enviada com sucesso!',
      description: 'Entraremos em contato em breve. Obrigado pelo seu interesse!',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="inscricao" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-4">
            Faça Parte
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Inscreva-se para ser{' '}
            <span className="text-gradient-primary">coautor(a)</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário abaixo e nossa equipe entrará em contato para os próximos passos.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale" className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="p-8 lg:p-12 bg-muted/30 rounded-3xl border border-border/50 shadow-card"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">
                  Nome completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-background border-border/50 focus:border-primary transition-colors rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 bg-background border-border/50 focus:border-primary transition-colors rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-semibold">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 bg-background border-border/50 focus:border-primary transition-colors rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-semibold">
                  Por que você deseja ser coautor(a)?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos um pouco sobre você e sua motivação para participar deste projeto..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-background border-border/50 focus:border-primary transition-colors rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-secondary text-secondary-foreground hover:opacity-90 transition-all duration-300 shadow-soft hover:shadow-glow text-lg rounded-xl font-semibold"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar inscrição
                  </span>
                )}
              </Button>
            </div>
          </form>
        </AnimatedSection>

        {/* Trust indicators */}
        <AnimatedSection animation="fadeUp" className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Processo 100% online</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Suporte editorial completo</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Resposta em até 48h</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
