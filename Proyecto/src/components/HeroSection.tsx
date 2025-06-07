import { ArrowRight, Play, Star, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                Alimentación personalizada según tus necesidades de salud, 
                metas y estilo de vida. Preparada por expertos y entregada 
                directamente a tu puerta.
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

          <div className="relative lg:ml-12 animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl blur-xl opacity-30 animate-float"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Tu plan personalizado
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700">Condición: Diabetes Tipo 2</span>
                    <span className="text-orange-600 font-semibold">✓</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700">Meta: Perder 5kg</span>
                    <span className="text-orange-600 font-semibold">75%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700">Estilo: Vegetariano</span>
                    <span className="text-orange-600 font-semibold">✓</span>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <div className="text-3xl font-bold gradient-text">S/ 89</div>
                  <div className="text-gray-500">por semana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
