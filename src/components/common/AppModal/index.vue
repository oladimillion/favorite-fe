<template>
	<div v-if="open" :class="[classname, 'app__modal position__fixed']">
		<div :style="customStyle" class="app__modal__inner margin__auto">
			<header class="app__modal__header position__rel">
				<span class="block">
					<strong>{{modalTitle}}</strong>
				</span>
				<span @click="closeModal" class="position__abs close__icon cursor__pointer">&#x000D7;</span>
			</header>
			<hr />
			<br />
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppModal',
	props: ['classname', 'customStyle', 'modalTitle', 'closeModal', 'open'],
}
</script>

<style>
div.app__modal {
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(255, 255, 255, 0.5);
	z-index: 1000;
	padding: 3%;
}

div.app__modal__inner {
	width: 480px;
	min-width: 200px;
	min-height: 300px;
	background: #fff;
	box-shadow: 0 0 25px 15px rgba(0, 0, 0, 0.2);
	border-radius: 0px;
	overflow-y: auto;
	overflow-x: hidden;
	padding: 2rem;
}

div.app__modal__inner header {
	font-size: 1.7rem;
	padding-bottom: 1rem;
}

div.app__modal__inner hr {
	border: 1px solid #eee;
}

div.app__modal__inner header span {
	letter-spacing: 2px;
	font-weight: 600;
	color: #41108a;
}

div.app__modal span.close__icon {
	top: -20px;
	right: -17px;
	color: red;
	font-size: 3rem;
}

@media screen and (max-width: 480px) {
	div.app__modal__inner {
		width: 98%;
	}
}
</style>
