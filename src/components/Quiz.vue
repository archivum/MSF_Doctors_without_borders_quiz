<template>
  <transition name="fade">
  <div id="quiz">
    <quiz-loader :visible="showLoader" :timeout="loaderTimeout" :backgroundUrl="loaderBackground"></quiz-loader>
    <div class="quiz-container">
      <div class="full-width-container container">
        <!-- QUIZ SECTION -->
        <div v-for="(question, index) in quiz.questions" :key="index">
          <div v-show="index === questionIndex" v-bind:style="{ 'background-image': 'radial-gradient(rgba(0,0,0,.5),rgba(0,0,0,.8)), url(' + question[property] + ')'}" class="row full-bg ">
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
              <div class="progress-and-button">
                <div class="button-back" v-on:click="prev" v-if="questionIndex > 0">
                  &#60; Back
                </div>
                <router-link class="button-back" to="/" v-else>
                  &#60; Back
                </router-link>
                <div class="progress-container">
                  <div class="progress" v-bind:style="{ width: questionIndex * 50 + 'px' }"></div>
                  <div class="progress-bar"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!-- SIGN UP FORM SECTION -->
        <div class='results' v-show="questionIndex === quiz.questions.length">
          <div class="row row-v-align full-bg">
            <div class='quizLogo'><img :src="quiz.logo"/></div>
            <div class="content">
              <div class="columns" :class="bigScreen ? `three offset-by-two` : `six offset-by-two`">
                <h3>Your results are <span class="result-head">almost&nbsp;in!</span></h3>
                <p>Will you stand with us? We need people like you who will speak out when the world needs you to act.
                  Sign up now.</p>
              </div>
              <div class="columns" :class="bigScreen ? `four` : `eight offset-by-two`">
                <input class="u-full-width " type="email" placeholder="First Name" id="firstnameInput">
                <input class="u-full-width" type="email" placeholder="Last Name" id="lastnameInput">
                <input class="u-full-width" type="email" placeholder="Email" id="emailInput">
                <label class="agree">
                  <input type="checkbox">
                  <span class="label-body">Join our supporters so you'll be the first to know when a crisis occurs. You can unsubscribe at any time. Your privacy is important to us. <u>Learn more here.</u></span>
                </label>
                <button>
                  <router-link :to="{ path: 'Profile' }">Continue</router-link>
                </button>
                <span class="skip"><router-link :to="{ path: 'profile?id=' + profile }">Skip this step</router-link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="questionIndex === quiz.questions.length">
      </div>
    </div>

  </div>
</transition>
</template>

<script>
  import QuizLoader from './QuizLoader.vue'
  import {quiz} from '../lib/utils.js'
  /* eslint-disable */

  export default {
    data() {
      return {
        quiz: quiz,
        questionIndex: 0,
        userResponses: Array(),
        showLoader: false,
        loaderTimeout: 1000,
        loaderBackground: '',
        property: 'images',
        bigScreen: true,
        profile: 0,
        tl: ''
      }
    },
    components: {
      QuizLoader
    },
    created() {
      this.loaderBackground = this.quiz.questions[0].images
    },
    mounted() {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
      setTimeout(this.animateQuiz, this.loaderTimeout)
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      // Go to next question
      next: function () {
        this.showLoader = true
        this.property = window.innerWidth >= 768 ? 'images' : 'imagesMobile'
        this.loaderBackground = this.questionIndex + 1 < this.quiz.questions.length ? this.quiz.questions[this.questionIndex + 1][this.property] : window.innerWidth >= 768 ? '/static/img/form.jpg' : '/static/img/form_mobile.jpg'
        let vm = this
        setTimeout(function() {
          vm.questionIndex = Math.min(vm.questionIndex + 1, vm.quiz.questions.length)
          vm.questionIndex === vm.quiz.questions.length ? vm.computeScore() : ''
        }, vm.loaderTimeout / 2)
      },
      // Go to previous question
      prev: function () {
        this.showLoader = true
        this.property = window.innerWidth >= 768 ? 'images' : 'imagesMobile'
        this.loaderBackground = this.quiz.questions[Math.max(0, this.questionIndex - 1)][this.property]
        let vm = this
        setTimeout(function() {
          vm.questionIndex = Math.max(vm.questionIndex - 1, 0)
        }, vm.loaderTimeout / 2)
      },
      computeScore() {
        let vm = this
        let score = 0
        this.userResponses.map((answer) => score += answer)
        0 <= score && score < 15 ? this.profile = 1 : 15 <= score && score < 25 ? this.profile = 3 : 25 <= score && score < 35 ? this.profile = 0 : this.profile = 2
      },
      handleResize() {
        this.bigScreen = window.innerWidth >= 1000
      },
      animateQuiz(delay = .2) {
        this.tl = new TimelineMax()
          this.tl
            .staggerFromTo([$(".question"), $(".questions-input"), $(".progress-and-button")], .8, { x: 50, opacity: 0 }, { x: 0, opacity: 1, ease: Power1.easeOut }, delay)
      },
      resetAnimation() {
        $('.question').css('opacity', '0')
        $('.questions-input').css('opacity', '0')
        $('.progress-and-button').css('opacity', '0')
      }
  },
  watch: {
    showLoader(newValue, oldValue) {
      if(!newValue) {
        this.tl.restart(true, false)
      }
    }
  }
}

</script>

<style scoped>
/*Links*/
a {
    color: white !important;
    text-decoration: none;
    font-family: 'FreightSans Pro';
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
}

button a {
  font-weight: bold;
}

