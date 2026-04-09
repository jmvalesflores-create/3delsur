import {
  Wrench, Pipette, Building2, Factory, Zap, Award,
  ShieldCheck, Paintbrush, Flame, Thermometer, Hammer
} from "lucide-react";

const services = [
  { icon: Wrench, title: "Armado de Reactores y Tanques" },
  { icon: Pipette, title: "Piping Acero Inoxidable y Acero al Carbono" },
  { icon: Building2, title: "Armado de Estructura Metálica" },
  { icon: Factory, title: "Montaje Industrial en General" },
  { icon: Zap, title: "Montaje Eléctrico Industrial" },
  { icon: Award, title: "Soldadura Calificada ASME IX" },
  { icon: ShieldCheck, title: "Soldadura Sanitarias en Acero Inoxidable" },
  { icon: Paintbrush, title: "Servicio de Pintura" },
  { icon: Flame, title: "Reparación de Caldera" },
  { icon: Thermometer, title: "Montaje Cañería PVC - Termo Fusión" },
  { icon: Hammer, title: "Albañilería Industrial" },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
            Lo que hacemos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestro equipo está formado por profesionales y técnicos con amplia experiencia,
            trayectoria y capacidad para cubrir las necesidades de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-6 bg-muted rounded-sm border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-sm">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-primary/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-sm font-semibold text-foreground leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
