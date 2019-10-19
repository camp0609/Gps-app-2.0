<template>
  <div id="app">
    <mapbox
      access-token="pk.eyJ1IjoiY2FtcDA2MDkiLCJhIjoiY2pwOHRxNXQ4MjN2azNwcDcybGlxYmR0YSJ9.zqvCwCTnzgnrhbum7Ebedw"
      :map-options="{
        style: style
      }"
      @map-load="loaded"
      @map-click:points="clicked"
    />
  </div>
</template>

<script>
/* eslint-disable */
import Mapbox from "mapbox-gl-vue";
import mapEvent from "./mapEvent"

export default {
  components: {
    Mapbox
  },
  data() {
    return {
      lati: this.$store.state.currentLat,
      lnga: this.$store.state.currentLng,
      style: 'mapbox://styles/mapbox/light-v9',
      center: "[50,40]",
      postId: this.$store.state.currentPostId,
      image: require("../../../server/images/image" + this.$store.state.currentPostId + ".png"),
      coords: {lng: this.$store.state.currentLng, lat: this.$store.state.currentLat}
    };
  },
  // async mounted() { //get all users posts on load, need some criteria for what to intially load, most recent posts?
  //   try {
  //     let userId = JSON.parse(this.$store.state.user)[0].userId 
  //     console.log(userId);
  //     let posts = await userService.getPosts(userId); //if currentPost != null center on currentPost
  //     this.postsData = posts.data;
  //     console.log(this.postsData);
  //   } catch(error) {
  //     console.log(error);
  //   }
  // },
  methods: {
    loaded(map) {
      console.log(this.postId);
      console.log(this.$store.state.currentLat);
      let el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(' + this.image + ')';
      el.style.width = "150px";
      el.style.height = "150px";
      // el.innerHTML = `<h2>hello<h2>`
      let marker = new mapboxgl.Marker(el).setLngLat(this.coords).addTo(map);


    },
    viewPost() {
      console.log('working');
    },
    clicked(map, e) {
      console.log('working');
    }
  }

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

.marker {
display: block;
border: none;
border-radius: 50%;
cursor: pointer;
padding: 0;
}
</style>
