<!-- eslint-disable -->
<template>
	<div class="container">
		<textarea v-model = "comment"></textarea>
		<button @click = "saveComment()">Comment</button>
	</div>
</template>

<script>
/* eslint-disable */
import commentsService from "../../services/commentsService";
export default {
	components: {
		
	},
	props: [
	"data"
	],
	data() {
		return {
			comment: null,
		};
	},
	methods: {
		async saveComment() {
			try {
				let response = await commentsService.saveComment({
					userId: JSON.parse(this.$store.state.user)[0].userId,
					postId: this.$store.state.currentPostId,
					comment: this.comment
				});
				if(response) {
					console.log("comment added");
				} else {
					console.log("need to show some kind of error");
				}
			} catch(error) {
				console.log(error);
			}
		}
		// saveComment() {
		// 	console.log(this.comment);
		// }
	}
};
</script>

<style scoped>

</style>