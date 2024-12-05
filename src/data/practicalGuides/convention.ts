import { PracticalGuide } from '../../types/practicalGuide';
import convention from '../../images/convention.avif';

export const conventionGuide: PracticalGuide = {
        id: 'convention',
        title: 'Convention de divorce à l\'amiable',
        image: convention,
        description: 'Modèle de convention de divorce à l\'amiable pour organiser la séparation de manière sereine et respectueuse',
        category: 'separation',
        sections: [
          {
            title: 'Préambule et informations générales',
            content: [
              {
                subtitle: 'Les parties concernées',
                points: [
                  'Cette convention est rédigée entre [Nom du conjoint 1], né(e) le [Date de naissance], à [Lieu de naissance], et [Nom du conjoint 2], né(e) le [Date de naissance], à [Lieu de naissance].',
                  'Les deux parties sont d\'accord sur la séparation et souhaitent procéder à un divorce à l\'amiable.',
                  'Le divorce sera prononcé par consentement mutuel, selon les termes définis dans cette convention.'
                ]
              },
              {
                subtitle: 'Objet de la convention',
                points: [
                  'La présente convention a pour objet d\'organiser le divorce de manière amiable, en réglant tous les aspects juridiques, financiers et parentaux.',
                  'Elle définit les modalités de séparation, de répartition des biens, des dettes, ainsi que des droits et devoirs respectifs des parties.'
                ]
              }
            ]
          },
          {
            title: 'Répartition des biens et des dettes',
            content: [
              {
                subtitle: 'Bien immobilier',
                points: [
                  'Le bien immobilier situé à [Adresse du bien immobilier] sera attribué à [Nom du conjoint], qui en assume la pleine propriété.',
                  'L\'autre conjoint recevra une compensation financière de [montant] pour la répartition de cet actif.'
                ]
              },
              {
                subtitle: 'Biens mobiliers',
                points: [
                  'Les meubles, équipements et objets personnels seront partagés selon l\'accord des deux parties, qui feront une liste complète et leur répartition.',
                  'En cas de désaccord, les biens seront évalués et vendus, le produit de la vente étant partagé équitablement.'
                ]
              },
              {
                subtitle: 'Dettes',
                points: [
                  'Les dettes communes seront réparties de manière équitable : [Nom du conjoint 1] s\'engage à rembourser [montant ou type de dette] et [Nom du conjoint 2] prendra en charge [montant ou type de dette].',
                  'Les dettes spécifiques à chaque conjoint resteront à la charge de celui-ci.'
                ]
              }
            ]
          },
          {
            title: 'Modalités de la pension alimentaire et de la garde des enfants',
            content: [
              {
                subtitle: 'Garde des enfants',
                points: [
                  'Les enfants mineurs, [Nom de l\'enfant 1] et [Nom de l\'enfant 2], seront placés sous la garde alternée des deux parents, avec une organisation à définir dans un calendrier précis.',
                  'Le partage des responsabilités éducatives et des décisions relatives à la santé, à l\'éducation et au bien-être des enfants sera effectué de manière conjointe.'
                ]
              },
              {
                subtitle: 'Pension alimentaire',
                points: [
                  'La pension alimentaire pour les enfants sera fixée à [montant] par mois, payable par [Nom du conjoint] à [Nom de l\'autre conjoint], selon les modalités suivantes : [détails du paiement].',
                  'Le montant pourra être révisé en fonction des besoins des enfants ou de l\'évolution des ressources financières des parents.'
                ]
              }
            ]
          },
          {
            title: 'Dispositions finales',
            content: [
              {
                subtitle: 'Confidentialité et respect',
                points: [
                  'Les parties s\'engagent à respecter la confidentialité des termes de la présente convention et à maintenir une communication respectueuse tout au long du processus de divorce.',
                  'Chaque conjoint accepte que cette convention soit déposée auprès du juge aux affaires familiales pour validation.'
                ]
              },
              {
                subtitle: 'Révision de la convention',
                points: [
                  'La présente convention pourra être révisée en cas de changement substantiel de situation (modification de revenus, déménagement, etc.), après un nouvel accord entre les parties et validation par le juge.',
                  'Si un conflit survient, les parties s\'engagent à recourir à la médiation avant d\'entamer toute procédure judiciaire.'
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
                text: 'Simulateur de pension alimentaire',
                url: 'https://www.service-public.fr/particuliers/vosdroits/F18516'
              }
            ]
          }
        ]  
};