<template lang="html">
  <div class="riddle">
    <h2> {{selectedRiddle.riddleQuestion}}</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" name="" v-model="answer">
    </form>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  name: 'riddle',
  props: ['selectedRiddle'],
  data() {
    return {
      answer: ''
    }
  },
  methods: {
    handleSubmit() {
      eventBus.$emit('submited-user-answer', {
        _id: this.selectedRiddle.shindigId,
        userAnswer: this.answer
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
