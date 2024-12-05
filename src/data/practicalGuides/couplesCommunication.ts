import { PracticalGuide } from '../../types/practicalGuide';
import couplesCommunication from '../../Images/couplesCommunication.avif';

export const couplesCommunicationGuide: PracticalGuide = {
  id: 'couples-communication',
  title: 'Exercices pratiques pour améliorer la communication',
  image: couplesCommunication,
  description: 'Des exercices concrets pour développer une communication saine et constructive avec votre partenaire',
  category: 'save-relationship',
  sections: [
    {
      title: 'Exercices de base',
      content: [
        {
          subtitle: 'Écoute active',
          points: [
            'Exercice du miroir : répéter ce que l autre a dit',
            'Reformulation avec ses propres mots',
            'Validation des émotions entendues',
            'Questions ouvertes pour approfondir'
          ]
        },
        {
          subtitle: 'Pratique quotidienne',
          checklistItems: [
            'Prévoir 15 minutes d échange sans interruption',
            'Alterner les rôles d écoutant et de parlant',
            'Noter les points importants entendus',
            'Partager ses ressentis sur l exercice'
          ]
        }
      ]
    },
    {
      title: 'Communication non-verbale',
      content: [
        {
          subtitle: 'Le langage du corps',
          points: [
            'Observer sa posture',
            'Maintenir un contact visuel approprié',
            'Être attentif aux expressions faciales',
            'Utiliser des gestes ouverts et accueillants'
          ]
        },
        {
          subtitle: 'Exercices pratiques',
          checklistItems: [
            'S asseoir face à face pendant 2 minutes sans parler',
            'Reproduire les expressions de l autre',
            'Communiquer une émotion sans mots',
            'Synchroniser sa respiration'
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: 'Pour aller plus loin',
      links: [
        {
          text: 'Vidéos d exercices de communication',
          url: 'https://www.youtube.com/communication'
        },
        {
          text: 'Articles sur la communication de couple',
          url: 'https://www.psychologies.com/couple/communication'
        }
      ]
    }
  ]
};