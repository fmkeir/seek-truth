<template lang="html">
  <div id="admin-page">
    <h2>Admin panel</h2>
    <shindig-list :shindigs="shindigs"/>
  </div>
</template>

<script>
import ShindigList from '@/components/ShindigList'

export default {
  name: 'admin-page',
  components: {
    'shindig-list': ShindigList
  },
  props: ['shindigs']
}
</script>

<style lang="css" scoped>
</style>
