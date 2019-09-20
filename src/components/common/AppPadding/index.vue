
<template>
	<div :class="['app__padding', classname]">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	props: ['classname']
}
</script>

<style scoped>
div.app__padding {
	padding-left: 3%;
	padding-right: 3%;
}
</style>