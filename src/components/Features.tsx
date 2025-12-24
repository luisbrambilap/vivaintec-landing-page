import { Layers, Zap, Shield, BarChart3, Cog, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "Software a Medida",
    description: "Desarrollamos soluciones personalizadas que se adaptan exactamente a las necesidades de tu empresa.",
    details: [
      "Aplicaciones web y móviles nativas",
      "Sistemas de gestión empresarial (ERP)",
      "Plataformas de e-commerce",
      "Portales de clientes y proveedores",
      "Integraciones con sistemas existentes",
    ],
    useCase: "Ideal para empresas que necesitan herramientas específicas que no existen en el mercado.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Optimiza procesos repetitivos y ahorra tiempo con flujos de trabajo automatizados e inteligentes.",
    details: [
      "Automatización de facturación y cobros",
      "Flujos de aprobación automáticos",
      "Generación de reportes programados",
      "Sincronización de inventarios",
      "Notificaciones y alertas inteligentes",
    ],
    useCase: "Reduce hasta un 70% del tiempo en tareas administrativas repetitivas.",
  },
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    description: "Protegemos tus datos con los más altos estándares de seguridad y encriptación de nivel empresarial.",
    details: [
      "Encriptación de datos en reposo y tránsito",
      "Autenticación de dos factores (2FA)",
      "Auditorías de seguridad periódicas",
      "Cumplimiento con GDPR y regulaciones",
      "Backups automáticos y recuperación",
    ],
    useCase: "Esencial para empresas que manejan datos sensibles de clientes o información financiera.",
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    description: "Dashboards intuitivos y reportes en tiempo real para tomar decisiones basadas en datos.",
    details: [
      "Dashboards personalizados e interactivos",
      "Reportes automáticos por email",
      "Visualización de KPIs en tiempo real",
      "Análisis predictivo con IA",
      "Exportación a múltiples formatos",
    ],
    useCase: "Transforma datos crudos en insights accionables para tu equipo directivo.",
  },
  {
    icon: Cog,
    title: "Integración Total",
    description: "Conectamos tu nuevo software con las herramientas que ya usas para un flujo de trabajo sin interrupciones.",
    details: [
      "APIs RESTful y GraphQL",
      "Integración con CRMs (Salesforce, HubSpot)",
      "Conexión con ERPs y contabilidad",
      "Pasarelas de pago (Stripe, PayPal)",
      "Herramientas de comunicación (Slack, Teams)",
    ],
    useCase: "Elimina la entrada manual de datos entre sistemas y reduce errores humanos.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Equipo dedicado disponible en todo momento para resolver cualquier duda o incidencia.",
    details: [
      "Soporte técnico por chat, email y teléfono",
      "Monitoreo proactivo de sistemas",
      "Tiempo de respuesta garantizado",
      "Actualizaciones y mantenimiento incluido",
      "Capacitación para tu equipo",
    ],
    useCase: "Tu operación nunca se detiene gracias a nuestro equipo siempre disponible.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="text-sm font-medium text-primary mb-4 block"
            variants={headerVariants}
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6"
            variants={headerVariants}
          >
            Todo lo que tu empresa necesita para{" "}
            <span className="text-primary">
              crecer
            </span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            variants={headerVariants}
          >
            Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar
            la productividad y eficiencia de tu negocio.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-card relative overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.15)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Detailed features list */}
                <ul className="space-y-2 mb-4">
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Use case */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-primary/80 italic">
                    {feature.useCase}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
