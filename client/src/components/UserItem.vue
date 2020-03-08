<template lang="html">
  <li @click="handleClick">{{ user.codeName }}</li>
</template>

<script>
import { eventBus } from '@/main.js'


export default {
  name: 'user-item',
  props: ['user'],
  methods: {
    handleClick(){
      eventBus.$emit('user-selected', this.user)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
