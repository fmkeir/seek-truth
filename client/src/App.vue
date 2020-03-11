<template lang="html">
  <div id="app">
    <!-- <admin-page :users="users"/> -->
    <user-page :shindig="selectedShindig" v-if="showUserPage"/>
    <riddle-page v-if="showRiddlePage" :riddles="riddles"/>
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
      selectedShindig: null,
      showUserPage: false,
      showRiddlePage: true
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => this.users = data)

    fetch('http://localhost:3000/api/riddles')
      .then(res => res.json())
      .then(riddles => this.riddles = riddles)

    eventBus.$on('submited-user-answer', (userAnswer) => {
      fetch('http://localhost:3000/api/riddles/submit-answer', {
        method: 'POST',
        body: JSON.stringify(userAnswer),
        headers: {'Content-Type' : 'application/json'}
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            // show errror

          } else {
            this.selectedShindig = data
            this.showUserPage = true
            this.showRiddlePage = false
          }
        })

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
