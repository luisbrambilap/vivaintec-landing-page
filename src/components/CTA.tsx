import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
            <MessageCircle className="w-4 h-4" />
            Hablemos de tu proyecto
          </span>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            ¿Listo para transformar tu negocio con{" "}
            <span className="text-primary">tecnología</span>?
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Agenda una consulta gratuita con nuestro equipo y descubre cómo 
            podemos ayudarte a alcanzar tus objetivos empresariales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300 px-8"
            >
              Agendar Consulta Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary px-8"
            >
              Ver Casos de Éxito
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Empresas que confían en nosotros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["TechCorp", "InnovateMX", "DataFlow", "CloudSync", "SmartBiz"].map(
                (company) => (
                  <span
                    key={company}
                    className="text-lg font-semibold text-muted-foreground"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
