// 8-8-2018 update
const quiz = {
  logo: '/static/img/logo.svg',
  logo2: '/static/img/logo.svg',

  questions : [{
      text: "Discussing world issues with friends, you:",
      images: '/static/img/img1.jpg',
      imagesMobile: '/static/img/img1_mobile.jpg',
      responses: [{
          text: 'Get excited about expanding your world-view',
          value: 6,
          val_2: 'Get excited about expanding your world-view'
        },
        {
          text: 'Gear up for a vocal debate -\n' +
          'you love a good discussion',
          value: 8,
          val_2: 'Gear up for a vocal debate -- you love a good discussion'
        },
        {
          text: 'Listen carefully, trying to understand all perspectives',
          value: 2,
          val_2: 'Listen carefully, trying to understand all perspectives'
        },
        {
          text: 'Listen well, weigh-in often, invite everyone to have their say',
          value: 4,
          val_2: 'Listen well, weigh-in often, invite everyone to have their say'
      }]
    },
    {
      text: "To get your daily dose of international news, you:",
      images: '/static/img/img2.jpg',
      imagesMobile: '/static/img/img2_mobile.jpg',
      responses: [{
          text: 'Scour the web for articles from a variety of sources',
          value: 6,
          val_2: 'Scour the web for articles from a variety of sources'
        },
        {
          text: 'Read (and comment on) anything you can get your hands on',
          value: 4,
          val_2: 'Read (and comment on) anything you can get your hands on'
        },
        {
          text: 'Stick to your favourite, reputable news outlets',
          value: 8,
          val_2: 'Stick to your favourite, reputable news outlets'
        },
        {
          text: 'Read and share a lot on social media to spread awareness on big issues',
          value: 2,
          val_2: 'Read and share a lot on social media to spread awareness on big issues'
      }]
    },
    {
      text: "Friends ask you to help a local, non-profit organization. You offer to:",
      images: '/static/img/img3.jpg',
      imagesMobile: '/static/img/img3_mobile.jpg',
      responses: [{
          text: 'Volunteer',
          value: 6,
          val_2: 'Volunteer'
        },
        {
          text: 'Start a peer-to-peer fundraising campaign',
          value: 4,
          val_2: 'Start a peer-to-peer fundraising campaign'
        },
        {
          text: 'Review the organization’s “About Us” section of their website',
          value: 2,
          val_2: 'Review the organization’s “About Us” section of their website'
        },
        {
          text: 'Go door-to-door with a petition, raising awareness',
          value: 8,
          val_2: 'Go door-to-door with a petition, raising awareness'
      }]
    },
    {
      text: "Your neighbour knocks on your door with a petition to support an emergency happening in another country. You:",
      images: '/static/img/img4.jpg',
      imagesMobile: '/static/img/img4_mobile.jpg',
      responses: [{
          text: 'Immediately sign without reading',
          value: 6,
          val_2: 'Immediately sign without reading'
        },
        {
          text: 'Sign and offer to share with your friends on social media',
          value: 4,
          val_2: 'Sign and offer to share with your friends on social media'
        },
        {
          text: 'Offer to read the petition and think about the implications of signing',
          value: 2,
          val_2: 'Offer to read the petition and think about the implications of signing'
        },
        {
          text: 'Sign, then knock on doors to recruit your neighbours to the cause',
          value: 8,
          val_2: 'Sign, then knock on doors to recruit your neighbours to the cause'
      }]
    },
    {
      text: "Imagine you’re off on your first MSF mission, to an area with limited access to the rest of the world. What do you pack first?",
      images: '/static/img/img5.jpg',
      imagesMobile: '/static/img/img5_mobile.jpg',
      responses: [{
          text: 'A portable movie projector',
          value: 6,
          val_2: 'A portable movie projector'
        },
        {
          text: 'Speakers for your music player',
          value: 8,
          val_2: 'Speakers for your music player'
        },
        {
          text: 'Your favourite novels',
          value: 2,
          val_2: 'Your favourite novels'
        },
        {
          text: 'A deck of cards',
          value: 4,
          val_2: 'A deck of cards'
      }]
    }]
  }

  const profiles = {

    profile: [{
      prefix: "A",
      title: "First Responder",
      desc: 'You understand the value of quickly assessing a situation and responding appropriately. You have a unique ability to evaluate a situation quickly and take responsible action to reduce suffering.',
      paragraph: 'Doctors Without Borders responds quickly and effectively in emergencies. Our teams are often the first on the scene, as for example during the devastating Ebola outbreak in West Africa, or providing medical care to the displaced Rohingya people in Myanmar.',
      quote: "Humanitarianism is not a tool to end war or create peace. It is a citizen's response to political failure.",
      author: 'Dr. James Orbinski'
    },
    {
      prefix: "A",
      title: "Negotiator",
      desc: 'You know that building trust is key to resolving conflict. You aim to see all sides of any discussion. You value every opportunity to grow your understanding and aren’t afraid to engage in difficult conversations.',
      paragraph: 'For Doctors Without Borders, trust, respect, and neutrality are key to gaining the acceptance necessary to provide medical care to people living in conflict. It’s why we’re able to work in difficult environments such as Iraq, Yemen or Democratic Republic of Congo.',
      quote: "For MSF, this is the humanitarian act: to seek to relieve suffering, to seek to restore autonomy, to witness the truth of injustice, and to insist on political responsibility...",
      author: 'Dr. James Orbinski'
    },
    {
      prefix: "An",
      title: "Advocate",
      desc: 'It’s in you to speak out in support of the causes you believe in. When you see an injustice, you instinctively need to do something about it. You believe in using your voice to change the world.',
      paragraph: 'For Doctors Without Borders, our willingness to bear witness and speak out about the abuses and intolerable situations we witness is an essential part of the work we do. In doing so, we set out to alleviate human suffering and to protect life and health.',
      quote: "We are not sure that words can always save lives, but we know that silence can certainly kill.",
      author: 'Dr. James Orbinski'
    },
    {
      prefix: "A",
      title: "Networker",
      desc: 'As a Networker, you appreciate the value of human connections — they’re at the heart of everything you do. You’re a collaborator, working together with people to share our common humanity.',
      paragraph: 'Human connections are central to Doctors Without Borders’ work; our medics reach millions of patients every year thanks to a vast network of staff and supporters. Those networks are critical for bringing attention to the world’s most difficult, dangerous and neglected health issues.',
      quote: "Humanitarian responsibility has no frontiers.",
      author: 'Dr. James Orbinski'
    }
    ],
    categories: [
      {
        label: 'Negotiator',
        value: 2,
        id: 1,
        min: 10,
        max: 17
      },
      {
        label: 'Networker',
        value: 4,
        id: 3,
        min: 18,
        max: 25
      },
      {
        label: 'First Responder',
        value: 6,
        id: 0,
        min: 26,
        max: 33
      },
      {
        label: 'Advocate',
        value: 8,
        id: 2,
        min: 34,
        max: 40
      }
    ]
  }

