import { CheckCircle, TrendingUp, Clock, Heart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Mejora tu salud",
      description: "Controla diabetes, hipertensión y colesterol con alimentación científicamente respaldada."
    },
    {
      icon: TrendingUp,
      title: "Resultados medibles",
      description: "Alcanza tus metas de peso, masa muscular y bienestar con seguimiento personalizado."
    },
    {
      icon: Clock,
      title: "Ahorra tiempo",
      description: "Olvídate de planificar, comprar y cocinar. Nosotros nos encargamos de todo."
    },
    {
      icon: CheckCircle,
      title: "Calidad garantizada",
      description: "Ingredientes frescos, preparación higiénica y supervisión nutricional profesional."
    }
  ];

  const stats = [
    { number: "92%", label: "Mejora en indicadores de salud" },
    { number: "85%", label: "Logra sus metas de peso" },
    { number: "15h", label: "Ahorro semanal en planificación" },
    { number: "98%", label: "Satisfacción del cliente" }
  ];

  return (
    <section id="beneficios" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                ¿Por qué elegir <span className="gradient-text">NutriMatch</span>?
              </h2>
              <p className="text-xl text-gray-600">
                Más que comida, es una transformación completa hacia un estilo de vida saludable 
                y sostenible, adaptado específicamente para ti.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Resultados que hablan por sí solos
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Casos de éxito recientes:</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">María, 45 años</span>
                  <span className="text-orange-600 font-semibold">-8kg en 3 meses</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Carlos, 38 años</span>
                  <span className="text-orange-600 font-semibold">Diabetes controlada</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Ana, 29 años</span>
                  <span className="text-orange-600 font-semibold">+5kg masa muscular</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
