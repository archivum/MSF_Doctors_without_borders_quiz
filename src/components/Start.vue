<template>
  <div>
    <img class='logo' src="../../static/img/logo-lg.png"/>
    <div class="full-width-container container">
      <div class="row row-v-align full-bg">
        <div class="five offset-by-five columns " v-if="showOverlay">
          <img class="overlay-close" @click="toggleOverlay" src="../../static/img/x.svg">
          <div class="overlay">
            <p class="copy1">
              All Doctors Without Borders/Médecins Sans Frontières (MSF) humanitarian aid workers are compassionate,
              adventurous, and able to think on their feet. But each of them has unique skills which make them
              well-suited for their particular jobs.
            </p>
            <p class="copy2">
              What kind of humanitarian aid worker are you? Take our quick quiz to find out. It’s fun, it’s short,
              you’ll learn more about MSF, and you’ll find your fit in the work we do.
            </p>
            <ul>
              <li>Questions: <span>5</span></li>
              <li>Estimated Time: <span>2 min</span></li>
            </ul>
            <button>
              <router-link to="/quiz">Start Quiz</router-link>
            </button>
            <div class="info-black">
              <img class="info-icon-black" src="../../static/img/info-w.svg" alt=""><span>Your answers shed light on prevailing attitudes and preferences
which in turn inform our fundraising decisions. People like you
help us tell the story of the people who need us. Thank you! <a href="">View our Privacy Policy here.</a></span>
            </div>
          </div>
          <div class="darken"></div>
        </div>
        <div class="six offset-by-six columns" v-else="showOverlay">
          <h2>Take the doctors <br>without borders quiz</h2><br>
          <h3>What kind of humanitarian<br> aid worker are you?</h3>
          <br>
          <button>
            <router-link to="/quiz">Start Quiz</router-link>
          </button>
          <div class="info">
            <img class="info-icon" src="../../static/img/info-b.svg" alt=""><span @click="toggleOverlay">Click for more information</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  /* eslint-disable */

  export default {
    name: 'Start',
    data() {
      return {
        showOverlay: false
      }
    },
    methods: {
      toggleOverlay() {
        this.showOverlay = !this.showOverlay;
      }
    }
  }

</script>

<style scoped>



  .row {
    padding-left: 20px;
    padding-right: 20px;
  }

  .overlay {
    position: relative;
    z-index: 1;
  }

  .overlay-close {
    position: absolute;
    z-index: 1;
    top: 40px;
    right: 40px;
    font-size: 40px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }

  .logo {
    position: absolute;
    z-index: 2;
    left: 40px;
    top: 25px;
  }

  .full-bg {
    background: url("../../static/img/start.jpg") center center;
    height: 100vh;
    background-size: cover;
    background-repeat:  no-repeat;
    background-attachment: fixed;
  }

  .darken {
    position: absolute;
    background-color: black;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    opacity: 0.7;
    z-index: 0;
  }

  .container {
    text-align: left;
    color: white;
  }


  p {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
    cursor: pointer;
  }

  .text-boxy {

  }

  ul {
    margin-bottom: 0;
    list-style-type: none;
    font-family: 'FreightSans Pro';
    font-weight: 500;
    font-style: normal;
  }

  ul span {
    font-weight: bold;
  }

  h2 {
    display: inline;
    box-shadow: 10px 0 0 #ea0029, -10px 0 0 #ea0029;
    color: white;
    font-size: 38px;
    text-align: left;
    background-color: #ea0029;
    line-height: 58px;
    text-transform: uppercase;
    font-family: 'FreightSans Pro';
    font-weight: bold;
    font-style: normal;
  }

  h3 {
    display: inline;
    box-shadow: 10px 0 0 #231f20, -10px 0 0 #231f20;
    color: white;
    font-size: 37px;
    text-align: left;
    background-color: #000000;
    line-height: 55px;
    /*text-transform: uppercase;*/
    /*font-weight: bold;*/
    font-family: 'FreightSans Pro';
    font-weight: 500;
    font-style: normal;
  }

  button {
    margin-top: 20px;
    margin-left: -10px;
    font-family: 'FreightSans Pro';
    font-weight: bold;
    font-style: normal;
  }


  .info-black {
    margin-left: -10px;
    margin-top: 5px;
    cursor: pointer;
  }

  .copy1 {
    font-size: 19px;
    font-family: 'FreightSans Pro Book';
    font-weight: normal;
    font-style: normal;
  }


  .copy2 {
    font-size: 22px;
    font-family: 'FreightSans Pro';
    font-weight: bold;
    font-style: normal;
  }
  .info {
    color: #231f20;
    margin-left: -10px;
    margin-top: 5px;
    text-decoration: underline;
    cursor: pointer;
    font-family: 'FreightSans Pro';
    font-weight: 500;
    font-style: normal;
  }
  .info span {
    margin-left: 10px;
  }

  .info span {
    margin-left: 7px;
  }

  .info-icon {
    float: left;
    display: inline-block;
    height: 23px;
    width: 23px;

  }

  .info-icon-black {
    float: left;
    display: inline-block;
    height: 23px;
    width: 23px;
    padding-bottom: 30px;
    padding-right: 10px;
  }

    .row-v-align {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    /*Links*/

    a {
      color: white !important;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
    }

    a:hover {
      /*color: white;*/
    }

    /*Button styles*/

    button {
      height: 55px;
      background-color: #ea0029;
      border-radius: 50px;
      border: none;
      width: 275px;
      font-size: 24px;
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
      font-weight: 600;
      font-style: normal;
    }
    button:hover, button:focus, button:active {
      background-color: #b11515;
      color: white;
    }


    /*Full width container*/

    .full-width-container {
      height: 100vh;
      width: 100%;
      max-width: 100%;
      clear: both;
      margin: 0 auto;
    }

    /*Full width background image*/
</style>
