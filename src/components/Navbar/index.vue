
<template>
	<nav class="navbar">
		<AppPadding class="flex space__between align__center">
			<h1 class="margin__none">
				<router-link to="/" class>Favorite</router-link>
			</h1>
			<button class="user__info flex align__center unset__properties">
				<span class="username">Anonymous</span>
				<span class="user__photo"></span>
			</button>
		</AppPadding>
	</nav>
</template>

<script>
import AppPadding from '@/components/common/AppPadding'
export default {
	name: 'Navbar',
	components: { AppPadding },
}
</script>

<style scoped>
nav.navbar {
	background: #fff;
	padding: 10px 0;
	box-shadow: 0 1px 2px 1px #ddd;
	position: relative;
}
nav.navbar h1 a {
	color: transparent;
	background-image: linear-gradient(45deg, var(--app-dark-color), transparent);
	background-clip: text;
	-webkit-background-clip: text;
}

button.user__info {
	font-family: inherit;
	font-size: 1.2rem;
}
span.user__photo {
	border: 1px solid #aaa;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #eee;
	margin-left: 10px;
}
</style>