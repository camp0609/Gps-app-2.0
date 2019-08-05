<template>
	<div>
		<form>
			<div class="form-group">
				<label for="username">Username</label>
				<input
					type="username"
					class="form-control"
					id="username"
					placeholder="Enter Username"
					v-model="username"
				/>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input
					type="password"
					class="form-control"
					id="password"
					placeholder="Enter password"
					v-model="password"
				/>
			</div>
			<br>
			<div class ='error' v-html='error'></div>
			<br>
			<button type="submit" class="btn btn-primary" @click="login">
				Login
			</button>
		</form>
	</div>
</template>

<script>
/* eslint-disable */
import AuthenticationService from "../services/AuthenticationService";
export default {
	data() {
		return {
			username: "",
			password: "",
			error: null
		};
	},
	methods: {
		async login() {
			try{
				const responce = await AuthenticationService.login({
					username: this.username,
					password: this.password
				});				
			}catch(error){
				this.error = error.response.data.error;
			}
		}
	}
};
</script>

<style scoped>
.error{
	color: red;
}
</style>