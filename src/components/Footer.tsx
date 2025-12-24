import { useState } from "react";
import { Mail, MapPin, Instagram } from "lucide-react";
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

  // Email protection with Google reCAPTCHA
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [emailRevealed, setEmailRevealed] = useState(false);
  const RECAPTCHA_SITE_KEY = "6LdCODUsAAAAAKv1MJXwykoCbtrTI16-1q5V2yrl";

  const handleCaptchaSuccess = () => {
    setEmailRevealed(true);
    setShowCaptcha(false);
  };

  // Render reCAPTCHA when showCaptcha becomes true
  const renderCaptcha = () => {
    if (typeof window !== 'undefined' && window.grecaptcha) {
      setTimeout(() => {
        const container = document.getElementById('recaptcha-container');
        if (container && container.childNodes.length === 0) {
          window.grecaptcha.render('recaptcha-container', {
            sitekey: RECAPTCHA_SITE_KEY,
            callback: handleCaptchaSuccess,
            theme: 'dark',
            size: 'compact',
          });
        }
      }, 100);
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
              <img
                src="/logo.svg"
                alt="Vivaintec Logo"
                className="h-12 w-auto select-none pointer-events-none"
                draggable="false"
              />
            </motion.a>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Transformamos ideas en soluciones tecnológicas que impulsan el
              crecimiento de tu empresa.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://instagram.com/vivaintec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center"
                variants={socialHoverVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              {[
                { label: "Software a Medida", href: "/#ejemplos" },
                { label: "Automatización", href: "/#ejemplos" },
                { label: "Apps Móviles", href: "/#ejemplos" },
                { label: "WhatsApp & Chatbots", href: "/#ejemplos" },
              ].map((service) => (
                <motion.li key={service.label}>
                  <motion.a
                    href={service.href}
                    className="inline-block transition-colors"
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    {service.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              {[
                { label: "Sobre Nosotros", href: "/#nosotros" },
                { label: "Nuestros Servicios", href: "/#ejemplos" },
                { label: "Contacto", href: "/#contacto" },
              ].map((item) => (
                <motion.li key={item.label}>
                  <motion.a
                    href={item.href}
                    className="inline-block transition-colors"
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4 text-background/70 text-sm">
              {/* Email with captcha */}
              <motion.li
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5 text-primary" />
                </motion.div>
                {emailRevealed ? (
                  <a href="mailto:contacto@vivaintec.com" className="hover:text-background transition-colors">
                    contacto@vivaintec.com
                  </a>
                ) : showCaptcha ? (
                  <div className="flex flex-col gap-2">
                    <div id="recaptcha-container" ref={() => renderCaptcha()}></div>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowCaptcha(true)}
                    className="text-background/70 hover:text-background transition-colors underline underline-offset-2"
                  >
                    Mostrar correo
                  </button>
                )}
              </motion.li>

              {/* Location */}
              <motion.li
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                </motion.div>
                <span>Sonora, México</span>
              </motion.li>
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
            © 2024 Vivaintec.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            {[
              { label: "Privacidad", path: "/privacidad" },
              { label: "Términos", path: "/terminos" },
              { label: "Cookies", path: "/cookies" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.path}
                className="transition-colors hover:text-background"
                whileHover={{
                  y: -2,
                }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
