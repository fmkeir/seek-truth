<template lang="html">
  <div class="">

    <form method="put" @submit.prevent="handleUpdate">
      <input type="text" name="" v-model="shindig.name">
      <input type="text" name="" v-model.number="shindig.shindigNumber">
      <input type="text" name="" v-model.number="shindig.locationLat">
      <input type="text" name="" v-model.number="shindig.locationLong">
      <input type="text" name="" v-model="shindig.instructions">

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
      eventBus.$emit('edit-shindig', {
        status: false,
        editedShindig: this.shindig
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
