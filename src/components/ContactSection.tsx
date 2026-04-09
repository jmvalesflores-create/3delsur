import { useState } from "react";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { z } from "zod";

const presupuestoSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().max(30).optional(),
  servicio: z.string().min(1, "Seleccioná un servicio"),
  mensaje: z.string().trim().min(1, "El mensaje es obligatorio").max(2000)
});

type FormData = z.infer<typeof presupuestoSchema>;

const servicios = [
"Armado de Reactores y Tanques",
"Piping Acero Inoxidable y Acero al Carbono",
"Armado de Estructura Metálica",
"Montaje Industrial en General",
"Montaje Eléctrico Industrial",
"Soldadura Calificada ASME IX",
"Soldadura Sanitarias en Acero Inoxidable",
"Servicio de Pintura",
"Reparación de Caldera",
"Montaje Cañería PVC-Termo Fusión",
"Albañilería Industrial"];


const ContactSection = () => {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
  {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = presupuestoSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    // Build mailto link as fallback (no backend email service)
    const subject = encodeURIComponent(`Presupuesto: ${form.servicio}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nTeléfono: ${form.telefono || "No indicado"}\nServicio: ${form.servicio}\n\nMensaje:\n${form.mensaje}`
    );
    window.location.href = `mailto:contacto@3delsur.com.ar?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ nombre: "", email: "", telefono: "", servicio: "", mensaje: "" });
      setTimeout(() => setSent(false), 5000);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Pedí tu <span className="text-gradient-accent">presupuesto</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Para contactarte con nuestra empresa podés hacerlo telefónicamente, por e-mail
            o completando el siguiente formulario.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5 bg-card border border-border rounded-2xl p-8">
            
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Nombre *
                </label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tu nombre" />
                
                {errors.nombre &&
                <p className="text-destructive text-xs mt-1">{errors.nombre}</p>
                }
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="tu@email.com" />
                
                {errors.email &&
                <p className="text-destructive text-xs mt-1">{errors.email}</p>
                }
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Teléfono
                </label>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="011 xxxx-xxxx" />
                
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Servicio *

                </label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  
                  <option value="">Seleccioná un servicio</option>
                  {servicios.map((s) =>
                  <option key={s} value={s}>
                      {s}
                    </option>
                  )}
                </select>
                {errors.servicio &&
                <p className="text-destructive text-xs mt-1">{errors.servicio}</p>
                }
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Mensaje *
              </label>
              <textarea
                name="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Describí brevemente lo que necesitás..." />
              
              {errors.mensaje &&
              <p className="text-destructive text-xs mt-1">{errors.mensaje}</p>
              }
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-display text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors disabled:opacity-50">
              
              {sending ?
              <Loader2 className="w-4 h-4 animate-spin" /> :

              <Send className="w-4 h-4" />
              }
              {sending ? "Enviando..." : "Enviar consulta"}
            </button>

            {sent &&
            <p className="text-sm text-primary font-medium">
                ¡Se abrió tu cliente de correo! Enviá el email para completar la consulta.
              </p>
            }
          </form>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-lg font-bold text-foreground">
                Datos de contacto
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Teléfono</p>
                  <a
                    href="tel:01140644709"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    
                    011 4064-4709
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href="mailto:contacto@3delsur.com.ar"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    
                    contacto@3delsur.com.ar
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Ubicación</p>
                  <p className="text-sm text-muted-foreground">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ContactSection;