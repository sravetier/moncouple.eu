import { PracticalGuide } from '../../types/practicalGuide';
import emotionalHealing from '../../images/emotionalHealing.webp';

export const emotionalHealingGuide: PracticalGuide = {
  id: 'emotional-healing',
  title: 'Guide de la guérison émotionnelle',
  image: emotionalHealing,
  description: 'Retrouver son équilibre émotionnel après une séparation',
  category: 'rebuild',
  sections: [
    {
      title: 'Comprendre ses émotions',
      content: [
        {
          subtitle: 'Les étapes du deuil émotionnel',
          points: [
            'Le choc et le déni initial',
            'La colère et la frustration',
            'La négociation et les regrets',
            'La tristesse et le lâcher-prise',
            "L'acceptation et le renouveau"
          ]
        },
        {
          subtitle: 'Identifier ses émotions',
          points: [
            'Reconnaître ses sentiments sans jugement',
            'Comprendre leur origine et leur fonction',
            'Accepter la normalité de ces émotions',
            'Observer leur évolution dans le temps'
          ]
        }
      ]
    },
    {
      title: 'Outils de guérison',
      content: [
        {
          subtitle: 'Pratiques quotidiennes',
          checklistItems: [
            'Tenir un journal émotionnel',
            'Pratiquer la méditation ou la pleine conscience',
            'Faire de l\'exercice physique régulièrement',
            'Maintenir une routine de sommeil saine',
            'S\'entourer de personnes bienveillantes'
          ]
        },
        {
          subtitle: 'Exercices de libération émotionnelle',
          checklistItems: [
            'Écrire une lettre (sans l\'envoyer)',
            'Pratiquer la respiration profonde',
            'Utiliser la visualisation positive',
            'Exprimer ses émotions de manière créative',
            'Participer à un groupe de soutien'
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: 'Ressources professionnelles',
      links: [
        {
          text: 'Annuaire des psychologues spécialisés',
          url: 'https://www.psychologues-psychologie.net'
        },
        {
          text: 'Association française de thérapie comportementale et cognitive',
          url: 'https://www.aftcc.org'
        }
      ]
    }
  ]
};