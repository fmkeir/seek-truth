<template lang="html">
  <li @click="handleClick">{{shindig.shindigNumber}}: {{shindig.name}}</li>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'shindig-item',
  props: ['shindig'],
  methods: {
    handleClick(){
      eventBus.$emit('shindig-selected', this.shindig)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
