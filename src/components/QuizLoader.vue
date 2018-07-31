<template>
    <div class="quiz-loader" :style="backgroundUrl ? { 'background-image': 'url(' + backgroundUrl + ')' } : {'background-color': '#fff'}">
        <div class="progress-container">
            <div class="progress" v-bind:style="{ width: progress  + '%' }"></div>
            <div class="progress-bar"></div>
        </div>
        <img src="/static/img/logo.svg" width="100" class="img-loader">
    </div>
</template>

<script>
export default {

  name: 'QuizLoader',

  data () {
    return {

    }
  },
  props: {
    backgroundUrl: {
        type: String,
        required: false
    },
    quizLogo: {
        type: String,
        required: false
    },
    visible: {
        type: Boolean,
        default: () => false
    },
    progress:  {
        type: Number,
        required: false
    },
    timeout: {
        type: Number,
        required: false
    }
  },
  created() {
    this.showLoader()
  },
  watch: {
    visible(newValue, oldValue) {
        if(newValue) {
            this.showLoader()
        }
    }
  },
  methods: {
    showLoader() {
        let vm = this
        $('.quiz-loader').fadeIn(vm.timeout / 2)
        setTimeout(function() {
            vm.$parent.resetAnimation()
            $('.quiz-loader').fadeOut(vm.timeout / 2, function() { vm.$parent.showLoader = false })
            $('.quiz-container').css('opacity', '1')
            vm.$parent.newQuestion = true
        }, vm.timeout ? vm.timeout : 1000)
    }
  }
}
</script>

<style lang="css" scoped>
.quiz-loader {
    display: block;
    z-index: 999999;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-position: center center;
}
@media (min-width: 768px){
    .quizLogo,
    .progress-container {
        display: none;
    }
}
.quizLogo {
    float: left;
    margin: auto 1rem 0;
    padding-top: 2rem;
}
.quizLogo img {
    width: 160px;
}
.progress-container {
    float: left;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
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
    width: 100%;
}
.progress,
.progress-bar {
    height: 10px;
}

.img-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 768px) {
    .quiz-loader {
        background-position: center top;
    }
    .quizLogo img {
        width: 40vw;
    }
}

</style>