<template lang="html">

  <div class="riddle-page">
    <button
      type="button"
      name="button"
      v-for="(shindig, index) in shindigs"
      :key="index"
      @click="handleClick(index)"
      >Riddle {{index}}
    </button>
    <riddle-display :selectedShindig="selectedShindig"/>
  </div>

</template>

<script>
import RiddleDisplay from '@/components/RiddleDisplay.vue'


export default {
  name: 'riddle-page',
  components: {
    'riddle-display': RiddleDisplay
  },
  props: ['shindigs'],
  data() {
    return {
      selectedShindig: {}
    }
  },
  watch: {
    shindigs() {
      this.selectedShindig = this.shindigs[0]
    }
  },
  methods: {
    handleClick(index) {
      this.selectedShindig = this.shindigs[index]
    }
  }
}
</script>

<style lang="css" scoped>
.riddle-page {
  margin: 0;
  padding: 0;
}
</style>
