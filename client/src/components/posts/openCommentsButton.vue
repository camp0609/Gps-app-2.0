<template>
	<button @click="clicked">Comments</button>
</template>

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