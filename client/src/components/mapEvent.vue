<template>
	<div class="container">
		<div id="image" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
		@click="popupClicked"></div>
	</div>
</template>

<script>
/* eslint-disable */
import Vue from "vue";
export default Vue.extend({
	props: ["data"],
	data() {
		return {
			image: require("../../../server/images/image" + this.data + ".png")
		};
	},
	mounted() {
		console.log(this.image);
	},
	methods: {
		popupClicked() {
			this.$emit("clicked");
		}
	}
});
</script>
<style scoped>
#image {
	width: 100%;
	height: 100%;
}

.container {
	width: 100%;
	height: 100%;
}
</style>