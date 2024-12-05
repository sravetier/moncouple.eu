import { PracticalGuide } from '../../types/practicalGuide';

export const alternateParentingGuide: PracticalGuide = {
  id: 'alternate-parenting',
  title: 'S\'organiser en garde alternée',
  image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&q=80&w=800',
  description: 'Guide pratique pour gérer la garde alternée de manière sereine',
  category: 'rebuild',
  sections: [
    {
      title: 'Planification et organisation',
      content: [
        {
          subtitle: 'Structurer les semaines avec enfants',
          checklistItems: [
            'Créer un calendrier partagé avec l\'autre parent',
            'Planifier les activités et devoirs à l\'avance',
            'Organiser les repas pour la semaine',
            'Prévoir les trajets école/activités',
            'Anticiper les besoins matériels',
            'Mettre en place une routine stable'
          ]
        }
      ]
    },
    {
      title: 'Gestion des semaines sans enfants',
      content: [
        {
          subtitle: 'Maintenir le lien',
          points: [
            'Établir des rituels de communication à distance',
            'Utiliser la technologie de manière positive',
            'Préparer les retrouvailles',
            'Gérer le manque et les émotions',
            'Respecter les moments de l\'autre parent'
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
          text: 'Applications de co-parentalité',
          url: 'https://www.coparently.com'
        },
        {
          text: 'Modèles de calendriers partagés',
          url: 'https://www.familywall.com'
        }
      ]
    }
  ]
};