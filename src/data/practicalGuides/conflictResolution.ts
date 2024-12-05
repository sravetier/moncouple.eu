import { PracticalGuide } from '../../types/practicalGuide';
import conflictResolution from '../../Images/conflictResolution.avif';

export const conflictResolutionGuide: PracticalGuide = {
  id: 'conflict-resolution',
  title: 'Résolution constructive des conflits',
  image: conflictResolution,
  description: 'Méthodes et techniques pour transformer les conflits en opportunités de croissance',
  category: 'save-relationship',
  sections: [
    {
      title: 'Gestion des conflits',
      content: [
        {
          subtitle: 'Approche constructive',
          points: [
            'Identifier la source réelle du conflit',
            'Exprimer ses besoins sans accusation',
            'Chercher des solutions gagnant-gagnant',
            'Établir des compromis équitables'
          ]
        },
        {
          subtitle: 'Techniques de désescalade',
          checklistItems: [
            'Prendre une pause si nécessaire',
            'Utiliser le "je" plutôt que le "tu"',
            'Éviter les généralisations',
            'Reconnaître sa part de responsabilité'
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
          text: 'Médiation de couple',
          url: 'https://www.mediation-couple.fr'
        }
      ]
    }
  ]
};