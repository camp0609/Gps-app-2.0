<template>
	<div class="container">
		<div id="text">
			<p>{{comment}}</p>
		</div>
		<div id="likeButton">
			<like-button @clicked = "likeComment"></like-button>
			<button @click = "openReply = true" >Reply</button>
		</div>
		<div v-if="openReply == true">
			<reply-box :replyData = "commentId" @cancel = "openReply = false"></reply-box>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import commentsService from "../../services/commentsService";
import likesService from "../../services/likesService";
import likeButton from "./likeButton.vue"
import replyBox from "./replyBox.vue"
export default {
	components: {
		likeButton,
		replyBox
	},
	props: [
	"data"
	],
	data() {
		return {
			comment: this.data.comment,
			commentId: this.data.commentId,
			openReply: false,
		};
	},
	methods: {
		async likeComment() {
			try {
				let response = await likesService.likeComment({
					userId: JSON.parse(this.$store.state.user)[0].userId,
					commentId: this.data.commentId
				});
				if(response) {
					console.log("comment liked"); // need to turn like button to liked, fill in heart animation or whatev
				} else {
					console.log("failed to like comment");
				}
			} catch(error) {
				console.log("issue liking this post");
			}
		},
		reply() {
			console.log(this.data.commentId);	
		}
	}
};
</script>

<style scoped>

</style>