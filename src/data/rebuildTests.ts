
import { Test } from '../types/test';
import confianceEnSoi from '../images/confianceEnSoi.avif';
import reconstruction from '../images/reconstruction.avif';
import selfEstime from '../images/selfEstime.avif';

export const rebuildTests: Test[] = [
  {
    id: 'emotional-healing',
    title: 'Où en êtes-vous dans votre guérison émotionnelle ?',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Évaluez votre processus de guérison émotionnelle post-rupture',
    questions: [
      {
        id: 1,
        text: "Comment gérez-vous les souvenirs de votre ancienne relation ?",
        options: [
          { id: 1, text: "Ils me submergent et me paralysent", value: 1 },
          { id: 2, text: "Ils me font encore beaucoup souffrir", value: 2 },
          { id: 3, text: "Je peux y penser sans trop d'émotions", value: 3 },
          { id: 4, text: "Je les accepte comme partie de mon histoire", value: 4 }
        ]
      },
      {
        id: 2,
        text: "Comment vous sentez-vous face à votre ex-partenaire ?",
        options: [
          { id: 1, text: "Je ressens beaucoup de colère/ressentiment", value: 1 },
          { id: 2, text: "Je suis encore très affecté(e)", value: 2 },
          { id: 3, text: "Je commence à être plus détaché(e)", value: 3 },
          { id: 4, text: "J'ai fait la paix avec la situation", value: 4 }
        ]
      },
      {
        id: 3,
        text: "Arrivez-vous à envisager l'avenir ?",
        options: [
          { id: 1, text: "Je ne vois pas de futur possible", value: 1 },
          { id: 2, text: "J'ai du mal à me projeter", value: 2 },
          { id: 3, text: "Je commence à faire des projets", value: 3 },
          { id: 4, text: "J'ai des projets et je suis optimiste", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Comment se passe votre vie sociale ?",
        options: [
          { id: 1, text: "Je m'isole complètement", value: 1 },
          { id: 2, text: "Je vois peu de monde", value: 2 },
          { id: 3, text: "Je recommence à sortir", value: 3 },
          { id: 4, text: "J'ai une vie sociale active", value: 4 }
        ]
      },
      {
        id: 5,
        text: "Comment gérez-vous vos émotions au quotidien ?",
        options: [
          { id: 1, text: "Je suis submergé(e) en permanence", value: 1 },
          { id: 2, text: "J'ai des hauts et des bas importants", value: 2 },
          { id: 3, text: "Je gère mieux mes émotions", value: 3 },
          { id: 4, text: "Je me sens stable émotionnellement", value: 4 }
        ]
      },
      {
        id: 6,
        text: "Que ressentez-vous face à l'idée d'une nouvelle relation ?",
        options: [
          { id: 1, text: "C'est totalement impossible", value: 1 },
          { id: 2, text: "J'ai très peur d'être blessé(e)", value: 2 },
          { id: 3, text: "Je suis ouvert(e) à cette possibilité", value: 3 },
          { id: 4, text: "Je me sens prêt(e) à aimer à nouveau", value: 4 }
        ]
      },
      {
        id: 7,
        text: "Comment vous sentez-vous par rapport à vous-même ?",
        options: [
          { id: 1, text: "Je me sens sans valeur", value: 1 },
          { id: 2, text: "J'ai du mal à me valoriser", value: 2 },
          { id: 3, text: "Je retrouve confiance en moi", value: 3 },
          { id: 4, text: "J'ai une bonne estime de moi", value: 4 }
        ]
      },
      {
        id: 8,
        text: "Comment occupez-vous votre temps libre ?",
        options: [
          { id: 1, text: "Je rumine constamment", value: 1 },
          { id: 2, text: "J'ai du mal à m'occuper", value: 2 },
          { id: 3, text: "Je développe de nouveaux intérêts", value: 3 },
          { id: 4, text: "J'ai des activités épanouissantes", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Comment dormez-vous ?",
        options: [
          { id: 1, text: "Je ne dors presque pas", value: 1 },
          { id: 2, text: "Mon sommeil est très perturbé", value: 2 },
          { id: 3, text: "Je dors mieux qu'avant", value: 3 },
          { id: 4, text: "J'ai un sommeil réparateur", value: 4 }
        ]
      },
      {
        id: 10,
        text: "Quel regard portez-vous sur votre séparation ?",
        options: [
          { id: 1, text: "C'est une catastrophe irrémédiable", value: 1 },
          { id: 2, text: "C'est encore très douloureux", value: 2 },
          { id: 3, text: "Je commence à y voir du positif", value: 3 },
          { id: 4, text: "Je la vois comme une opportunité de croissance", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 15) {
        return "Vous êtes encore dans une phase très douloureuse de votre processus de guérison. C'est normal et il est important de vous donner le temps nécessaire. N'hésitez pas à vous faire accompagner par un professionnel pour traverser cette période difficile.";
      } else if (score <= 25) {
        return "Vous avez commencé votre processus de guérison, mais il reste encore du chemin à parcourir. Continuez à prendre soin de vous et à vous entourer de personnes bienveillantes. La guérison est un processus progressif.";
      } else if (score <= 35) {
        return "Vous avez fait beaucoup de progrès dans votre guérison émotionnelle. Vous commencez à retrouver un équilibre et à envisager l'avenir plus sereinement. Continuez sur cette voie positive.";
      } else {
        return "Félicitations ! Vous avez atteint un très bon niveau de guérison émotionnelle. Vous avez su transformer cette épreuve en opportunité de croissance personnelle. Continuez à cultiver cette nouvelle harmonie.";
      }
    }
  },
  // test estime de soi
  {
    id: 'self-esteem',
    title: 'Évaluer votre propre estime',
    image: selfEstime,
    description: 'Mesurez votre niveau d\'estime personnelle après une séparation',
    questions: [
      {
        id: 1,
        text: "Quand vous faites face à un défi, vous :",
        options: [
          { id: 1, text: "Croyez en vos capacités", value: 4 },
          { id: 2, text: "Essayez, même si vous doutez", value: 3 },
          { id: 3, text: "Hésitez souvent à agir", value: 2 },
          { id: 4, text: "Évitez le défi par peur d’échouer", value: 1 }
        ]
      },
      {
        id: 2,
        text: "En général, vous vous trouvez :",
        options: [
          { id: 1, text: "Plein(e) de qualités", value: 4 },
          { id: 2, text: "Correct(e), avec des forces et des faiblesses", value: 3 },
          { id: 3, text: "Peu intéressant(e)", value: 2 },
          { id: 4, text: "Sans valeur", value: 1 }
        ]
      },
      {
        id: 3,
        text: "Quand vous recevez un compliment, vous :",
        options: [
          { id: 1, text: "L’acceptez avec gratitude", value: 4 },
          { id: 2, text: "Êtes gêné(e), mais reconnaissant(e)", value: 3 },
          { id: 3, text: "Vous demandez si c’est sincère", value: 2 },
          { id: 4, text: "Le rejetez ou pensez que c’est faux", value: 1 }
        ]
      },
      {
        id: 4,
        text: "Face aux critiques, vous :",
        options: [
          { id: 1, text: "Les prenez comme une opportunité d'apprendre", value: 4 },
          { id: 2, text: "Vous sentez touché(e), mais essayez de rester positif(ve)", value: 3 },
          { id: 3, text: "Vous sentez blessé(e)", value: 2 },
          { id: 4, text: "Les utilisez pour confirmer vos doutes sur vous-même", value: 1 }
        ]
      },
      {
        id: 5,
        text: "Vous comparez-vous souvent aux autres ?",
        options: [
          { id: 1, text: "Rarement, vous êtes unique", value: 4 },
          { id: 2, text: "Parfois, mais sans que cela vous affecte", value: 3 },
          { id: 3, text: "Souvent, avec un sentiment d’infériorité", value: 2 },
          { id: 4, text: "Constamment, et vous vous sentez toujours moins bien", value: 1 }
        ]
      },
      {
        id: 6,
        text: "Vous prenez soin de vous (physique et mental) :",
        options: [
          { id: 1, text: "Régulièrement et avec plaisir", value: 4 },
          { id: 2, text: "Quand vous en avez le temps", value: 3 },
          { id: 3, text: "Rarement", value: 2 },
          { id: 4, text: "Pas du tout", value: 1 }
        ]
      },
      {
        id: 7,
        text: "Vos décisions sont souvent :",
        options: [
          { id: 1, text: "Prises avec assurance", value: 4 },
          { id: 2, text: "Réfléchies, mais parfois hésitantes", value: 3 },
          { id: 3, text: "Dictées par la peur de mal faire", value: 2 },
          { id: 4, text: "Prises par les autres à votre place", value: 1 }
        ]
      },
      {
        id: 8,
        text: "Vous pensez que les autres :",
        options: [
          { id: 1, text: "Vous respectent et apprécient", value: 4 },
          { id: 2, text: "Vous tolèrent, mais sans plus", value: 3 },
          { id: 3, text: "Vous jugent souvent", value: 2 },
          { id: 4, text: "Vous ignorent ou vous méprisent", value: 1 }
        ]
      },
      {
        id: 9,
        text: "Lorsque vous échouez, vous :",
        options: [
          { id: 1, text: "Voyez cela comme une étape d’apprentissage", value: 4 },
          { id: 2, text: "Êtes déçu(e), mais passez vite à autre chose", value: 3 },
          { id: 3, text: "Vous en voulez longtemps", value: 2 },
          { id: 4, text: "Considérez cela comme une preuve de votre incapacité", value: 1 }
        ]
      },
      {
        id: 10,
        text: "Votre rapport à vos succès est :",
        options: [
          { id: 1, text: "Vous les célébrez pleinement", value: 4 },
          { id: 2, text: "Vous les reconnaissez, mais sans exagérer", value: 3 },
          { id: 3, text: "Vous les minimisez", value: 2 },
          { id: 4, text: "Vous pensez ne pas les mériter", value: 1 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 15) {
        return "Votre estime de vous-même est actuellement très basse. Vous pourriez ressentir un fort manque de confiance et de valeur personnelle. Il est essentiel de vous entourer de soutien bienveillant et d'envisager de travailler avec un professionnel pour retrouver confiance en vous.";
      } else if (score <= 25) {
        return "Vous êtes sur le chemin de l'amélioration, mais vous luttez encore avec des doutes sur vous-même. Prenez le temps de vous concentrer sur vos réussites et vos forces. Petit à petit, vous pouvez renforcer votre estime de vous-même.";
      } else if (score <= 35) {
        return "Votre estime personnelle est en bonne voie. Vous commencez à reconnaître vos qualités et à vous sentir plus sûr(e) de vous-même. Continuez à cultiver des pensées positives et à vous entourer d'un environnement sain et encourageant.";
      } else {
        return "Félicitations ! Vous avez une très bonne estime de vous-même. Vous êtes capable de reconnaître vos forces et vos réussites, tout en apprenant de vos défis. Continuez à nourrir cette confiance et à partager votre énergie positive autour de vous.";
      }
    }
  },
  // Etes-vous prêt pour une nouvelle relation ?
  {
    id: 'future-readiness',
    title: 'Êtes-vous prêt(e) pour une nouvelle relation ?',
    image: 'https://images.unsplash.com/photo-1522198734915-76c764a8454d?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Évaluez votre disposition à démarrer une nouvelle relation',
    questions: [
      {
        id: 1,
        text: "Quand vous pensez à votre dernière relation, vous ressentez :",
        options: [
          { id: 1, text: "Une douleur intense et non résolue", value: 1 },
          { id: 2, text: "Un mélange de tristesse et de regrets", value: 2 },
          { id: 3, text: "Une certaine acceptation, mais encore quelques doutes", value: 3 },
          { id: 4, text: "Une totale paix et compréhension de ce qui s'est passé", value: 4 }
        ]
      },
      {
        id: 2,
        text: "Comment percevez-vous les rencontres amoureuses ?",
        options: [
          { id: 1, text: "Inutile ou effrayant", value: 1 },
          { id: 2, text: "Stressant, mais potentiellement intéressant", value: 2 },
          { id: 3, text: "Comme une opportunité d’apprendre", value: 3 },
          { id: 4, text: "Excitant et enrichissant", value: 4 }
        ]
      },
      {
        id: 3,
        text: "Votre confiance en vous dans le cadre d'une relation est :",
        options: [
          { id: 1, text: "Très faible, je doute de ma valeur", value: 1 },
          { id: 2, text: "Fragile, mais je travaille dessus", value: 2 },
          { id: 3, text: "Assez bonne, je me sens capable de m'affirmer", value: 3 },
          { id: 4, text: "Solide, je me sens sûr(e) de moi", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Que pensez-vous du compromis dans une relation ?",
        options: [
          { id: 1, text: "Je crains de devoir trop me sacrifier", value: 1 },
          { id: 2, text: "Je le vois comme nécessaire, mais difficile", value: 2 },
          { id: 3, text: "C’est un équilibre à trouver ensemble", value: 3 },
          { id: 4, text: "Je le vois comme une opportunité de croissance mutuelle", value: 4 }
        ]
      },
      {
        id: 5,
        text: "Comment abordez-vous l'idée d'aimer à nouveau ?",
        options: [
          { id: 1, text: "Je ne me sens pas prêt(e) du tout", value: 1 },
          { id: 2, text: "J’ai encore des peurs et des blocages", value: 2 },
          { id: 3, text: "Je suis ouvert(e), mais avec prudence", value: 3 },
          { id: 4, text: "Je suis enthousiaste et prêt(e) à m’investir", value: 4 }
        ]
      },
      {
        id: 6,
        text: "Quel est votre état d'esprit actuel ?",
        options: [
          { id: 1, text: "Je suis encore accablé(e) par mon passé", value: 1 },
          { id: 2, text: "J'ai encore quelques bagages émotionnels", value: 2 },
          { id: 3, text: "Je me sens en grande partie libéré(e)", value: 3 },
          { id: 4, text: "Je suis dans un état d'esprit positif et ouvert", value: 4 }
        ]
      },
      {
        id: 7,
        text: "Comment gérez-vous les conflits dans une relation ?",
        options: [
          { id: 1, text: "Je les évite ou je me renferme", value: 1 },
          { id: 2, text: "J’ai tendance à réagir de manière émotive", value: 2 },
          { id: 3, text: "Je cherche à communiquer et à comprendre", value: 3 },
          { id: 4, text: "Je suis à l’aise pour gérer les désaccords constructivement", value: 4 }
        ]
      },
      {
        id: 8,
        text: "Que ressentez-vous à l'idée de partager votre quotidien avec quelqu'un ?",
        options: [
          { id: 1, text: "C’est impensable pour le moment", value: 1 },
          { id: 2, text: "Cela me stresse ou m’intimide", value: 2 },
          { id: 3, text: "Cela m’intéresse, mais avec prudence", value: 3 },
          { id: 4, text: "C’est quelque chose que j’attends avec impatience", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Votre vision de l'engagement est :",
        options: [
          { id: 1, text: "Je crains de perdre ma liberté", value: 1 },
          { id: 2, text: "Cela m’inquiète un peu, mais je suis ouvert(e)", value: 2 },
          { id: 3, text: "C’est important, mais pas une contrainte", value: 3 },
          { id: 4, text: "C’est un aspect naturel et enrichissant de la vie", value: 4 }
        ]
      },
      {
        id: 10,
        text: "Quel est votre état émotionnel actuel ?",
        options: [
          { id: 1, text: "Je suis encore très vulnérable", value: 1 },
          { id: 2, text: "Je suis en train de guérir", value: 2 },
          { id: 3, text: "Je me sens en paix avec moi-même", value: 3 },
          { id: 4, text: "Je me sens fort(e) et confiant(e)", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 15) {
        return "Vous n’êtes pas encore prêt(e) pour une nouvelle relation. Prenez le temps de guérir et de travailler sur vous-même avant de vous engager à nouveau.";
      } else if (score <= 25) {
        return "Vous commencez à envisager une nouvelle relation, mais vous avez encore des blessures ou des peurs à surmonter. Continuez à avancer à votre rythme.";
      } else if (score <= 35) {
        return "Vous êtes presque prêt(e) pour une nouvelle relation. Vous avez fait beaucoup de progrès et êtes sur la bonne voie pour aimer et être aimé(e) à nouveau.";
      } else {
        return "Félicitations ! Vous êtes prêt(e) à accueillir une nouvelle relation dans votre vie. Vous êtes dans un bon état d’esprit pour partager et construire quelque chose de nouveau.";
      }
    }
  },
  {
    id: "confiance-en-soi-separation",
    title: "Retrouver la confiance en soi après une séparation",
    image: confianceEnSoi,
    description: "Évaluez dans quelle mesure vous avez retrouvé confiance en vous après la séparation.",
    questions: [
      {
        id: 1,
        text: "Comment percevez-vous votre valeur personnelle après la rupture ?",
        options: [
          { id: 1, text: "Je me sens inutil(e) et sans valeur", value: 1 },
          { id: 2, text: "Je doute de ma valeur mais je fais de mon mieux", value: 2 },
          { id: 3, text: "Je commence à redécouvrir mes forces", value: 3 },
          { id: 4, text: "Je sais que ma valeur est intacte et je me sens bien", value: 4 }
        ]
      },
      {
        id: 2,
        text: "Avez-vous déjà retrouvé de l'estime pour vous-même ?",
        options: [
          { id: 1, text: "Non, je me sens toujours comme un échec", value: 1 },
          { id: 2, text: "Parfois, mais je n'ai pas encore confiance en moi", value: 2 },
          { id: 3, text: "Je commence à mieux me comprendre et à m'accepter", value: 3 },
          { id: 4, text: "Oui, je suis fier(e) de moi et j'apprécie ce que je suis devenu(e)", value: 4 }
        ]
      },
      {
        id: 3,
        text: "À quel point vous sentez-vous capable d'aimer à nouveau ?",
        options: [
          { id: 1, text: "Je doute que je sois capable d'aimer à nouveau", value: 1 },
          { id: 2, text: "Je pense que je peux aimer, mais cela prendra du temps", value: 2 },
          { id: 3, text: "Je suis ouvert(e) à l'idée, mais je reste prudent(e)", value: 3 },
          { id: 4, text: "Je suis prêt(e) à aimer à nouveau et à donner confiance", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Comment gérez-vous les situations où vous vous sentez rejeté(e) ?",
        options: [
          { id: 1, text: "Je me sens anéanti(e) et incapable de rebondir", value: 1 },
          { id: 2, text: "Je le prends mal, mais j'essaie de surmonter mes émotions", value: 2 },
          { id: 3, text: "Je l'accepte, mais cela me fait réfléchir sur ce que je dois améliorer", value: 3 },
          { id: 4, text: "Je gère ces situations avec sérénité et apprends de mes erreurs", value: 4 }
        ]
      },
      {
        id: 5,
        text: "Quel est votre état d'esprit global depuis la rupture ?",
        options: [
          { id: 1, text: "Je suis perdu(e), je me sens sans repères", value: 1 },
          { id: 2, text: "Je suis déçu(e) et hésitant(e), mais je cherche à avancer", value: 2 },
          { id: 3, text: "Je commence à voir les choses sous un angle plus positif", value: 3 },
          { id: 4, text: "Je me sens prêt(e) à avancer et à saisir les opportunités de l'avenir", value: 4 }
        ]
      },
      {
        id: 6,
        text: "Avez-vous l'impression de vous redécouvrir depuis la rupture ?",
        options: [
          { id: 1, text: "Non, je me sens toujours comme avant", value: 1 },
          { id: 2, text: "Je commence à remarquer quelques changements chez moi", value: 2 },
          { id: 3, text: "Je me redécouvre petit à petit et j'apprécie cette évolution", value: 3 },
          { id: 4, text: "Oui, je suis devenu(e) une personne plus forte et plus épanouie", value: 4 }
        ]
      },
      {
        id: 7,
        text: "Comment réagissez-vous face aux défis après la séparation ?",
        options: [
          { id: 1, text: "Je me sens accablé(e) et je pense ne pas pouvoir y faire face", value: 1 },
          { id: 2, text: "Je me sens parfois dépassé(e), mais je continue d'avancer", value: 2 },
          { id: 3, text: "Je relève les défis avec courage, même si c'est difficile", value: 3 },
          { id: 4, text: "Je suis confiant(e) et je trouve des solutions pour surmonter les défis", value: 4 }
        ]
      },
      {
        id: 8,
        text: "Avez-vous des projets personnels qui vous motivent après la rupture ?",
        options: [
          { id: 1, text: "Non, je ne me sens pas prêt(e) à penser à l'avenir", value: 1 },
          { id: 2, text: "J'ai quelques idées, mais rien de concret pour le moment", value: 2 },
          { id: 3, text: "J'ai des projets en tête, mais j'ai encore des doutes", value: 3 },
          { id: 4, text: "Oui, j'ai plusieurs projets motivants et j'ai hâte de les réaliser", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Comment décririez-vous votre capacité à prendre soin de vous aujourd'hui ?",
        options: [
          { id: 1, text: "Je néglige ma santé mentale et physique", value: 1 },
          { id: 2, text: "Je fais quelques efforts, mais ce n'est pas constant", value: 2 },
          { id: 3, text: "Je prends soin de moi régulièrement, mais je pourrais faire mieux", value: 3 },
          { id: 4, text: "Je suis très attentif(ve) à ma santé et je prends soin de mon bien-être", value: 4 }
        ]
      },
      {
        id: 10,
        text: "Vous sentez-vous prêt(e) à entrer dans une nouvelle relation amoureuse ?",
        options: [
          { id: 1, text: "Non, je ne me sens pas prêt(e) du tout", value: 1 },
          { id: 2, text: "Pas pour l'instant, mais peut-être un jour", value: 2 },
          { id: 3, text: "Je suis ouvert(e) à une nouvelle relation, mais je reste prudent(e)", value: 3 },
          { id: 4, text: "Oui, je me sens prêt(e) à aimer à nouveau et à donner ma confiance", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 15) {
        return "Vous êtes encore dans une phase difficile après la rupture. Vous devez prendre plus de temps pour retrouver confiance en vous. Il est important de vous entourer de personnes bienveillantes et de prendre soin de vous.";
      } else if (score <= 25) {
        return "Vous êtes en voie de retrouver la confiance en vous, mais cela prend encore du temps. Soyez patient(e) et continuez à vous entourer de personnes positives et bienveillantes.";
      } else if (score <= 35) {
        return "Votre confiance en vous est en nette progression. Vous avez bien avancé dans votre processus de reconstruction et vous vous sentez plus fort(e) et prêt(e) pour l'avenir.";
      } else {
        return "Félicitations ! Vous avez retrouvé une grande confiance en vous et êtes prêt(e) à avancer dans votre vie avec sérénité. Vous avez tiré des leçons positives de cette expérience et êtes prêt(e) à accueillir de nouvelles opportunités.";
      }
    }
  },
  {
    id: "reconstruction-apres-separation",
    title: "Se reconstruire après une séparation",
    image: reconstruction,
    description: "Évaluez dans quelle mesure vous êtes sur la voie de la reconstruction après votre séparation.",
    questions: [
      {
        id: 1,
        text: "Comment vous sentez-vous vis-à-vis de la séparation ?",
        options: [
          { id: 1, text: "Je me sens perdu(e), je n'arrive pas à tourner la page", value: 1 },
          { id: 2, text: "Je me sens triste, mais je tente d'aller de l'avant", value: 2 },
          { id: 3, text: "Je me sens prêt(e) à passer à autre chose", value: 3 },
          { id: 4, text: "Je suis libéré(e) et déjà tourné(e) vers l'avenir", value: 4 }
        ]
      },
      {
        id: 2,
        text: "Comment percevez-vous votre capacité à faire face à cette épreuve ?",
        options: [
          { id: 1, text: "Je doute de mes capacités à m'en sortir", value: 1 },
          { id: 2, text: "Je lutte, mais je fais des efforts pour avancer", value: 2 },
          { id: 3, text: "Je me sens de plus en plus fort(e) face à cette situation", value: 3 },
          { id: 4, text: "Je suis prêt(e) à relever ce défi et à en sortir grand(e)", value: 4 }
        ]
      },
      {
        id: 3,
        text: "Avez-vous l'impression d'avoir changé depuis la séparation ?",
        options: [
          { id: 1, text: "Je me sens toujours comme avant, sans évolution", value: 1 },
          { id: 2, text: "J'ai commencé à changer, mais c'est difficile", value: 2 },
          { id: 3, text: "Je vois des changements positifs chez moi", value: 3 },
          { id: 4, text: "Oui, je suis devenu(e) une personne plus forte et épanouie", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Comment vous sentez-vous par rapport à vos émotions ?",
        options: [
          { id: 1, text: "Je me sens complètement englouti(e) par mes émotions", value: 1 },
          { id: 2, text: "Je commence à mieux gérer mes émotions, mais c'est compliqué", value: 2 },
          { id: 3, text: "Je gère mes émotions de manière assez stable", value: 3 },
          { id: 4, text: "Je suis en harmonie avec mes émotions et je les accepte pleinement", value: 4 }
        ]
      },
      {
        id: 5,
        text: "Avez-vous l'impression d'avoir retrouvé votre équilibre ?",
        options: [
          { id: 1, text: "Non, je me sens toujours déséquilibré(e)", value: 1 },
          { id: 2, text: "Je cherche encore à retrouver un équilibre", value: 2 },
          { id: 3, text: "Je commence à sentir un certain équilibre dans ma vie", value: 3 },
          { id: 4, text: "Oui, je me sens stable et bien dans ma peau", value: 4 }
        ]
      },
      {
        id: 6,
        text: "Comment avez-vous réagi face aux difficultés post-séparation ?",
        options: [
          { id: 1, text: "J'ai eu du mal à faire face, je me sens accablé(e)", value: 1 },
          { id: 2, text: "J'ai surmonté certaines difficultés, mais c'est encore difficile", value: 2 },
          { id: 3, text: "J'ai trouvé des moyens pour surmonter les obstacles", value: 3 },
          { id: 4, text: "Je fais face aux défis avec confiance et sérénité", value: 4 }
        ]
      },
      {
        id: 7,
        text: "Dans quelle mesure êtes-vous ouvert(e) à l'idée de nouvelles relations ?",
        options: [
          { id: 1, text: "Je ne pense pas pouvoir m'engager à nouveau", value: 1 },
          { id: 2, text: "Je suis encore hésitant(e), mais j'y pense parfois", value: 2 },
          { id: 3, text: "Je suis ouvert(e) à de nouvelles rencontres, mais je reste prudent(e)", value: 3 },
          { id: 4, text: "Je suis prêt(e) à vivre une nouvelle histoire amoureuse", value: 4 }
        ]
      },
      {
        id: 8,
        text: "Comment avez-vous géré le soutien des autres après la rupture ?",
        options: [
          { id: 1, text: "Je n'ai pas cherché de soutien, je me suis refermé(e) sur moi-même", value: 1 },
          { id: 2, text: "J'ai accepté un peu de soutien, mais j'ai du mal à ouvrir mon cœur", value: 2 },
          { id: 3, text: "J'ai trouvé du soutien auprès de mes proches, mais je reste prudent(e)", value: 3 },
          { id: 4, text: "J'ai accepté le soutien et je me sens entouré(e) et soutenu(e)", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Avez-vous des projets personnels qui vous motivent après la rupture ?",
        options: [
          { id: 1, text: "Je n'ai aucun projet, je me sens perdu(e)", value: 1 },
          { id: 2, text: "Je commence à avoir quelques idées, mais rien de concret", value: 2 },
          { id: 3, text: "J'ai des projets en tête et je commence à les concrétiser", value: 3 },
          { id: 4, text: "Oui, je suis très motivé(e) par plusieurs projets qui me tiennent à cœur", value: 4 }
        ]
      },
      {
        id: 10,
        text: "Comment décririez-vous votre niveau de bonheur actuel ?",
        options: [
          { id: 1, text: "Je me sens malheureux(se) et démoralisé(e)", value: 1 },
          { id: 2, text: "Je me sens parfois heureux(se), mais souvent triste", value: 2 },
          { id: 3, text: "Je commence à retrouver des moments de bonheur dans ma vie", value: 3 },
          { id: 4, text: "Je suis épanoui(e) et heureux(se) de ma vie actuelle", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 15) {
        return "Vous êtes dans une phase de grande difficulté après la séparation. Il est important de prendre du temps pour vous et de ne pas hésiter à demander du soutien extérieur, comme un accompagnement psychologique.";
      } else if (score <= 25) {
        return "Vous êtes en train de vous reconstruire, mais il vous reste encore du travail. Soyez patient(e) avec vous-même et continuez à vous entourer de personnes qui vous soutiennent.";
      } else if (score <= 35) {
        return "Vous avez fait de réels progrès et vous commencez à vous sentir plus stable. Continuez à avancer dans cette direction et à renforcer votre bien-être personnel.";
      } else {
        return "Vous êtes sur la voie de la guérison. Votre force et votre résilience sont évidentes, et vous êtes prêt(e) à aborder l'avenir avec confiance.";
      }
    }
  }
  
      
];
