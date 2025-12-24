import { motion } from "framer-motion";
import { ArrowLeft, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const Cookies = () => {
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
                        <Cookie className="w-8 h-8 text-primary" />
                        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                            Política de Cookies
                        </h1>
                    </div>

                    <p className="text-muted-foreground mb-8">
                        Última actualización: Diciembre 2024
                    </p>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                1. ¿Qué son las Cookies?
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo
                                cuando visita un sitio web. Se utilizan ampliamente para hacer que los sitios
                                web funcionen de manera más eficiente y para proporcionar información a los
                                propietarios del sitio.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                2. Cookies que Utilizamos
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                En Vivaintec utilizamos los siguientes tipos de cookies:
                            </p>

                            <div className="mt-4 space-y-4">
                                <div className="bg-card rounded-lg p-4 border border-border">
                                    <h3 className="font-semibold text-foreground mb-2">Cookies Esenciales</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Necesarias para el funcionamiento básico del sitio web. Incluyen
                                        cookies de seguridad y preferencias de sesión.
                                    </p>
                                </div>

                                <div className="bg-card rounded-lg p-4 border border-border">
                                    <h3 className="font-semibold text-foreground mb-2">Cookies de reCAPTCHA</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Utilizamos Google reCAPTCHA para proteger nuestros formularios de
                                        spam y abuso. Estas cookies son establecidas por Google para
                                        verificar que usted es un usuario legítimo.
                                    </p>
                                </div>

                                <div className="bg-card rounded-lg p-4 border border-border">
                                    <h3 className="font-semibold text-foreground mb-2">Cookies de Rendimiento</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Nos ayudan a entender cómo los visitantes interactúan con nuestro
                                        sitio web, recopilando información de forma anónima.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                3. Cookies de Terceros
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Algunos servicios de terceros también pueden establecer cookies en su
                                dispositivo cuando utiliza nuestro sitio:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                                <li>Google reCAPTCHA - Para protección contra bots</li>
                                <li>Formspree - Para el procesamiento de formularios de contacto</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                4. Gestión de Cookies
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Puede controlar y/o eliminar las cookies como desee. Para más información,
                                visite aboutcookies.org. Puede eliminar todas las cookies que ya están en
                                su dispositivo y configurar la mayoría de los navegadores para evitar que
                                se coloquen.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Sin embargo, si desactiva las cookies, es posible que algunas funciones
                                de nuestro sitio web no funcionen correctamente, como el envío de formularios
                                protegidos por reCAPTCHA.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                5. Cómo Desactivar Cookies en su Navegador
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                La mayoría de los navegadores le permiten:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                                <li>Ver las cookies que tiene almacenadas y eliminarlas individualmente</li>
                                <li>Bloquear cookies de terceros</li>
                                <li>Bloquear cookies de sitios específicos</li>
                                <li>Bloquear todas las cookies</li>
                                <li>Eliminar todas las cookies cuando cierre el navegador</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                6. Actualizaciones de esta Política
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Podemos actualizar esta política de cookies de vez en cuando para reflejar
                                cambios en nuestras prácticas o por otros motivos operativos, legales o
                                regulatorios. Le recomendamos revisar esta página periódicamente.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">
                                7. Contacto
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Si tiene alguna pregunta sobre nuestra política de cookies, puede
                                contactarnos a través del formulario en nuestra página principal.
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

export default Cookies;
