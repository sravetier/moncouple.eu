import { PracticalGuide } from '../../types/practicalGuide';

export const selfDiscoveryGuide: PracticalGuide = {
  id: 'self-discovery',
  title: 'Se redécouvrir après une séparation',
  image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&q=80&w=800',
  description: 'Guide pour renouer avec soi-même et explorer de nouveaux horizons',
  category: 'rebuild',
  sections: [
    {
      title: 'Exploration personnelle',
      content: [
        {
          subtitle: 'Redéfinir son identité',
          points: [
            'Identifier ses valeurs personnelles',
            'Explorer ses passions oubliées',
            'Découvrir de nouveaux centres d\'intérêt',
            'Définir ses objectifs de vie',
            'Reconnecter avec ses rêves'
          ]
        },
        {
          subtitle: 'Exercices d\'introspection',
          checklistItems: [
            'Tenir un journal de découverte de soi',
            'Créer une vision board',
            'Méditer quotidiennement',
            'Explorer ses talents créatifs',
            'Définir ses valeurs non négociables'
          ]
        }
      ]
    },
    {
      title: 'Nouveaux horizons',
      content: [
        {
          subtitle: 'Développement personnel',
          points: [
            'Essayer de nouvelles activités',
            'Voyager en solo',
            'Apprendre une nouvelle langue',
            'Développer un nouveau hobby',
            'Rejoindre des groupes d\'intérêt'
          ]
        },
        {
          subtitle: 'Bien-être et équilibre',
          checklistItems: [
            'Établir une routine bien-être',
            'Explorer différentes pratiques sportives',
            'Expérimenter la méditation',
            'Découvrir le yoga ou le pilates',
            'Pratiquer la gratitude quotidienne'
          ]
        }
      ]
    },
    {
      title: 'Connexions sociales',
      content: [
        {
          subtitle: 'Créer de nouveaux liens',
          points: [
            'Participer à des événements sociaux',
            'Rejoindre des clubs ou associations',
            'S\'inscrire à des ateliers collectifs',
            'Développer de nouvelles amitiés',
            'Partager ses expériences avec d\'autres'
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
          text: 'Ateliers de développement personnel',
          url: 'https://www.psychologies.com/ateliers'
        },
        {
          text: 'Communautés de voyageurs solo',
          url: 'https://www.voyageursdumonde.fr/voyage-sur-mesure/solo'
        }
      ]
    }
  ]
};