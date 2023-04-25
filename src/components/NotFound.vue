<template>
	<div class="NotFound">
		<p class="text-not-found">404</p>
		<p class="text-page-not-found">Page not found</p>
	</div>
</template>

<script>
export default {
	name: 'NotFound',
	data() {
		return {}
	},
	props: {

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.text-not-found {
	margin: 0;
	padding: 0;
	text-align: center;
	font-size: 200px;


}

.text-page-not-found {
	font-size: 50px;
	text-align: center;
}
</style>