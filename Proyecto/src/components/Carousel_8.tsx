import React from "react";

const items = [
  {
    link: "https://i.postimg.cc/wTHR88sb/P1.png",
    titulo: "Título 12",
    descripcion: "Descripción 1",
  },
  {
    link: "https://i.postimg.cc/0Q4Nb4K2/P2.png",
    titulo: "Título 2",
    descripcion: "Descripción 2",
  },
  {
    link: "https://i.postimg.cc/RVHWnvRr/P3.png",
    titulo: "Título 3",
    descripcion: "Descripción 3",
  },
  {
    link: "https://i.postimg.cc/Hnj7N5Xj/P4.png",
    titulo: "Título 4",
    descripcion: "Descripción 4",
  },
  {
    link: "https://i.postimg.cc/rpSGGSNk/P5.png",
    titulo: "Título 5",
    descripcion: "Descripción 5",
  },
  {
    link: "https://i.postimg.cc/HxwSLqhb/P6.png",
    titulo: "Título 6",
    descripcion: "Descripción 6",
  },
  {
    link: "https://i.postimg.cc/ht3W0r68/P7.png",
    titulo: "Título 7",
    descripcion: "Descripción 7",
  },
  {
    link: "https://i.postimg.cc/5NbV9j8z/P8.png",
    titulo: "Título 8",
    descripcion: "Descripción 8",
  },
];

export default function Carousel_8() {
  return (
    <div
      id="carousel8"
      className="flex flex-col items-center px-4 sm:px-8 md:px-12 py-12 scroll-mt-24"
    >
      <div className="w-full mb-10 text-center">
        <h2 className="text-4xl font-bold">Vista</h2>
      </div>

      <div className="flex flex-col gap-24 w-full max-w-6xl">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.link}
              className={`flex flex-col md:flex-row items-center gap-8 relative ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Imagen */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={item.link}
                  alt={item.titulo}
                  className="w-auto h-auto max-h-[80vh] object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg"
                />
              </div>


              {/* Círculo con número centrado verticalmente */}
              <div className="hidden md:flex items-center justify-center w-12 relative min-h-[80vh]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center text-orange-500 font-bold text-lg shadow-md">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-orange-500 mb-4">
                    {item.titulo}
                  </h3>
                  <p className="text-base text-gray-700">{item.descripcion}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
