<template lang="html">
  <div class="riddle">
    <h2> {{selectedShindig.riddleQuestion}}</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" name="" v-model="answer">
    </form>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  name: 'riddle',
  props: ['selectedShindig'],
  data() {
    return {
      answer: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log('the answer is ', this.answer);
      console.log('this answer is: ', this.selectedShindig.riddleAnswer === this.answer);

      if (this.selectedShindig.riddleAnswer === this.answer){
        eventBus.$emit('please-show-user-page', this.selectedShindig)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
