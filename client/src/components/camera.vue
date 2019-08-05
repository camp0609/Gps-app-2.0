<!-- eslint-disable -->
<template>
	<div class="container">
		<div>
			<video
				v-if="live"
				ref="video"
				id="video"
				width="640"
				height="480"
				autoplay
			></video>
			<canvas
				v-show="!live"
				ref="canvas"
				id="canvas"
				width="640"
				height="480"
			></canvas>
		</div>
		<div class ='error' v-html='error'></div>
		<div><button id="snap" v-on:click="capture()">Snap Photo</button></div>
	</div>
</template>

<script>
/* eslint-disable */

export default {
	data() {
		return {
			live: true,
			video: {},
			canvas: {},
			lat: "",
			lng: "",
			error: null
			
		};
	},
	mounted() {
		this.video = this.$refs.video;
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) { // this get's permission for webcam and inits it
			navigator.mediaDevices
				.getUserMedia({ video: true })
				.then(stream => {
					this.video.srcObject = stream;
				});
		} else {
			//need to set up some kind of error if they do not enable the camera
		}
	},
	methods: {
		capture() {
			this.live = false;
			this.$refs.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480); // take picture

			if (navigator.geolocation) {
    			navigator.geolocation.getCurrentPosition(function (position) { // set lng and lat at time picture is taken
            		this.lat = position.coords.latitude;
            		this.lng = position.coords.longitude;
            		console.log(lat)
            		console.log(lng)
        		},
        		function () {
            		this.error = "Location permission needs to be enabled";
            		// snapbtn.disabled = true;
       	 		})
			} else {
    			this.error = "Error with location api";
    			// snapbtn.disabled = true;
			}

		}
	}
};
</script>

<style scoped></style>
