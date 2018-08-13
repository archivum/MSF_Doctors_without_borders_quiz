<template>
  <div class="start">
    <img class='logo' src="../../static/img/logo.svg"/>
    <div class="language-choice" @click="changeLanguage">{{ $i18n.locale === 'en' ? languages['fr'] : languages['en'] }}</div>
    <div class="full-width-container container">
      <div class="row row-v-align full-bg">
        <div class="columns " :class="bigScreen ? `five offset-by-five` : `eight offset-by-2`" v-if="showOverlay">
          <img class="overlay-close" @click="toggleOverlay" src="../../static/img/x.svg">
          <div class="overlay">
            <p class="copy1">
              {{ $t('start.info_part1') }}
            </p>
            <p class="copy2">
              {{ $t('start.info_part2') }}
            </p>
            <ul>
              <li>{{ $t('start.info_num_of_q.part1') }} <span>{{ $t('start.info_num_of_q.val') }}</span></li>
              <li>{{ $t('start.info_est_time.part1') }} <span>{{ $t('start.info_est_time.val') }}</span> {{ $t('start.info_est_time.unit') }}</li>
            </ul>
            <button>
              <router-link to="/quiz">{{ $t('start.cta') }}</router-link>
            </button>
            <div class="info-black">
              <img class="info-icon-black" src="../../static/img/info-w.svg" alt=""><span>{{ $t('start.disclaimer') }}<br><a v-bind:href="$t('start.privacy_policy')" target="_blank">{{ $t('start.disclaimer_cta') }}</a></span>
            </div>
            <div class="info-black-mobile">
              <span>{{ $t('start.disclaimer') }}<br><a v-bind:href="$t('start.privacy_policy')" target="_blank"><u>{{ $t('start.disclaimer_cta') }}</u></a></span>
            </div>
          </div>
          <div class="darken"></div>
        </div>
        <div class="columns intro-page" :class="bigScreen ? `six offset-by-six` : `eight offset-by-2`" v-else="showOverlay">
          <img class='logo-mobile' src="../../static/img/logo.svg"/><br>
          <h2 class="opacity-70">{{ $t('start.line1') }}</h2><br>
          <h2>{{ $t('start.line2') }}</h2><br>
          <h3 class="opacity-58">{{ $t('start.line3') }}</h3><br>
          <h3>{{ $t('start.line4') }}</h3>
          <br>
          <router-link to="/quiz">
            <button>
              {{ $t('start.cta') }}
            </button>
          </router-link>
          <div class="info">
            <img class="info-icon" src="../../static/img/info-b.svg" alt=""><span @click="toggleOverlay">{{ $t('start.cta_info') }}</span>
          </div>
          <div class="info-mobile">
            <span @click="toggleOverlay">{{ $t('start.cta_info_mobile') }}</span>
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
      bigScreen: true,
      languages: {
        en: 'English',
        fr: 'Français'
      }
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    $("body").css("overflow", "hidden");
  },
  methods: {
    toggleOverlay() {
      this.showOverlay = !this.showOverlay;
    },
    handleResize() {
      this.bigScreen = window.innerWidth >= 1000;
    },
    changeLanguage() {
      this.$i18n.locale === 'en' ? this.$i18n.locale = 'fr' : this.$i18n.locale = 'en'
      this.setLangParam()
    },
    setLangParam() {
      this.$i18n.locale === 'en' ? this.$router.push({ query: { lang: 'en' } }) : this.$router.push({ query: { lang: 'fr' } })
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
  top: 50px;
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
  width: 10rem;
}

.language-choice {
  position: absolute;
  z-index: 2;
  right: 15px;
  top: 10px;
  padding: 2px 7px;
  color: #fff;
  background-color: #000;
  font-weight: bold;
  text-decoration: underline;
}

.language-choice:hover {
  cursor: pointer;
  text-decoration: none;
  background-color: #3d3d3d;
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
  line-height: 2.3rem;
  white-space: inherit;
  min-height: 55px;
  background-color: #ea0029;
  border-radius: 50px;
  border: none;
  min-width: 275px;
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
  margin-right: -20%;
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
  padding-bottom: 16rem;
  padding-right: 10px;
}

.info-mobile {
  text-align: center;
  text-decoration: underline;
}
.logo-mobile {
  width: 8rem;
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
@media (max-width: 768px) {
  .full-width-container.container {
    position: absolute;
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
    margin: 0.5rem 0;
    margin-bottom: 2rem;
  }
  .overlay {
    text-align: center;
    margin-top: 20px;
  }
  .overlay-close {
    top: 50px;
    right: 20px;
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
