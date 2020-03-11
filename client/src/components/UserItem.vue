<template lang="html">
  <li @click="handleClick" :class="checkedInClass">{{ user.codeName }}</li>
</template>

<script>
import { eventBus } from '@/main.js'


export default {
  name: 'user-item',
  props: ['user', 'selectedShindig'],
  methods: {
    handleClick(){
      eventBus.$emit('update-checked-in-status', this.user.codeName)
    }
  },
  computed: {
    checkedInClass() {
      if (this.selectedShindig) {
        const userInShindig = this.selectedShindig.users.find(user => user.codeName === this.user.codeName)
        return userInShindig.checkedIn ? 'checked-in' : 'checked-out';
      }
    }
  }
}
</script>

<style lang="css" scoped>
li {
  padding: 15px;
  margin: auto;
  text-align: left;
}

.checked-in {
  color: green;
}

.checked-out {
  color: red;
}
</style>
