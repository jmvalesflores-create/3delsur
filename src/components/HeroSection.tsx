import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Trabajos de soldadura y cañerías industriales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <div className="inline-block mb-6 px-4 py-1.5 border border-primary/40 rounded-sm">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
            Buenos Aires · Desde 2020
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
          <span className="text-gradient-accent">3</span>del
          <span className="text-gradient-accent">SUR</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-body leading-relaxed">
          Especialistas en cañerías y metalúrgica industrial
        </p>

        <p className="text-sm text-steel-light max-w-xl mx-auto mb-10 font-body">
          Soluciones integrales en piping, soldadura calificada, montaje industrial y mantenimiento para la industria.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm"
          >
            Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-display text-sm tracking-widest uppercase hover:bg-muted transition-colors rounded-sm"
          >
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
