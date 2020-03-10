<template lang="html">
  <div id="admin-page">
          <h1>Admin</h1>
          <h3 class="heading">View & Edit Shindigs</h3>

    <div class="flexContainer">

      <shindig-list :shindigs="shindigs" class="flexItem"/>
      <user-list :users="filteredUsers" class="flexItem"/>
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
import ShindigService from '@/services/ShindigService.js'

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
  computed: {
    filteredUsers: function() {
      if (this.selectedShindig) {
        const shindigUserNames = this.selectedShindig.users.map(user => user.codeName)
        return this.users.filter(user => {
          return shindigUserNames.includes(user.codeName)
        })
      } else {
        return this.users
      }
    }
  },
  props: ['shindigs', 'users' ],
  mounted(){
    eventBus.$on('shindig-selected', shindig => {
      this.selectedShindig = shindig
    })

    eventBus.$on('edit-shindig', response => {
      this.edit = response.status
      if (response.status === false) {
        this.selectedShindig = response.editedShindig;
      }
    })
  }
}
</script>

<style lang="css" scoped>
#admin-page {
  width: 100vw;
  height: 100vh;
  text-align: center;
  font-family: 'Arial';
}

.flexContainer {
  display: flex;
}
.flexItem {
  padding: 5px 15px;
  margin: 5px 15px;
  background-color: lightgray;
  min-width: 20%;

}

.featured {
  min-width: 40%;
}

.heading {
  margin: auto;
}
</style>
