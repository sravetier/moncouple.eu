import { PracticalGuide } from '../../types/practicalGuide';

export const amicableDivorceGuide: PracticalGuide = {
  id: 'amicable-divorce',
  title: "Guide du divorce à l'amiable",
  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
  description: "Tout ce qu'il faut savoir pour réussir un divorce à l'amiable",
  category: 'separation',
  sections: [
    {
      title: 'Analyse de votre situation',
      content: [
        {
          subtitle: 'Évaluation de votre éligibilité',
          points: [
            'Accord mutuel sur le principe du divorce',
            'Communication possible et respectueuse entre les époux',
            'Capacité à discuter des modalités pratiques',
            'Absence de conflits majeurs concernant les enfants ou le patrimoine'
          ]
        },
        {
          subtitle: 'Cas particuliers à considérer',
          points: [
            'Présence d\'enfants mineurs',
            'Propriété immobilière commune',
            'Entreprise familiale ou participation dans une société',
            'Dettes communes',
            'Régime matrimonial particulier'
          ]
        }
      ]
    },
    {
      title: 'Les étapes clés',
      content: [
        {
          subtitle: 'Préparation du dossier',
          checklistItems: [
            'Rassembler tous les documents administratifs',
            'Faire un état des lieux du patrimoine',
            'Établir un budget prévisionnel',
            'Choisir son avocat',
            'Préparer la convention de divorce'
          ]
        }
      ]
    },
    {
      title: 'Aspects financiers',
      content: [
        {
          subtitle: 'Budget à prévoir',
          points: [
            'Honoraires d\'avocat (2000€ à 4000€ en moyenne)',
            'Frais de notaire si biens immobiliers',
            'Coût du partage des biens',
            'Droits d\'enregistrement'
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: 'Ressources juridiques',
      links: [
        {
          text: 'Service-Public.fr - Le divorce par consentement mutuel',
          url: 'https://www.service-public.fr/particuliers/vosdroits/F10567'
        },
        {
          text: 'Ministère de la Justice - Guide du divorce',
          url: 'https://www.justice.fr/themes/divorce'
        }
      ]
    }
  ]
};