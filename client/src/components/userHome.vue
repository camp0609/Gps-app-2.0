<!-- eslint-disable -->
<template>
	<!-- https://www.npmjs.com/package/mapbox-gl-vue -->
	<div class="container">
		<!-- <mapbox
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
		</mapbox> -->
		<div id="postStream">
			<posts v-for = "posts in postsData" :key = "posts.postId" :data ="posts" ></posts>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import userService from "@/services/userService";
import Mapbox from "mapbox-gl-vue";
import posts from "./posts/posts.vue"
export default {
	components: {
		Mapbox,
		posts
	},
	data() {
		return {
			// posts: null,
			postsData: null
		};
	},
	async mounted() { //get all users posts on load, need some criteria for what to intially load, most recent posts?
		try {
			let userId = JSON.parse(this.$store.state.user)[0].userId 
			console.log(userId);
			let posts = await userService.getPosts(userId); //if currentPost != null center on currentPost
			this.postsData = posts.data;
			console.log(this.postsData);
		} catch(error) {
			console.log(error);
		}
	},
	methods: {}
};
</script>

<style scoped>
#map {
	width: 100%;
	height: 500px;
}

#postStream {
	width: 100%;
	height: 500px;
}
</style>
