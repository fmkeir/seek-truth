<template lang="html">
  <div id="admin-page">
    <h2>Admin panel</h2>
    <shindig-list :shindigs="shindigs"/>
    <user-list :users="users"/>
  </div>
</template>

<script>
import ShindigList from '@/components/ShindigList.vue'
import UserList from '@/components/UserList.vue'


export default {
  name: 'admin-page',
  components: {
    'shindig-list': ShindigList,
    'user-list': UserList

  },
  props: ['shindigs', 'users' ]

}
</script>

<style lang="css" scoped>
</style>
