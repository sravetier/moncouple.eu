import { PracticalGuide } from '../../types/practicalGuide';

export const emotionalConnectionGuide: PracticalGuide = {
  id: 'emotional-connection',
  title: 'Renforcer la connexion émotionnelle',
  image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=800',
  description: 'Exercices pour approfondir l intimité émotionnelle dans votre couple',
  category: 'save-relationship',
  sections: [
    {
      title: 'Créer l intimité émotionnelle',
      content: [
        {
          subtitle: 'Exercices de connexion',
          points: [
            'Partage quotidien des émotions',
            'Expression des besoins profonds',
            'Création de rituels de couple',
            'Moments de vulnérabilité partagée'
          ]
        },
        {
          subtitle: 'Pratiques quotidiennes',
          checklistItems: [
            'Moment de gratitude partagée',
            'Contact visuel prolongé',
            'Échange sur les rêves et aspirations',
            'Expression d appréciation mutuelle'
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: 'Pour approfondir',
      links: [
        {
          text: 'Exercices d intimité émotionnelle',
          url: 'https://www.psychologies.com/intimite-emotionnelle'
        }
      ]
    }
  ]
};