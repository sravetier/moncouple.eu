import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface SiteSettings {
  siteName: string;
  contactEmail: string;
  phoneNumber: string;
  mainColor: string;
  maxUploadSize: number;
  enableRegistration: boolean;
  enableForum: boolean;
  moderationEnabled: boolean;
  autoModeration: boolean;
  maintenanceMode: boolean;
}

export default function Settings() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: 'MonCouple',
    contactEmail: 'contact@moncouple.fr',
    phoneNumber: '01 23 45 67 89',
    mainColor: '#85C196',
    maxUploadSize: 5,
    enableRegistration: true,
    enableForum: true,
    moderationEnabled: true,
    autoModeration: false,
    maintenanceMode: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de sauvegarde des paramètres
    console.log('Paramètres sauvegardés:', settings);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Paramètres du site</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Paramètres généraux */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Paramètres généraux</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nom du site
                </label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email de contact
                </label>
                <input
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  value={settings.phoneNumber}
                  onChange={(e) => setSettings({...settings, phoneNumber: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Couleur principale
                </label>
                <input
                  type="color"
                  value={settings.mainColor}
                  onChange={(e) => setSettings({...settings, mainColor: e.target.value})}
                  className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm p-1"
                />
              </div>
            </div>
          </div>

          {/* Paramètres du forum */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Paramètres du forum</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Activer le forum</h3>
                  <p className="text-sm text-gray-500">Permet aux utilisateurs d'accéder au forum</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enableForum}
                    onChange={(e) => setSettings({...settings, enableForum: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#85C196]/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#85C196]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Modération manuelle</h3>
                  <p className="text-sm text-gray-500">Validation des messages par les modérateurs</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.moderationEnabled}
                    onChange={(e) => setSettings({...settings, moderationEnabled: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#85C196]/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#85C196]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Modération automatique</h3>
                  <p className="text-sm text-gray-500">Filtrage automatique du contenu inapproprié</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoModeration}
                    onChange={(e) => setSettings({...settings, autoModeration: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#85C196]/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#85C196]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Paramètres système */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Paramètres système</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Taille maximale des fichiers (MB)
                </label>
                <input
                  type="number"
                  value={settings.maxUploadSize}
                  onChange={(e) => setSettings({...settings, maxUploadSize: Number(e.target.value)})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Inscriptions ouvertes</h3>
                  <p className="text-sm text-gray-500">Permet aux nouveaux utilisateurs de s'inscrire</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enableRegistration}
                    onChange={(e) => setSettings({...settings, enableRegistration: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#85C196]/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#85C196]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Mode maintenance</h3>
                  <p className="text-sm text-gray-500">Rend le site inaccessible aux utilisateurs</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.maintenanceMode}
                    onChange={(e) => setSettings({...settings, maintenanceMode: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#85C196]/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#85C196]"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086] flex items-center"
            >
              <Save className="h-5 w-5 mr-2" />
              Enregistrer les paramètres
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}