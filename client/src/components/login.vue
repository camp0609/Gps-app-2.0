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
				let response = await AuthenticationService.login({
					username: this.username,
					password: this.password
				});		
				console.log(response.data.token);
				this.$store.dispatch('setToken', response.data.token);
				this.$store.dispatch('setUser', response.data.user);	
				console.log(this.$store.state.user);	
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