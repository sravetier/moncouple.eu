import React from 'react';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';

export default function DivorceGuide() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
            alt="Divorce à l'amiable"
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Guide du divorce à l'amiable</h1>
            <p className="text-gray-600 mb-8">Tout ce qu'il faut savoir pour réussir un divorce à l'amiable</p>

            {/* Section 1: Analyse de la situation */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Analyse de votre situation
              </h2>
              
              <div className="mb-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4 text-gray-700">
                  Évaluation de votre éligibilité
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Accord mutuel sur le principe du divorce</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Communication possible et respectueuse entre les époux</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Capacité à discuter des modalités pratiques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Absence de conflits majeurs concernant les enfants ou le patrimoine</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4 text-gray-700">
                  Cas particuliers à considérer
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Présence d'enfants mineurs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Propriété immobilière commune</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Entreprise familiale ou participation dans une société</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Dettes communes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Régime matrimonial particulier</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2: Les étapes clés */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Les étapes clés
              </h2>
              
              <div className="mb-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4 text-gray-700">
                  Préparation du dossier
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#85C196] mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Rassembler tous les documents administratifs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#85C196] mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Faire un état des lieux du patrimoine</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#85C196] mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Établir un budget prévisionnel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#85C196] mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Choisir son avocat</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#85C196] mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Préparer la convention de divorce</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Aspects financiers */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Aspects financiers
              </h2>
              
              <div className="mb-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4 text-gray-700">
                  Budget à prévoir
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Honoraires d'avocat (2000€ à 4000€ en moyenne)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Frais de notaire si biens immobiliers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Coût du partage des biens</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Droits d'enregistrement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ressources complémentaires */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-semibold mb-6">Ressources complémentaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-4 text-gray-700">
                    Ressources juridiques
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.service-public.fr/particuliers/vosdroits/F10567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#85C196] hover:text-[#75b086] group"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                        <span className="underline">Service-Public.fr - Le divorce par consentement mutuel</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.justice.fr/themes/divorce"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#85C196] hover:text-[#75b086] group"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                        <span className="underline">Ministère de la Justice - Guide du divorce</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}