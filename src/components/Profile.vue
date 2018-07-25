<template>
  <div class="full-width-container container">
    <div class="row block-header">
      <div class="block-header-content">
        <div class="block-head">
            <h3><span>Your humanitarian and worker profile is</span></h3>
            <h2><span>{{ profile.title }}</span></h2>
        </div>
            <p>{{ profile.desc }}</p>
            <h4>Tell your friends you're<span class="profile-title">{{ profile.title }}</span></h4>
            <button @click="showModal">Share Now</button>
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
          “{{ profile.quote }}”<span> – {{ profile.author }}</span>
        </div>
        <h4>Tell your friends you're<span class="profile-title">{{ profile.title }}</span></h4>
        <button @click="showModal">Share Now</button>
      </div>
    </div>
    <modal name="share-modal" :adaptive="true" width="50%" :maxWidth="600" :minWidth="300">
        <div class="share-modal">
            <div class="sharing-element" @click="shareFb">Facebook Share&nbsp;&nbsp;&nbsp;<i class="fab fa-facebook-square"></i></div>
            <a class="sharing-element" target="_blank" href="https://twitter.com/home?status=http%3A//msfquiz.candy-staging.com">Twitter Share&nbsp;&nbsp;&nbsp;<i class="fab fa-twitter"></i></a>
            <div class="sharing-element" @click="copyClipboard">{{ !copied ? `Copy Link` : `Copied !` }}&nbsp;&nbsp;&nbsp;<i class="fas fa-link"></i></div>
            <button disabled>SAVE & SHARE&nbsp;&nbsp;&nbsp;<i class="fa fa-triangle"></i></button>
        </div>
    </modal>
  </div>
</template>

<script>
import {profiles} from '../lib/utils.js'
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
    },
    computed: {
        profile() {
            return profiles.profile[this.$route.params.id]
        }
    },
    methods: {
        showModal () {
            this.$modal.show('share-modal');
        },
        shareFb () {
            console.log(document.location.origin);
            FB.ui({
              method: 'share',
              href: document.location.origin,
              picture: document.location.origin + '/static/img/fb-share.png'
            }, function(response){});
        },
        copyClipboard () {
            const el = document.createElement('textarea');
            el.value = window.location.href;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            this.copied = true
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
    min-height: 650px;
    background-image: url("../../static/img/world.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
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
    min-height: 100vw;
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
        font-size: 1.5rem;
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
