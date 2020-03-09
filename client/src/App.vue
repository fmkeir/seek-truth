<template lang="html">
  <div id="app">
    <admin-page :shindigs="shindigs" :users="users"/>

  </div>

</template>

<script>
import {eventBus} from '@/main.js'
import ShindigService from '@/services/ShindigService.js'
import AdminPage from "@/components/AdminPage";

export default {
  name: "App",
  components: {
    "admin-page": AdminPage
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
