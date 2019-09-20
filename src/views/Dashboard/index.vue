<template>
	<div class="full__height">
		<Navbar />
		<div class="dashboard">
			<Form />
			<Detail />
			<ActionBar />
			<ItemTable />
			<br />
			<br />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ActionBar from '@/components/ActionBar'
import ItemTable from '@/components/ItemTable'
import Form from '@/components/Form'
import Detail from '@/components/Detail'
export default {
	name: 'Dashboard',
	components: {
		Navbar,
		ActionBar,
		ItemTable,
		Form,
		Detail,
	},
}
</script>

<style scoped>
div.dashboard {
	background: #f5faff;
	min-height: 100%;
}
</style>
