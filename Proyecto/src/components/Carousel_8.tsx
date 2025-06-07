import React, { useState } from "react";

const items = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
];

export default function Carousel_8() {
  const [startIndex, setStartIndex] = useState(0);

  const getVisibleItems = () => [
    items[startIndex % items.length],
    items[(startIndex + 1) % items.length],
    items[(startIndex + 2) % items.length],
  ];

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 py-12">
      {/* 🔹 TÍTULO */}
      <div className="w-full mb-10 text-center scroll-mt-24" id="carousel">
        <h2 className="text-4xl font-bold">Interfaces 8 Locos</h2>
      </div>

      {/* 🔸 CARRUSEL */}
      <div className="flex items-center justify-center w-full max-w-[1200px] gap-6 max-h-[90vh] h-[80vh]">
        {/* Flecha Izquierda */}
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          {"<"}
        </button>

        {/* Contenedor de ítems */}
        <div className="flex items-end justify-center gap-6 w-full h-full">
          {visibleItems.map((item, i) => {
            const isCenter = i === 1;
            return (
              <div
                key={`${item}-${startIndex}`} // 🔑 fuerza re-render y animación
                className={`
                  ${isCenter ? "h-full z-10 scale-100 opacity-100" : "h-[70%] scale-90 opacity-70"}
                  w-auto aspect-[9/16]
                  transition-all duration-500 ease-in-out
                  rounded-xl overflow-hidden shadow-lg bg-white
                  flex items-center justify-center
                `}
              >
                <img
                  src={item}
                  alt={`Interfaz ${startIndex + i + 1}`}
                  className="w-full h-full object-contain rounded-xl animate-carousel-fade"
                />
              </div>
            );
          })}
        </div>

        {/* Flecha Derecha */}
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
