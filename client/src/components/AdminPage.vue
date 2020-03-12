<template lang="html">
  <div id="admin-page">
          <h1 class="page-title">Admin</h1>
          <h3 class="heading">View & Edit Shindigs</h3>
    <div class="flexContainer">
      <shindig-list :shindigs="shindigs" class="flexItem"/>
      <user-list :users="filteredUsers" :selectedShindig="selectedShindig" class="flexItem"/>
      <show-shindig v-if="!edit&&selectedShindig" :selectedShindig="selectedShindig" class="flexItem featured"/>
      <edit-shindig v-if="edit" :selectedShindig="selectedShindig" class="flexItem featured"/>
      <create-shindig v-if="create" class='flexItem'/>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import ShindigList from '@/components/ShindigList.vue'
import UserList from '@/components/UserList.vue'
import ShowShindig from '@/components/ShowShindig.vue'
import EditShindig from '@/components/EditShindig.vue'
import CreateShindig from '@/components/CreateShindig.vue'
import ShindigService from '@/services/ShindigService.js'


export default {
  name: 'admin-page',
  data(){
    return {
      shindigs: [],
      users: [],
      selectedShindigId: null,
      edit: false,
      create: false
    }
  },
  components: {
    'shindig-list': ShindigList,
    'user-list': UserList,
    'show-shindig': ShowShindig,
    'edit-shindig': EditShindig,
    'create-shindig': CreateShindig
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
    },
    selectedShindig: function() {
      return this.shindigs.find(shindig => shindig._id === this.selectedShindigId);
    }
  },
  mounted(){
    fetch('http://localhost:3000/api/shindigs')
    .then(res => res.json())
    .then(data => this.shindigs = data)

    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(data => this.users = data)

    eventBus.$on('submit-edit-shindig', editedShindig => {
        ShindigService.updateShindig(editedShindig)
        const index = this.shindigs.findIndex(shindig => shindig._id === editedShindig._id);
        this.shindigs.splice(index, 1, editedShindig);
        this.edit = false;
    })

    eventBus.$on('create-shindig', newShindig => {
      ShindigService.postShindig(newShindig)
      .then(shindig => this.shindigs.push(shindig));
    })

    eventBus.$on('shindig-selected', shindigId => {
      this.selectedShindigId = shindigId
    })

    eventBus.$on('show-edit-shindig', () => {
      this.edit = true;
    })

    eventBus.$on('all-users-selected', () => {
      this.selectedShindigId = null
    })

    eventBus.$on('show-create-form', () => {
      this.create = true;
    })

    eventBus.$on('update-checked-in-status', userCodeName => {
      if (this.selectedShindigId) {
        const index = this.shindigs.findIndex(shindig => shindig._id === this.selectedShindigId);
        const activeUser = this.shindigs[index].users.find(user => user.codeName = userCodeName)
        activeUser.checkedIn = !activeUser.checkedIn
        ShindigService.updateShindig(this.shindigs[index])
      };
    });
  }
}
</script>

<style lang="css" scoped>
*{

  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
#admin-page {
  width: 100vw;
  min-height: 100vh;
  height: auto;

  position: absolute;
  top: 0px;
  left: 0px;
  text-align: center;
  font-family: 'Nanum Gothic Coding', monospace;

  background: #202020;
  background: -webkit-linear-gradient(to bottom, #434343, #202020);
  background: linear-gradient(to bottom, #434343, #202020);
  background-size: 100% 300%;
}
.flexContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.flexItem {
  min-width: 200px;
  min-height: 200px;
  max-width: 200px;
  width: auto;
  height: auto;
  background: white;
  margin: 10px 10px;
  padding: 20px;
  min-width: 20%;

}
.featured {
  min-width: 40%;
}
.heading {
  margin: auto;
  margin-bottom: 30px;
}
.page-title {
  margin-top: 50px;
}
</style>
