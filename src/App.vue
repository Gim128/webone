<template>
  <v-app>
   
    <header-view />
   
    <v-main>
      <!-- hero section -->
      <hero-section />
    </v-main>
  </v-app>
</template>

<script>
import HeaderView from './components/HeaderView.vue';
import HeroSection from './components/HeroSection.vue';

export default {
  components: { HeaderView, HeroSection },
  name: 'App',

  
  
};
</script>
