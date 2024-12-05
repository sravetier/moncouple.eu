import { Test } from '../types/test';
import bienEtreEmotionnel from '../images/bienEtreEmotionnel.jpg';
import relationsSociales from '../images/relationsSociales.avif';
import motivation from '../images/motivation.avif';

//script qui reprend tout les tests de la page assesments(faire le point)
// partie  "Faire le point sur moi-même"
export const personalTests: Test[] = [

  {
    id: 'bien-etre-emotionnel',
    title: "Mon bien-être émotionnel",
    image: bienEtreEmotionnel,
    description: "Explorez votre rapport avec vos émotions et votre équilibre intérieur.",
    questions: [
      {
        id: 1,
        text: "Comment réagissez-vous face à des situations stressantes ?",
        options: [
          { id: 1, text: "Je me sens souvent débordé(e) et j’ai du mal à gérer mes émotions", value: 1 },
          { id: 2, text: "Je parviens à gérer partiellement le stress, mais cela reste difficile", value: 2 },
          { id: 3, text: "Je fais de mon mieux pour garder mon calme et gérer le stress efficacement", value: 3 },
          { id: 4, text: "Je reste serein(e) et trouve rapidement des solutions pour réduire mon stress", value: 4 }
        ]
      },
      {
        id: 2,
        text: "À quelle fréquence prenez-vous le temps de réfléchir à vos émotions et de les comprendre ?",
        options: [
          { id: 1, text: "Je n’y réfléchis presque jamais et évite d’y penser", value: 1 },
          { id: 2, text: "Je prends conscience de mes émotions de temps en temps, mais pas souvent", value: 2 },
          { id: 3, text: "Je prends régulièrement le temps d’analyser mes émotions pour mieux les comprendre", value: 3 },
          { id: 4, text: "J’examine souvent mes émotions en profondeur et je cherche à en tirer des enseignements", value: 4 }
        ]
      },
      {
        id: 3,
        text: "Comment décririez-vous votre capacité à exprimer vos émotions aux autres ?",
        options: [
          { id: 1, text: "Je garde mes émotions pour moi et j’ai du mal à les partager", value: 1 },
          { id: 2, text: "J’exprime mes émotions seulement quand cela devient nécessaire", value: 2 },
          { id: 3, text: "J’exprime mes émotions de manière claire et sincère dans la plupart des situations", value: 3 },
          { id: 4, text: "Je partage facilement et naturellement mes émotions, même dans les moments difficiles", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Comment faites-vous face à des émotions négatives comme la tristesse ou la colère ?",
        options: [
          { id: 1, text: "Je me laisse souvent submerger par ces émotions", value: 1 },
          { id: 2, text: "J’essaie de les ignorer ou de les repousser, mais elles finissent par me rattraper", value: 2 },
          { id: 3, text: "Je reconnais ces émotions et je cherche des moyens de les apaiser", value: 3 },
          { id: 4, text: "Je les accueille comme une part normale de ma vie et je sais comment les transformer positivement", value: 4 }
        ]
      },
      {
        id: 5,
        text: "Comment évaluez-vous votre capacité à ressentir et à profiter des émotions positives ?",
        options: [
          { id: 1, text: "Je ressens rarement des émotions positives et j’ai du mal à en profiter", value: 1 },
          { id: 2, text: "Je ressens des moments de bonheur, mais ils sont souvent fugaces", value: 2 },
          { id: 3, text: "Je ressens régulièrement des émotions positives et j’en profite pleinement", value: 3 },
          { id: 4, text: "Je m’efforce activement de cultiver des émotions positives dans ma vie quotidienne", value: 4 }
        ]
      },
      {
        id: 6,
        text: "Quelle importance accordez-vous à votre équilibre émotionnel dans votre vie quotidienne ?",
        options: [
          { id: 1, text: "Je n’y accorde presque pas d’attention", value: 1 },
          { id: 2, text: "J’y pense parfois, mais ce n’est pas une priorité", value: 2 },
          { id: 3, text: "Je considère que c’est un aspect important et je fais des efforts pour l’entretenir", value: 3 },
          { id: 4, text: "C’est une priorité absolue pour moi et je travaille constamment à maintenir mon équilibre", value: 4 }
        ]
      },
      {
        id: 7,
        text: "Comment gérez-vous les relations ou situations qui affectent votre bien-être émotionnel ?",
        options: [
          { id: 1, text: "Je les laisse souvent impacter mon moral de manière importante", value: 1 },
          { id: 2, text: "J’essaie de les gérer, mais elles affectent parfois profondément mon bien-être", value: 2 },
          { id: 3, text: "Je prends des mesures pour minimiser leur impact sur mon équilibre émotionnel", value: 3 },
          { id: 4, text: "Je me protège activement de ces influences et je privilégie mon bien-être avant tout", value: 4 }
        ]
      },
      {
        id: 8,
        text: "À quel point êtes-vous capable de pardonner aux autres (et à vous-même) pour des erreurs passées ?",
        options: [
          { id: 1, text: "Je trouve cela extrêmement difficile et je ressens souvent du ressentiment", value: 1 },
          { id: 2, text: "Je pardonne parfois, mais cela me demande un effort considérable", value: 2 },
          { id: 3, text: "Je parviens généralement à pardonner pour tourner la page", value: 3 },
          { id: 4, text: "Je pardonne facilement et je vois cela comme un moyen de libérer mon esprit", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Quelle est votre relation avec vous-même en termes de compassion et d’auto-critique ?",
        options: [
          { id: 1, text: "Je suis très critique envers moi-même et je manque souvent de compassion", value: 1 },
          { id: 2, text: "J’essaie d’être indulgent(e) avec moi-même, mais c’est un défi", value: 2 },
          { id: 3, text: "Je suis généralement compatissant(e) envers moi-même, même dans les moments difficiles", value: 3 },
          { id: 4, text: "Je me traite toujours avec bienveillance et compréhension, quelles que soient les circonstances", value: 4 }
        ]
      },
      {
        id: 10,
        text: "À quel point votre bien-être émotionnel vous permet-il de vous sentir en paix avec vous-même ?",
        options: [
          { id: 1, text: "Je ressens souvent des conflits intérieurs ou un manque de sérénité", value: 1 },
          { id: 2, text: "Je trouve parfois des moments de paix, mais ils sont rares", value: 2 },
          { id: 3, text: "Je ressens fréquemment un sentiment de paix intérieure", value: 3 },
          { id: 4, text: "Je suis pleinement en paix avec moi-même et ma vie émotionnelle", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 17) {
        return "Votre bien-être émotionnel semble fragile. Essayez d’explorer des pratiques comme la méditation ou de demander du soutien pour renforcer votre équilibre.";
      } else if (score <= 30) {
        return "Votre bien-être émotionnel est satisfaisant, mais il pourrait être davantage nourri pour vous offrir un meilleur équilibre.";
      } else if (score <= 37) {
        return "Votre bien-être émotionnel est bon. Continuez à prendre soin de vous et à cultiver votre sérénité intérieure.";
      } else {
        return "Votre bien-être émotionnel est remarquable ! Vous êtes un exemple de résilience et d’équilibre intérieur.";
      }
    }
  },  
  {
    id: 'objectifs-de-vie',
    title: "Mes objectifs de vie",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Découvrez à quel point vos objectifs de vie sont clairs et alignés avec vos valeurs.",
    questions: [
      {
        id: 1,
        text: "Avez-vous une vision claire de ce que vous voulez accomplir dans la vie ?",
        options: [
          { id: 1, text: "Pas du tout", value: 1 },
          { id: 2, text: "Un peu", value: 2 },
          { id: 3, text: "Oui, dans une certaine mesure", value: 3 },
          { id: 4, text: "Oui, parfaitement", value: 4 }
        ]
      },
      {
        id: 2,
        text: "À quel point vos objectifs sont-ils alignés avec vos valeurs personnelles ?",
        options: [
          { id: 1, text: "Ils ne le sont pas du tout", value: 1 },
          { id: 2, text: "Ils le sont parfois", value: 2 },
          { id: 3, text: "Ils le sont souvent", value: 3 },
          { id: 4, text: "Ils le sont complètement", value: 4 }
        ]
      },
      {
        id: 3,
        text: "Combien de temps consacrez-vous chaque semaine à travailler sur vos objectifs de vie ?",
        options: [
          { id: 1, text: "Pas du tout", value: 1 },
          { id: 2, text: "Quelques heures", value: 2 },
          { id: 3, text: "Un temps modéré", value: 3 },
          { id: 4, text: "Beaucoup de temps", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Comment gérez-vous les obstacles qui vous empêchent de progresser ?",
        options: [
          { id: 1, text: "Je me sens bloqué(e)", value: 1 },
          { id: 2, text: "J'essaie parfois mais abandonne", value: 2 },
          { id: 3, text: "Je trouve souvent des solutions", value: 3 },
          { id: 4, text: "Je surmonte presque toujours les défis", value: 4 }
        ]
      },
      {
        id: 5,
        text: "À quelle fréquence ajustez-vous vos objectifs pour qu'ils restent pertinents ?",
        options: [
          { id: 1, text: "Jamais", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "Parfois", value: 3 },
          { id: 4, text: "Régulièrement", value: 4 }
        ]
      },
      {
        id: 6,
        text: "Vos objectifs incluent-ils un équilibre entre vie personnelle et professionnelle ?",
        options: [
          { id: 1, text: "Pas du tout", value: 1 },
          { id: 2, text: "Très peu", value: 2 },
          { id: 3, text: "Plutôt bien", value: 3 },
          { id: 4, text: "Parfaitement", value: 4 }
        ]
      },
      {
        id: 7,
        text: "À quel point êtes-vous motivé(e) par vos objectifs ?",
        options: [
          { id: 1, text: "Pas du tout", value: 1 },
          { id: 2, text: "Un peu", value: 2 },
          { id: 3, text: "Assez motivé(e)", value: 3 },
          { id: 4, text: "Très motivé(e)", value: 4 }
        ]
      },
      {
        id: 8,
        text: "Estimez-vous que vos objectifs sont réalistes et atteignables ?",
        options: [
          { id: 1, text: "Pas réalistes du tout", value: 1 },
          { id: 2, text: "Peu réalistes", value: 2 },
          { id: 3, text: "Assez réalistes", value: 3 },
          { id: 4, text: "Totalement réalistes", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Éprouvez-vous de la satisfaction lorsque vous atteignez vos objectifs ?",
        options: [
          { id: 1, text: "Jamais", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "Souvent", value: 3 },
          { id: 4, text: "Toujours", value: 4 }
        ]
      },
      {
        id: 10,
        text: "À quel point tenez-vous compte de l'impact de vos objectifs sur les autres ?",
        options: [
          { id: 1, text: "Jamais", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "Souvent", value: 3 },
          { id: 4, text: "Toujours", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 17) {
        return "Vos objectifs de vie semblent peu définis. Essayez de clarifier ce qui est important pour vous.";
      } else if (score <= 30) {
        return "Vous avez des objectifs, mais ils pourraient être mieux structurés ou alignés avec vos valeurs.";
      } else if (score <= 37) {
        return "Vous avez une bonne idée de vos objectifs de vie et travaillez à les atteindre. Continuez à les affiner.";
      } else {
        return "Vos objectifs de vie sont clairs, alignés et bien gérés. Vous êtes sur une excellente voie pour accomplir vos aspirations.";
      }
    }
  },  
  {
    id: 'besoins-emotionnels',
    title: "Besoins émotionnels",
    image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Identifiez à quel point vous comprenez et prenez soin de vos besoins émotionnels.",
    questions: [
      {
        id: 1,
        text: "À quelle fréquence prenez-vous du temps pour vous connecter avec vos émotions ?",
        options: [
          { id: 1, text: "Presque jamais", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "Souvent", value: 3 },
          { id: 4, text: "Très régulièrement", value: 4 }
        ]
      },
      {
        id: 2,
        text: "Vous sentez-vous compris(e) et soutenu(e) par les autres ?",
        options: [
          { id: 1, text: "Pas du tout", value: 1 },
          { id: 2, text: "Parfois", value: 2 },
          { id: 3, text: "Souvent", value: 3 },
          { id: 4, text: "Presque toujours", value: 4 }
        ]
      },
      {
        id: 3,
        text: "À quel point exprimez-vous vos besoins émotionnels à vos proches ?",
        options: [
          { id: 1, text: "Jamais", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "Souvent", value: 3 },
          { id: 4, text: "Toujours", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Comment gérez-vous vos émotions lorsque vous vous sentez submergé(e) ?",
        options: [
          { id: 1, text: "Je les ignore", value: 1 },
          { id: 2, text: "J'ai du mal à les gérer", value: 2 },
          { id: 3, text: "Je fais des efforts pour les comprendre", value: 3 },
          { id: 4, text: "Je trouve toujours un moyen de les apaiser", value: 4 }
        ]
      },
      {
        id: 5,
        text: "Vous sentez-vous capable d'identifier ce qui vous rend heureux(se) ou malheureux(se) ?",
        options: [
          { id: 1, text: "Pas vraiment", value: 1 },
          { id: 2, text: "Parfois", value: 2 },
          { id: 3, text: "Souvent", value: 3 },
          { id: 4, text: "Toujours", value: 4 }
        ]
      },
      {
        id: 6,
        text: "Prenez-vous le temps de vous pardonner ou de pardonner aux autres ?",
        options: [
          { id: 1, text: "Jamais", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "Souvent", value: 3 },
          { id: 4, text: "Toujours", value: 4 }
        ]
      },
      {
        id: 7,
        text: "À quel point êtes-vous à l’aise avec la vulnérabilité émotionnelle ?",
        options: [
          { id: 1, text: "Pas du tout", value: 1 },
          { id: 2, text: "Un peu", value: 2 },
          { id: 3, text: "Assez à l'aise", value: 3 },
          { id: 4, text: "Très à l'aise", value: 4 }
        ]
      },
      {
        id: 8,
        text: "À quelle fréquence ressentez-vous de la gratitude dans votre vie quotidienne ?",
        options: [
          { id: 1, text: "Jamais", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "Souvent", value: 3 },
          { id: 4, text: "Très fréquemment", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Comment évaluez-vous votre capacité à gérer des conflits émotionnels ?",
        options: [
          { id: 1, text: "Très faible", value: 1 },
          { id: 2, text: "Faible", value: 2 },
          { id: 3, text: "Bonne", value: 3 },
          { id: 4, text: "Excellente", value: 4 }
        ]
      },
      {
        id: 10,
        text: "Vous sentez-vous émotionnellement équilibré(e) la plupart du temps ?",
        options: [
          { id: 1, text: "Jamais", value: 1 },
          { id: 2, text: "Rarement", value: 2 },
          { id: 3, text: "Souvent", value: 3 },
          { id: 4, text: "Presque toujours", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 17) {
        return "Vous pourriez mieux comprendre et prendre soin de vos besoins émotionnels. Essayez de vous écouter davantage.";
      } else if (score <= 30) {
        return "Vous comprenez partiellement vos besoins émotionnels, mais un travail supplémentaire pourrait être bénéfique.";
      } else if (score <= 37) {
        return "Vous êtes à l'écoute de vos émotions et de vos besoins. Continuez à cultiver cette connexion.";
      } else {
        return "Vous avez une excellente compréhension de vos besoins émotionnels et prenez soin de vous avec attention.";
      }
    }
  },  
  {
    id: 'relations-sociales',
    title: "Mes relations sociales",
    image: relationsSociales,
    description: "Découvrez comment vous percevez et entretenez vos relations avec les autres.",
    questions: [
      {
        id: 1,
        text: "À quel point êtes-vous satisfait(e) de la qualité de vos relations actuelles ?",
        options: [
          { id: 1, text: "Je ressens souvent un vide ou une insatisfaction dans mes relations", value: 1 },
          { id: 2, text: "Je suis satisfait(e) de certaines relations, mais d'autres me laissent perplexe", value: 2 },
          { id: 3, text: "Dans l'ensemble, mes relations sont positives et m'apportent de la satisfaction", value: 3 },
          { id: 4, text: "Mes relations sont une source constante de bonheur et de soutien", value: 4 }
        ]
      },
      {
        id: 2,
        text: "À quelle fréquence prenez-vous des nouvelles de vos amis ou de votre famille ?",
        options: [
          { id: 1, text: "Je ne ressens pas le besoin de prendre contact avec mes proches", value: 1 },
          { id: 2, text: "Je prends parfois des nouvelles, mais je pourrais être plus régulier(ère)", value: 2 },
          { id: 3, text: "Je m'efforce de maintenir un contact régulier avec mes proches", value: 3 },
          { id: 4, text: "Je prends fréquemment des nouvelles pour rester proche de mes amis et ma famille", value: 4 }
        ]
      },
      {
        id: 3,
        text: "Vous sentez-vous soutenu(e) par votre cercle social en cas de besoin ?",
        options: [
          { id: 1, text: "Je me sens souvent seul(e) ou sans soutien", value: 1 },
          { id: 2, text: "J'ai parfois du soutien, mais pas toujours quand j'en ai besoin", value: 2 },
          { id: 3, text: "Je reçois du soutien dans la plupart des situations importantes", value: 3 },
          { id: 4, text: "Je sais que je peux compter sur mon entourage à tout moment", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Comment gérez-vous les conflits dans vos relations sociales ?",
        options: [
          { id: 1, text: "J'ai tendance à fuir ou éviter les conflits", value: 1 },
          { id: 2, text: "Je m'efforce parfois de résoudre les conflits, mais cela reste difficile", value: 2 },
          { id: 3, text: "Je prends le temps de discuter et de trouver des solutions avec les autres", value: 3 },
          { id: 4, text: "Je suis généralement capable de gérer les conflits de manière constructive et efficace", value: 4 }
        ]
      },
      {
        id: 5,
        text: "Estimez-vous que vos relations sont équilibrées (donner et recevoir de manière équitable) ?",
        options: [
          { id: 1, text: "Je donne beaucoup plus que ce que je reçois", value: 1 },
          { id: 2, text: "Il y a parfois un déséquilibre, mais cela ne me dérange pas", value: 2 },
          { id: 3, text: "La plupart de mes relations sont assez équilibrées", value: 3 },
          { id: 4, text: "Mes relations sont toujours basées sur un partage mutuel équitable", value: 4 }
        ]
      },
      {
        id: 6,
        text: "À quel point êtes-vous ouvert(e) à rencontrer de nouvelles personnes ?",
        options: [
          { id: 1, text: "Je n'éprouve aucun intérêt à rencontrer de nouvelles personnes", value: 1 },
          { id: 2, text: "Je suis parfois ouvert(e), mais cela demande un effort", value: 2 },
          { id: 3, text: "J'apprécie les opportunités de rencontre et j'essaie d'être accessible", value: 3 },
          { id: 4, text: "Je suis enthousiaste et actif(ve) dans ma recherche de nouvelles relations", value: 4 }
        ]
      },
      {
        id: 7,
        text: "À quelle fréquence exprimez-vous votre gratitude ou votre affection envers vos proches ?",
        options: [
          { id: 1, text: "Je n'exprime presque jamais ma gratitude ou mon affection", value: 1 },
          { id: 2, text: "J'exprime mes sentiments lorsque l'occasion se présente, mais pas souvent", value: 2 },
          { id: 3, text: "Je fais un effort conscient pour montrer ma gratitude et mon affection régulièrement", value: 3 },
          { id: 4, text: "J'exprime fréquemment ma gratitude et mon amour de manière naturelle", value: 4 }
        ]
      },
      {
        id: 8,
        text: "Vous sentez-vous à l’aise pour demander de l’aide ou du soutien à vos proches ?",
        options: [
          { id: 1, text: "Je trouve cela extrêmement difficile et j'évite de demander de l'aide", value: 1 },
          { id: 2, text: "Je demande parfois de l'aide, mais avec hésitation", value: 2 },
          { id: 3, text: "Je suis capable de demander de l'aide à mes proches quand j'en ai besoin", value: 3 },
          { id: 4, text: "Je n'ai aucune difficulté à solliciter le soutien de mes proches", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Vos relations sociales vous procurent-elles du bonheur et du bien-être ?",
        options: [
          { id: 1, text: "Elles sont souvent une source de frustration ou de stress", value: 1 },
          { id: 2, text: "Elles me procurent parfois du bonheur, mais ce n'est pas constant", value: 2 },
          { id: 3, text: "Dans l'ensemble, elles contribuent positivement à mon bien-être", value: 3 },
          { id: 4, text: "Mes relations sociales sont une source majeure de bonheur et d'épanouissement", value: 4 }
        ]
      },
      {
        id: 10,
        text: "Vos relations sociales vous inspirent-elles à devenir une meilleure version de vous-même ?",
        options: [
          { id: 1, text: "Pas du tout, elles ne me poussent pas à évoluer", value: 1 },
          { id: 2, text: "Parfois, mais ce n'est pas une influence forte", value: 2 },
          { id: 3, text: "Oui, mes relations m'encouragent souvent à m'améliorer", value: 3 },
          { id: 4, text: "Absolument, mes relations m'inspirent profondément à évoluer positivement", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 17) {
        return "Vos relations sociales semblent limitées ou insatisfaisantes. Essayez d'explorer des moyens de les enrichir.";
      } else if (score <= 30) {
        return "Vos relations sociales sont fonctionnelles, mais elles pourraient bénéficier de plus d'attention ou de profondeur.";
      } else if (score <= 37) {
        return "Vous avez de bonnes relations sociales. Continuez à les entretenir et à les cultiver.";
      } else {
        return "Vos relations sociales sont une source de bonheur et d'épanouissement. Vous êtes entouré(e) d'un excellent soutien.";
      }
    }
  },  
  {
    id: 'motivation',
    title: "Ma motivation",
    image: motivation,
    description: "Évaluez votre niveau de motivation dans différents aspects de votre vie.",
    questions: [
      {
        id: 1,
        text: "Quand vous fixez un objectif, à quel point êtes-vous déterminé(e) à l’atteindre ?",
        options: [
          { id: 1, text: "Je me décourage facilement et abandonne rapidement", value: 1 },
          { id: 2, text: "Je fais quelques efforts, mais je me lasse si le chemin est trop long", value: 2 },
          { id: 3, text: "Je suis déterminé(e) et je fais tout mon possible pour atteindre mon objectif", value: 3 },
          { id: 4, text: "Je suis totalement résolu(e) à réussir, peu importe les défis ou les obstacles", value: 4 }
        ]
      },
      {
        id: 2,
        text: "Comment réagissez-vous face à des échecs ou des obstacles dans vos projets ?",
        options: [
          { id: 1, text: "Je prends cela comme une raison d’abandonner", value: 1 },
          { id: 2, text: "Je me sens démotivé(e) mais j’essaie parfois de continuer", value: 2 },
          { id: 3, text: "Je vois les échecs comme des opportunités d’apprendre et de m’améliorer", value: 3 },
          { id: 4, text: "Les obstacles me motivent encore plus à réussir", value: 4 }
        ]
      },
      {
        id: 3,
        text: "À quelle fréquence prenez-vous des initiatives pour avancer dans vos projets personnels ?",
        options: [
          { id: 1, text: "Je n’en prends quasiment jamais et attends souvent qu’on me guide", value: 1 },
          { id: 2, text: "J’en prends de temps en temps, mais seulement quand je me sens obligé(e)", value: 2 },
          { id: 3, text: "Je prends des initiatives régulièrement pour progresser dans mes projets", value: 3 },
          { id: 4, text: "Je suis toujours proactif(ve) et cherche des moyens innovants pour avancer", value: 4 }
        ]
      },
      {
        id: 4,
        text: "Vous sentez-vous passionné(e) par ce que vous faites au quotidien ?",
        options: [
          { id: 1, text: "Je ne ressens aucune passion pour mes activités quotidiennes", value: 1 },
          { id: 2, text: "J'ai parfois des moments de passion, mais ils sont rares", value: 2 },
          { id: 3, text: "Je suis souvent passionné(e) par ce que je fais", value: 3 },
          { id: 4, text: "Je me sens profondément passionné(e) et inspiré(e) chaque jour", value: 4 }
        ]
      },
      {
        id: 5,
        text: "Comment évaluez-vous votre capacité à rester concentré(e) sur vos objectifs à long terme ?",
        options: [
          { id: 1, text: "Je me disperse facilement et perds rapidement de vue mes objectifs", value: 1 },
          { id: 2, text: "Je commence motivé(e), mais j’ai du mal à maintenir mon attention à long terme", value: 2 },
          { id: 3, text: "Je reste généralement concentré(e) sur mes objectifs à long terme", value: 3 },
          { id: 4, text: "Je reste extrêmement focalisé(e) et engagé(e), quelles que soient les distractions", value: 4 }
        ]
      },
      {
        id: 6,
        text: "Comment décririez-vous votre attitude face à des tâches difficiles ou complexes ?",
        options: [
          { id: 1, text: "Je ressens de l’appréhension et j’évite autant que possible ces tâches", value: 1 },
          { id: 2, text: "Je les affronte parfois, mais cela me demande un grand effort", value: 2 },
          { id: 3, text: "J’accepte les défis et je les vois comme des opportunités de progresser", value: 3 },
          { id: 4, text: "J’adore relever des défis complexes et cela me stimule énormément", value: 4 }
        ]
      },
      {
        id: 7,
        text: "Quelle est votre attitude lorsque vous travaillez sur un projet d’équipe ?",
        options: [
          { id: 1, text: "Je me sens souvent en retrait et laisse les autres diriger", value: 1 },
          { id: 2, text: "Je participe de manière minimale, en contribuant uniquement lorsque nécessaire", value: 2 },
          { id: 3, text: "Je participe activement et prends des responsabilités dans le projet", value: 3 },
          { id: 4, text: "Je prends souvent l’initiative et aide à motiver toute l’équipe", value: 4 }
        ]
      },
      {
        id: 8,
        text: "À quel point vous engagez-vous à planifier vos objectifs avant de les poursuivre ?",
        options: [
          { id: 1, text: "Je ne fais pas de plans, je préfère improviser", value: 1 },
          { id: 2, text: "Je fais parfois des plans, mais ils manquent souvent de clarté", value: 2 },
          { id: 3, text: "Je m’efforce de planifier de manière claire et organisée", value: 3 },
          { id: 4, text: "Je planifie méticuleusement chaque détail pour maximiser mes chances de réussite", value: 4 }
        ]
      },
      {
        id: 9,
        text: "Quelle est votre capacité à vous remotiver après une période de baisse de moral ou d'énergie ?",
        options: [
          { id: 1, text: "Je reste souvent dans cet état pendant un long moment", value: 1 },
          { id: 2, text: "Il me faut du temps pour me remotiver, mais j’y parviens parfois", value: 2 },
          { id: 3, text: "Je parviens à retrouver une certaine motivation après quelques ajustements", value: 3 },
          { id: 4, text: "Je rebondis rapidement et utilise ces moments pour me redynamiser encore plus", value: 4 }
        ]
      },
      {
        id: 10,
        text: "Quelle importance accordez-vous à la réalisation de vos rêves ou aspirations personnelles ?",
        options: [
          { id: 1, text: "Je n’y accorde pas beaucoup d’importance ou de réflexion", value: 1 },
          { id: 2, text: "J’y pense parfois, mais je n’en fais pas une priorité", value: 2 },
          { id: 3, text: "Je considère mes rêves importants et je travaille activement pour les réaliser", value: 3 },
          { id: 4, text: "Ils sont essentiels pour moi, et je mets tout en œuvre pour les concrétiser", value: 4 }
        ]
      }
    ],
    getAnalysis: (score) => {
      if (score <= 17) {
        return "Votre niveau de motivation semble faible. Prenez le temps d’identifier ce qui vous inspire et vous donne envie d’avancer.";
      } else if (score <= 30) {
        return "Vous avez un bon niveau de motivation, mais il peut fluctuer. Essayez de mieux canaliser votre énergie pour maintenir un élan constant.";
      } else if (score <= 37) {
        return "Vous êtes motivé(e) et vous vous engagez dans vos projets de manière positive et dynamique. Continuez ainsi.";
      } else {
        return "Votre motivation est exceptionnelle ! Vous êtes un exemple de persévérance et d’inspiration pour les autres.";
      }
    }
  }  
];