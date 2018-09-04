<template>
  <div class="full-width-container container">
    <div class="row block-header">
      <div class="block-header-content">
        <div class="block-head">
            <h3><span>{{ $t('profile.header') }}</span></h3>
            <h2><span>{{ profile.title }}</span></h2>
        </div>
            <p>{{ profile.desc }}</p>
            <h4>{{ $t('profile.tell') }}<span class="profile-title">{{ profile.prefix }} {{ profile.title }}</span></h4>
            <button @click="showModal">{{ $t('profile.share') }}</button>
      </div>
    </div>
    <div class="row block-copy">
      <div class="eight offset-by-two columns">
        <p>{{ profile.paragraph }}
        </p>
      </div>
    </div>
    <div class="row block-img">
    </div>
    <div class="row block-quote">
      <div class="eight offset-by-two columns">
        <div class="quote">
          {{ profile.quote }}<span v-html="profile.author">{{ profile.author }}</span>
        </div>
        <h4>{{ $t('profile.tell') }}<span class="profile-title">{{ profile.prefix }} {{ profile.title }}</span></h4>
        <button @click="showModal">{{ $t('profile.share') }}</button>
      </div>
    </div>
    <modal name="share-modal" :adaptive="true" width="50%" :maxWidth="600" :minWidth="300">
        <div class="share-modal">
            <div class="sharing-element" @click="shareFb">{{ $t('profile.fbShare') }}&nbsp;&nbsp;&nbsp;<i class="fab fa-facebook-square"></i></div>
            <a class="sharing-element" target="_blank" :href="twitterMessage">{{ $t('profile.tweetShare') }}&nbsp;&nbsp;&nbsp;<i class="fab fa-twitter"></i></a>
            <div class="sharing-element" @click="copyClipboard">{{ !copied ? $t('profile.copyLink') : $t('profile.copied') }}&nbsp;&nbsp;&nbsp;<i class="fas fa-link"></i></div>
            <button disabled>{{ $t('profile.saveShare') }}&nbsp;&nbsp;&nbsp;<i class="fa fa-triangle"></i></button>
        </div>
    </modal>
  </div>
</template>

<script>
import {profiles, profiles_fr} from '../lib/utils.js'
  /* eslint-disable */

  export default {
    name: 'Profile',
    data() {
        return {
            copied: false
        }
    },
    mounted() {
        $('body').css('overflow','auto');
        $('body').css('background','transparent');
        $(window).scrollTop(0);
        if(window.innerWidth > 420) $(window).on('scroll',this.scrollFunction);
        this.setLangParam()
    },
    computed: {
        profile() {
            return this.$i18n.locale === 'en' ? profiles.profile[this.$route.params.id] : profiles_fr.profile[this.$route.params.id]
        },
        profileName() {
            let result = this.profile.title.split(' ')
            let pre = this.profile.prefix.toLowerCase();
            let string = result[0];

            for (let i = 1; i < result.length; i++) {
                string += ' ' + result[i]
            }
            return pre + ' ' + string
        },
        twitterMessage() {
            let twitterBlurb = (this.$i18n.locale === 'en') ? `I%20am%20` + this.profileName + `.%20Take%20this%20quiz%20by%20Doctors%20Without%20Borders%20to%20find%20out%20what%20kind%20of%20humanitarian%20aid%20worker%20you%20are%3a` : `Je%20suis%20` + this.profileName + `.%20R%C3%A9pondez+au+jeu-questionnaire+de+M%C3%A9decins+Sans+Fronti%C3%A8res+et+d%C3%A9couvrez+quel+type+de+travailleur+humanitaire+vous+%C3%AAtes.`
            return (this.$i18n.locale === 'en') ? `https://twitter.com/intent/tweet?text=` + twitterBlurb + `%20http%3A//quiz.doctorswithoutborders.ca%20via%20%40MSF_Canada` : `https://twitter.com/intent/tweet?text=` + twitterBlurb + `%20http%3A//quiz.doctorswithoutborders.ca/?lang=fr%20via%20%40MSF_Canada`;
        }
    },
    methods: {
        showModal () {
            this.$modal.show('share-modal');
        },
        shareFb () {
            // let newTitle = (this.$i18n.locale === 'en') ? 'I am ' + this.profileName : 'Je suis ' + this.profileName
            let newTitle = (this.$i18n.locale === 'en') ? 'What kind of humanitarian are you?' : 'Quel type de travailleur humanitaire êtes-vous?'
            let desc = (this.$i18n.locale === 'en') ? 'Take the Doctors Without Borders Quiz to find out.' : 'Jeu-questionnaire de Médecins Sans Frontières.'
            let newURL = (this.$i18n.locale === 'en') ? document.location.origin : document.location.origin + '/?lang=fr'

            // Facebook share option 1
            FB.ui({
                method: 'share_open_graph',
                action_type: 'og.shares',
                action_properties: JSON.stringify({
                    object: {
                        'og:url': newURL,
                        'og:title': newTitle,
                        'og:description': desc,
                        'og:image': document.location.origin + '/static/img/share-picture.jpg',
                    }
                })
            },
            function (response) {
            // Action after response
            });
            // Facebook share option 2
            // FB.ui({
            //     method: 'feed',
            //     link: document.location.origin
            // },
            // function (response) {
            // // Action after response
            // });
        },
        copyClipboard () {
            const el = document.createElement('textarea');
            el.value = window.location.origin;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            this.copied = true
        },
        scrollFunction () {
            this.scrollImage('.block-header');
            this.scrollImage('.block-img');
        },
        scrollImage (elem) {
            var e = $(elem)[0].getBoundingClientRect();

            var winTop = $(window).scrollTop();
            var winHeight = window.innerHeight;
            var setPos = (Math.abs(e.top-winHeight)/(winHeight+e.height))*100;
            setPos = 100 - setPos;
            if(setPos >= 0 && setPos <= 100) $(elem).css('background-position','center '+setPos+'%');
        },
        setLangParam() {
            if (this.$route.query.lang === 'fr' || this.$i18n.locale === 'fr') {
              this.$router.push({ query: { lang: 'fr' }})
              this.$i18n.locale = 'fr'
            }
            else if ( this.$route.query.lang === undefined || this.$route.query.lang === 'en' || this.$i18n.locale === 'en') {
              this.$router.push({ query: { lang: 'en' }})
              this.$i18n.locale = 'en'
            }
        }
    }
  }
