<template lang="html">

  <div class="riddle-page">
    <button
      type="button"
      name="button"
      v-for="(riddle, index) in riddles"
      :key="index"
      @click="handleClick(index)"
      class="riddle-button"
      > :: CIPHER {{index+1}} :: </button>
    <riddle-display :selectedRiddle="selectedRiddle"/>
  </div>

</template>

<script>
import RiddleDisplay from '@/components/RiddleDisplay.vue'


export default {
  name: 'riddle-page',
  components: {
    'riddle-display': RiddleDisplay
  },
  props: ['riddles'],
  data() {
    return {
      selectedRiddle: {}
    }
  },
  watch: {
    riddles() {
      this.selectedRiddle = this.riddles[0]
    }
  },
  methods: {
    handleClick(index) {
      this.selectedRiddle = this.riddles[index]
    }
  }
}
</script>

<style lang="css" scoped>
.riddle-page {
  margin: 0;
  padding: 0;
  background: #000000;
  background: -webkit-linear-gradient(to bottom, #434343, #000000);
  background: linear-gradient(to bottom, #434343, #000000);
  width: 100vw;
  position: absolute;
  justify-content: center;
}

.riddle-button {
  padding: 25px;
  margin: 5px;

  border: none;
  color: gray;
  font-size: 14px;
  font-family: 'Nanum Gothic Coding', monospace;


  background-color: transparent;

}
.riddle-button:hover {
  color: white;
}
</style>
