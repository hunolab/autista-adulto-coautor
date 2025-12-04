import { Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--background)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Adultos no Espectro Autista
            </h3>
            <p className="text-background/70 leading-relaxed max-w-md mb-6">
              Um projeto editorial colaborativo dedicado a dar voz às experiências únicas de adultos no espectro autista. Juntos, construímos uma narrativa de representatividade e compreensão.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/barbaralaureano.psi/"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-background/70 hover:text-background transition-colors">
                  Sobre o Livro
                </a>
              </li>
              <li>
                <a href="#coordenadora" className="text-background/70 hover:text-background transition-colors">
                  Coordenadora
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-background/70 hover:text-background transition-colors">
                  Benefícios
                </a>
              </li>
             
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:comunicacao@literarebooks.com.br"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  comunicacao@literarebooks.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511950184848"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (11) 95018-4848
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>© {currentYear} Adultos no Espectro Autista. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
