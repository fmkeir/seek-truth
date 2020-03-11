<template lang="html">
  <div id="user-page">
    <!-- <user-details :user="user"/> -->
    <shindig-details :shindig="shindig"/>
    </div>
</template>

<script>
import UserDetails from '@/components/UserDetails.vue'
import ShindigDetails from '@/components/ShindigDetails.vue'

export default {
  name: 'user-page',
  components: {
    'user-details': UserDetails,
    'shindig-details': ShindigDetails
  },
  props: ['user', 'shindig']

}
</script>

<style lang="css" scoped>
#user-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
