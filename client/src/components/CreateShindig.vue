<template lang="html">
  <div class="newShindigForm">
    <h3>Create New Shindig</h3>
    <form method="post" @submit.prevent="createNew" class="flexContainer">
      <label for="shin-name">Name</label>
      <input type="text" name="shin-name" v-model="name">
      <label for="shin-num">Number</label>
      <input type="text" name="shin-num" v-model="number">
      <label for="shin-lat">Latitude</label>
      <input type="text" name="shin-lat" v-model="locationLat">
      <label for="shin-lon">Longitude</label>
      <input type="text" name="shin-lon" v-model="locationLong">
      <label for="shin-instr">Instructions</label>
      <input type="text" name="shin-instr" v-model="instructions">
      <label for="shin-quest">Question</label>
      <input type="text" name="shin-quest" v-model="riddleQuestion">
      <label for="shin-ans">Answer</label>
      <input type="text" name="shin-ans" v-model="riddleAnswer">

      <input type="submit" value="Create New Shindig"/>
    </form>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
    name: 'create-shindig',
    data(){
        return {
            name: "",
            shindigNumber: null,
            instructions: "",
            locationLat: null,
            locationLong: null,
            riddleQuestion: "",
            riddleAnswer: "",
            users: []
        }
    },
    methods: {
        createNew(submitEvent) {
          eventBus.$emit('create-shindig', this.$data)
        }
    }
}
</script>

<style lang="css" scoped>
.flexContainer {
  display: flex;
  flex-direction: column;
  color: black;
}

.newShindigForm {
  color: black;
}
</style>
