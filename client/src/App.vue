<template lang="html">
  <div id="app">
    <!-- <admin-page :users="users"/> -->
    <!-- <user-page :user="users[0]" :shindig="shindigs[0]"/> -->
    <riddle-page :riddles="riddles"/>
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

<!-- test comment -->
