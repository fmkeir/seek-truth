<template lang="html">
  <div id="admin-page">
          <h2>Admin panel</h2>
    <div class="flexContainer">

      <shindig-list :shindigs="shindigs" class="flexItem"/>
      <user-list :users="users" class="flexItem"/>
      <show-shindig v-if="!edit&&selectedShindig" :selectedShindig="selectedShindig" class="flexItem featured"/>
      <edit-shindig v-if="edit" :selectedShindig="selectedShindig" class="flexItem featured"/>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import ShindigList from '@/components/ShindigList.vue'
import UserList from '@/components/UserList.vue'
import ShowShindig from '@/components/ShowShindig.vue'
import EditShindig from '@/components/EditShindig.vue'

export default {
  name: 'admin-page',
  data(){
    return {
      selectedShindig: null,
      edit: false
    }
  },
  components: {
    'shindig-list': ShindigList,
    'user-list': UserList,
    'show-shindig': ShowShindig,
    'edit-shindig': EditShindig
  },
  props: ['shindigs', 'users' ],
  mounted(){
    eventBus.$on('shindig-selected', shindig => {
      this.selectedShindig = shindig
    })

    eventBus.$on('edit-shindig', bool => {
      this.edit = bool
    })
  }
}
</script>

<style lang="css" scoped>
.flexContainer {
  display: flex;
}
.flexItem {
  padding: 15px;
  margin: 15px;
  border: solid black 2px;

}

.featured {
  min-width: 40%;
}
</style>
