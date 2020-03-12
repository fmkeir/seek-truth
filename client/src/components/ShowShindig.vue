<template lang="html">
  <div class="">
    <button @click="handleEdit">Edit Shindig</button>
    <p>{{selectedShindig.name}}: {{selectedShindig.shindigNumber}}</p>
    <p>Latitude: {{selectedShindig.locationLat}}</p>
    <p>Longitude: {{selectedShindig.locationLong}}</p>
    <display-map
    :longitude="selectedShindig.locationLong"
    :latitude="selectedShindig.locationLat"
    />
    <p>Instructions:</p><span>{{selectedShindig.instructions}}</span>
    <p>Question:{{selectedShindig.riddleQuestion}}</p>
    <!-- <p @click="generateAnswer(selectedShindig.riddleQuestion)">Answer:{{answerArray}}</p> -->
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import DisplayMap from '@/components/DisplayMap.vue'

export default {
  name: "show-shindig",
  props: ['selectedShindig'],
  components: {
    'display-map': DisplayMap
  },
  methods: {
    handleEdit(){
      eventBus.$emit('show-edit-shindig')
    },
    // generateAnswer(questionString) {
    //   questionArray = questionString.split(' ');
    //   questionArray.forEach((word) => {
    //     this.answerArray.push(word.substring(0, 1));
    //   });
    //   return questionArray;
    // }
  }
}
</script>

<style lang="css" scoped>
</style>
