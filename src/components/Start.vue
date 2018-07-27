<template>
  <div class="start">
    <img class='logo' src="../../static/img/logo-lg.png"/>
    <div class="full-width-container container">
      <div class="row row-v-align full-bg">
        <div class="columns " :class="bigScreen ? `five offset-by-five` : `eight offset-by-2`" v-if="showOverlay">
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
              <li>Estimated Time: <span>2</span> min</li>
            </ul>
            <button>
              <router-link to="/quiz">Start Quiz</router-link>
            </button>
            <div class="info-black">
              <img class="info-icon-black" src="../../static/img/info-w.svg" alt=""><span>Your answers shed light on prevailing attitudes and preferences
which in turn inform our fundraising decisions. People like you
help us tell the story of the people who need us. Thank you!<br><a href="http://www.doctorswithoutborders.ca/privacy-notice" target="_blank">View our Privacy Policy here.</a></span>
            </div>
            <div class="info-black-mobile">
              <span>Your answers shed light on prevailing attitudes and preferences
which in turn inform our fundraising decisions. People like you
help us tell the story of the people who need us. Thank you!<br><a href="http://www.doctorswithoutborders.ca/privacy-notice" target="_blank">View our <u>Privacy Policy</u> here.</a></span>
            </div>
          </div>
          <div class="darken"></div>
        </div>
        <div class="columns intro-page" :class="bigScreen ? `six offset-by-six` : `eight offset-by-2`" v-else="showOverlay">
          <img class='logo-mobile' src="../../static/img/logo-black.svg"/><br>
          <h2 class="opacity-70">Take the doctors</h2><br>
          <h2>Without borders quiz</h2><br>
          <h3 class="opacity-58">What kind of humanitarian</h3><br>
          <h3>aid worker are you?</h3>
          <br>
          <router-link to="/quiz">
            <button>
              Start Quiz
            </button>
          </router-link>
          <div class="info">
            <img class="info-icon" src="../../static/img/info-b.svg" alt=""><span @click="toggleOverlay">Click for more information</span>
          </div>
          <div class="info-mobile">
            <span @click="toggleOverlay">Tap here for more information</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "Start",
  data() {
    return {
      showOverlay: false,
      bigScreen: true
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    $("body").css("overflow", "hidden");

    // luminateExtend.api({
    //   api: "cons",
    //   callback: this.myLoginTestCallback,
    //   data: "method=loginTest"
    // });
    // 1565 - survey ID

    luminateExtend.api([{
      async: false,
      api: 'survey',
      data: 'method=getSurvey&survey_id=1565',
      requiresAuth: true,
      callback: {
        success: this.myLoginTestCallback
      }
    }]);
  },
  methods: {
    toggleOverlay() {
      this.showOverlay = !this.showOverlay;
    },
    //      isMobile() {
    //        return (/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent);
    //      },
    handleResize() {
      this.bigScreen = window.innerWidth >= 1000;
      //if(this.isMobile()){
      //    $('.full-width-container').css({ height: $(window).height() });
      //}
    },
    myLoginTestCallback(data) {
      console.log(data);
    }
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped>
/*Links*/
a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

/*Full width container*/
.full-width-container {
  height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 0px 0px;
  clear: both;
  margin: 0 auto;
}

.row {
  padding-left: 20px;
  padding-right: 20px;
}

.row-v-align {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  height: 25px;
  width: 25px;
  cursor: pointer;
}

.logo {
  position: absolute;
  z-index: 2;
  left: 40px;
  top: 25px;
}

.full-bg {
  background: url("../../static/img/start.jpg") top center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
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

ul {
  margin-bottom: 0;
  font-size: 1.8rem;
  list-style-type: none;
  font-family: "FreightSans Pro";
  font-weight: 500;
  font-style: normal;
}

ul span {
  margin-left: 7px;
  font-weight: bold;
}

h2 {
  display: inline;
  box-shadow: 10px 0 0 rgba(238, 0, 0, 1), -10px 0 0 rgba(238, 0, 0, 1);
  color: white;
  /*    font-size: 38px;*/
  /*    line-height: 58px;*/
  font-size: 3.8rem;
  line-height: 5.8rem;
  text-align: left;
  background-color: rgba(238, 0, 0, 1);
  text-transform: uppercase;
  font-family: "FreightSans Pro";
  font-weight: bold;
  font-style: normal;
}

h2.opacity-70 {
  box-shadow: 10px 0 0 rgba(238, 0, 0, 0.7), -10px 0 0 rgba(238, 0, 0, 0.7);
  background-color: rgba(238, 0, 0, 0.7);
}

h3 {
  display: inline;
  box-shadow: 10px 0 0 rgba(35, 31, 32, 1), -10px 0 0 rgba(35, 31, 32, 1);
  color: white;
  font-size: 3.7rem;
  line-height: 5.5rem;
  text-align: left;
  background-color: rgba(35, 31, 32, 1);
  /*text-transform: uppercase;*/
  /*font-weight: bold;*/
  font-family: "FreightSans Pro";
  font-weight: 500;
  font-style: normal;
}

h3.opacity-58 {
  box-shadow: 10px 0 0 rgba(35, 31, 32, 0.58), -10px 0 0 rgba(35, 31, 32, 0.58);
  background: rgba(35, 31, 32, 0.58);
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
  font-family: "FreightSans Pro";
  font-weight: bold;
  font-style: normal;
  margin-top: 20px;
  margin-left: -10px;
}

button:hover,
button:focus,
button:active {
  background-color: #b11515;
  color: white;
}

.overlay button {
  margin-top: 5px;
  margin-left: 0px;
}

.info-black {
  margin-left: 0px;
  margin-top: 5px;
  cursor: pointer;
  font-family: "FreightSans Pro";
  font-weight: 600;
  font-style: normal;
  line-height: 2rem;
  font-size: 1.5rem;
}

.info-black a {
  font-family: "FreightSans Pro";
  font-weight: 600 !important;
  font-style: normal;
  text-decoration: underline !important;
}

.copy1 {
  font-size: 1.9rem;
  font-family: "FreightSans Pro Book";
  font-weight: 300;
  font-style: normal;
  line-height: 2.3rem;
}

.copy2 {
  font-size: 2.2rem;
  font-family: "FreightSans Pro";
  font-weight: 600;
  font-style: normal;
  line-height: 2.8rem;
}
.info {
  color: #231f20;
  margin-left: -10px;
  margin-top: 5px;
  text-decoration: underline;
  cursor: pointer;
  font-family: "FreightSans Pro";
  font-weight: 500;
  font-style: normal;
}

.info span {
  margin-left: 7px;
  font-size: 1.6rem;
}

.info-black a:hover,
.info:hover {
  color: #ea0029;
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
  padding-bottom: 7rem;
  padding-right: 10px;
}

.info-mobile {
  text-align: center;
  text-decoration: underline;
}
.logo-mobile {
  width: 199px;
}
/* Larger than mobile */
@media (min-width: 420px) {
  h2 {
    font-size: 3.8rem;
    line-height: 5.8rem;
  }
  h3 {
    font-size: 3.7rem;
    line-height: 5.5rem;
  }
  .logo-mobile,
  .info-mobile,
  .info-black-mobile {
    display: none;
  }
}

@media (max-width: 420px) {
  .logo,
  .info,
  .info-black {
    display: none;
  }
  .intro-page {
    margin: auto 0 1rem;
  }
  h2 {
    font-size: 3rem;
    line-height: 4.5rem;
  }
  h3 {
    font-size: 2.8rem;
    line-height: 4rem;
    font-weight: 600;
  }
  .full-bg {
    background: url("../../static/img/start_mobile.jpg") center center;
    background-size: cover;
  }
  button {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
  .overlay {
    text-align: center;
    margin-top: 20px;
  }
  .overlay-close {
    top: 10px;
    right: 10px;
  }
  .copy1 {
    margin-bottom: 1.5rem;
    text-align: left;
    font-size: 1.8rem;
    line-height: 2.1rem;
  }
  .copy2 {
    margin-bottom: 1.5rem;
    text-align: left;
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
  .overlay li {
    margin-bottom: 0.5rem;
    line-height: 1.8rem;
    text-align: left;
  }
  .overlay button {
    margin: 1.5rem auto;
  }
  .info-black-mobile {
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding: 0 3.2rem;
  }
}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {
}

/* Larger than tablet */
@media (min-width: 750px) {
}

/* Larger than desktop */
@media (min-width: 1000px) {
}

/* Larger than Desktop HD */
@media (min-width: 1200px) {
}
</style>
