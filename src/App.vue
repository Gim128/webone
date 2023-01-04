<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="dark"
      transparent
      elevation="5"
      elevate-on-scroll
    >
      <v-subheader><h1 class="black--text">Portfolio<span class="primary--text">.CNT</span></h1></v-subheader>
      <v-tabs class="mr-5" center-active right active-class="active-tab">
        <v-tab href="#home">Home</v-tab>
      </v-tabs>

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <h4
              color="white"
              dark
              v-bind="attrs"
              v-on="on"
            >Language</h4>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>

        </v-menu>
      </div>

    </v-app-bar>
    <!-- <header-view /> -->
   
    <v-main>
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
// import HeaderView from './components/HeaderView.vue';
import HeroSection from './components/HeroSection.vue';
import PortfolioView from './components/PortfolioView.vue';
export default {
  components: {HeroSection, FeaturedView, CounterView, FeaturedTwo, PortfolioView, FooterView },
  name: 'App',

  data: () => ({
    items: [
      {title: 'English'},
      {title: 'Chinese'},
    ],
  }),
}

</script>

<style>
 
</style>