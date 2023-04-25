<template>
	<nav class="navigation-store">
		<RouterLink class="logo" to="/Home" active-class="active-link">LIS</RouterLink>
		<ul class="routed-link">
			<RouterLink class="link-to" to="/Home">Home</RouterLink>
			<RouterLink class="link-to" to="/Catalog" :class="active">Catalog</RouterLink>
		</ul>
	</nav>
	<p>Каталог</p>
</template>

<script>
export default {
	name: 'MainCatalog',
	data() {
		return {

		}
	},
	props: {
		activeLink: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>