<template lang="html">
  <div class="shindig-list">
    <ul>
      <shindig-item v-for="(shindig, index) in shindigs" :shindig="shindig" :key="index"></shindig-item>
    </ul>
  </div>
</template>

<script>
import ShindigItem from '@/components/ShindigItem.vue'

export default {
  name: "shindig-list",
  props: ['shindigs'],
  components: {
    'shindig-item': ShindigItem
  }
}
</script>

<style lang="css" scoped>
</style>
