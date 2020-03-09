<template lang="html">
  <div id="app">
<<<<<<< HEAD
    <admin-page :shindigs="shindigs" :users="users"/>

=======
    <!-- <admin-page :shindigs="shindigs" :users="users"/> -->
    <!-- <user-page :user="users[0]" :shindig="shindigs[0]"/> -->
    <riddle-page :riddles="riddles"/>
>>>>>>> develop
  </div>

</template>

<script>
<<<<<<< HEAD
import {eventBus} from '@/main.js'
import ShindigService from '@/services/ShindigService.js'
import AdminPage from "@/components/AdminPage";
=======
import AdminPage from "@/components/AdminPage.vue";
import UserPage from "@/components/UserPage.vue";
import RiddlePage from "@/components/RiddlePage.vue";
>>>>>>> develop

export default {
  name: "App",
  components: {
    // "admin-page": AdminPage,
    // "user-page": UserPage,
    "riddle-page": RiddlePage
  },
  data() {
    return {
      shindigs: [],
      users: [],
      riddles: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/shindigs')
    .then(res => res.json())
    .then(data => this.shindigs = data)

    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(data => this.users = data)

<<<<<<< HEAD
    eventBus.$on('edit-shindig', response => {
      const updatedShindig = response.editedShindig
      if (response.status === false) {
        ShindigService.updateShindig(updatedShindig)
        const index = this.shindigs.findIndex(shindig => shindig._id === updatedShindig._id);
        this.shindigs.splice(index, 1, updatedShindig);
      }
    })
=======
    fetch('http://localhost:3000/api/riddles')
    .then(res => res.json())
    .then(data => this.riddles = data)
>>>>>>> develop
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
