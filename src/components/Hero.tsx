import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const trustItems = [
    "Consulta gratuita",
    "Sin compromiso",
    "Soporte 24/7",
  ];

  return (
    <section className="relative min-h-[90vh] pt-24 pb-16 overflow-hidden flex items-center">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

      {/* Mid-Century Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle - top right */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full border-[3px] border-primary/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -top-10 -right-10 w-72 h-72 rounded-full border-[2px] border-accent/15"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
        />

        {/* Small decorative circles - left */}
        <motion.div
          className="absolute top-1/3 left-12 w-4 h-4 rounded-full bg-primary/20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
        <motion.div
          className="absolute top-1/3 left-20 w-2 h-2 rounded-full bg-accent/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
        <motion.div
          className="absolute top-[40%] left-8 w-3 h-3 rounded-full bg-destructive/20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        {/* Atomic starburst - bottom left */}
        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32"
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[2px] bg-primary/15 rounded-full" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center rotate-45">
            <div className="w-full h-[2px] bg-primary/15 rounded-full" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center rotate-90">
            <div className="w-full h-[2px] bg-primary/15 rounded-full" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center -rotate-45">
            <div className="w-full h-[2px] bg-primary/15 rounded-full" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-accent/20" />
          </div>
        </motion.div>

        {/* Decorative line - right */}
        <motion.div
          className="absolute top-1/2 right-24 w-[2px] h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >


          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight"
            variants={itemVariants}
          >
            Entregamos la{" "}
            <span className="relative inline-block text-primary">
              solución perfecta

            </span>
            <br />
            para tu negocio
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Desarrollamos software personalizado para empresas que buscan
            automatizar procesos, optimizar gestión y escalar operaciones.
          </motion.p>

          {/* CTA Section */}
          <motion.div
            className="flex flex-col items-center gap-6"
            variants={itemVariants}
          >
            {/* CTA Button */}
            <a href="#contacto">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 shadow-lg text-lg">
                Comenzar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              {trustItems.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
