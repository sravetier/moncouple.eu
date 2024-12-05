import { Test } from '../types/test';
import evaluation_relation from '../images/evaluation_relation.jpg';
import clarifier_relation from '../images/clarifier_relation.jpg';

//script qui reprend tout les tests de la page assesments(faire le point)
// partie  "Faire le point sur mon couple"
export const tests: Test[] = [
  {
    id: 'communication',
    title: "La communication dans votre couple",
    image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Évaluez la qualité de votre communication conjugale",
    questions: [
      {
        id: 1,
        text: "Comment exprimez-vous vos besoins à votre partenaire ?",
        options: [
          { id: 1, text: "Je garde tout pour moi", value: 1 },
          { id: 2, text: "J'ai du mal à m'exprimer clairement", value: 2 },
          { id: 3, text: "Je communique mais pas toujours efficacement", value: 3 },
          { id: 4, text: "J'exprime clairement mes besoins", value: 4 }
        ]
      },
      {
        id: 2,
        text: "Comment gérez-vous les désaccords ?",
        options: [
          { id: 1, text: "On finit toujours par se disputer", value: 1 },
          { id: 2, text: "On évite d'en parler", value: 2 },
          { id: 3, text: "On essaie de discuter calmement", value: 3 },
          { id: 4, text: "On trouve des solutions ensemble", value: 4 }
        ]
      },
      {
        id: 3,
        text: "Écoutez-vous activement votre partenaire ?",
        options: [
          { id: 1, text: "Je suis souvent distrait(e)", value: 1 },
          { id: 2, text: "J'écoute mais je pense à ma réponse", value: 2 },
          { id: 3, text: "J'essaie de comprendre son point de vue", value: 3 },
          { id: 4, text: "Je suis totalement présent(e) et attentif(ve)", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Partagez-vous vos émotions ?",
        options: [
          { id: 1, text: "Rarement ou jamais", value: 1 },
          { id: 2, text: "Seulement quand je suis très affecté(e)", value: 2 },
          { id: 3, text: "Assez régulièrement", value: 3 },
          { id: 4, text: "Ouvertement et honnêtement", value: 4 }
        ]
      },
      {
        id: 5,
        text: "Comment gérez-vous les critiques ?",
        options: [
          { id: 1, text: "Je deviens défensif(ve) ou agressif(ve)", value: 1 },
          { id: 2, text: "Je me ferme", value: 2 },
          { id: 3, text: "J'essaie de comprendre", value: 3 },
          { id: 4, text: "Je les accueille constructivement", value: 4 }
        ]
      },
      {
        id: 6,
        text: "Parlez-vous de vos projets communs ?",
        options: [
          { id: 1, text: "Nous n'en parlons jamais", value: 1 },
          { id: 2, text: "Rarement, c'est source de tension", value: 2 },
          { id: 3, text: "Occasionnellement", value: 3 },
          { id: 4, text: "Régulièrement et avec enthousiasme", value: 4 }
        ]
      },
      {
        id: 7,
        text: "Comment exprimez-vous votre affection ?",
        options: [
          { id: 1, text: "Je ne l'exprime pas", value: 1 },
          { id: 2, text: "Rarement, je ne sais pas comment faire", value: 2 },
          { id: 3, text: "De temps en temps", value: 3 },
          { id: 4, text: "Quotidiennement et naturellement", value: 4 }
        ]
      },
      {
        id: 8,
        text: "Prenez-vous des décisions ensemble ?",
        options: [
          { id: 1, text: "Chacun décide de son côté", value: 1 },
          { id: 2, text: "Seulement pour les grandes décisions", value: 2 },
          { id: 3, text: "Pour la plupart des choses importantes", value: 3 },
          { id: 4, text: "Nous décidons tout ensemble", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Comment gérez-vous les silences ?",
        options: [
          { id: 1, text: "Ils sont pesants et inconfortables", value: 1 },
          { id: 2, text: "Je les évite", value: 2 },
          { id: 3, text: "Je les accepte", value: 3 },
          { id: 4, text: "Ils sont confortables et naturels", value: 4 }
        ]
      },
      {
        id: 10,
        text: "Validez-vous les sentiments de votre partenaire ?",
        options: [
          { id: 1, text: "Je les minimise souvent", value: 1 },
          { id: 2, text: "J'essaie de les changer", value: 2 },
          { id: 3, text: "Je les respecte généralement", value: 3 },
          { id: 4, text: "Je les valide toujours", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 15) {
        return "La communication dans votre couple nécessite une attention particulière. Il serait bénéfique de travailler sur l'expression de vos besoins et l'écoute mutuelle. Un accompagnement professionnel pourrait vous aider à développer de meilleurs outils de communication.";
      } else if (score <= 25) {
        return "Votre communication présente des axes d'amélioration. Essayez d'instaurer des moments dédiés au dialogue, d'exprimer vos émotions plus ouvertement et d'écouter activement votre partenaire.";
      } else if (score <= 35) {
        return "Vous avez établi une bonne base de communication. Continuez à cultiver cette ouverture et à renforcer votre capacité d'écoute mutuelle pour maintenir et améliorer cette dynamique positive.";
      } else {
        return "Félicitations ! Votre couple bénéficie d'une excellente communication. Vous avez su créer un espace de dialogue sain et constructif. Continuez à entretenir cette qualité d'échange qui est précieuse pour votre relation.";
      }
    }
  },
  {
    id: 'trust',
    title: "La confiance dans votre couple",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Évaluez le niveau de confiance dans votre relation",
    questions: [
      {
        id: 1,
        text: "Comment gérez-vous les informations personnelles de votre partenaire ?",
        options: [
          { id: 1, text: "Je les partage parfois avec d'autres", value: 1 },
          { id: 2, text: "Je les garde pour moi mais les utilise en cas de conflit", value: 2 },
          { id: 3, text: "Je les respecte généralement", value: 3 },
          { id: 4, text: "Je les considère comme strictement confidentielles", value: 4 }
        ]
      },
      // ... autres questions du test de confiance (comme précédemment)
    ],
    getAnalysis: (score) => {
      if (score <= 15) {
        return "La confiance semble être un enjeu majeur dans votre relation. Des peurs et des doutes profonds semblent affecter votre capacité à faire confiance. Il serait bénéfique de travailler sur vos insécurités, peut-être avec l'aide d'un professionnel, pour construire une base plus solide.";
      } else if (score <= 25) {
        return "Vous avez des difficultés à faire pleinement confiance, ce qui est normal si vous avez vécu des expériences difficiles. Concentrez-vous sur la communication ouverte et honnête avec votre partenaire pour renforcer progressivement la confiance mutuelle.";
      } else if (score <= 35) {
        return "Vous avez établi un bon niveau de confiance dans votre relation, même s'il reste quelques zones d'inconfort. Continuez à cultiver cette confiance en maintenant une communication transparente et en respectant les limites de chacun.";
      } else {
        return "Félicitations ! Votre relation est basée sur une confiance solide et mature. Vous avez su créer un environnement sécurisant où chacun peut s'épanouir tout en respectant l'autre. Continuez à entretenir cette belle dynamique.";
      }
    }
  },
  {
    id: 'intimacy',
    title: "L'intimité dans votre couple",
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Évaluez la qualité de votre intimité émotionnelle et physique",
    questions: [
      {
        id: 1,
        text: "Comment qualifieriez-vous votre intimité émotionnelle ?",
        options: [
          { id: 1, text: "Nous sommes distants", value: 1 },
          { id: 2, text: "Nous avons du mal à nous connecter", value: 2 },
          { id: 3, text: "Nous partageons régulièrement", value: 3 },
          { id: 4, text: "Nous sommes très proches émotionnellement", value: 4 }
        ]
      },
      {
        id: 2,
        text: "Partagez-vous des moments de tendresse ?",
        options: [
          { id: 1, text: "Rarement ou jamais", value: 1 },
          { id: 2, text: "Occasionnellement", value: 2 },
          { id: 3, text: "Régulièrement", value: 3 },
          { id: 4, text: "Quotidiennement", value: 4 }
        ]
      },
      {
        id: 3,
        text: "Comment communiquez-vous vos désirs ?",
        options: [
          { id: 1, text: "Je n'ose pas en parler", value: 1 },
          { id: 2, text: "Avec difficulté et gêne", value: 2 },
          { id: 3, text: "Assez ouvertement", value: 3 },
          { id: 4, text: "Très naturellement", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Êtes-vous satisfait(e) de votre vie intime ?",
        options: [
          { id: 1, text: "Pas du tout", value: 1 },
          { id: 2, text: "Peu satisfait(e)", value: 2 },
          { id: 3, text: "Plutôt satisfait(e)", value: 3 },
          { id: 4, text: "Très satisfait(e)", value: 4 }
        ]
      },
      {
        id: 5,
        text: "Prenez-vous du temps pour des moments d'intimité ?",
        options: [
          { id: 1, text: "Nous n'en prenons pas", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "Régulièrement", value: 3 },
          { id: 4, text: "C'est une priorité", value: 4 }
        ]
      },
      {
        id: 6,
        text: "Comment gérez-vous les différences de désir ?",
        options: [
          { id: 1, text: "C'est source de conflit", value: 1 },
          { id: 2, text: "Nous évitons d'en parler", value: 2 },
          { id: 3, text: "Nous essayons de nous adapter", value: 3 },
          { id: 4, text: "Nous en parlons ouvertement", value: 4 }
        ]
      },
      {
        id: 7,
        text: "Vous sentez-vous en sécurité émotionnellement ?",
        options: [
          { id: 1, text: "Pas du tout", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "La plupart du temps", value: 3 },
          { id: 4, text: "Totalement", value: 4 }
        ]
      },
      {
        id: 8,
        text: "Partagez-vous des activités qui vous rapprochent ?",
        options: [
          { id: 1, text: "Jamais", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "Régulièrement", value: 3 },
          { id: 4, text: "Très souvent", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Comment vivez-vous les moments de proximité physique ?",
        options: [
          { id: 1, text: "Avec inconfort", value: 1 },
          { id: 2, text: "Avec une certaine gêne", value: 2 },
          { id: 3, text: "Naturellement", value: 3 },
          { id: 4, text: "Avec beaucoup de plaisir", value: 4 }
        ]
      },
      {
        id: 10,
        text: "Vous sentez-vous désiré(e) par votre partenaire ?",
        options: [
          { id: 1, text: "Rarement ou jamais", value: 1 },
          { id: 2, text: "Parfois", value: 2 },
          { id: 3, text: "Souvent", value: 3 },
          { id: 4, text: "Très souvent", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 15) {
        return "L'intimité dans votre couple semble être un point sensible qui mérite une attention particulière. Il serait bénéfique d'ouvrir le dialogue sur ce sujet, peut-être avec l'aide d'un professionnel, pour recréer une connexion plus profonde.";
      } else if (score <= 25) {
        return "Votre intimité pourrait être améliorée. Essayez de créer plus de moments de partage et de connexion émotionnelle. La communication ouverte sur vos besoins et désirs est essentielle.";
      } else if (score <= 35) {
        return "Vous avez une bonne base d'intimité dans votre couple. Continuez à cultiver ces moments de connexion et à communiquer ouvertement sur vos besoins pour maintenir et approfondir cette intimité.";
      } else {
        return "Félicitations ! Votre couple bénéficie d'une excellente intimité. Vous avez su créer un espace de confiance et de partage profond. Continuez à entretenir cette belle connexion qui est précieuse pour votre relation.";
      }
    }
  },
  {
    "id": "evaluation-relation",
    "title": "Évaluer la qualité de ma relation",
    "image": evaluation_relation,
    "description": "Faites le point sur l'état de votre couple à travers cette évaluation complète.",
    "questions": [
      {
        "id": 1,
        "text": "Comment évaluez-vous la confiance dans votre couple ?",
        "options": [
          { "id": 1, "text": "Il y a beaucoup de doutes et d'incertitudes", "value": 1 },
          { "id": 2, "text": "Parfois, je me sens incertain(e)", "value": 2 },
          { "id": 3, "text": "La confiance est présente mais elle pourrait être plus forte", "value": 3 },
          { "id": 4, "text": "Je ressens une confiance totale et inébranlable", "value": 4 }
        ]
      },
      {
        "id": 2,
        "text": "Comment gérez-vous les conflits dans votre relation ?",
        "options": [
          { "id": 1, "text": "Les conflits finissent toujours en disputes", "value": 1 },
          { "id": 2, "text": "Nous évitons souvent d'en parler pour ne pas aggraver les choses", "value": 2 },
          { "id": 3, "text": "Nous cherchons à trouver un compromis, même si ce n'est pas toujours facile", "value": 3 },
          { "id": 4, "text": "Nous réglons rapidement les conflits, en cherchant une solution ensemble", "value": 4 }
        ]
      },
      {
        "id": 3,
        "text": "Partagez-vous des moments de qualité régulièrement ?",
        "options": [
          { "id": 1, "text": "Nous n'avons pas vraiment de moments à deux", "value": 1 },
          { "id": 2, "text": "Nous avons des moments ensemble mais trop rares", "value": 2 },
          { "id": 3, "text": "Nous passons régulièrement du temps ensemble, mais parfois avec des distractions", "value": 3 },
          { "id": 4, "text": "Nous prenons le temps de nous retrouver régulièrement, sans distractions", "value": 4 }
        ]
      },
      {
        "id": 4,
        "text": "Est-ce que vous vous sentez écouté(e) et compris(e) par votre partenaire ?",
        "options": [
          { "id": 1, "text": "Je ne me sens jamais vraiment compris(e)", "value": 1 },
          { "id": 2, "text": "Parfois, mais cela dépend des sujets", "value": 2 },
          { "id": 3, "text": "En général, je me sens écouté(e) mais il y a des moments de malentendus", "value": 3 },
          { "id": 4, "text": "Je me sens toujours écouté(e) et compris(e)", "value": 4 }
        ]
      },
      {
        "id": 5,
        "text": "Exprimez-vous facilement vos émotions envers votre partenaire ?",
        "options": [
          { "id": 1, "text": "Je garde souvent mes émotions pour moi", "value": 1 },
          { "id": 2, "text": "Je parle parfois de mes émotions, mais pas en profondeur", "value": 2 },
          { "id": 3, "text": "Je partage mes émotions, mais ce n'est pas toujours facile", "value": 3 },
          { "id": 4, "text": "Je parle ouvertement de mes émotions avec mon partenaire", "value": 4 }
        ]
      },
      {
        "id": 6,
        "text": "Comment exprimez-vous votre affection au quotidien ?",
        "options": [
          { "id": 1, "text": "Je n'exprime pas beaucoup mon affection", "value": 1 },
          { "id": 2, "text": "J'exprime de l'affection, mais pas tous les jours", "value": 2 },
          { "id": 3, "text": "Je montre de l'affection régulièrement, mais parfois c'est un peu superficiel", "value": 3 },
          { "id": 4, "text": "Je montre constamment mon affection de manière sincère et authentique", "value": 4 }
        ]
      },
      {
        "id": 7,
        "text": "Comment percevez-vous vos projets de vie en tant que couple ?",
        "options": [
          { "id": 1, "text": "Nous n'avons pas vraiment de projets communs", "value": 1 },
          { "id": 2, "text": "Nos projets sont limités ou mal définis", "value": 2 },
          { "id": 3, "text": "Nous avons quelques projets communs mais pas toujours clairs", "value": 3 },
          { "id": 4, "text": "Nous avons des projets clairs et bien définis, qui nous motivent", "value": 4 }
        ]
      },
      {
        "id": 8,
        "text": "Comment évaluez-vous l'équilibre entre votre vie personnelle et votre vie de couple ?",
        "options": [
          { "id": 1, "text": "Je consacre peu de temps à ma vie personnelle", "value": 1 },
          { "id": 2, "text": "L'équilibre est souvent perturbé par des obligations extérieures", "value": 2 },
          { "id": 3, "text": "Nous faisons des efforts pour équilibrer nos vies respectives", "value": 3 },
          { "id": 4, "text": "Nous avons trouvé un bon équilibre entre nos vies personnelle et de couple", "value": 4 }
        ]
      },
      {
        "id": 9,
        "text": "Les relations sexuelles sont-elles satisfaisantes dans votre couple ?",
        "options": [
          { "id": 1, "text": "Nous avons peu ou pas de relations sexuelles", "value": 1 },
          { "id": 2, "text": "Les relations sexuelles ne sont pas très satisfaisantes", "value": 2 },
          { "id": 3, "text": "Les relations sexuelles sont satisfaisantes, mais il y a des hauts et des bas", "value": 3 },
          { "id": 4, "text": "Nous avons une vie sexuelle épanouie et harmonieuse", "value": 4 }
        ]
      },
      {
        "id": 10,
        "text": "Pensez-vous que votre relation peut évoluer positivement à l'avenir ?",
        "options": [
          { "id": 1, "text": "Je doute que la situation s'améliore", "value": 1 },
          { "id": 2, "text": "Je suis incertain(e) de l'avenir de notre relation", "value": 2 },
          { "id": 3, "text": "Je crois que des changements sont possibles si nous faisons des efforts", "value": 3 },
          { "id": 4, "text": "Je suis confiant(e) dans l'avenir de notre relation", "value": 4 }
        ]
      }
    ],
    "getAnalysis": (score) => {
      if (score <= 15) {
        return "Il semble que des ajustements importants soient nécessaires dans votre relation. La confiance, la communication, et l'intimité pourraient être des aspects à travailler pour renforcer votre couple.";
      } else if (score <= 25) {
        return "Votre relation montre des signes positifs, mais il y a encore des domaines à améliorer. Consacrez davantage de temps à la communication et à la compréhension mutuelle pour aller plus loin.";
      } else if (score <= 35) {
        return "Votre couple semble bien équilibré et vous avez une base solide. Continuez à nourrir cette relation en veillant à maintenir la confiance et l'harmonie.";
      } else {
        return "Félicitations ! Vous avez une relation épanouie et solide. Vous communiquez bien, partagez des moments de qualité et construisez ensemble un avenir prometteur.";
      }
    }
  },
  {
    "id": "engagement-et-attentes",
    "title": "Faire le point sur l'engagement et les attentes",
    "image": clarifier_relation,
    "description": "Ce test vous aidera à clarifier vos attentes et l'engagement dans votre relation.",
    "questions": [
      {
        "id": 1,
        "text": "Quel est votre niveau d'engagement dans cette relation ?",
        "options": [
          { "id": 1, "text": "Je ne suis pas sûr(e) de vouloir m'engager à long terme", "value": 1 },
          { "id": 2, "text": "Je suis engagé(e), mais je ressens parfois des doutes", "value": 2 },
          { "id": 3, "text": "Je suis engagé(e) et je vois cette relation comme durable", "value": 3 },
          { "id": 4, "text": "Je suis totalement engagé(e), c'est un engagement à vie", "value": 4 }
        ]
      },
      {
        "id": 2,
        "text": "Quels sont vos objectifs à long terme dans cette relation ?",
        "options": [
          { "id": 1, "text": "Je ne suis pas sûr(e) de ce que je veux pour l'avenir", "value": 1 },
          { "id": 2, "text": "Je me projette à court terme, sans trop penser à l'avenir", "value": 2 },
          { "id": 3, "text": "Je vois un avenir à deux, mais je n'ai pas tout planifié", "value": 3 },
          { "id": 4, "text": "J'ai des projets clairs à long terme et je les partage avec mon partenaire", "value": 4 }
        ]
      },
      {
        "id": 3,
        "text": "Comment décririez-vous votre niveau de satisfaction dans cette relation ?",
        "options": [
          { "id": 1, "text": "Je suis souvent insatisfait(e) et préoccupé(e)", "value": 1 },
          { "id": 2, "text": "Je ressens parfois de l'insatisfaction, mais c'est supportable", "value": 2 },
          { "id": 3, "text": "Je suis satisfait(e) dans l'ensemble, même si des améliorations sont possibles", "value": 3 },
          { "id": 4, "text": "Je suis très satisfait(e) de la relation et je me sens comblé(e)", "value": 4 }
        ]
      },
      {
        "id": 4,
        "text": "Êtes-vous prêt(e) à faire des compromis pour le bien de votre relation ?",
        "options": [
          { "id": 1, "text": "Je préfère parfois rester sur mes positions", "value": 1 },
          { "id": 2, "text": "Je suis prêt(e) à faire des compromis, mais seulement si nécessaire", "value": 2 },
          { "id": 3, "text": "Je fais des compromis pour maintenir l'harmonie", "value": 3 },
          { "id": 4, "text": "Je suis entièrement prêt(e) à faire des compromis pour le bien de la relation", "value": 4 }
        ]
      },
      {
        "id": 5,
        "text": "Votre partenaire est-il impliqué dans vos projets et décisions ?",
        "options": [
          { "id": 1, "text": "Il/elle n'est pas du tout impliqué(e)", "value": 1 },
          { "id": 2, "text": "Il/elle est impliqué(e), mais pas de manière active", "value": 2 },
          { "id": 3, "text": "Il/elle participe parfois aux décisions importantes", "value": 3 },
          { "id": 4, "text": "Il/elle est pleinement impliqué(e) dans mes projets et décisions", "value": 4 }
        ]
      },
      {
        "id": 6,
        "text": "Comment gérez-vous les désaccords concernant l'avenir de votre relation ?",
        "options": [
          { "id": 1, "text": "Les désaccords sont fréquents et difficiles à résoudre", "value": 1 },
          { "id": 2, "text": "Nous évitons les discussions sur l'avenir pour ne pas créer de tensions", "value": 2 },
          { "id": 3, "text": "Nous parlons de l'avenir, mais les compromis sont parfois difficiles", "value": 3 },
          { "id": 4, "text": "Nous avons une vision commune et nous cherchons ensemble des solutions", "value": 4 }
        ]
      },
      {
        "id": 7,
        "text": "Est-ce que vous vous sentez soutenu(e) dans vos aspirations personnelles par votre partenaire ?",
        "options": [
          { "id": 1, "text": "Je me sens rarement soutenu(e)", "value": 1 },
          { "id": 2, "text": "Parfois, mais ce n'est pas toujours évident", "value": 2 },
          { "id": 3, "text": "Je me sens globalement soutenu(e), même si des efforts sont encore nécessaires", "value": 3 },
          { "id": 4, "text": "Je me sens entièrement soutenu(e) dans mes aspirations personnelles", "value": 4 }
        ]
      },
      {
        "id": 8,
        "text": "Comment vivez-vous les moments d'incertitude dans votre relation ?",
        "options": [
          { "id": 1, "text": "Je suis très perturbé(e) et cela m'inquiète profondément", "value": 1 },
          { "id": 2, "text": "Je me sens mal à l'aise, mais j'essaie de ne pas trop y penser", "value": 2 },
          { "id": 3, "text": "Je suis capable de gérer l'incertitude, mais je préfère la clarté", "value": 3 },
          { "id": 4, "text": "Je peux gérer l'incertitude et je suis confiant(e) dans l'avenir", "value": 4 }
        ]
      },
      {
        "id": 9,
        "text": "Quelle place accordez-vous à l'amour et à la passion dans votre relation ?",
        "options": [
          { "id": 1, "text": "L'amour et la passion ne sont plus au centre de notre relation", "value": 1 },
          { "id": 2, "text": "L'amour est présent, mais la passion s'est estompée avec le temps", "value": 2 },
          { "id": 3, "text": "Il y a de l'amour et de la passion, mais ils fluctuent", "value": 3 },
          { "id": 4, "text": "L'amour et la passion sont au cœur de notre relation, et nous les cultivons régulièrement", "value": 4 }
        ]
      },
      {
        "id": 10,
        "text": "Quels sont vos besoins non satisfaits dans la relation ?",
        "options": [
          { "id": 1, "text": "Je n'ai pas de besoins insatisfaits, tout va bien", "value": 1 },
          { "id": 2, "text": "Il y a quelques besoins non satisfaits, mais ils ne sont pas cruciaux", "value": 2 },
          { "id": 3, "text": "Certains besoins sont insatisfaits et cela crée des tensions", "value": 3 },
          { "id": 4, "text": "Mes besoins sont globalement satisfaits et je me sens épanoui(e)", "value": 4 }
        ]
      }
    ],
    "getAnalysis": (score) => {
      if (score <= 15) {
        return "Il semble que votre relation traverse des moments difficiles. Il serait important de clarifier vos attentes mutuelles et de redéfinir vos objectifs pour retrouver un équilibre.";
      } else if (score <= 25) {
        return "Votre relation est en chemin vers une meilleure compréhension de vos besoins respectifs. Il est crucial de continuer à discuter ouvertement de vos attentes et à renforcer l'engagement de chacun.";
      } else if (score <= 35) {
        return "Vous êtes sur une bonne voie. Vous avez une vision commune de l'avenir et vous êtes prêts à faire des compromis pour aller de l'avant. Continuez à nourrir cette dynamique positive.";
      } else {
        return "Votre relation est très solide. Vous partagez une vision claire de l'avenir et vous êtes tous les deux pleinement engagés dans cette relation. C'est une base exceptionnelle pour l'avenir.";
      }
    }
  }    
   
];