<template lang="html">
  <div id="app">
    <!-- <admin-page :users="users"/> -->
    <user-page :shindig="selectedShindig" v-if="showUserPage"/>
    <riddle-page v-if="showRiddlePage" :shindigs="shindigs"/>
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
      users: [],
      riddles: [],
      shindigs: [],
      selectedShindig: null,
      showUserPage: false,
      showRiddlePage: true
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => this.users = data)

    fetch('http://localhost:3000/api/shindigs')
      .then(res => res.json())
      .then(shindigs => this.shindigs = shindigs)

    eventBus.$on('please-show-user-page', shindig => {
      this.showUserPage = true
      this.showRiddlePage = false
      this.selectedShindig = shindig
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
