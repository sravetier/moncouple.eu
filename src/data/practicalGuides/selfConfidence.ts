import { PracticalGuide } from '../../types/practicalGuide';

export const selfConfidenceGuide: PracticalGuide = {
  id: 'self-confidence',
  title: 'Retrouver confiance en soi',
  image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80&w=800',
  description: 'Guide pratique pour reconstruire son estime personnelle après une séparation',
  category: 'rebuild',
  sections: [
    {
      title: 'Comprendre la perte de confiance',
      content: [
        {
          subtitle: 'Les impacts d\'une rupture sur l\'estime de soi',
          points: [
            'Le sentiment de rejet et son impact',
            'La remise en question personnelle',
            'Les croyances limitantes qui émergent',
            'Le regard des autres et notre perception',
            'L\'effet sur notre identité personnelle'
          ]
        },
        {
          subtitle: 'Identifier ses forces',
          checklistItems: [
            'Lister ses réussites passées',
            'Reconnaître ses qualités personnelles',
            'Noter les compliments reçus',
            'Identifier ses domaines d\'expertise',
            'Reconnaître sa résilience'
          ]
        }
      ]
    },
    {
      title: 'Outils de reconstruction',
      content: [
        {
          subtitle: 'Exercices quotidiens',
          checklistItems: [
            'Pratiquer l\'auto-compassion',
            'Tenir un journal des réussites',
            'Se fixer des micro-objectifs atteignables',
            'Pratiquer l\'affirmation positive',
            'Célébrer ses petites victoires'
          ]
        },
        {
          subtitle: 'Développement personnel',
          points: [
            'Suivre une nouvelle formation',
            'Apprendre une nouvelle compétence',
            'Rejoindre un groupe de soutien',
            'Pratiquer une activité physique régulière',
            'S\'engager dans du bénévolat'
          ]
        }
      ]
    },
    {
      title: 'Gestion des relations',
      content: [
        {
          subtitle: 'Établir des limites saines',
          points: [
            'Apprendre à dire non',
            'Exprimer ses besoins clairement',
            'Choisir des relations constructives',
            'Se détacher des relations toxiques',
            'Cultiver son indépendance'
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
          text: 'Podcasts sur le développement personnel',
          url: 'https://www.psychologies.com/podcasts'
        },
        {
          text: 'Ateliers d\'affirmation de soi',
          url: 'https://www.therapie-cognitive.org/ateliers'
        }
      ]
    }
  ]
};