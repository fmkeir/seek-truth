<template lang="html">
  <li @click="handleClick">{{shindig.name}}</li>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'shindig-item',
  props: ['shindig'],
  methods: {
    handleClick(){
      eventBus.$emit('shindig-selected', this.shindig._id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