// 8-11-2018 update
const quiz_fr = {
    logo: '/static/img/logo.svg',
    logo2: '/static/img/logo.svg',

    questions: [{
      text: "Quand vous discutez des grands enjeux mondiaux avec vos amis :",
      images: '/static/img/img1.jpg',
      imagesMobile: '/static/img/img1_mobile.jpg',
      responses: [{
        text: 'Vous êtes enthousiaste à l\'idée d\'élargir votre vision du monde',
        value: 6,
        val_2: 'Get excited about expanding your world-view'
      },
        {
          text: 'Vous vous lancez dans un débat animé —\n vous aimez une bonne discussion',
          value: 8,
          val_2: 'Gear up for a vocal debate -- you love a good discussion'
        },
        {
          text: 'Vous écoutez attentivement, en essayant de comprendre toutes les perspectives',
          value: 2,
          val_2: 'Listen carefully, trying to understand all perspectives'
        },
        {
          text: 'Vous écoutez bien, vous donnez souvent votre avis, vous invitez tout le monde à s\'exprimer',
          value: 4,
          val_2: 'Listen well, weigh-in often, invite everyone to have their say'
        }
      ]
    },
      {
        text: "Pour obtenir votre dose quotidienne de nouvelles internationales :",
        images: '/static/img/img2.jpg',
        imagesMobile: '/static/img/img2_mobile.jpg',
        responses: [{
          text: 'Vous parcourez le web pour trouver des articles provenant de diverses sources',
          value: 6,
          val_2: 'Scour the web for articles from a variety of sources'
        },
          {
            text: 'Vous lisez et commentez tout ce que vous pouvez trouver',
            value: 4,
            val_2: 'Read (and comment on) anything you can get your hands on'
          },
          {
            text: 'Allez toujours vers vos sources favorites, qui sont les plus réputées',
            value: 8,
            val_2: 'Stick to your favourite, reputable news outlets'
          },
          {
            text: 'Vous lisez et partagez beaucoup sur les médias sociaux dans le but de faire connaître les grands enjeux',
            value: 2,
            val_2: 'Read and share a lot on social media to spread awareness on big issues'
          }
        ]
      },
      {
        text: "Des amis vous demandent d'aider une organisation à but non lucratif locale. Vous :",
        images: '/static/img/img3.jpg',
        imagesMobile: '/static/img/img3_mobile.jpg',
        responses: [{
          text: 'Proposez de devenir bénévole',
          value: 6,
          val_2: 'Volunteer'
        },
          {
            text: 'Proposez de lancer une campagne de collecte de fonds',
            value: 4,
            val_2: 'Start a peer-to-peer fundraising campaign'
          },
          {
            text: 'Consultez la section « À propos de nous » de leur site web',
            value: 2,
            val_2: 'Review the organization’s “About Us” section of their website'
          },
          {
            text: 'Proposez de faire du porte-à-porte avec une pétition pour sensibiliser le public',
            value: 8,
            val_2: 'Go door-to-door with a petition, raising awareness'
          }
        ]
      },
      {
        text: "Votre voisin frappe à votre porte avec une pétition en lien avec une situation d'urgence qui a cours dans un autre pays. Vous :",
        images: '/static/img/img4.jpg',
        imagesMobile: '/static/img/img4_mobile.jpg',
        responses: [{
          text: 'Signez immédiatement la pétition sans la lire',
          value: 6,
          val_2: 'Immediately sign without reading'
        },
          {
            text: 'Signez et offrez de partager la pétition avec vos amis sur les réseaux sociaux',
            value: 4,
            val_2: 'Sign and offer to share with your friends on social media'
          },
          {
            text: 'Proposez de lire la pétition et de réfléchir aux implications de la signature',
            value: 2,
            val_2: 'Offer to read the petition and think about the implications of signing'
          },
          {
            text: 'Signez, puis frappez aux portes pour recruter plus de voisins en soutien à la cause',
            value: 8,
            val_2: 'Sign, then knock on doors to recruit your neighbours to the cause'
          }
        ]
      },
      {
        text: "Imaginez que vous participez à votre première mission MSF dans une région où l'accès au reste du monde est limité. Que mettez-vous en premier dans vos bagages?",
        images: '/static/img/img5.jpg',
        imagesMobile: '/static/img/img5_mobile.jpg',
        responses: [{
          text: 'Un projecteur portatif pour regarder vos films préférés',
          value: 6,
          val_2: 'A portable movie projector'
        },
          {
            text: 'Des haut-parleurs pour votre lecteur de musique',
            value: 8,
            val_2: 'Speakers for your music player'
          },
          {
            text: 'Vos romans préférés',
            value: 2,
            val_2: 'Your favourite novels'
          },
          {
            text: 'Un jeu de cartes',
            value: 4,
            val_2: 'A deck of cards'
          }
        ]
      },
    ]
  }

  const profiles_fr = {

    profile: [{
      prefix: "Un",
      title: "Premier répondant",
      desc: 'Vous comprenez l\'importance d\'évaluer rapidement une situation et de réagir de la façon appropriée. Vous avez une capacité unique à évaluer les circonstances rapidement et à prendre des mesures responsables pour réduire la souffrance.',
      paragraph: 'Médecins Sans Frontières réagit rapidement et efficacement en cas d\'urgence. Nos équipes sont souvent les premières sur les lieux, par exemple pour répondre à la dévastatrice épidémie d\'Ebola en Afrique de l\'Ouest, ou pour prodiguer des soins médicaux aux déplacés rohingyas au Myanmar.',
      quote: "L'humanitarisme n'est pas un outil pour mettre fin à la guerre ou créer la paix. C'est la réponse citoyenne aux manquements politiques",
      author: 'Dr. James Orbinski'
    },
    {
      prefix: "Un",
      title: "Négociateur",
      desc: 'Vous savez qu\'établir la confiance est la clé pour résoudre les conflits. Vous voulez voir tous les côtés d\'une discussion. Vous appréciez chaque occasion de développer votre compréhension et n\'avez pas peur de vous engager dans des conversations difficiles.',
      paragraph: 'Pour Médecins Sans Frontières, la confiance, le respect et la neutralité sont des éléments essentiels pour obtenir l\'acceptation nécessaire afin de fournir des soins médicaux aux personnes touchées par un conflit. C\'est grâce à ces principes que nous sommes capables de travailler dans des environnements difficiles tels que l\'Irak, le Yémen ou la République démocratique du Congo.',
      quote: "Pour MSF, l'action humanitaire consiste à soulager la souffrance, à tenter de rendre aux populations leur l'autonomie, à se faire témoin de l'injustice et à affirmer la responsabilité des pouvoirs politiques...",
      author: 'Dr. James Orbinski'
    },
    {
      prefix: "Un",
      title: "Militant",
      desc: 'C\'est en vous de défendre les causes auxquelles vous croyez. Quand vous voyez une injustice, vous devez instinctivement faire quelque chose. Vous croyez que l\'on peut changer le monde en faisant entendre notre voix.',
      paragraph: 'Pour Médecins Sans Frontières, notre volonté de témoigner et de parler des abus et des situations intolérables dont nous sommes témoins est une partie essentielle de notre travail. Ce faisant, nous cherchons à soulager la souffrance humaine et à sauvegarder la vie et la santé.',
      quote: "Si nous ne sommes pas sûrs que la parole peut sauver, nous savons que le silence tue",
      author: 'Dr. James Orbinski'
    },
    {
      prefix: "Un",
      title: "Réseauteur",
      desc: 'En tant que Réseauteur, vous appréciez la valeur des rapports humains — ils sont au cœur de tout ce que vous faites. Vous aimez collaborer et travailler avec les autres pour partager notre humanité commune.',
      paragraph: 'Les rapports humains sont au cœur du travail de Médecins Sans Frontières; notre personnel médical arrive à soigner des millions de patients chaque année grâce à un vaste réseau de travailleurs humanitaires et de supporteurs. Ces réseaux sont essentiels pour attirer l\'attention sur les problèmes de santé les plus complexes, les plus dangereux et les plus négligés du monde.',
      quote: "La responsabilité humanitaire n'a pas de frontière",
      author: 'Dr. James Orbinski'
    }
    ],
    categories: [
      {
        label: 'Negotiator',
        value: 2,
        id: 1,
        min: 10,
        max: 17
      },
      {
        label: 'Networker',
        value: 4,
        id: 3,
        min: 18,
        max: 25
      },
      {
        label: 'First Responder',
        value: 6,
        id: 0,
        min: 26,
        max: 33
      },
      {
        label: 'Advocate',
        value: 8,
        id: 2,
        min: 34,
        max: 40
      }
    ]
  }

  export {quiz, profiles, quiz_fr, profiles_fr}