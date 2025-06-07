import { Utensils, Brain, Truck, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Evaluación Nutricional Inteligente",
      description: "Nuestro sistema analiza tu perfil de salud, metas y preferencias para crear un plan 100% personalizado.",
      features: ["Análisis de condiciones médicas", "Evaluación de objetivos", "Preferencias alimentarias"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Utensils,
      title: "Menús Diseñados por Expertos",
      description: "Cada comida es diseñada por nutricionistas profesionales y preparada en nuestras dark kitchens certificadas.",
      features: ["Supervisión nutricional", "Cocinas especializadas", "Ingredientes frescos"],
      color: "from-orange-400 to-orange-500"
    },
    {
      icon: Truck,
      title: "Entrega Inteligente",
      description: "Recibe tus comidas frescas y listas para consumir, con horarios flexibles que se adaptan a tu rutina.",
      features: ["Delivery programado", "Empaque eco-friendly", "Temperatura controlada"],
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: Shield,
      title: "Seguimiento y Soporte",
      description: "Monitoreamos tu progreso y ajustamos tu plan según tus resultados, con soporte nutricional constante.",
      features: ["Seguimiento de progreso", "Ajustes automáticos", "Consultas con nutricionistas"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cómo <span className="gradient-text">NutriMatch</span> transforma tu alimentación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un sistema completo que combina tecnología, expertise nutricional y logística 
            inteligente para ofrecerte la mejor experiencia alimentaria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 pt-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
            <span className="text-gray-600 mr-2">¿Listo para comenzar?</span>
            <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              Crear mi plan →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
