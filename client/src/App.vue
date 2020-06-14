<template lang="html">
  <div id="app">
    <admin-page v-if="showAdminPage"/>
    <user-page :shindig="selectedShindig" v-if="showUserPage"/>
    <riddle-page v-if="showRiddlePage" :riddles="riddles"/>
  </div>

</template>

<script>
import {eventBus} from '@/main.js'
import AdminPage from "@/views/AdminPage.vue";
import UserPage from "@/views/UserPage.vue";
import RiddlePage from "@/views/RiddlePage.vue";
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
      showRiddlePage: true,
      showAdminPage: false
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => this.users = data)

    fetch('http://localhost:3000/api/riddles')
      .then(res => res.json())
      .then(riddles => this.riddles = riddles)

    eventBus.$on('submitted-user-answer', (userAnswer) => {     
      fetch('http://localhost:3000/api/riddles/submit-answer', {
        method: 'POST',
        body: JSON.stringify(userAnswer),
        headers: {'Content-Type' : 'application/json'}
      })
        .then(res => res.json())
        .then(data => {
          
          if (data === 'admin') {
            this.showUserPage = false
            this.showRiddlePage = false
            this.showAdminPage = true
          }

          else if (data.error) {
            const clearPage = document.getElementById('app');
            clearPage.innerHTML = "";
            const image = document.createElement('IMG')
            image.src = 'http://getwallpapers.com/wallpaper/full/0/3/5/40874.jpg';
            clearPage.appendChild(image);
          }

          else {
            this.selectedShindig = data
            this.showUserPage = true
            this.showRiddlePage = false
            this.showAdminPage = false
          }
        })
    })
  }
}
</script>

<style lang="css">
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

</style>
