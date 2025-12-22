import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const linkHoverVariants = {
    hover: { 
      x: 8, 
      color: "hsl(var(--accent))",
      transition: { duration: 0.2 }
    }
  };

  const socialHoverVariants = {
    hover: { 
      scale: 1.15, 
      rotate: 5,
      backgroundColor: "hsl(var(--primary))",
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle animated gradient */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, hsl(var(--primary)) 0%, transparent 70%)",
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.a 
              href="#" 
              className="flex items-center gap-2 mb-4 group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <Zap className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <span className="text-xl font-bold">
                viva<span className="text-primary">intec</span>
              </span>
            </motion.a>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Transformamos ideas en soluciones tecnológicas que impulsan el 
              crecimiento de tu empresa.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center"
                  variants={socialHoverVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              {["Software a Medida", "Automatización", "Consultoría IT", "Integración de Sistemas", "Soporte Técnico"].map((service) => (
                <motion.li key={service}>
                  <motion.a 
                    href="#" 
                    className="inline-block transition-colors"
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              {["Sobre Nosotros", "Casos de Éxito", "Blog", "Carreras", "Contacto"].map((item) => (
                <motion.li key={item}>
                  <motion.a 
                    href="#" 
                    className="inline-block transition-colors"
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4 text-background/70 text-sm">
              {[
                { icon: Mail, text: "hola@vivaintec.com" },
                { icon: Phone, text: "+52 (55) 1234-5678" },
                { icon: MapPin, text: "Ciudad de México, México" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div 
          className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-background/50 text-sm">
            © 2024 Vivaintec. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            {["Privacidad", "Términos", "Cookies"].map((item) => (
              <motion.a 
                key={item}
                href="#" 
                className="transition-colors"
                whileHover={{ 
                  color: "hsl(var(--background))",
                  y: -2,
                }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
