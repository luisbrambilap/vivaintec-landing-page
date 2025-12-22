import { Layers, Zap, Shield, BarChart3, Cog, Headphones } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Software a Medida",
    description: "Desarrollamos soluciones personalizadas que se adaptan exactamente a las necesidades de tu empresa.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Optimiza procesos repetitivos y ahorra tiempo con flujos de trabajo automatizados e inteligentes.",
  },
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    description: "Protegemos tus datos con los más altos estándares de seguridad y encriptación de nivel empresarial.",
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    description: "Dashboards intuitivos y reportes en tiempo real para tomar decisiones basadas en datos.",
  },
  {
    icon: Cog,
    title: "Integración Total",
    description: "Conectamos tu nuevo software con las herramientas que ya usas para un flujo de trabajo sin interrupciones.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Equipo dedicado disponible en todo momento para resolver cualquier duda o incidencia.",
  },
];

const Features = () => {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Todo lo que tu empresa necesita para{" "}
            <span className="text-primary">crecer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar 
            la productividad y eficiencia de tu negocio.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
