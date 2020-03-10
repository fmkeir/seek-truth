<template lang="html">
  <div id="app">
    <admin-page :users="users"/>
    <!-- <user-page :user="users[0]" :shindig="shindigs[0]"/> -->
    <!-- <riddle-page :riddles="riddles"/> -->
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
      riddles: []
    }
  },
  mounted() {

    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(data => this.users = data)


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
