import { PracticalGuide } from '../../types/practicalGuide';

export const livingAloneGuide: PracticalGuide = {
  id: 'living-alone',
  title: 'Réapprendre à vivre seul(e)',
  image: 'https://images.unsplash.com/photo-1503516459261-40c66117780a?auto=format&fit=crop&q=80&w=800',
  description: 'Guide pour retrouver son autonomie et s\'épanouir en solo',
  category: 'rebuild',
  sections: [
    {
      title: 'Apprivoiser la solitude',
      content: [
        {
          subtitle: 'Comprendre la différence entre solitude et isolement',
          points: [
            'La solitude comme opportunité de croissance',
            'Distinguer le sentiment de solitude du temps passé seul',
            'Les bienfaits du temps pour soi',
            'Transformer la solitude en indépendance'
          ]
        },
        {
          subtitle: 'Créer une nouvelle routine',
          checklistItems: [
            'Établir un planning quotidien structuré',
            'Prévoir des moments de socialisation',
            'Intégrer des activités plaisir',
            'Maintenir des horaires réguliers',
            'Se fixer des objectifs personnels'
          ]
        }
      ]
    },
    {
      title: 'Aspects pratiques du quotidien',
      content: [
        {
          subtitle: 'Organisation domestique',
          checklistItems: [
            'Planifier ses repas pour la semaine',
            'Créer un système de rangement efficace',
            'Établir un budget personnel',
            'Gérer les tâches ménagères',
            'Apprendre à bricoler les bases'
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: 'Ressources pratiques',
      links: [
        {
          text: 'Applications de gestion du temps',
          url: 'https://www.todolist.com'
        },
        {
          text: 'Cours de cuisine en ligne',
          url: 'https://www.marmiton.org/cours-de-cuisine'
        }
      ]
    }
  ]
};