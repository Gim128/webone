<template>
  <v-app>

    <v-main>
      <Header>
        <Navbar />
      </Header>

      <!-- hero section -->
      <hero-section /> 

      <!-- Featured section -->
      <featured-view />

      <!-- countdown -->
      <CounterView />

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

import CounterView from './components/CounterView.vue';
import FeaturedTwo from './components/Featured-two.vue';
import FeaturedView from './components/FeaturedView.vue';
import FooterView from './components/FooterView.vue';
import HeroSection from './components/HeroSection.vue';
import Navbar from './components/Navbar.vue';
import PortfolioView from './components/PortfolioView.vue';
export default {
  components: { HeroSection, FeaturedView, CounterView, FeaturedTwo, PortfolioView, FooterView, Navbar },
  name: 'App',
   
  };
</script>

<style>
  header {
    width: 100vw;
    background-color: #222;
    padding: 15px;
  }
</style>