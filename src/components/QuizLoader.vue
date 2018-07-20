<template>
    <div class="quiz-loader" :style="backgroundUrl ? { 'background-image': 'url(' + backgroundUrl + ')' } : {'background-color': '#fff'}">
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
    visible: {
        type: Boolean,
        default: () => false
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
        $('.quiz-loader').fadeIn(300)
        setTimeout(function() {
            vm.$parent.resetAnimation()
            $('.quiz-loader').fadeOut(300, function() { vm.$parent.showLoader = false })
            $('.quiz-container').css('opacity', '1')
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

img {
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
}
</style>