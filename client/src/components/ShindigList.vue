<template lang="html">
  <div class="shindig-list">
    <h3 @click="handleClick">All Shindigs</h3>
    <button>Create New Shindig</button>
    <ul>
      <shindig-item v-for="(shindig, index) in shindigs" :shindig="shindig" :key="index" class="shindig-item"></shindig-item>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import ShindigItem from '@/components/ShindigItem.vue';

export default {
  name: "shindig-list",
  props: ['shindigs'],
  components: {
    'shindig-item': ShindigItem
  },
  methods: {
    handleClick() {
      eventBus.$emit('all-users-selected')
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
