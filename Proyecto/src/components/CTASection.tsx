import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTASection = () => {
  const features = [
    "Evaluación nutricional gratuita",
    "Primera semana con 20% de descuento",
    "Cancelación sin compromiso",
    "Soporte nutricional incluido"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Oferta de lanzamiento limitada</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Comienza tu transformación<br />
              nutricional <span className="underline decoration-white">hoy mismo</span>
            </h2>
            
            <p className="text-xl text-orange-50 max-w-2xl mx-auto">
              Únete a cientos de peruanos que ya están transformando su salud 
              con alimentación personalizada y científicamente respaldada.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-left">
                  ¿Listo para empezar?
                </h3>
                <div className="space-y-3 text-left">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-orange-50">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <Input 
                    placeholder="Tu email" 
                    className="bg-white/90 border-0 text-gray-900 placeholder-gray-500 h-12"
                  />
                  <Input 
                    placeholder="Tu número de WhatsApp" 
                    className="bg-white/90 border-0 text-gray-900 placeholder-gray-500 h-12"
                  />
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-white hover:bg-gray-100 text-orange-600 border-0 h-12 text-lg font-semibold"
                >
                  Crear mi plan gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-xs text-orange-100">
                  Sin compromiso • Cancela cuando quieras • Garantía de satisfacción
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-orange-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>+1,000 usuarios transformados</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Respuesta en menos de 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Nutricionistas certificados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
