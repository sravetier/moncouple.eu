import { ArticleGuide } from '../../types/articleGuide';

export const ConsultTherapeute: ArticleGuide = {
  id: 'active-listening',
  title: 'Écoute active pour couples',
  image: 'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=800',
  description: 'Apprenez à vraiment écouter votre partenaire et à créer une connexion plus profonde',
  category: 'save-relationship',
  sections: [
    {
      title: 'Fondamentaux de l écoute active',
      content: [
        {
          subtitle: 'Les principes de base',
          points: [
            'Être pleinement présent dans l instant',
            'Suspendre tout jugement ou interprétation',
            'Observer le langage non-verbal',
            'Respecter les silences et les pauses',
            'Accueillir les émotions sans chercher à les changer'
          ]
        },
        {
          subtitle: 'Techniques essentielles',
          checklistItems: [
            'Maintenir un contact visuel approprié',
            'Utiliser des encouragements verbaux (hmm, je vois...)',
            'Poser des questions ouvertes pour approfondir',
            'Reformuler pour vérifier la compréhension',
            'Valider les émotions exprimées'
          ]
        }
      ]
    },
    {
      title: 'Exercices pratiques',
      content: [
        {
          subtitle: 'L exercice du miroir',
          points: [
            'S asseoir face à face avec votre partenaire',
            'Une personne parle pendant 3 minutes sans interruption',
            'L autre reformule ce qu elle a compris',
            'Vérifier ensemble l exactitude de la reformulation',
            'Inverser les rôles'
          ]
        },
        {
          subtitle: 'Pratique quotidienne',
          checklistItems: [
            'Réserver 15 minutes par jour pour une écoute totale',
            'Choisir un moment calme sans distractions',
            'Éteindre les téléphones et autres écrans',
            'Alterner les rôles chaque jour',
            'Noter les progrès et difficultés rencontrés'
          ]
        }
      ]
    },
    {
      title: 'Obstacles à éviter',
      content: [
        {
          subtitle: 'Comportements à surveiller',
          points: [
            'Interrompre ou finir les phrases de l autre',
            'Donner des conseils non sollicités',
            'Minimiser les sentiments exprimés',
            'Se préparer à répondre au lieu d écouter',
            'Détourner la conversation vers soi'
          ]
        },
        {
          subtitle: 'Signes d une écoute inefficace',
          checklistItems: [
            'Vérifier son téléphone pendant la conversation',
            'Changer de sujet brusquement',
            'Faire plusieurs choses en même temps',
            'Montrer des signes d impatience',
            'Répondre avant que l autre ait fini'
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: 'Ressources complémentaires',
      links: [
        {
          text: 'Guide complet de l écoute active',
          url: 'https://www.psychologies.com/ecoute-active'
        },
        {
          text: 'Exercices pratiques pour couples',
          url: 'https://www.therapie-couple.fr/exercices'
        },
        {
          text: 'Vidéos de démonstration',
          url: 'https://www.youtube.com/ecoute-active'
        }
      ]
    }
  ]
};