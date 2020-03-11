<template lang="html">
  <div class="">

    <form method="put" @submit.prevent="handleUpdate" class="flexContainer">
      <label for="shin-name">Name</label>
      <input type="text" name="shin-name" v-model="shindig.name" required>
      <label for="shin-num">Number</label>
      <input type="text" name="shin-num" v-model.number="shindig.shindigNumber" required>
      <label for="shin-lat">Latitude</label>
      <input type="text" name="shin-lat" v-model.number="shindig.locationLat" required>
      <label for="shin-lon">Longitude</label>
      <input type="text" name="shin-lon" v-model.number="shindig.locationLong" required>
      <label for="shin-instr">Instructions</label>
      <input type="text" name="shin-instr" v-model="shindig.instructions" required>
      <label for="shin-quest">Question</label>
      <input type="text" name="shin-quest" v-model="shindig.riddleQuestion" required>
      <label for="shin-ans">Answer</label>
      <input type="text" name="shin-ans" v-model="shindig.riddleAnswer" required>
      <display-map
      :longitude="shindig.locationLong"
      :latitude="shindig.locationLat"
      />
      <input type="submit" value="Confirm changes"/>
    </form>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import DisplayMap from '@/components/DisplayMap.vue'

export default {
  name: "show-shindig",
  props: ['selectedShindig'],
  components: {
    'display-map': DisplayMap
  },
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
