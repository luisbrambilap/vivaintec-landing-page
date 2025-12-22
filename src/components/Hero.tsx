import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const floatingDelayedVariants = {
    animate: {
      y: [8, -8, 8],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        delay: 2,
      },
    },
  };

  const barVariants = {
    hidden: { scaleY: 0 },
    visible: (i: number) => ({
      scaleY: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      
      {/* Floating decorative elements with parallax effect */}
      <motion.div 
        className="absolute top-32 left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-8 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left floating card */}
          <div className="hidden lg:block lg:col-span-2">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                className="bg-card rounded-2xl p-5 shadow-card border border-border/50 max-w-[200px]"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-xs text-muted-foreground">Ingresos</span>
                </div>
                <div className="h-16 flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary/20 to-primary/60 rounded-t origin-bottom"
                      style={{ height: `${height}%` }}
                      custom={i}
                      variants={barVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <motion.span 
                    className="text-lg font-bold text-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                  >
                    +127%
                  </motion.span>
                  <motion.span 
                    className="text-xs text-accent-foreground bg-accent px-2 py-1 rounded-full font-medium"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                  >
                    Este mes
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Center content */}
          <motion.div 
            className="lg:col-span-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
                <motion.span 
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                +500 empresas confían en nosotros
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
              variants={itemVariants}
            >
              Entregamos la{" "}
              <span className="relative inline-block">
                <motion.span 
                  className="absolute inset-0 bg-accent rounded-lg -rotate-1 scale-105"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                />
                <span className="relative z-10 text-accent-foreground">solución perfecta</span>
              </span>
              <br />
              para tu negocio
            </motion.h1>

            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              variants={itemVariants}
            >
              Desarrollamos software personalizado para empresas que buscan 
              automatizar procesos, optimizar gestión y escalar operaciones.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <div className="flex-1 sm:flex-initial w-full sm:w-auto">
                <motion.div 
                  className="flex items-center bg-card rounded-xl border border-border/50 shadow-card overflow-hidden max-w-md mx-auto sm:mx-0"
                  whileHover={{ boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-5 py-4 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="m-1.5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 shadow-md group">
                      Comenzar
                      <motion.span
                        className="inline-block ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <motion.p 
              className="text-sm text-muted-foreground mt-4"
              variants={itemVariants}
            >
              ✨ Consulta gratuita • Sin compromiso
            </motion.p>
          </motion.div>

          {/* Right floating cards */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="space-y-4">
              <motion.div
                variants={floatingDelayedVariants}
                animate="animate"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div 
                  className="bg-card rounded-2xl p-5 shadow-card border border-border/50"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <span className="text-xs text-muted-foreground">Clientes Activos</span>
                  <div className="flex items-center gap-2 mt-2">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Users className="w-5 h-5 text-primary" />
                    </motion.div>
                    <motion.span 
                      className="text-2xl font-bold text-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                    >
                      2.4k
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                variants={floatingVariants}
                animate="animate"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div 
                  className="bg-card rounded-2xl p-5 shadow-card border border-border/50"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Ahorro</span>
                    <motion.span 
                      className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Mensual
                    </motion.span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <motion.span 
                      className="text-2xl font-bold text-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                    >
                      45,200
                    </motion.span>
                  </div>
                  <div className="mt-3 h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
