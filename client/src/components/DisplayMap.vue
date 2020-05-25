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
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: configAccessToken
    }).addTo(mymap);
    L.marker([this.latitude, this.longitude]).addTo(mymap);
  }
}
</script>

<style lang="css" scoped>
#mapid { height: auto; width: 100%; min-height: 250px;}
</style>
L.marker([51.5, -0.09]).addTo(map)