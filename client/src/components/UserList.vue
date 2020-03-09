<template lang="html">
  <div class="user-list">
    <ul>
      <user-item v-for="(user, index) in users" :user="user" :key="index"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from '@/components/UserItem.vue'
export default {
  name: "user-list",
  props: ['users'],
  components: {
    'user-item': UserItem
  }
}
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
}
</style>
