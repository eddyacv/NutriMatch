import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    link: "https://i.postimg.cc/52bLHCnz/Tu-Comida-Favortia.png",
    titulo: "Tu comida favorita, más cerca.",
    descripcion:
      "Explora una selección de los platos más ricos y tradicionales de tu región, listos para pedir en cualquier momento. Ordena fácil, sin complicaciones, y disfruta el sabor de siempre estés donde estés.",
  },
  {
    link: "https://i.postimg.cc/TPPb0X8Y/TuEliges.png",
    titulo: "Tu pedido, en buenas manos.",
    descripcion:
      "Sigue cada paso de tu entrega en tiempo real y conoce a tu repartidor antes de que llegue. Nos aseguramos de que tu comida llegue rápido, segura y tal como la pediste.",
  },
  {
    link: "https://i.postimg.cc/jjk7kkK6/Tu-Pedido-En.png",
    titulo: "Tú eliges, nosotros personalizamos.",
    descripcion:
      "Cuéntanos tus preferencias y restricciones, y nosotros te conectamos con cocineros reales que entienden lo que te gusta. Descubre quién prepara tus platos y disfruta una experiencia pensada especialmente para ti.",
  },
];


export default function Carousel_8() {
  return (
    <div
      id="carousel8"
      className="flex flex-col items-center px-4 sm:px-8 md:px-12 py-12 scroll-mt-24"
    >
      <div className="w-full mb-10 text-center">
        <h2 className="text-4xl font-bold">¿Qué ofrecemos?</h2>
      </div>

      <div className="flex flex-col gap-24 w-full max-w-6xl">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.link}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Imagen */}
              <motion.div
                className="w-full md:w-1/2 flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={item.link}
                  alt={item.titulo}
                  className="w-auto h-auto max-h-[80vh] object-contain drop-shadow-md"
                />
              </motion.div>

              {/* Texto */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-orange-500 mb-4">
                    {item.titulo}
                  </h3>
                  <p className="text-lg text-gray-700">{item.descripcion}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
