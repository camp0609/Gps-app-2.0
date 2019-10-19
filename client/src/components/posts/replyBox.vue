<template>
	<div class="container">
		<textarea v-model = "reply"></textarea>
		<div>
			<button @click = "saveReply">Reply</button>
			<button @click = "cancel">Cancel</button>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import commentsService from "../../services/commentsService";
import likesService from "../../services/likesService";
import likeButton from "./likeButton.vue"
export default {
	components: {
		likeButton,

	},
	props: [
	"replyData"
	],
	data() {
		return {
			reply: null,
		};
	},
	methods: {
		async saveReply() {
			try {
				let response = await commentsService.saveReply({
					userId: JSON.parse(this.$store.state.user)[0].userId,
					reply: this.reply,
					commentId: this.replyData,
					postId: this.$store.state.currentPostId
				});
				if(response){
					console.log('it worked');
				}
			} catch(error) {
				console.log(error);
			}
		},
		cancel(){
			this.$emit("cancel");
		}
	}
};
</script>

<style scoped>

</style>