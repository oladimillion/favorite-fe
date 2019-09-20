<template>
	<div class="landing__page flex">
		<div class="landing__page__card flex">
			<div class="flex__one flex flex__column space__between flex__wrap">
				<div class="app__intro">
					<h1>Favorite</h1>
					<br />
					<h4>
						An application that allows the user to track their
						favorite things.
					</h4>
				</div>
				<div>
					<router-link to="/dashboard" class="get__started__link inline__block">
						<Icon name="play circle" />
						<span class="inline__block">GET STARTED</span>
					</router-link>
				</div>
			</div>
			<div class="flex__one"></div>
		</div>
	</div>
</template>


<script>
import Icon from '@/components/common/Icon'

export default {
	name: 'LandingPage',
	components: {
		Icon,
	},
}
</script>


<style scoped>
div.landing__page {
	background-color: #000000;
	background-image: url('../../assets/images/bullseye-gradient.svg');
	background-attachment: fixed;
	background-size: cover;
	height: 100%;
}

div.landing__page__card {
	padding: 5%;
	background: #fff;
	width: 80%;
	height: 80%;
	margin: auto;
	border-radius: 5px;
	background-image: url('../../assets/images/undraw_taking_notes_tjaf.svg');
	background-size: cover;
	box-shadow: 0 0 16px -2px #fff;
}

div.app__intro {
	min-width: 280px;
}

div.landing__page__card h1 {
	font-size: 4rem;
	color: var(--app-dark-color);
}

div.landing__page__card h4 {
	font-size: 1.6rem;
	color: #3b3592;
	text-shadow: 0 0 20px #fff;
}

a.get__started__link {
	font-size: 1.5rem;
	font-weight: 600;
	color: #514ac0;
	box-shadow: 2px 2px 12px -2px;
	background: #fff;
	padding: 13px;
	border-radius: 5px;
}

a.get__started__link i.play {
	margin-right: 10px;
}

@media screen and (max-width: 400px) {
	div.landing__page__card {
		padding: 3%;
		width: 90%;
	}
}
</style>
