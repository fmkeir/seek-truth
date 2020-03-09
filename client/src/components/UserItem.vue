<template lang="html">
  <li class="li-user" @click="handleClick">{{ user.codeName }}</li>
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
.li-user {
  color: red;
  padding: 15px;
  margin: auto;
  text-align: left;
}

</style>
