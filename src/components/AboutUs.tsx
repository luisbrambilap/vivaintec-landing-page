import { motion } from "framer-motion";
import { Headphones, Users, Code, Heart } from "lucide-react";

const values = [
    {
        icon: Headphones,
        title: "Soporte Continuo",
        description: "Acompañamiento y soporte técnico para tu proyecto.",
    },
    {
        icon: Users,
        title: "Equipo Dedicado",
        description: "Profesionales comprometidos con tu éxito.",
    },
    {
        icon: Code,
        title: "Código de Calidad",
        description: "Soluciones robustas y escalables.",
    },
    {
        icon: Heart,
        title: "Pasión por Innovar",
        description: "Siempre a la vanguardia tecnológica.",
    },
];

const AboutUs = () => {
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

    return (
        <section id="nosotros" className="py-20 lg:py-32 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <motion.div
                className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
                animate={{
                    x: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container relative mx-auto px-4 lg:px-8">
                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Header */}
                    <motion.div className="text-center mb-16" variants={itemVariants}>
                        <span className="text-sm font-medium text-primary mb-4 block">
                            Nosotros
                        </span>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
                            Somos{" "}
                            <span className="text-primary">Vivaintec</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Somos una empresa mexicana especializada
                            en el desarrollo de software personalizado. Creamos soluciones tecnológicas
                            que transforman la manera en que las empresas operan, desde sistemas de
                            gestión empresarial hasta aplicaciones móviles y automatizaciones inteligentes.
                        </p>
                    </motion.div>

                    {/* Mission text */}
                    <motion.div
                        className="bg-card rounded-2xl border border-border p-8 lg:p-12 mb-12"
                        variants={itemVariants}
                    >
                        <p className="text-muted-foreground text-lg leading-relaxed text-center">
                            Nuestro objetivo es impulsar el crecimiento de tu negocio a
                            través de tecnología de vanguardia. Entendemos que cada empresa es única, por eso
                            nos enfocamos en crear soluciones a la medida que se adaptan perfectamente a tus
                            necesidades específicas. Ya sea que necesites optimizar procesos, automatizar tareas
                            repetitivas o crear una experiencia digital excepcional para tus clientes,
                            estamos aquí para hacerlo realidad.
                        </p>
                    </motion.div>

                    {/* Values grid */}
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                className="text-center p-6"
                                variants={itemVariants}
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
