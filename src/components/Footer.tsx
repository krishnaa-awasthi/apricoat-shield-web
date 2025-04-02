
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-apricoat-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-white">Apricoat</span>
              <span className="text-coral-400 ml-1">Insurances</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Protecting what matters most with tailored insurance solutions for individuals and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-coral-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-coral-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-coral-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-coral-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-coral-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-coral-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-coral-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-coral-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-coral-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Insurance Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#marine" className="text-gray-300 hover:text-coral-400 transition-colors">
                  Marine Insurance
                </Link>
              </li>
              <li>
                <Link to="/services#fire" className="text-gray-300 hover:text-coral-400 transition-colors">
                  Fire Insurance
                </Link>
              </li>
              <li>
                <Link to="/services#property" className="text-gray-300 hover:text-coral-400 transition-colors">
                  Property Insurance
                </Link>
              </li>
              <li>
                <Link to="/services#liability" className="text-gray-300 hover:text-coral-400 transition-colors">
                  Liability Insurance
                </Link>
              </li>
              <li>
                <Link to="/services#life" className="text-gray-300 hover:text-coral-400 transition-colors">
                  Life Insurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-coral-400 mt-1" />
                <span className="text-gray-300">
                  123 Insurance Avenue, Business District, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-coral-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-coral-400" />
                <span className="text-gray-300">contact@apricoat.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Apricoat Insurances. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-coral-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-coral-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
