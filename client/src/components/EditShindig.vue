<template lang="html">
  <div class="">
    <form method="put">
      <input type="text" name="" :value="selectedShindig.name">
      <input type="text" name="" :value="selectedShindig.shindigNumber">
      <input type="text" name="" :value="selectedShindig.locationLat">
      <input type="text" name="" :value="selectedShindig.locationLong">
      <input type="text" name="" :value="selectedShindig.instructions">

      <button @click="handleUpdate">Confirm changes</button>
    </form>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: "show-shindig",
  props: ['selectedShindig'],
  methods: {
    handleUpdate(){
      eventBus.$emit('edit-shindig', false)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
