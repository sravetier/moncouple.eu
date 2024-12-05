import React from 'react';
import { ArrowRight } from 'lucide-react';
import AccueilImage from '../Images/Accueil.avif';

export default function Hero() {
  return (
    <div className="relative bg-white mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 lg:max-w-2xl lg:w-full">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20 text-center lg:text-left">
            <div className="sm:pt-12 lg:pt-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Réinventez votre</span>
                <span className="block text-[#85C196]">relation de couple</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:mt-5 md:text-xl">
                Des outils pratiques et un accompagnement personnalisé pour faire évoluer votre relation ou traverser les moments difficiles.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#85C196] hover:bg-[#75b086]">
                    Commencer maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={AccueilImage}
          alt="Couple heureux"
        />
      </div>
    </div>
  );
}