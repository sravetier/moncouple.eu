import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { Users, FileText, MessageSquare, BarChart2 } from 'lucide-react';

const stats = [
  { name: 'Utilisateurs actifs', value: '2,345', icon: Users },
  { name: 'Tests complétés', value: '8,789', icon: FileText },
  { name: 'Messages forum', value: '12,456', icon: MessageSquare },
  { name: 'Taux de satisfaction', value: '98%', icon: BarChart2 },
];

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== 'admin') {
    return <div>Accès non autorisé</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Tableau de bord</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Statistiques */}
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <stat.icon className="h-6 w-6 text-[#85C196]" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            {stat.name}
                          </dt>
                          <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900">
                              {stat.value}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contenu récent */}
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Derniers tests */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Derniers tests complétés
                  </h3>
                  <div className="mt-5">
                    <ul className="divide-y divide-gray-200">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                Test de communication
                              </p>
                              <p className="text-sm text-gray-500">
                                Il y a 2 heures par John Doe
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Messages récents */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Messages récents du forum
                  </h3>
                  <div className="mt-5">
                    <ul className="divide-y divide-gray-200">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                Comment gérer une séparation ?
                              </p>
                              <p className="text-sm text-gray-500">
                                Il y a 1 heure par Jane Smith
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}