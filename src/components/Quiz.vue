<template>
  <div id="quiz">
    <div>
      <div class="full-width-container container">
        <!-- QUIZ SECTION -->
        <div v-for="(question, index) in quiz.questions" :key="index">
          <div v-show="index === questionIndex" class="row full-bg ">
            <div class="eight columns offset-by-two quiz">
              <div class='quizLogo'><img :src="quiz.logo"/></div>
              <h3 class="question">{{ question.text }}</h3>
              <ul class="questions-input">
                <li v-for="response in question.responses">
                  <label>
                    <input type="radio"
                           v-bind:value="response.value"
                           v-bind:name="index"
                           v-model="userResponses[index]" v-on:click="next">
                    <div class="answer" :class="userResponses[index] === response.value ? `response-selected` : ``"><p>
                      {{response.text}}</p></div>
                  </label>
                </li>
              </ul>
              <div class="progress-and-button" v-if="questionIndex > 0">
                <div class="button-back" v-on:click="prev">
                  < Back
                </div>
                <div class="progress-container">
                  <div class="progress" v-bind:style="{ width: questionIndex * 50 + 'px' }"></div>
                  <div class="progress-bar"></div>
                </div>

              </div>
              <!--<div class="bg-img">-->
              <!--<img :src="question.image"/>-->
              <!--</div>-->
            </div>
          </div>
        </div>
        <!-- SIGN UP FORM SECTION -->
        <div class='results' v-show="questionIndex === quiz.questions.length">
          <div class="row row-v-align full-bg">
            <div class="results-flex">
              <div class="four columns">
                <h3>Your results are almost in!</h3>
                <p>Will you stand with us? We need people like you who will speak out when the world needs you to act.
                  Sign up now.</p>
              </div>
              <div class="four columns">
                <input class="u-full-width " type="email" placeholder="First Name" id="firstnameInput">
                <input class="u-full-width" type="email" placeholder="Last Name" id="lastnameInput">
                <input class="u-full-width" type="email" placeholder="Email" id="emailInput">
                <label class="agree">
                  <input type="checkbox">
                  <span class="label-body">Join our supporters so you'll be the first to know when a crisis occurs. You can unsubscribe at any time. Your privacy is important to us. Learn more here.</span>
                </label>
                <button>
                  <router-link :to="{ path: 'Profile' }">Continue</router-link>
                </button>
                <span class="skip"><router-link :to="{ path: 'Profile' }">Skip this step</router-link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="questionIndex === quiz.questions.length+1">
      </div>
    </div>

  </div>
</template>

<script>

  /* eslint-disable */

  const quiz = {
    logo: '/static/img/quizLogo.png',

    questions: [{
      text: "Discussing world issues with friends, you:",
      image: '/static/img/img1.jpg',
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
    },
      {
        text: "To get your daily dose of international news, you:",
        image: '/static/img/img2.jpg',
        responses: [{
          text: 'Scour the web for articles from a variety of sources',
          value: 'The Flash'
        },
          {
            text: 'Read (and comment on) anything you can get your hands on',
            value: 'Batman'
          },
          {
            text: 'Stick to your favourite, reputable news outlets',
            value: 'Superman'
          },
          {
            text: 'Read and share a lot on social media to spread awareness on big issue',
            value: 'Supermans'
          }
        ]
      },
      {
        text: "Friends ask you to help a local, non-profit organization. You offer to:",
        image: '/static/img/img3.jpg',
        responses: [{
          text: 'Volunteer',
          value: 'Superman'
        },
          {
            text: 'Start a peer-to-peer fundraising campaign',
            value: 'The Flash'
          },
          {
            text: 'Review the organization’s “About Us” section of their website',
            value: 'Batman'
          },
          {
            text: 'Go door-to-door with a petition, raising awareness',
            value: 'Batman'
          }
        ]
      },
      {
        text: "Your neighbour knocks on your door with a petition to support an emergency happening in another country. You:",
        image: '/static/img/img4.jpg',
        responses: [{
          text: 'Immediately sign without reading',
          value: 'Batman'
        },
          {
            text: 'Sign and offer to share with your friends on social media',
            value: 'The Flash'
          },
          {
            text: 'Offer to read the petition and think about the implications of signing',
            value: 'Superman'
          },
          {
            text: 'Sign, then knock on doors to recruit your neighbours to the cause',
            value: 'Superman'
          }
        ]
      },
      {
        text: "Imagine you’re off on your first MSF mission, to an area with limited access to the rest of the world. What do you pack first? ",
        image: '/static/img/img5.jpg',
        responses: [{
          text: 'A portable movie projector',
          value: 'The Flash'
        },
          {
            text: 'Speakers for your music player',
            value: 'Batman'
          },
          {
            text: 'Your favourite novels',
            value: 'Superman'
          },
          {
            text: 'A deck of cards',
            value: 'Superman'
          }
        ]
      },
    ]
  }

  export default {
    data() {
      return {
        quiz: quiz,
        questionIndex: 0,
        userResponses: Array()
      }
    },
    updated() {
      console.log(this.userResponses)
    },
    methods: {
      // Go to next question
      next: function () {
        this.questionIndex++;
        // alert(this.questionIndex)
      },
      // Go to previous question
      prev: function () {
        this.questionIndex--;
      },
      score: function () {
        //find the highest occurence in responses
        var modeMap = {};
        var maxEl = this.userResponses[0],
          maxCount = 1;
        for (var i = 0; i < this.userResponses.length; i++) {
          var el = this.userResponses[i];
          if (modeMap[el] == null)
            modeMap[el] = 1;
          else
            modeMap[el]++;
          if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
          }
        }
        return maxEl;
      }
    }
  }


