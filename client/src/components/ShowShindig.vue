<template lang="html">
  <div class="">
    <button @click="handleEdit">Edit Shindig</button>
    <p>{{selectedShindig.name}}: {{selectedShindig.shindigNumber}}</p>
    <p>Latitude: {{selectedShindig.locationLat}}</p>
    <p>Longitude: {{selectedShindig.locationLong}}</p>
    <!-- map goes here -->
    <p>Instructions:</p><span>{{selectedShindig.instructions}}</span>
    <p>Question:{{selectedShindig.riddleQuestion}}</p>
    <p>Answer:{{selectedShindig.riddleAnswer}}</p>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: "show-shindig",
  props: ['selectedShindig'],
  methods: {
    handleEdit(){
      eventBus.$emit('show-edit-shindig')
    },
  }
}
</script>

<style lang="css" scoped>
</style>
