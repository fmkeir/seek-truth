<template lang="html">
  <div class="riddle">
    <h2> {{selectedShindig.riddleQuestion}}</h2>
    <form>
      <input type="text" name="" value="">
    </form>
  </div>
</template>

<script>
export default {
  name: 'riddle',
  props: ['selectedShindig']
}
</script>

<style lang="css" scoped>
</style>