</script>

<style scoped>

  /*Quiz*/

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-enter {
    opacity: 0;
  }

  #app {
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  }

  h1 {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
  }

  button {
    float: left;
  }

  .button-back {
    color: white;
    float: left;
    margin-top: 10px;
    cursor: pointer;
  }

  [v-cloak] {
    display: none;
  }

  /*answer boxes*/

  input[type="radio"] {
    display: none;
  }

  .quiz {
    padding-top: 150px;
  }

  .quizLogo {
    float: left;
    margin-bottom: 50px;
  }

  .question {
    clear: left;
    text-align: left;
    margin-left: 20px;
    font-weight: bold;
    padding-bottom: 10px;
    max-width: 800px;
    color: white;
  }

  .questions-input {
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    -o-flex-direction: row;
    -khtml-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    -khtml-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-around;
    -moz-justify-content: space-around;
    -ms-justify-content: space-around;
    -o-justify-content: space-around;
    -khtml-justify-content: space-around;
    justify-content: space-around;
    -webkit-align-items: stretch;
    -moz-align-items: stretch;
    -ms-align-items: stretch;
    -o-align-items: stretch;
    -khtml-align-items: stretch;
    align-items: stretch;
  }

  .questions-input li {
    width: 48%;
  }

  .inputs {
    float: left;
  }

  .answer {

    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 20px;
    background: white;
    opacity: 0.8;
    min-height: 70px;
    border-style: solid;
    border-color: #630808;
    border-width: thin;
    min-width: 100%;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;
  }

  .answer p {
    margin-bottom: 0;
    color: #630808;
    padding-right: 20px;
    padding-left: 20px;
  }

  .answer:hover {
    background: white;
    opacity: 1;
  }

  .answer:active {
    background-color: #ea0029;
    color: white;
  }

  .progress-and-button {
    display: inline-block;
    float: left;
  }

  .progress-container {
    margin-top: 20px;
    margin-left: 20px;
    position: relative;
    float: left;
  }

  .progress {
    z-index: 3;
    position: absolute;
    height: 5px;
    background-color: #ea0029;
    float: left;
  }

  .progress-bar {
    height: 5px;
    width: 250px;
    background-color: white;
    float: left;
  }

  .full-bg {
    background: url("../../static/img/form.jpg") center center;
    height: 100vh;
    background-size: cover;
    background-repeat:  no-repeat;
    background-attachment: fixed;
  }


  .bg-img {
    background: url("../../static/img/form.jpg") center center;
    height: 100%;
    background-size: cover;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;

  }

  /*Quiz - End*/

  /*Results almost in*/

  .results {
    color: white;
    text-align: left;
  }


  .results-flex {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .results h3 {
    font-size: 30px;
    font-weight: bold;
  }

  .results p {
    font-size: 20px;
  }

  .results .u-full-width {
    height: 50px;
    border-radius: 0px;
    margin-bottom: 5px;
  }

  input[type="checkbox"] {
    margin-top: 20px;
  }

  .results .skip {
    clear: left;
    float: left;
  }

  label > .label-body {
    display: inline;
  }

  .agree {
    margin-bottom: 40px;
  }

  .agree input {
    margin-bottom: 0;
  }

  .response-selected {
    background-color: #ea0029;
    opacity: 1;
    color: white;
  }

  @media only screen and (max-width: 600px) {
    .questions-input li {
      width: 100%;
    }

    .row-v-align {
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -moz-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      -o-flex-wrap: wrap;
      -khtml-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }

</style>
