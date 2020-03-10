<template lang="html">
  <div class="">

    <form method="put" @submit.prevent="handleUpdate" class="flexContainer">
      <label for="shin-name">Name</label>
      <input type="text" name="shin-name" v-model="shindig.name">
      <label for="shin-num">Number</label>
      <input type="text" name="shin-num" v-model.number="shindig.shindigNumber">
      <label for="shin-lat">Latitude</label>
      <input type="text" name="shin-lat" v-model.number="shindig.locationLat">
      <label for="shin-lon">Longitude</label>
      <input type="text" name="shin-lon" v-model.number="shindig.locationLong">
      <label for="shin-instr">Instructions</label>
      <input type="text" name="shin-instr" v-model="shindig.instructions">
      <label for="shin-quest">Question</label>
      <input type="text" name="shin-quest" v-model="shindig.riddleQuestion">
      <label for="shin-ans">Answer</label>
      <input type="text" name="shin-ans" v-model="shindig.riddleAnswer">

      <input type="submit" value="Confirm changes"/>
    </form>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: "show-shindig",
  props: ['selectedShindig'],
  data() {
    return {
      shindig: Object.assign({}, this.selectedShindig)
    }
  },
  methods: {
    handleUpdate(){
      eventBus.$emit('submit-edit-shindig', this.shindig)
    }
  }
}
</script>

<style lang="css" scoped>

.flexContainer {
  display: flex;
  flex-direction: column;
}

.flexContainer input {
  max-width: 50%;
  margin: auto;
}
.flexContainer label {
  max-width: 50%;
  margin: auto;
}
</style>
