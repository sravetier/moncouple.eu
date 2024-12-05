import { PracticalGuide } from '../../types/practicalGuide';

export const childCustodyGuide: PracticalGuide = {
  id: 'child-custody',
  title: 'Guide de la garde des enfants',
  image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
  description: "Comment organiser la garde des enfants lors d'une séparation",
  category: 'separation',
  sections: [
    {
      title: 'Les différents modes de garde',
      content: [
        {
          subtitle: 'Types de garde possibles',
          points: [
            'Garde alternée (semaine/semaine)',
            'Garde principale avec droits de visite',
            'Garde partagée flexible',
            'Garde exclusive dans certains cas'
          ]
        },
        {
          subtitle: 'Critères de choix',
          points: [
            'Âge des enfants',
            'Distance entre les domiciles parentaux',
            'Emplois du temps professionnels',
            'Capacités d\'accueil de chaque parent',
            'Stabilité pour la scolarité'
          ]
        }
      ]
    },
    {
      title: 'Aspects pratiques',
      content: [
        {
          subtitle: 'Organisation quotidienne',
          checklistItems: [
            'Établir un calendrier de garde précis',
            'Organiser les transferts',
            'Gérer les affaires personnelles',
            'Coordonner les activités extra-scolaires',
            'Prévoir les vacances scolaires'
          ]
        },
        {
          subtitle: 'Communication entre parents',
          checklistItems: [
            'Choisir un mode de communication efficace',
            'Partager les informations importantes',
            'Coordonner les décisions éducatives',
            'Gérer les imprévus',
            'Maintenir un dialogue constructif'
          ]
        }
      ]
    },
    {
      title: 'Aspects juridiques',
      content: [
        {
          subtitle: 'Convention parentale',
          points: [
            'Définition du mode de garde',
            'Répartition des temps de présence',
            'Organisation des vacances',
            'Contribution financière',
            'Modalités de prise de décision'
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: 'Ressources utiles',
      links: [
        {
          text: 'Service-Public.fr - Autorité parentale',
          url: 'https://www.service-public.fr/particuliers/vosdroits/F3132'
        },
        {
          text: 'CAF - Séparation et garde d\'enfants',
          url: 'https://www.caf.fr/allocataires/vies-de-famille/se-separer/separation-et-garde-d-enfants'
        }
      ]
    }
  ]
};