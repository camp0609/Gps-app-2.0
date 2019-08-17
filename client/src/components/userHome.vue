<template>
	<div class="container">
		<mapbox
			access-token="pk.eyJ1IjoiY2FtcDA2MDkiLCJhIjoiY2pwOHRxNXQ4MjN2azNwcDcybGlxYmR0YSJ9.zqvCwCTnzgnrhbum7Ebedw"
			:map-options="{
				style: 'mapbox://styles/mapbox/light-v9',
				center: [-96, 37.8],
				zoom: 3
			}"
			:geolocate-control="{
				show: true,
				position: 'top-left'
			}"
			:scale-control="{
				show: true,
				position: 'top-left'
			}"
			:fullscreen-control="{
				show: true,
				position: 'top-left'
			}"
		>
		</mapbox>
	</div>
</template>

<script>
import userService from "@/services/userService";
import Mapbox from "mapbox-gl-vue";
export default {
	components: {
		Mapbox
	},
	data() {
		return {
			posts: null
		};
	},
	// async mounted() {
	// 	//get all users posts from backend
	// 	this.posts = await userService.getUserPosts();
	// },
	methods: {}
};
</script>

<style scoped>
#map {
	width: 100%;
	height: 500px;
}
</style>
