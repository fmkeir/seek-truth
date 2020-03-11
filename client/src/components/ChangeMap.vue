<template lang="html">
   <div id="mapid"></div>
</template>

<script>
import {eventBus} from '@/main.js'
import configAccessToken from '@/services/config.js'

export default {
  name: "display-map",
  props: ['latitude', 'longitude'],
  mounted() {
    var mymap = L.map('mapid').setView([this.latitude, this.longitude], 17)
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: configAccessToken
  }).addTo(mymap);

  mymap.on('click', function(e) {
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
});

  }
}
</script>

<style lang="css" scoped>
#mapid { height: auto; width: 100%; min-height: 250px;}
</style>
