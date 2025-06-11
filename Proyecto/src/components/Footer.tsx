import { Apple, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Apple className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">NutriMatch</span>
            </div>
            <p className="text-gray-400">
              Transformando vidas a través de la nutrición personalizada en el Perú.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Planes para diabetes</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Pérdida de peso</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Ganancia muscular</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Dietas vegetarianas</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Nutrición deportiva</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Nuestro equipo</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Blog de salud</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Política de privacidad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>custom@nutrimatch.pe</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+51 937 288 040</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Trujillo, Perú</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="font-medium mb-2">Horarios de atención</h4>
              <p className="text-gray-400 text-sm">
                Lun - Vie: 8:00 AM - 7:00 PM<br />
                Sáb: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NutriMatch. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Creado con ❤️ para transformar la nutrición en el Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
