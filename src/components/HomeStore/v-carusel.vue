<template>
	<div class="v-carusel">
		<v-carusel-item v-for="item in carusel_data" :key="item.id" :item_data="item" />
	</div>
</template>

<script>
import vCaruselItem from './v-carusel-item.vue';


export default {
	name: 'v-carusel',
	components: {
		vCaruselItem
	}
	,
	data() {
		return {}
	},
	props: {
		carusel_data: {
			type: Array,
			default: () => []
		}
	},
	computed: {}
}
</script>


<style lang="scss"></style>