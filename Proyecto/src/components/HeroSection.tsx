import { ArrowRight, Play, Star, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado izquierdo */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                #1 en Nutrición Personalizada
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Tu <span className="gradient-text">match perfecto</span><br />
                con la nutrición ideal
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                NutriMatch es una plataforma digital que crea planes de alimentación personalizados según tu salud, metas y estilo de vida. Recibe menús diseñados por nutricionistas, preparados por cocineros profesionales y entregados a tu puerta gracias a una red de dark kitchens. Ideal para personas con diabetes, hipertensión, sobrepeso o quienes simplemente quieren comer mejor sin complicarse.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-3"
              >
                Crear mi plan nutricional
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-lg px-8 py-3"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver cómo funciona
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-orange-600" />
                <span className="text-gray-600">+1,000 usuarios activos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-gray-600">98% satisfacción</span>
              </div>
            </div>
          </div>

          {/* Lado derecho: Imagen en lugar del cuadro */}
          <div className="relative lg:ml-12 animate-slide-in-right">
            <img 
              src="/images/Phone.png" 
              alt="Mockup del plan personalizado"
              className="mx-auto max-w-full h-auto drop-shadow-xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
