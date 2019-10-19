<!-- eslint-disable -->
<template>
	<div class="container">
		<div id="image" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
			<!-- <p>{{this.data.postId}}</p> -->
		</div>
		<div id="buttons">
			<like-button v-on:clicked = "like"></like-button>
			<open-comments-button @clicked = "viewPost"></open-comments-button>
			<div>{{commentTotal}}</div> <!-- maybe combine the comment total and button for comments as 1? -->
			<button @click = "viewMap">M</button> <!-- to bring up the map -->
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import likesService from "../../services/likesService";
import likeButton from "./likeButton";
import openCommentsButton from "./openCommentsButton";
export default {
	components: {
		likeButton,
		openCommentsButton
	},
	props: [
	"data"
	],
	data() {
		return {
			image: require("../../../../server/images/image" + this.data.postId + ".png"), // need require if image is dynamiclly loaded
			commentTotal: this.data.comments,
		};
	},
	methods: {
		async like() {
			try {
				console.log(this.image);
				let responce = await likesService.likePost({
					userId: JSON.parse(this.$store.state.user)[0].userId,
					postId: this.data.postId
				})
				console.log(responce);
			} catch(error) {
				console.log("issue liking this post")
			}
		},
		viewPost() {
			this.$store.commit('SET_POSTID', this.data.postId);
			this.$store.commit('SET_COMMENT', true);
			this.$store.commit('SET_POST', "../../../../server/images/image" + this.data.postId + ".png");
			this.$router.push('postView');
		},
		viewMap() {
			console.log(this.image);
			this.$router.push('mapView');
			console.log(this.data.latitude);
			console.log(this.data);
			this.$store.commit('SET_POSTID', this.data.postId);
			this.$store.commit('SET_LAT', this.data.latitude);
			this.$store.commit('SET_LNG', this.data.longitude);
		}
	}
};
</script>

<style scoped>
#image {
	width: 50%;
	height: 250px;
}
</style>