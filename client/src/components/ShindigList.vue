<template lang="html">
  <div class="shindig-list">

    <ul>
      <shindig-item v-for="(shindig, index) in shindigs" :shindig="shindig" :key="index" class="shindig-item"></shindig-item>
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
ul {
  list-style-type: none;
}

.shindig-item {

    color: red;
    padding: 15px;
    margin: auto;
    text-align: left;

}

.shindig-item:hover {
  color: blue;
  font-weight: bold;
}
</style>
