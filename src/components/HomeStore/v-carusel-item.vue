<template>
	<div class="v-carusel-item">
		<img :src="require('../assets/images/' + item_data.img)" alt="">
	</div>
</template>

<script>
export default {
	name: 'v-carusel-item',
	props: {
		item_data: {
			type: Object,
			default: () => { }
		}
	},
	data() {
		return {}
	},
	computed: {}
}
</script>

<style lang="scss"></style>