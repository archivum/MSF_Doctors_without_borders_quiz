const quiz = {
    logo: '/static/img/quizLogo.png',
    logo2: '/static/img/logo_mobile.png', 

    questions: [{
      text: "Discussing world issues with friends, you:",
      images: '/static/img/img1.jpg',
      imagesMobile: '/static/img/img1_mobile.jpg',
      responses: [{
        text: 'Get excited about expanding your world-view',
        value: 0
      },
        {
          text: 'Gear up for a vocal debate —\n' +
          'you love a good discussion',
          value: 1
        },
        {
          text: 'Listen carefully, trying to understand all perspectives',
          value: 2
        },
        {
          text: 'Listen well, weigh-in often, invite everyone to have their say',
          value: 3
        }
      ]
    },
      {
        text: "To get your daily dose of international news, you:",
        images: '/static/img/img2.jpg',
        imagesMobile: '/static/img/img2_mobile.jpg',
        responses: [{
          text: 'Scour the web for articles from a variety of sources',
          value: 0
        },
          {
            text: 'Read (and comment on) anything you can get your hands on',
            value: 1
          },
          {
            text: 'Stick to your favourite, reputable news outlets',
            value: 2
          },
          {
            text: 'Read and share a lot on social media to spread awareness on big issue',
            value: 3
          }
        ]
      },
      {
        text: "Friends ask you to help a local, non-profit organization. You offer to:",
        images: '/static/img/img3.jpg',
        imagesMobile: '/static/img/img3_mobile.jpg',
        responses: [{
          text: 'Volunteer',
          value: 0
        },
          {
            text: 'Start a peer-to-peer fundraising campaign',
            value: 1
          },
          {
            text: 'Review the organization’s “About Us” section of their website',
            value: 2
          },
          {
            text: 'Go door-to-door with a petition, raising awareness',
            value: 3
          }
        ]
      },
      {
        text: "Your neighbour knocks on your door with a petition to support an emergency happening in another country. You:",
        images: '/static/img/img4.jpg',
        imagesMobile: '/static/img/img4_mobile.jpg',
        responses: [{
          text: 'Immediately sign without reading',
          value: 0
        },
          {
            text: 'Sign and offer to share with your friends on social media',
            value: 1
          },
          {
            text: 'Offer to read the petition and think about the implications of signing',
            value: 2
          },
          {
            text: 'Sign, then knock on doors to recruit your neighbours to the cause',
            value: 3
          }
        ]
      },
      {
        text: "Imagine you’re off on your first MSF mission, to an area with limited access to the rest of the world. What do you pack first? ",
        images: '/static/img/img5.jpg',
        imagesMobile: '/static/img/img5_mobile.jpg',
        responses: [{
          text: 'A portable movie projector',
          value: 0
        },
          {
            text: 'Speakers for your music player',
            value: 1
          },
          {
            text: 'Your favourite novels',
            value: 2
          },
          {
            text: 'A deck of cards',
            value: 3
          }
        ]
      },
    ]
  }

  const profiles = {

    profile: [{
      title: "first responder",
      desc: 'You understand the value of quickly assessing a situation and responding appropriately. You have a unique ability to evaluate a situation quickly and take responsible action to reduce suffering.',
      responses: [{
        text: 'Get excited about expanding your world-view',
        value: 'Batman'
      },
        {
          text: 'Gear up for a vocal debate —\n' +
          'you love a good discussion',
          value: 'Superman'
        },
        {
          text: 'Listen carefully, trying to understand all perspectives',
          value: 'The Flash'
        },
        {
          text: 'Listen well, weigh-in often, invite everyone to have their say',
          value: 'Superman'
        }
      ]
    }
    ]
  }

  export {quiz, profiles}