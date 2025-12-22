import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-32 left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-8 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left floating card */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="animate-float">
              <div className="bg-card rounded-2xl p-5 shadow-card border border-border/50 max-w-[200px]">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Ingresos</span>
                </div>
                <div className="h-16 flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary/20 to-primary/60 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">+127%</span>
                  <span className="text-xs text-accent-foreground bg-accent px-2 py-1 rounded-full font-medium">
                    Este mes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center content */}
          <div className="lg:col-span-8 text-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                +500 empresas confían en nosotros
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Entregamos la{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-foreground">solución perfecta</span>
                <span className="absolute inset-0 bg-accent rounded-lg -rotate-1 scale-105" />
              </span>
              <br />
              para tu negocio
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Desarrollamos software personalizado para empresas que buscan 
              automatizar procesos, optimizar gestión y escalar operaciones.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex-1 sm:flex-initial w-full sm:w-auto">
                <div className="flex items-center bg-card rounded-xl border border-border/50 shadow-card overflow-hidden max-w-md mx-auto sm:mx-0">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-5 py-4 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />
                  <Button className="m-1.5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 shadow-md">
                    Comenzar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              ✨ Consulta gratuita • Sin compromiso
            </p>
          </div>

          {/* Right floating cards */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="space-y-4">
              <div className="animate-float-delayed">
                <div className="bg-card rounded-2xl p-5 shadow-card border border-border/50">
                  <span className="text-xs text-muted-foreground">Clientes Activos</span>
                  <div className="flex items-center gap-2 mt-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">2.4k</span>
                  </div>
                </div>
              </div>
              
              <div className="animate-float">
                <div className="bg-card rounded-2xl p-5 shadow-card border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Ahorro</span>
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                      Mensual
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">45,200</span>
                  </div>
                  <div className="mt-3 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