/*Full width container*/
.full-width-container {
    height: 100%;
    width: 100%;
    max-width: 100%;
    padding: 0px 0px;
    clear: both;
    margin: 0 auto;
}

.row {
    padding-left: 20px !important;
    padding-right: 20px !important;
}
.row-v-align {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

/*Quiz*/
.img-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(35, 31, 32,.8);
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

/*Button styles*/
button {
    height: 55px;
    background-color: #ea0029;
    border-radius: 50px;
    border: none;
    width: 275px;
    font-size: 2.6rem;
    color: white;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;
    font-family: 'FreightSans Pro';
    font-weight: bold;
    font-style: normal;
}

button:hover, button:focus, button:active {
    background-color: #b11515;
    color: white;
}

.button-back {
    color: white;
    float: left;
    margin-top: 10px;
    cursor: pointer;
    font-family: 'FreightSans Pro';
    font-weight: 500;
    font-style: normal;
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

.quiz-container {
  opacity: 0;
}

.quizLogo {
    /*    position: absolute;*/
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
    font-family: 'FreightSans Pro';
    font-weight: bold;
    font-style: normal;
    font-size: 3.4rem;
    opacity: 0;
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
    opacity: 0;
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
    border-color: rgb(155, 7, 7);
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
    color: rgb(99, 8, 8);
    padding-right: 10px;
    padding-left: 10px;
    font-size: 1.75rem;
    font-family: 'FreightSans Pro';
    font-weight: 500;
    font-style: normal;
}

.answer:hover {
    background: white;
    opacity: 1;
    cursor: pointer;
  }

.answer:active {
    background-color: #ea0029;
    color: white;
}

.progress-and-button {
    display: inline-block;
    float: left;
    opacity: 0;
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
    background: url("/static/img/form.jpg");
    height: 100vh;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-attachment: fixed !important;
    background-position: center center;
}


#bg-img {
    /*    background: url("../../static/img/form.jpg") center center;*/
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    /*     z-index: -1; */
    position: fixed;
    top: 0;
    left: 0;
}

/*Results almost in*/
.results {
    color: white;
    text-align: left;
}

.results .content {
  margin-top: 30vh;
}

.results h3 {
    font-size: 3rem;
    font-weight: bold;
    font-family: 'FreightSans Pro';
    font-weight: bold;
    font-style: normal;
}

.results p {
    font-size: 2rem;
    font-family: 'FreightSans Pro';
    font-weight: 500;
    font-style: normal;
}

.results .u-full-width {
    height: 50px;
    border-radius: 0px;
    margin-bottom: 5px;
    font-family: 'FreightSans Pro';
    font-weight: 500;
    font-style: normal;
}

input[type="email"] {
  color: black;
}

input[type="checkbox"] {
    margin-top: 1rem;
}

.results .skip {
    clear: left;
    float: left;
    font-weight: 500;
    font-size: 1.6rem;
    padding-left: 82px;
    text-transform: uppercase;
    text-decoration: underline;
}

.results .quizLogo {
  position: absolute;
  top: 0;
  left: 0;
  margin: 2rem;
}

label > .label-body {
    display: inline;
    font-family: 'FreightSans Pro';
    font-weight: 500;
    font-style: normal;
    margin-top: .5rem;
}

.agree {
  display: inline-flex;
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

@media (max-width: 400px) {
  .quizLogo {
    margin: auto 1rem 0;
  }
  .quiz .question {
    margin: auto 1rem;
  }
  .results .content{
    margin-top: 120px;
  }
  .results h3{
    font-size: 2.5rem;
    line-height: 2.8rem;
    margin-bottom: 0.5rem;
  }
  .result-head{
    display: block;
  }
  .results p{
    font-size: 1.6rem;
    line-height: 2rem;
  }
  .agree{
    margin-bottom: 30px;
  }
  label > .label-body{
    font-size: 1.4rem;
    line-height: 1.5rem;
    margin-top: 1.8rem;
  }
  input[type="checkbox"] {
    margin-top: 2rem;
  }
  .button-back {
    display: none;
  }
  .row {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .progress-and-button {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .progress-container {
    margin: 0;
    width: 100%;
  }
  .progress-bar {
    width: 100%;
  }
  .question {
    margin: 0;
  }
  .questions-input {
    position: absolute;
    bottom: 0;
    margin-bottom: 0;
  }
  .quiz {
    position: absolute;
    bottom: 0;
    height: 100%;
  }
  .results .row {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  .results .quizLogo {
    display: none;
  }
  .results .columns.eight {
    text-align: center;
  }
  .results .columns.eight .agree {
    text-align: left;
  }
  .results .skip {
    display: block;
    padding: 0;
    float: none;
  }
}

@media only screen and (max-width: 768px) {
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
  .row {
    padding-left: 0;
    padding-right: 0;
  }
  .quiz {
    padding-top: 2rem;
  }
  .answer p {
    color: #fff;
  }
  .answer {
    opacity: 1;
    border: none;
  }
  .full-bg {
    background: url("/static/img/form_mobile.jpg");
    background-position: center top;
  }
  .question {
    font-size: 3rem;
  }
  .questions-input li,
  .questions-input li label {
    margin-bottom: 0;
  }
  .questions-input li:nth-child(1) .answer {
    background-color: #780505;
  }
  .questions-input li:nth-child(2) .answer {
    background-color: #690505;
  }
  .questions-input li:nth-child(3) .answer {
    background-color: #550505;
  }
  .questions-input li:nth-child(4) .answer {
    background-color: #460000;
  }
}

.four.columns {
  max-width: 700px;
}
.fade-enter-active {
  transition: opacity .5s;
}
</style>
