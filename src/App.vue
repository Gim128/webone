<template>
  <v-app>
   
    <header-view />
   
    <v-main>
      <!-- hero section -->
      <hero-section /> 

      <!-- Featured section -->
      <featured-view />

      <!-- Featured-Two section -->
      <featured-two />

      <!-- Portfolio section -->
      <portfolio-view />

      <!-- Footer section -->
      <FooterView />

    </v-main>
  </v-app>
</template>

<script>
import FeaturedTwo from './components/Featured-two.vue';
import FeaturedView from './components/FeaturedView.vue';
import FooterView from './components/FooterView.vue';
import HeaderView from './components/HeaderView.vue';
import HeroSection from './components/HeroSection.vue';
import PortfolioView from './components/PortfolioView.vue';
export default {
  components: { HeaderView, HeroSection, FeaturedView, FeaturedTwo, PortfolioView, FooterView },
  name: 'App',
   
  };
</script>

<style>
 
</style>