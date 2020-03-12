<template lang="html">
  <div id="user-page">
    <div class="page-container">
      <header>
        <h1>Welcome to the revelation John.</h1>
        <h2>{{shindig.name}}, Shindig {{shindig.shindigNumber}}</h2>
        <h2>Instructions: <br/><br/> {{shindig.instructions}}</h2>
      </header>
      <display-map
        :latitude="shindig.locationLat"
        :longitude="shindig.locationLong"
        />
    </div>
  </div>
</template>

<script>
import DisplayMap from '@/components/DisplayMap.vue'

export default {
  name: 'user-page',
  components: {
    'display-map': DisplayMap
  },
  props: ['user', 'shindig']
}
</script>

<style lang="css" scoped>
header {
  justify-content: center;
  text-align: center;
  padding: 2em;
}
#user-page {
  width: 100vw;
  height: 100vh;
  padding-top: 2em;
  background: #202020;
  background: -webkit-linear-gradient(to bottom, #434343, #202020);
  background: linear-gradient(to bottom, #434343, #202020);
  background-size: 100% 300%;
}

.page-container {
  display: grid;
  grid-template-rows: 1fr 5fr;
  width: auto;
  max-width: 70%;
  height: 90%;
  line-height: 20px;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  font-family: 'Nanum Gothic Coding', monospace;
}

h1 {
  padding-bottom: 1em;
  font-size: 24px;
  justify-self: center;
}

display-map {
  border: 5px solid white;
}
</style>
