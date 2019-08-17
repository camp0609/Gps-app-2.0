<!-- eslint-disable -->
<template>
	<div class="container">
		<div>
			<video
				v-show="live"
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
		<div class="error" v-html="error"></div>
		<div>
			<button
				v-if="!picTaken"
				id="snap"
				@click="
					capture();
					live = false;
					picTaken = true;
				"
			>
				Snap Photo
			</button>
			<textarea v-if="picTaken" id="message" v-model="message"></textarea>
			<button v-if="picTaken" @click="savePost()">Save</button>
			<button
				v-if="picTaken"
				@click="
					picTaken = false;
					live = true;
				"
			>
				Cancel
			</button>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import userService from "../services/userService";
export default {
	data() {
		return {
			live: true,
			picTaken: false,
			video: {},
			canvas: {},
			message: "",
			dataUrl: null,
			lat: null,
			lng: null,
			error: null
		};
	},
	mounted() {
		this.video = this.$refs.video;
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			// this get's permission for webcam and inits it
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
			// this.live = false;
			// this.picTaken = true;
			this.$refs.canvas
				.getContext("2d")
				.drawImage(this.video, 0, 0, 640, 480)
				 // take picture

			// let dataUrl = this.$refs.canvas.toDataURL(); // need to turn image to base64 for storage

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					position => {
						// set lng and lat at time picture is taken
						this.lat = position.coords.latitude;
						this.lng = position.coords.longitude;
						console.log(this.lat);
						console.log(this.lng);
					},
					function() {
						this.error = "Location permission needs to be enabled";
						// snapbtn.disabled = true;
					}
				);
			} else {
				this.error = "Error with location api";
				// snapbtn.disabled = true;
			}
		},
		async savePost() {
			try {
				let response = await userService.savePost({
					userId: JSON.parse(this.$store.state.user)[0].userId,
					base64: this.$refs.canvas.toDataURL(),
					message: this.message,
					longitude: this.lng,
					latitude: this.lat
				});
			} catch (error) {
				console.log(error);
			}
		}
	}
};
</script>

<style scoped></style>
