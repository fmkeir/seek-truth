<template lang="html">
  <div class="user-list">
    <h3>Attending Users</h3>
    <ul>
      <user-item v-for="(user, index) in users" :user="user" :key="index" class="user-list"></user-item>
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
