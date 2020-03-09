<template lang="html">
  <div class="user-detail" v-if="user">
    <h2>Codename: {{user.codeName}}</h2>
    <h3>Sequential Riddles: {{ user.sequentialRiddles }}</h3>
  </div>

</template>

<script>

export default {
  name: 'user-detail',
  props: ['user']
}
</script>

<style lang="css" scoped>
</style>
