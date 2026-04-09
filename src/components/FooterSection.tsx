import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-3delsur.png";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="3delSUR Logo" className="h-14 w-auto" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              <h3 className="font-display text-2xl font-bold">
                <span className="text-gradient-accent">3</span>del<span className="text-gradient-accent">SUR</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">Especialistas en cañerías y montajes industriales


            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-6">
              Navegación
            </h4>
            <div className="space-y-3">
              {["Inicio", "Servicios", "Imágenes", "Nosotros", "Contacto"].map((link) =>
              <a
                key={link}
                href={`#${link.toLowerCase().replace("á", "a")}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                
                  {link}
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-6">
              Contacto
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Para contactarte con nuestra empresa podés hacerlo telefónicamente o dejarnos un e-mail.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:01140644709" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  011 4064-4709
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contacto@3delsur.com.ar" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  contacto@3delsur.com.ar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 3delSUR. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>);

};

export default FooterSection;