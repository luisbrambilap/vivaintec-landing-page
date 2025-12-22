import { Layers, Zap, Shield, BarChart3, Cog, Headphones } from "lucide-react";
import { motion } from "framer-motion";

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
            <motion.span 
              className="text-primary inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              crecer
            </motion.span>
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
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-card cursor-pointer relative overflow-hidden"
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
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "hsl(var(--accent))",
                    transition: { duration: 0.3 }
                  }}
                >
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow indicator on hover */}
                <motion.div 
                  className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-sm font-medium">Saber más</span>
                  <motion.svg 
                    className="w-4 h-4"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
