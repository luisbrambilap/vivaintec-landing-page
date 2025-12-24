import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Terminos = () => {
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
                        <FileText className="w-8 h-8 text-primary" />
                        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                            Términos y Condiciones
                        </h1>
                    </div>

                    <p className="text-muted-foreground mb-8">
                        Última actualización: Diciembre 2024
                    </p>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                1. Aceptación de los Términos
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Al acceder y utilizar el sitio web de Vivaintec, usted acepta estar sujeto
                                a estos términos y condiciones de uso. Si no está de acuerdo con alguna
                                parte de estos términos, no debe utilizar nuestro sitio web.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                2. Descripción de Servicios
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Vivaintec es una empresa mexicana especializada en desarrollo de software
                                personalizado. Nuestros servicios incluyen, pero no se limitan a:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                                <li>Desarrollo de aplicaciones web y móviles</li>
                                <li>Sistemas de gestión empresarial</li>
                                <li>Automatización de procesos</li>
                                <li>Integración de sistemas</li>
                                <li>Consultoría tecnológica</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                3. Cotizaciones y Proyectos
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Las cotizaciones proporcionadas a través de nuestro formulario de contacto
                                son estimaciones iniciales. Los costos finales, plazos y alcance del proyecto
                                se definirán en un contrato formal después de un análisis detallado de los
                                requerimientos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                4. Propiedad Intelectual
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Todo el contenido presente en este sitio web, incluyendo pero no limitado a
                                textos, gráficos, logotipos, íconos, imágenes y software, es propiedad de
                                Vivaintec y está protegido por las leyes de propiedad intelectual de México.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                5. Limitación de Responsabilidad
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Vivaintec no será responsable por daños indirectos, incidentales, especiales
                                o consecuentes que resulten del uso o la imposibilidad de uso de nuestros
                                servicios o sitio web. Nos esforzamos por mantener la información actualizada
                                y precisa, pero no garantizamos la exactitud completa del contenido.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                6. Confidencialidad
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Nos comprometemos a mantener la confidencialidad de toda la información
                                compartida durante las consultas y el desarrollo de proyectos. Los detalles
                                específicos de confidencialidad se establecerán en los contratos de servicio
                                correspondientes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                7. Modificaciones
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Nos reservamos el derecho de modificar estos términos y condiciones en
                                cualquier momento. Los cambios entrarán en vigor inmediatamente después
                                de su publicación en el sitio web. Le recomendamos revisar periódicamente
                                esta página.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                8. Ley Aplicable
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.
                                Cualquier disputa será sometida a la jurisdicción de los tribunales
                                competentes en el Estado de Sonora, México.
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

export default Terminos;
