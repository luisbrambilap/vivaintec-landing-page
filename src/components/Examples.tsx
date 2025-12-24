import { Calendar, GraduationCap, Store, Briefcase, Globe, Smartphone, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const examples = [
    {
        icon: Calendar,
        title: "Gestión de Citas",
        description: "Sistemas de reservas y agendamiento para consultorios médicos, salones de belleza, spas y servicios profesionales.",
        color: "from-primary/20 to-primary/5",
    },
    {
        icon: GraduationCap,
        title: "Plataformas Educativas",
        description: "Sistemas de clases en línea, gestión escolar, evaluaciones digitales y seguimiento académico personalizado.",
        color: "from-accent/20 to-accent/5",
    },
    {
        icon: Store,
        title: "Restaurantes & POS",
        description: "Punto de venta, gestión de menús, comandas digitales, control de inventario y reportes de ventas en tiempo real.",
        color: "from-destructive/20 to-destructive/5",
    },
    {
        icon: Briefcase,
        title: "Gestión Empresarial",
        description: "CRM, facturación, inventarios, recursos humanos y herramientas de productividad adaptadas a tu negocio.",
        color: "from-primary/20 to-primary/5",
    },
    {
        icon: Globe,
        title: "Páginas Web & Landings",
        description: "Sitios web corporativos, landing pages de alto impacto, portfolios y páginas de captura optimizadas para conversión.",
        color: "from-accent/20 to-accent/5",
    },
    {
        icon: Smartphone,
        title: "Apps Móviles",
        description: "Aplicaciones nativas y multiplataforma para iOS y Android. Desde apps empresariales hasta soluciones para clientes finales.",
        color: "from-primary/20 to-primary/5",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp & Chatbots",
        description: "Bots de atención al cliente para WhatsApp, Telegram y redes sociales. Automatiza respuestas y mejora tu servicio 24/7.",
        color: "from-accent/20 to-accent/5",
    },
    {
        icon: Sparkles,
        title: "Automatización & Bots",
        description: "Workflows personalizados, automatización de procesos, bots inteligentes e integraciones entre plataformas.",
        color: "from-destructive/20 to-destructive/5",
    },
];

const Examples = () => {
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
        <section id="ejemplos" className="py-16 lg:py-20 bg-secondary/30 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 right-10 w-2 h-2 rounded-full bg-primary/20" />
            <div className="absolute top-32 right-16 w-3 h-3 rounded-full bg-accent/20" />
            <div className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-destructive/20" />

            <div className="container relative mx-auto px-4 lg:px-8">
                {/* Section header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >

                    <motion.h2
                        className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6"
                        variants={headerVariants}
                    >
                        ¿Qué podemos{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">crear</span>
                            <motion.span
                                className="absolute bottom-1 left-0 right-0 h-3 bg-accent/30 -rotate-1"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            />
                        </span>{" "}
                        para ti?
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground text-lg"
                        variants={headerVariants}
                    >
                        Desde sistemas de gestión hasta plataformas web completas.
                        Si lo puedes imaginar, nosotros lo podemos construir.
                    </motion.p>
                </motion.div>

                {/* Examples grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {examples.map((example) => (
                        <motion.div
                            key={example.title}
                            className="group p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-card relative overflow-hidden"
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                        >
                            {/* Gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${example.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                {/* Icon */}
                                <motion.div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <example.icon className="w-7 h-7 text-primary" />
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {example.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {example.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA at bottom */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <p className="text-muted-foreground mb-4">
                        ¿No ves tu idea aquí? ¡No hay problema!
                    </p>
                    <a
                        href="#contacto"
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors cursor-pointer inline-block"
                    >
                        Cuéntanos tu proyecto y lo hacemos realidad →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Examples;
