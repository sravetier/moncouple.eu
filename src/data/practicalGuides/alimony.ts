import { PracticalGuide } from '../../types/practicalGuide';
import alimony from '../../images/alimony.webp';

export const alimonyGuide: PracticalGuide = {
    id: 'alimony',
    title: 'La répartition de la pension alimentaire en cas de divorce',
    image: alimony,
    description: 'Guide pratique pour comprendre la répartition de la pension alimentaire lors d\'une séparation ou d\'un divorce',
    category: 'separation',
    sections: [
      {
        title: 'Comprendre la pension alimentaire',
        content: [
          {
            subtitle: 'Définition et objectifs de la pension alimentaire',
            points: [
              'La pension alimentaire est une somme versée par l\'un des parents à l\'autre pour contribuer à l\'éducation et à l\'entretien des enfants',
              'Elle peut également couvrir les besoins de l\'ex-conjoint dans certaines situations (ex : si ce dernier est dans une situation de grande précarité)',
              'Son montant varie en fonction des ressources de l\'obligé alimentaire (le parent qui doit payer) et des besoins de celui qui en bénéficie',
              'Elle peut être fixée par accord amiable ou par décision judiciaire (jugement du juge aux affaires familiales)'
            ]
          }
        ]
      },
      {
        title: 'Calcul du montant de la pension alimentaire',
        content: [
          {
            subtitle: 'Critères de détermination',
            points: [
              'Le revenu des parents : les ressources de celui qui doit payer sont prises en compte pour fixer le montant',
              'Les besoins des enfants : il s\'agit des frais de nourriture, d\'éducation, de santé, etc.',
              'Le temps passé avec les enfants : si la garde alternée est mise en place, cela peut influencer le montant de la pension alimentaire',
              'Les charges et dettes de l\'obligé alimentaire : il peut également être tenu compte des autres charges financières que le parent assume'
            ]
          },
          {
            subtitle: 'Calculs et simulateurs',
            points: [
              'Il n\'existe pas de calcul automatique unique, chaque situation étant différente. Cependant, certains simulateurs en ligne peuvent donner une estimation du montant à verser',
              'Il est recommandé de consulter un avocat ou un notaire pour obtenir une estimation plus précise et légale'
            ]
          }
        ]
      },
      {
        title: 'Mise en place et exécution de la pension alimentaire',
        content: [
          {
            subtitle: 'Procédure judiciaire',
            points: [
              'La pension alimentaire est généralement fixée lors du divorce ou d\'une séparation devant le juge aux affaires familiales',
              'Si les parents sont en désaccord, le juge tranchera en fonction des éléments présentés (revenus, charges, besoins des enfants, etc.)',
              'Un jugement devra être prononcé pour fixer officiellement la pension alimentaire',
              'Si un parent ne respecte pas l\'obligation alimentaire, l\'autre peut demander une révision ou un recouvrement forcé'
            ]
          },
          {
            subtitle: 'Révision du montant',
            points: [
              'La pension alimentaire peut être révisée en cas de changement significatif dans la situation des parties (augmentation des revenus, changement de résidence, etc.)',
              'Une demande de révision peut être faite devant le juge aux affaires familiales'
            ]
          }
        ]
      },
      {
        title: 'Solutions amiables et médiation',
        content: [
          {
            subtitle: 'Trouver un accord amiable',
            points: [
              'Il est possible de négocier un montant de pension alimentaire directement entre les parents, souvent avec l\'aide d\'un médiateur familial',
              'Une fois l\'accord trouvé, il doit être validé par un juge pour être officialisé',
              'Les avantages d\'un accord amiable incluent une plus grande souplesse et une réduction des conflits'
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
            text: 'Simulateur de pension alimentaire',
            url: 'https://www.service-public.fr/particuliers/vosdroits/F18516'
          },
          {
            text: 'Modèle de demande de révision de pension alimentaire',
            url: 'https://www.avocat.fr/accueil/modele-demande-revision-pension-alimentaire'
          }
        ]
      }
    ]
  
};