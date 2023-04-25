<template>
	<div id="CarSlider">
		<v-carusel :carusel_data="sliderItems" />
	</div>
</template>

<script>
import vCarusel from './v-carusel.vue';
export default {
	name: 'carSlider', //імя пиши спочатку з маленької
	components: {
		vCarusel
	},
	data() {
		return {
			sliderItems: [
				{ id: 1, name: 'photo1', img: require("@/assets/images/photo1.png") },
				{ id: 2, name: 'photo2', img: require("@/assets/images/photo2.png") },
				{ id: 3, name: 'photo3', img: require("@/assets/images/photo3.png") },
				{ id: 4, name: 'photo4', img: require("@/assets/images/photo4.png") }
			]
		}
	}
}
</script>

<style lang="scss"></style>