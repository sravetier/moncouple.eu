import React from 'react';
import { Heart, Mail, Phone, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-[#85C196]" />
              <span className="ml-2 text-xl font-semibold text-white">MonCouple</span>
            </div>
            <p className="text-sm">
              Votre plateforme de confiance pour accompagner votre vie de couple, que ce soit pour la renforcer ou traverser les moments difficiles.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-[#85C196] transition-colors">Faire le point</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#85C196] transition-colors">Préparer sa séparation</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#85C196] transition-colors">Se reconstruire</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#85C196] transition-colors">Sauver son couple</a>
              </li>
            </ul>
          </div>

          {/* Aide & Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Aide & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-[#85C196] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#85C196] transition-colors">Centre d'aide</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#85C196] transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#85C196] transition-colors">Témoignages</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#85C196]" />
                <a href="mailto:contact@moncouple.fr" className="text-sm hover:text-[#85C196] transition-colors">
                  contact@moncouple.fr
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#85C196]" />
                <span className="text-sm">01 23 45 67 89</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre légale */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-xs hover:text-[#85C196] transition-colors">Mentions légales</a>
              <a href="#" className="text-xs hover:text-[#85C196] transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-xs hover:text-[#85C196] transition-colors">CGU</a>
              <a href="#" className="text-xs hover:text-[#85C196] transition-colors">Cookies</a>
            </div>
            <div className="flex items-center text-xs">
              <FileText className="h-4 w-4 mr-2 text-[#85C196]" />
              <span>© 2024 MonCouple. Tous droits réservés.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}