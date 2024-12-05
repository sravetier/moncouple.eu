import { PracticalGuide } from '../../types/practicalGuide';
import checklistDemarche from '../../Images/checklistDemarche.avif';

export const checklistDemarcheGuide: PracticalGuide = {
        id: 'checklistDemarche',
        title: 'Checklist des démarches à réaliser en cas de séparation d\'un couple',
        image: checklistDemarche,
        description: 'Guide pratique des démarches à réaliser après une séparation pour un couple',
        category: 'separation',
        sections: [
          {
            title: 'Démarches administratives immédiates',
            content: [
              {
                subtitle: 'Informer les autorités compétentes',
                checklistItems: [
                  'Informer votre employeur (si cela impacte votre situation professionnelle)',
                  'Mettre à jour votre adresse auprès de la poste, des banques, assurances et autres organismes',
                  'Prévenir le service des impôts pour actualiser votre situation fiscale',
                  'Enregistrer la séparation auprès de votre mairie si nécessaire (dans le cas d’un changement de statut civil)',
                  'Si vous avez des enfants, prévenir l’école ou la crèche de la nouvelle situation familiale'
                ]
              }
            ]
          },
          {
            title: 'Organisation de la garde des enfants',
            content: [
              {
                subtitle: 'Définir la garde et les droits de visite',
                checklistItems: [
                  'Établir un accord amiable avec l’autre parent concernant la garde des enfants (garde alternée, résidence principale)',
                  'Organiser un calendrier de visites et d’hébergement pour les enfants',
                  'Prendre contact avec un médiateur familial si nécessaire pour faciliter l’accord',
                  'Demander une décision judiciaire si aucun accord amiable n’est possible (via un juge aux affaires familiales)'
                ]
              }
            ]
          },
          {
            title: 'Répartition des biens',
            content: [
              {
                subtitle: 'Partage des biens communs et individuels',
                checklistItems: [
                  'Faire un inventaire des biens communs (meubles, biens immobiliers, comptes bancaires)',
                  'Évaluer la valeur des biens à partager, avec l’aide d’un notaire si nécessaire',
                  'Rédiger un accord amiable sur la répartition des biens',
                  'Consulter un avocat si un bien est difficile à partager ou si le partage suscite un désaccord',
                  'Décider des modalités de paiement ou de compensation pour les biens qui ne peuvent pas être directement partagés (ex : bien immobilier, comptes bancaires)'
                ]
              }
            ]
          },
          {
            title: 'Démarches juridiques liées au divorce',
            content: [
              {
                subtitle: 'Entamer la procédure de divorce',
                checklistItems: [
                  'Décider du type de divorce (divorce à l’amiable, divorce pour faute, divorce pour altération du lien conjugal)',
                  'Consulter un avocat pour engager la procédure de divorce, même dans le cas d’une séparation amiable',
                  'Rédiger une convention de divorce amiable, si applicable, avec l’aide de votre avocat',
                  'Soumettre la convention de divorce au juge aux affaires familiales pour validation',
                  'Si vous optez pour un divorce contentieux, saisir le tribunal compétent et entamer la procédure judiciaire'
                ]
              }
            ]
          },
          {
            title: 'Questions financières et fiscales',
            content: [
              {
                subtitle: 'Gérer les aspects financiers après la séparation',
                checklistItems: [
                  'Mettre à jour les informations bancaires (compte joint à fermer, ouvrir un compte séparé)',
                  'Réévaluer votre situation fiscale et faire une déclaration de revenus individuelle',
                  'Mettre en place la pension alimentaire pour les enfants et/ou l’ex-conjoint si nécessaire',
                  'Organiser un partage des dettes communes et prévoir un plan de remboursement',
                  'Consulter un expert pour évaluer les impacts fiscaux du divorce et des choix financiers'
                ]
              }
            ]
          },
          {
            title: 'Suivi et réajustement post-séparation',
            content: [
              {
                subtitle: 'Réévaluer la situation après la séparation',
                checklistItems: [
                  'Évaluer régulièrement la situation financière et patrimoniale post-séparation',
                  'Revoir les modalités de garde des enfants si nécessaire pour s’adapter à l’évolution des besoins des enfants',
                  'Mettre à jour la pension alimentaire en fonction des évolutions de la situation financière',
                  'Consulter un avocat en cas de changement significatif de la situation (changement de résidence, nouvel emploi, etc.)'
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
                text: 'Modèle de convention de séparation amiable',
                url: 'https://www.avocat.fr/accueil/modele-separation-amiable'
              },
              {
                text: 'Simulateur de pension alimentaire',
                url: 'https://www.service-public.fr/particuliers/vosdroits/F18516'
              }
            ]
          }
        ]
      
};