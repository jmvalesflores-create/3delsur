import { CheckCircle } from "lucide-react";

const highlights = [
  "Más de 5 años de experiencia en el sector",
  "Equipo técnico altamente calificado",
  "Soldadura certificada ASME IX",
  "Soluciones integrales",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
              Sobre nosotros
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
              Experiencia y<br />
              <span className="text-gradient-accent">Compromiso</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              3delSUR nació en 2020 en Buenos Aires con la misión de brindar servicios
              industriales de excelencia. Nos especializamos en cañerías y metalúrgica industrial,
              ofreciendo soluciones integrales que combinan calidad, seguridad y eficiencia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Contamos con profesionales y técnicos con amplia trayectoria en el sector,
              comprometidos con satisfacer las necesidades más exigentes de nuestros clientes.
            </p>

            <div className="space-y-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "5+", label: "Años de experiencia" },
              { number: "11", label: "Servicios especializados" },
              { number: "100%", label: "Compromiso con la calidad" },
              { number: "24/7", label: "Disponibilidad" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-sm p-8 text-center shadow-industrial"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-accent mb-2">
                  {stat.number}
                </div>
                <div className="font-display text-xs tracking-widest text-muted-foreground uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
