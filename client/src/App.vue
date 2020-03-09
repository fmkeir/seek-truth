<template lang="html">
  <div id="app">
    <!-- <admin-page :shindigs="shindigs" :users="users"/> -->
    <user-page :user="users[0]" :shindig="shindigs[0]"/>
  </div>
</template>

<script>
import AdminPage from "@/components/AdminPage";
import UserPage from "@/components/UserPage";

export default {
  name: "App",
  components: {
    // "admin-page": AdminPage,
    "user-page": UserPage
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
  }
}
</script>

<style lang="css" scoped>
</style>

<!-- test comment -->
