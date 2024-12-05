import { PracticalGuide } from '../../types/practicalGuide';
import assetDivision from '../../images/assetDivision.avif';

export const assetDivisionGuide: PracticalGuide = {
    id: 'asset-division',
    title: 'Le partage des biens en cas de divorce',
    image: assetDivision,
    description: 'Guide pratique pour comprendre et organiser le partage des biens lors d\'un divorce',
    category: 'separation',
    sections: [
      {
        title: 'Préparation et évaluation des biens',
        content: [
          {
            subtitle: 'Faire un inventaire complet',
            checklistItems: [
              'Lister tous les biens communs et individuels (immobilier, meubles, comptes bancaires, etc.)',
              'Estimer la valeur des biens',
              'Identifier les dettes à prendre en compte',
              'Distinguer les biens propres et les biens partagés',
              'Demander l\'avis d\'un expert si nécessaire (notaire, avocat)'
            ]
          }
        ]
      },
      {
        title: 'Répartition des biens',
        content: [
          {
            subtitle: 'Répartir de manière équitable',
            points: [
              'Respecter les règles du régime matrimonial (communauté, séparation de biens, etc.)',
              'Tenir compte des besoins et attentes de chaque partie',
              'Décider de la vente ou de la conservation des biens immobiliers',
              'Prévoir un règlement des dettes communes',
              'Penser à la garde des animaux ou objets ayant une valeur sentimentale'
            ]
          }
        ]
      },
      {
        title: 'Médiation et négociation',
        content: [
          {
            subtitle: 'Trouver des solutions amiables',
            points: [
              'Faire appel à un médiateur pour faciliter la négociation',
              'Négocier les biens en fonction des priorités de chacun',
              'Éviter les conflits inutiles, garder une communication respectueuse',
              'Prévoir un accord écrit pour valider les termes de la répartition'
            ]
          }
        ]
      }
    ],
    resources: [
      {
        title: 'Outils pratiques',
        links: [
          {
            text: 'Simulateur de partage des biens',
            url: 'https://www.simulatorexpert.com/partage-des-biens'
          },
          {
            text: 'Modèle d\'accord de divorce',
            url: 'https://www.avocat.fr/accueil/modele-divorce'
          }
        ]
      }
    ]

  
  
};