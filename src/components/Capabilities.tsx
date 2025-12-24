import { Database, Brain, Radio, Server, Bot, Activity, Cloud, Cpu, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
    {
        icon: Database,
        title: "Bases de Datos",
        description: "Diseñamos, optimizamos y migramos bases de datos para un rendimiento óptimo.",
        features: [
            "Diseño de esquemas escalables",
            "Migración y sincronización de datos",
            "Optimización de consultas SQL/NoSQL",
            "Backups automatizados y recuperación",
        ],
        accentIcon: Server,
    },
    {
        icon: Brain,
        title: "Inteligencia Artificial",
        description: "Integramos IA para automatizar procesos y generar insights valiosos.",
        features: [
            "Chatbots y asistentes virtuales",
            "Análisis predictivo de datos",
            "Procesamiento de lenguaje natural",
            "Modelos de machine learning personalizados",
        ],
        accentIcon: Bot,
    },
    {
        icon: Radio,
        title: "Datos en Tiempo Real",
        description: "Implementamos sistemas que procesan y visualizan datos al instante.",
        features: [
            "Dashboards en vivo",
            "Notificaciones push instantáneas",
            "Sincronización multi-dispositivo",
            "WebSockets y streaming de datos",
        ],
        accentIcon: Activity,
    },
];

const Capabilities = () => {
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    return (
        <section id="capacidades" className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
            {/* Background decorations */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
                        Capacidades Técnicas
                    </motion.span>
                    <motion.h2
                        className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6"
                        variants={headerVariants}
                    >
                        Tecnología de{" "}
                        <span className="text-primary">vanguardia</span>
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground text-lg"
                        variants={headerVariants}
                    >
                        Dominamos las tecnologías más avanzadas para crear soluciones
                        robustas, escalables y preparadas para el futuro.
                    </motion.p>
                </motion.div>

                {/* Capabilities grid */}
                <motion.div
                    className="grid lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {capabilities.map((capability) => (
                        <motion.div
                            key={capability.title}
                            className="group bg-card rounded-2xl border border-border shadow-card p-8 relative overflow-hidden"
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.15)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Icon row */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <capability.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <capability.accentIcon className="w-6 h-6 text-white/20" />
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                    {capability.title}
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    {capability.description}
                                </p>

                                {/* Features list */}
                                <ul className="space-y-3">
                                    {capability.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Capabilities;
