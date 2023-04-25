<template>
  <nav class="navigation-store">
    <RouterLink class="logo" to="/Home">LIS</RouterLink>
    <ul class="routed-link">
      <RouterLink class="link-to" to="/Home">Home</RouterLink>
      <RouterLink class="link-to" to="/Catalog">Catalog</RouterLink>
    </ul>
  </nav>
  <p>World</p>
  <car-slider />
  <img :src="logoSrc" alt="Logo">
</template>

<script>
import carSlider from '@/components/HomeStore/CarSlider.vue';
export default {

  name: 'MainPage',
  components: {
    carSlider
  },
  data() {
    return { logoSrc: require("@/assets/images/logo.png") }
  },
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