</script>

<style scoped>

body {
    background-color: white;
}

/*Links*/
a {
    color: white !important;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
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
    padding-left: 20px;
    padding-right: 20px;
}

p {
    color: #231f20;
    margin-bottom: 0;
    font-size: 20px;
    font-family: 'FreightSans Pro Book';
    font-weight: normal;
    font-style: normal;
}

.columns {
    margin-top: 40px;
    margin-bottom: 40px;
}

.block-header {
    min-height: 75vh;
    /* min-height: 100vh; */
    background-image: url("../../static/img/world.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.block-header:after{
    content:'';
    min-height:inherit;
}

.block-header p {
    color: #ea0029;
    font-size: 2.8rem;
    text-align: left;
    font-family: 'FreightSans Pro';
    font-weight: 600;
    line-height: 3.3rem;
}

h2 {
    color: white;
    text-align: left;
    margin-top: 5px;
}

h2 span {
    display: inline;
    box-shadow: 10px 0 0 #ea0029, -10px 0 0 #ea0029;
    background-color: #ea0029;
    text-transform: uppercase;
    font-weight: bold;
}

h3 {
    color: white;
    text-align: left;
    margin-bottom: 3px;
    line-height: 28px
}

h3 span {
    display: inline;
    box-shadow: 10px 0 0 #000000, -10px 0 0 #000000;
    font-size: 2.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: #231f20;
    font-family: 'FreightSans Pro';
    font-weight: 600;
    font-style: normal;
}

.block-header-content {
    max-width: 750px;
    font-family: 'FreightSans Pro';
    font-weight: 600;
    font-style: normal;
}
.profile-title{
    display: block;
}
.block-copy p {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 15px;
    padding-right: 15px;
    font-family: 'FreightSans Pro Book';
    font-weight: normal;
    font-style: normal;
    font-size: 2.1rem;
    text-align: left;
}
.block-copy span{
    padding-top: 20px;
    display: block;
}

.block-img {
    min-height: 75vh;
    /* min-height: 100vh; */
    background-image: url("../../static/img/pro1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.block-quote p{
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
}
.quote {
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 33px;
    color: #ea0029;
    line-height: 40px;
    font-family: 'FreightSans Pro';
    font-weight: 600;
    font-style: normal;
    text-align: left;
}

.quote span {
    color: #231f20;
    font-size: 28px;
    display: block;
    text-align: left;
}

h4 {
    color: #231F20;
    font-size: 19px;
    text-transform: uppercase;
    padding-top: 55px;
    font-family: 'FreightSans Pro';
    font-weight: bold;
    font-style: normal;
}

h4 span {
    color: #ea0029;
}

/*Button styles*/
button {
    height: 55px;
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
    font-family: 'FreightSans Pro';
    font-weight: 600;
    font-style: normal;
}

button:hover, button:focus, button:active {
    background-color: #b11515;
    color: white;
}

/* Modal */

.share-modal {
    background-color: #ea0029;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px 0px 20px 20px;
    -moz-border-radius: 0px 0px 20px 20px;
    -webkit-border-radius: 0px 0px 20px 20px;
}

.share-modal button {
    width: 100%;
    -webkit-box-shadow: 2px -10px 10px -3px rgba(0,0,0,0.15);
    -moz-box-shadow: 2px -10px 10px -3px rgba(0,0,0,0.15);
    box-shadow: 2px -10px 10px -3px rgba(0,0,0,0.15);
    margin-bottom: -1rem !important;
}

.share-modal button:hover {
    background-color: #ea0029;
    cursor: default;
}

.sharing-element {
     font-weight: 600;
     width: 100%;
     flex-basis: 25%;
     display: flex;
     align-items: center;
     justify-content: center;
     color: #fff;
     font-size: 2rem;
     transition: all .3s;
     -moz-transition: all .3s;
     -webkit-transition: all .3s;
}

.sharing-element:hover {
    background-color: #b11515;
    cursor: pointer;
}

@media (max-width: 767px) {
    h2{
        font-size: 2.6rem;
/*        line-height: 2.6rem;*/
    }
    h3{
        order: 1;
        margin-bottom: 0px;
    }
    h3 span{
        font-size: 2.1rem;
        line-height: 2.1rem;
    }
    h4{
        padding-top: 0px;
    }
    .block-header{
        background-size: 100% 230px;
        background-position: center top;
        min-height: 100%;
        display: block;
    }
    .block-header button{
        margin-bottom: 2rem;
    }
    .block-head{
        height: 230px;
        flex-direction: column-reverse;
        display: flex;
        margin-bottom: 15px;
    }
    .block-header-content h4{
        font-size: 1.8rem;
    }
    .block-header p{
        font-size: 1.8rem;
        line-height: 2.1rem;
        margin-bottom: 3vh;
    }
    .block-copy p{
        font-size: 1.8rem;
        line-height: 2rem;
        padding: 0;
    }
    .quote{
        font-size: 1.8rem;
        line-height: 2.2rem;
    }
    .quote span{
        font-size: 1.5rem;
    }
    .columns{
        margin-top: 0px;
        margin-bottom: 15px;
    }
}

</style>
