import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const companyVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 0.6,
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Animated background decorations */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle className="w-4 h-4" />
            </motion.div>
            Hablemos de tu proyecto
          </motion.span>

          <motion.h2 
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            ¿Listo para transformar tu negocio con{" "}
            <motion.span 
              className="text-primary inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              tecnología
            </motion.span>
            ?
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Agenda una consulta gratuita con nuestro equipo y descubre cómo 
            podemos ayudarte a alcanzar tus objetivos empresariales.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300 px-8 group"
              >
                Agendar Consulta Gratis
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary px-8"
              >
                Ver Casos de Éxito
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div 
            className="mt-12 pt-8 border-t border-border/50"
            variants={itemVariants}
          >
            <motion.p 
              className="text-sm text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Empresas que confían en nosotros
            </motion.p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["TechCorp", "InnovateMX", "DataFlow", "CloudSync", "SmartBiz"].map(
                (company, i) => (
                  <motion.span
                    key={company}
                    className="text-lg font-semibold text-muted-foreground cursor-default"
                    custom={i}
                    variants={companyVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1.1,
                      color: "hsl(var(--primary))",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {company}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
