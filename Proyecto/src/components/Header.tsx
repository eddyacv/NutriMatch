import { useState } from "react";
import { Menu, X, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Apple className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">NutriMatch</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-600 hover:text-orange-600 transition-colors">
              Servicios
            </a>
            <a href="#beneficios" className="text-gray-600 hover:text-orange-600 transition-colors">
              Beneficios
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-orange-600 transition-colors">
              Testimonios
            </a>
            <a href="#carousel8" className="text-gray-600 hover:text-orange-600 transition-colors">
              Interfaces
              </a>

            <a href="#contacto" className="text-gray-600 hover:text-orange-600 transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600">
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Comenzar Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#servicios" className="block px-3 py-2 text-gray-600">
                Servicios
              </a>
              <a href="#beneficios" className="block px-3 py-2 text-gray-600">
                Beneficios
              </a>
              <a href="#testimonios" className="block px-3 py-2 text-gray-600">
                Testimonios
              </a>
              <a href="#contacto" className="block px-3 py-2 text-gray-600">
                Contacto
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full">
                  Iniciar Sesión
                </Button>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600">
                  Comenzar Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
