const quiz = {
    logo: '/static/img/logo-white.svg',
    logo2: '/static/img/logo_mobile.png',

    questions: [{
      text: "Discussing world issues with friends, you:",
      images: '/static/img/img1.jpg',
      imagesMobile: '/static/img/img1_mobile.jpg',
      responses: [{
        text: 'Get excited about expanding your world-view',
        value: 6
      },
        {
          text: 'Gear up for a vocal debate —\n' +
          'you love a good discussion',
          value: 8
        },
        {
          text: 'Listen carefully, trying to understand all perspectives',
          value: 2
        },
        {
          text: 'Listen well, weigh-in often, invite everyone to have their say',
          value: 4
        }
      ]
    },
      {
        text: "To get your daily dose of international news, you:",
        images: '/static/img/img2.jpg',
        imagesMobile: '/static/img/img2_mobile.jpg',
        responses: [{
          text: 'Scour the web for articles from a variety of sources',
          value: 6
        },
          {
            text: 'Read (and comment on) anything you can get your hands on',
            value: 4
          },
          {
            text: 'Stick to your favourite, reputable news outlets',
            value: 8
          },
          {
            text: 'Read and share a lot on social media to spread awareness on big issue',
            value: 2
          }
        ]
      },
      {
        text: "Friends ask you to help a local, non-profit organization. You offer to:",
        images: '/static/img/img3.jpg',
        imagesMobile: '/static/img/img3_mobile.jpg',
        responses: [{
          text: 'Volunteer',
          value: 6
        },
          {
            text: 'Start a peer-to-peer fundraising campaign',
            value: 4
          },
          {
            text: 'Review the organization’s “About Us” section of their website',
            value: 2
          },
          {
            text: 'Go door-to-door with a petition, raising awareness',
            value: 8
          }
        ]
      },
      {
        text: "Your neighbour knocks on your door with a petition to support an emergency happening in another country. You:",
        images: '/static/img/img4.jpg',
        imagesMobile: '/static/img/img4_mobile.jpg',
        responses: [{
          text: 'Immediately sign without reading',
          value: 6
        },
          {
            text: 'Sign and offer to share with your friends on social media',
            value: 4
          },
          {
            text: 'Offer to read the petition and think about the implications of signing',
            value: 2
          },
          {
            text: 'Sign, then knock on doors to recruit your neighbours to the cause',
            value: 8
          }
        ]
      },
      {
        text: "Imagine you’re off on your first MSF mission, to an area with limited access to the rest of the world. What do you pack first? ",
        images: '/static/img/img5.jpg',
        imagesMobile: '/static/img/img5_mobile.jpg',
        responses: [{
          text: 'A portable movie projector',
          value: 6
        },
          {
            text: 'Speakers for your music player',
            value: 8
          },
          {
            text: 'Your favourite novels',
            value: 2
          },
          {
            text: 'A deck of cards',
            value: 4
          }
        ]
      },
    ]
  }

  const profiles = {

    profile: [{
      title: "A First Responder",
      desc: 'You understand the value of quickly assessing a situation and responding appropriately. You have a unique ability to evaluate a situation quickly and take responsible action to reduce suffering.',
      paragraph: 'Doctors Without Borders responds quickly and effectively in emergencies. Our teams are often the first on the scene, as for example during the devastating Ebola outbreak in West Africa, or providing medical care to the displaced Rohingya people in Myanmar.',
      quote: "Humanitarianism is not a tool to end war or create peace. It is a citizen's response to political failure",
      author: 'Dr. James Orbinski'
    },
    {
      title: "A Negotiator",
      desc: 'You know that building trust is key to resolving conflict. You aim to see all sides of any discussion. You value every opportunity to grow your understanding and aren’t afraid to engage in difficult conversations.',
      paragraph: 'For Doctors Without Borders, trust, respect, and neutrality are key to gaining the acceptance necessary to provide medical care to people living in conflict. It’s why we’re able to work in difficult environments such as Iraq, Yemen or Democratic Republic of Congo.',
      quote: "For MSF, this is the humanitarian act: to seek to relieve suffering, to seek to restore autonomy, to witness the truth of injustice, and to insist on political responsibility...",
      author: 'Dr. James Orbinski'
    },
    {
      title: "An Advocate",
      desc: 'It’s in you to speak out in support of the causes you believe in. When you see an injustice, you instinctively need to do something about it. You believe in using your voice to change the world.',
      paragraph: 'For Doctors Without Borders, our willingness to bear witness and speak out about the abuses and intolerable situations we witness is an essential part of the work we do. In doing so, we set out to alleviate human suffering and to protect life and health.',
      quote: "We are not sure that words can always save lives, but we know that silence can certainly kill.",
      author: 'Dr. James Orbinski'
    },
    {
      title: "A Networker",
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

  export {quiz, profiles}