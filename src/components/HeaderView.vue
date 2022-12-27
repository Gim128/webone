<template>
    <v-app-bar
    style="padding: 0px 90px;"
  app
  color="dark"
  white
  elevation="6"
  elevate-on-scroll
>

<!-- <v-toolbar-title class="title">CNT</v-toolbar-title> -->
<v-avatar class="avatar">
  <img src="../assets/cnt-gold.png" alt="avatar-img">
</v-avatar>
<v-spacer />

<v-list class="d-flex align-center">
  <v-list-item link v-for="(menu,index) in menus" :key="index" :to="menu.route">
    <v-list-item-title>{{menu.title}}</v-list-item-title>
    
  </v-list-item>
</v-list>

  
</v-app-bar>

</template>

<script>

export default {

    name: "HeaderView",
    data(){
    return{
      menus:[
        {title: 'Home', route: 'home'},
        {title: 'Contact Us', route: 'contactus'},
        {title: 'Language', route: 'language'}
      ]
    }
  },
  
}
</script>

<style scoped>
  .title{
    font-size: 40px !important;
    color: #0984e3;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
  }

  .avatar{
    
  }
</style>