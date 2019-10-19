<template>
	<button @click="clicked">Like</button> <!-- need to add another div which will hold the # of likes a comment or post has -->
</template>									<!-- looks like twitter and reddit use div's or <a> as buttons, not actual <buttons> -->

<script>
/* eslint-disable */
export default {
	methods: {
		clicked() {
			this.$emit("clicked");
		}
	}
};
</script>

<style scoped>

</style>