<!-- eslint-disable -->
<template>
  <div id="app">
    <mapbox
      access-token="pk.eyJ1IjoiY2FtcDA2MDkiLCJhIjoiY2pwOHRxNXQ4MjN2azNwcDcybGlxYmR0YSJ9.zqvCwCTnzgnrhbum7Ebedw"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
      }"
    />
  </div>
</template>

<script>
/* eslint-disable */
import Mapbox from "mapbox-gl-vue";

export default {
  components: {
    Mapbox
  },

};
</script>
<style>
/*#app {
  width: 700px;
  height: 600px;
}*/
#map {
  width: 100%;
  height: 500px;
}
</style>
