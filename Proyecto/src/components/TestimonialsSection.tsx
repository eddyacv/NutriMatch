import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      age: 45,
      condition: "Diabetes Tipo 2",
      image: "🧔🏻‍♀️",
      rating: 5,
      text: "En 6 meses logré controlar mi diabetes completamente. Las comidas son deliciosas y mi doctor está impresionado con mis resultados. NutriMatch cambió mi vida.",
      result: "HbA1c de 9.2% a 6.8%"
    },
    {
      name: "Carlos Mendoza",
      age: 38,
      condition: "Pérdida de peso",
      image: "👨🏻",
      rating: 5,
      text: "Perdí 15 kilos sin pasar hambre ni sacrificar sabor. El seguimiento personalizado y la variedad de comidas hicieron todo más fácil de lo que imaginé.",
      result: "15kg menos en 4 meses"
    },
    {
      name: "Ana Vargas",
      age: 29,
      condition: "Ganancia muscular",
      image: "👩🏻",
      rating: 5,
      text: "Como atleta amateur, necesitaba una nutrición precisa. NutriMatch me ayudó a ganar masa muscular sin perder definición. Los macros están perfectamente calculados.",
      result: "+5kg masa muscular"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Historias de <span className="gradient-text">transformación</span> real
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce cómo NutriMatch está cambiando vidas a través de una nutrición 
            personalizada y resultados medibles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.age} años • {testimonial.condition}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-orange-300 absolute -top-2 -left-1" />
                  <p className="text-gray-600 italic pl-6">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Resultado:</div>
                  <div className="font-semibold gradient-text">{testimonial.result}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold">4.9/5</span>
            <span>• Basado en +500 reseñas verificadas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
