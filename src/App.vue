<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #app >>> .full-width-container {
    height: 100vh;
    width: 100%;
    max-width: 100%;
    clear: both;
    margin: 0 auto;
  }
  /*App shell*/

  #app >>> .row {
    padding-left: 20px;
    padding-right: 20px;
  }

  #app >>> .row-v-align {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  /*Links*/

  #app >>> a {
    color: white !important;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
  }

  #app >>> a:hover {
    /*color: white;*/
  }

  /*Button styles*/

  #app >>> button {
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
  #app >>> button:hover, #app >>> button:focus, #app >>> button:active {
    background-color: #b11515;
    color: white;
  }


  /*Full width container*/


  /*Full width background image*/
</style>
