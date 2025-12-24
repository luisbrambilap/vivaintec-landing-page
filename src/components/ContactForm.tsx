import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Declare grecaptcha on window for TypeScript
declare global {
    interface Window {
        grecaptcha: {
            render: (container: string | HTMLElement, options: {
                sitekey: string;
                callback: (token: string) => void;
                theme?: string;
                size?: string;
            }) => number;
            reset: (widgetId?: number) => void;
        };
    }
}


const projectTypes = [
    "Desarrollo Web",
    "Aplicación Móvil",
    "Sistema de Gestión",
    "Automatización",
    "Integración de Sistemas",
    "Análisis de Datos / BI",
    "E-commerce",
    "Otro",
];

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<number | null>(null);
    const RECAPTCHA_SITE_KEY = "6LdCODUsAAAAAKv1MJXwykoCbtrTi16-1q5V2yrl";

    // Render reCAPTCHA on mount
    useEffect(() => {
        const renderCaptcha = () => {
            if (window.grecaptcha && window.grecaptcha.render && recaptchaRef.current && widgetIdRef.current === null) {
                try {
                    widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
                        sitekey: RECAPTCHA_SITE_KEY,
                        callback: (token: string) => setCaptchaToken(token),
                        theme: 'dark',
                    });
                } catch (e) {
                    console.error('reCAPTCHA render error:', e);
                }
            }
        };

        // Check if reCAPTCHA is already ready
        if ((window as any).recaptchaReady) {
            renderCaptcha();
        } else {
            // Wait for recaptchaReady event
            const handleReady = () => renderCaptcha();
            window.addEventListener('recaptchaReady', handleReady);
            return () => window.removeEventListener('recaptchaReady', handleReady);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Por favor completa el captcha antes de enviar.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xnjarnoq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    projectType: formData.projectType,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setCaptchaToken(null);
                // Reset captcha
                if (window.grecaptcha && widgetIdRef.current !== null) {
                    window.grecaptcha.reset(widgetIdRef.current);
                }
                // Reset after showing success
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
                }, 5000);
            } else {
                alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

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

    return (
        <section id="contacto" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
            {/* Background decorations */}
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                animate={{
                    x: [0, -20, 0],
                    y: [0, 20, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container relative mx-auto px-4 lg:px-8">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Header */}
                    <motion.div className="text-center mb-12" variants={itemVariants}>
                        <span className="text-sm font-medium text-primary mb-4 block">
                            Contáctanos
                        </span>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
                            Solicita tu{" "}
                            <span className="text-primary">cotización</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Cuéntanos sobre tu proyecto y te enviaremos una propuesta
                            personalizada sin compromiso.
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        className="bg-card rounded-2xl border border-border shadow-card p-8 lg:p-12"
                        variants={itemVariants}
                    >
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 0.2 }}
                                    >
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        ¡Mensaje enviado!
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Nos pondremos en contacto contigo en menos de 24 horas.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                                                <User className="w-4 h-4 text-primary" />
                                                Nombre completo
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                                                placeholder="Tu nombre"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-primary" />
                                                Correo electrónico
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                                                placeholder="tu@email.com"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-primary" />
                                                Teléfono (opcional)
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                                                placeholder="+52 123 456 7890"
                                            />
                                        </div>

                                        {/* Project Type */}
                                        <div className="space-y-2">
                                            <label htmlFor="projectType" className="text-sm font-medium text-foreground flex items-center gap-2">
                                                <Briefcase className="w-4 h-4 text-primary" />
                                                Tipo de proyecto
                                            </label>
                                            <Select
                                                value={formData.projectType}
                                                onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                                            >
                                                <SelectTrigger className="w-full px-4 py-3 h-auto rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground">
                                                    <SelectValue placeholder="Selecciona una opción" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-card border-border">
                                                    {projectTypes.map((type) => (
                                                        <SelectItem key={type} value={type} className="text-foreground hover:bg-accent focus:bg-accent">
                                                            {type}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4 text-primary" />
                                            Cuéntanos sobre tu proyecto
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                                            placeholder="Describe brevemente qué necesitas: funcionalidades, integraciones, plazos estimados..."
                                        />
                                    </div>

                                    {/* reCAPTCHA */}
                                    <div className="flex justify-center md:justify-start">
                                        <div ref={recaptchaRef}></div>
                                    </div>

                                    {/* Submit */}
                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting || !captchaToken}
                                            className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 shadow-lg disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <motion.div
                                                        className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    />
                                                    Enviando...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Solicitar Cotización
                                                    <Send className="w-4 h-4" />
                                                </span>
                                            )}
                                        </Button>
                                    </div>

                                    <p className="text-xs text-muted-foreground text-center md:text-left">
                                        Al enviar este formulario, aceptas que te contactemos para discutir tu proyecto.
                                        No compartimos tu información con terceros.
                                    </p>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
