<template lang="html">
  <div class="">
    <p>{{selectedShindig.name}}: {{selectedShindig.shindigNumber}}</p>
    <p>Latitude: {{selectedShindig.locationLat}}</p>
    <p>Longitude: {{selectedShindig.locationLong}}</p>
    <!-- map goes here -->
    <h3>Instructions:</h3><span>{{selectedShindig.instructions}}</span>

    <button @click="handleEdit">Edit Shindig</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: "show-shindig",
  props: ['selectedShindig'],
  methods: {
    handleEdit(){
      eventBus.$emit('edit-shindig', {status: true})
    }

  }
}
</script>

<style lang="css" scoped>
</style>
