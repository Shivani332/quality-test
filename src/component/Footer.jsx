import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 animate-fadeInUp">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-display font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Minu Laboratory</h3>
                <p className="text-xs text-gray-400">Quality & Testing</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner for comprehensive wood product testing and quality assurance services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About Us", "Testing Process", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Plywood Testing",
                "Furniture Testing",
                "Timber Analysis",
                "Fire Resistance",
                "Moisture Testing",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-pink-400 transition-colors text-sm font-semibold"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                <span className="text-gray-400">
                  Sector-148, Greater Noida
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href="mailto:info@minulab.com"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  info@minulab.com
                </a>
              </li>
              {/* Social Media */}
              <li className="flex items-center gap-4 mt-4">
                <a
                  href="https://facebook.com/minulab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/minulab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Minu Quantity and Testing Laboratory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
