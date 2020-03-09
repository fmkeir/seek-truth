<template lang="html">
  <div class="shindig-details" v-if="shindig">
    <h2>Shindig Name: {{ shindig.name }}</h2>
    <h2>Shindig Number: {{ shindig.number }}</h2>
    <h2>Shindig Instructions: {{ shindig.instructions }}</h2>
  </div>
</template>

<script>
export default {
  name: 'shindig-details',
  props: ['shindig']
}
</script>

<style lang="css" scoped>
</style>
