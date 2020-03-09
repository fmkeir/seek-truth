<template lang="html">
  <div id="app">
    <!-- <admin-page :shindigs="shindigs" :users="users"/> -->
    <!-- <user-page :user="users[0]" :shindig="shindigs[0]"/> -->
    <riddle-page :riddles="riddles"/>
  </div>
</template>

<script>
import AdminPage from "@/components/AdminPage.vue";
import UserPage from "@/components/UserPage.vue";
import RiddlePage from "@/components/RiddlePage.vue";

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

    fetch('http://localhost:3000/api/riddles')
    .then(res => res.json())
    .then(data => this.riddles = data)
  }
}
</script>

<style lang="css" scoped>
</style>

<!-- test comment -->
