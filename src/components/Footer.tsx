import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                viva<span className="text-primary">intec</span>
              </span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Transformamos ideas en soluciones tecnológicas que impulsan el 
              crecimiento de tu empresa.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Software a Medida</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Automatización</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consultoría IT</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Integración de Sistemas</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Soporte Técnico</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4 text-background/70 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>hola@vivaintec.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2024 Vivaintec. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Privacidad</a>
            <a href="#" className="hover:text-background transition-colors">Términos</a>
            <a href="#" className="hover:text-background transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
