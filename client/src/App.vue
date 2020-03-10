<template lang="html">
  <div id="app">
<<<<<<< HEAD
    <admin-page :shindigs="shindigs" :users="users"/>
    <!-- <user-page :user="users[0]" :shindig="shindigs[0]"/> -->
    <!-- <riddle-page :riddles="riddles"/> -->
=======
    <!-- <admin-page :shindigs="shindigs" :users="users"/> -->
    <!-- <user-page :user="users[0]" :shindig="shindigs[0]"/> -->
    <riddle-page :shindigs="shindigs"/>
>>>>>>> develop
  </div>

</template>

<script>
import {eventBus} from '@/main.js'
import AdminPage from "@/components/AdminPage.vue";
import UserPage from "@/components/UserPage.vue";
import RiddlePage from "@/components/RiddlePage.vue";
import ShindigService from '@/services/ShindigService.js'

export default {
  name: "App",
  components: {
    "admin-page": AdminPage,
    "user-page": UserPage,
    "riddle-page": RiddlePage
  },
  data() {
    return {
      shindigs: [],
      users: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/shindigs')
    .then(res => res.json())
    .then(data => this.shindigs = data)

    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(data => this.users = data)

    eventBus.$on('edit-shindig', response => {
      const updatedShindig = response.editedShindig
      if (response.status === false) {
        ShindigService.updateShindig(updatedShindig)
        const index = this.shindigs.findIndex(shindig => shindig._id === updatedShindig._id);
        this.shindigs.splice(index, 1, updatedShindig);
      }
    })
  }
}
</script>

<style lang="css" scoped>

* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

</style>

<!-- test comment -->
