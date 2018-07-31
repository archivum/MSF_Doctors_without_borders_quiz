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

<style>
/*App shell*/
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

/*Full width container*/
.full-width-container {
    /*min-height: 100vh;
    max-height: 100vh;*/
    overflow: visible !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 0px 0px !important;
    clear: both !important;
    margin: 0 auto !important;
}
</style>
