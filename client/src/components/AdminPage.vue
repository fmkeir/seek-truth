<template lang="html">
  <div id="admin-page">
    <h2>Admin panel</h2>
    <shindig-list :shindigs="shindigs"/>
    <user-list :users="users"/>
    <show-shindig />
  </div>
</template>

<script>
import ShindigList from '@/components/ShindigList.vue'
import UserList from '@/components/UserList.vue'
import ShowShindig from '@/components/ShowShindig.vue'

export default {
  name: 'admin-page',
  components: {
    'shindig-list': ShindigList,
    'user-list': UserList,
    'show-shindig': ShowShindig

  },
  props: ['shindigs', 'users' ]

}
</script>

<style lang="css" scoped>
</style>
