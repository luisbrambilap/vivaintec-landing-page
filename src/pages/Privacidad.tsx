import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Privacidad = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border">
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver al inicio
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-8 h-8 text-primary" />
                        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                            Política de Privacidad
                        </h1>
                    </div>

                    <p className="text-muted-foreground mb-8">
                        Última actualización: Diciembre 2024
                    </p>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                1. Información que Recopilamos
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                En Vivaintec, recopilamos información que usted nos proporciona directamente
                                a través de nuestro formulario de contacto, incluyendo:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                                <li>Nombre completo</li>
                                <li>Dirección de correo electrónico</li>
                                <li>Número de teléfono (opcional)</li>
                                <li>Tipo de proyecto de interés</li>
                                <li>Descripción del proyecto o mensaje</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                2. Uso de la Información
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Utilizamos la información recopilada para:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                                <li>Responder a sus consultas y solicitudes de cotización</li>
                                <li>Proporcionar información sobre nuestros servicios</li>
                                <li>Comunicarnos con usted sobre posibles proyectos</li>
                                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                3. Protección de Datos
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Implementamos medidas de seguridad técnicas y organizativas para proteger
                                su información personal contra acceso no autorizado, alteración, divulgación
                                o destrucción. Utilizamos servicios seguros para el procesamiento de formularios
                                y nunca almacenamos información sensible sin encriptación.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                4. Compartir Información
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                No vendemos, alquilamos ni compartimos su información personal con terceros
                                para fines de marketing. Solo compartimos información cuando es necesario
                                para proporcionar nuestros servicios o cuando la ley lo requiere.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                5. Sus Derechos
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Usted tiene derecho a:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                                <li>Acceder a sus datos personales</li>
                                <li>Solicitar la corrección de datos inexactos</li>
                                <li>Solicitar la eliminación de sus datos</li>
                                <li>Oponerse al procesamiento de sus datos</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                6. Contacto
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Para cualquier pregunta sobre esta política de privacidad o para ejercer
                                sus derechos, puede contactarnos a través de nuestro formulario de contacto
                                en la página principal.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="border-t border-border py-8">
                <div className="container mx-auto px-4 lg:px-8 text-center text-muted-foreground text-sm">
                    © 2024 Vivaintec. Sonora, México.
                </div>
            </footer>
        </div>
    );
};

export default Privacidad;
