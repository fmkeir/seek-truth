<template lang="html">
  <div class="riddle">
    <h2> {{selectedRiddle.riddle}}</h2>
    <form>
      <input type="text" name="" value="">
    </form>
  </div>
</template>

<script>
export default {
  name: 'riddle',
  props: ['selectedRiddle']
}
</script>

<style lang="css" scoped>
</style>
