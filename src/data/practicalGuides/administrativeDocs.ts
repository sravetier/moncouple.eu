import { PracticalGuide } from '../../types/practicalGuide';
import administrativeDocs from '../../Images/administrativeDocs.avif';

export const administrativeDocsGuide: PracticalGuide = {
        id: 'administrativeDocs',
        title: 'Documents administratifs à fournir en cas de séparation',
        image: administrativeDocs,
        description: 'Un guide complet des documents administratifs nécessaires pour gérer la séparation d\'un couple marié ou pacsé.',
        category: 'separation',
        sections: [
          {
            title: 'Documents nécessaires en cas de séparation pour un couple marié',
            content: [
              {
                subtitle: '1. Divorce par consentement mutuel',
                points: [
                  'Convention de divorce : Ce document, rédigé par les avocats des deux parties, détaille les accords concernant la répartition des biens, la garde des enfants, la pension alimentaire, et la liquidation du régime matrimonial.',
                  'Acte de mariage : Il est nécessaire de fournir l\'acte de mariage pour prouver l\'union légale entre les deux parties.',
                  'Acte de naissance de chaque conjoint : Ces documents officiels sont utilisés pour identifier les conjoints et leurs informations personnelles.',
                  'Pièces justificatives sur les biens communs : Il peut s\'agir d\'un inventaire des biens communs (propriétés, comptes bancaires, etc.) pour permettre un partage équitable.',
                  'Attestation sur l\'honneur des revenus : Les parties doivent fournir leurs dernières déclarations fiscales et justificatifs de revenus pour évaluer la pension alimentaire et les modalités de partage.',
                  'Attestation de résidence : Un justificatif de domicile peut être demandé pour prouver la résidence de l\'un des conjoints, notamment en cas de changement de domicile après la séparation.'
                ]
              },
              {
                subtitle: '2. Divorce contentieux (procédure judiciaire)',
                points: [
                  'Demande de divorce : Il est nécessaire de remplir une demande officielle en divorce à déposer au tribunal de grande instance.',
                  'Certificat médical (si nécessaire) : Si la demande de divorce repose sur des motifs de violences conjugales, un certificat médical peut être requis.',
                  'Documents relatifs aux enfants : Actes de naissance des enfants, mais aussi les preuves des dépenses pour leur entretien (scolarité, soins, etc.).',
                  'Preuves de résidence séparée : Des justificatifs de domicile distincts peuvent être demandés pour prouver que les conjoints vivent séparément.',
                  'Documents financiers : Les relevés bancaires, les fiches de paie, et tout autre document prouvant la situation financière des conjoints peuvent être requis.'
                ]
              }
            ]
          },
          {
            title: 'Documents nécessaires en cas de séparation pour un couple pacsé',
            content: [
              {
                subtitle: '1. Dissolution du PACS amiable',
                points: [
                  'Convention de dissolution du PACS : Un document écrit et signé par les deux parties pour formaliser la rupture du pacte civil de solidarité.',
                  'Acte de naissance : Ce document sert à prouver l\'identité des deux partenaires.',
                  'Acte de PACS : Le document d\'enregistrement du PACS est nécessaire pour faire constater la dissolution.',
                  'Justificatif de domicile : Un document prouvant que les partenaires vivaient bien ensemble avant la séparation, ainsi que leurs adresses actuelles.',
                  'Inventaire des biens communs : Si le couple a des biens communs, un inventaire détaillé sera nécessaire pour déterminer qui prend quoi, et pour éviter toute ambiguïté sur les biens à partager.'
                ]
              },
              {
                subtitle: '2. Dissolution du PACS par décision judiciaire',
                points: [
                  'Demande de dissolution du PACS : Si l\'un des partenaires ne consent pas à la dissolution, la demande devra être adressée au tribunal.',
                  'Actes judiciaires : En fonction des circonstances de la séparation (violence, abandon, etc.), des actes judiciaires peuvent être nécessaires pour formaliser la rupture.',
                  'Documents relatifs aux enfants : Si le couple pacsé a des enfants, il faudra fournir les actes de naissance et les informations relatives à leur garde et entretien.',
                  'Preuves de résidence séparée : Comme dans le cas du divorce, il peut être demandé de fournir des justificatifs de domicile séparés pour prouver la rupture de vie commune.',
                  'Preuves de la situation financière : En cas de désaccord concernant les finances (partage des biens, pension alimentaire, etc.), les deux partenaires devront fournir des documents financiers pour étayer leurs revendications.'
                ]
              }
            ]
          },
          {
            title: 'Autres documents utiles en cas de séparation',
            content: [
              {
                subtitle: 'Documents relatifs à la garde des enfants',
                points: [
                  'Acte de naissance des enfants : Ce document officiel est requis pour prouver la filiation.',
                  'Jugement de garde (si applicable) : Si un juge a tranché sur la garde des enfants, une copie du jugement est nécessaire.',
                  'Justificatifs de scolarité et santé des enfants : Les certificats médicaux, bulletins scolaires, et autres documents peuvent être demandés pour prouver les besoins des enfants et déterminer la pension alimentaire.'
                ]
              },
              {
                subtitle: 'Documents relatifs à la pension alimentaire',
                points: [
                  'Dernières déclarations fiscales : Les fiches de paie, déclarations fiscales, et justificatifs de revenus sont nécessaires pour fixer le montant de la pension alimentaire.',
                  'Accord amiable ou jugement : Si les parties s\'entendent sur la pension alimentaire, un document écrit ou un jugement devra être rédigé pour formaliser l\'accord.',
                  'Preuves des dépenses liées à l\'enfant : Des justificatifs des dépenses liées aux enfants (école, santé, loisirs) peuvent être exigés pour déterminer le montant de la pension.'
                ]
              }
            ]
          },
          {
            title: 'Procédures pour les couples mariés et pacsés',
            content: [
              {
                subtitle: '1. Déclaration à l\'administration',
                points: [
                  'Couple marié : En cas de séparation, le conjoint doit informer l\'administration fiscale et la sécurité sociale de la nouvelle situation (par exemple, changement de statut marital).',
                  'Couple pacsé : De la même manière, la rupture du PACS doit être déclarée aux services fiscaux et à la sécurité sociale.'
                ]
              },
              {
                subtitle: '2. Mise à jour des contrats et assurances',
                points: [
                  'Si le couple marié ou pacsé partage des contrats d\'assurance, ces contrats doivent être mis à jour en fonction de la nouvelle situation. Cela inclut les assurances santé, habitation, et vie.',
                  'Les éventuels testaments ou autres documents légaux doivent également être révisés pour refléter la nouvelle situation.'
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
                text: 'Modèle de convention de divorce amiable',
                url: 'https://www.avocat.fr/accueil/modele-divorce-amiable'
              },
              {
                text: 'Informations sur le PACS et sa dissolution',
                url: 'https://www.service-public.fr/particuliers/vosdroits/F1206'
              },
              {
                text: 'Site de l\'administration fiscale sur le mariage et le PACS',
                url: 'https://www.impots.gouv.fr/portail/'
              }
            ]
          }
        ]      
};