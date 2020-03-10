<template lang="html">
  <div class="shindig-list">
    <h3>All Shindigs</h3>
    <button @click="showCreateForm">Create New Shindig</button>
    <ul>
      <shindig-item v-for="(shindig, index) in shindigs" :shindig="shindig" :key="index" class="shindig-item"></shindig-item>
    </ul>
  </div>
</template>

<script>
import ShindigItem from '@/components/ShindigItem.vue'
import {eventBus} from '@/main.js'

export default {
  name: "shindig-list",
  props: ['shindigs'],
  components: {
    'shindig-item': ShindigItem
  },
  methods: {
    showCreateForm() {
      eventBus.$emit('show-create-form')
    }
  }
}
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
}

.shindig-item {


    padding: 15px;
    margin: auto;
    text-align: left;

}

.shindig-item:hover {
  color: green;

}
</style>
