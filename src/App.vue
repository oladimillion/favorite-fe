<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style>
@import '~semantic-ui-css/semantic.min.css';
@import './assets/css/common.css';

:root {
	--app-dark-color: #342c90;
}

*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

div#app {
	width: 100%;
	height: 100vh;
	min-height: 700px;
}
</style>
