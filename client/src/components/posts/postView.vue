<!-- eslint-disable -->
<template>
	<div class="container">
		<div id="image" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
			<!-- <p>{{this.data.postId}}</p> -->
		</div>
		<div id="buttons">
			<like-button v-on:clicked = "likePost"></like-button>
		</div>
		<div>
			<make-comment></make-comment>
			<button @click = "$router.go(-1)">X</button> <!-- this button is to go back to the post stream  @click = "$router.go(-1)"-->
			<button>M</button> <!-- this will be to bring up the map -->
		</div>
		<div>
			<comment v-for = "comment in comments" :key = "comment.commmentId" :data = "comment"></comment>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import likesService from "../../services/likesService";
import likeButton from "./likeButton";
import makeComment from "./makeComment";
import commentsService from "../../services/commentsService";
import comment from "./comment";
export default {
	components: {
		likeButton,
		makeComment,
		comment
	},
	data() {
		return {
			image: require("../../../../server/images/image" + this.$store.state.currentPostId + ".png"),
			comments: null,
		};
	},
	async mounted() {
		try {
			let commentsResponce = await commentsService.getComments(this.$store.state.currentPostId)
			this.comments = commentsResponce.data;
		} catch(error) {
			console.log(error);
		}
	},
	methods: {
		async likePost() {
			try {
				let responce = await likesService.likePost({
					userId: JSON.parse(this.$store.state.user)[0].userId,
					postId: this.data.postId
				})
				console.log(responce);
			} catch(error) {
				console.log("issue liking this post")
			}
		},
		back() {
			this.$router.push('userHome'); // wherever you are going back to needs to be put into store variable 
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