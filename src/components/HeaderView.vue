<template>
    <v-app-bar
    style="padding: 0px 90px;"
  app
  color="dark"
  white
  elevation="6"
  elevate-on-scroll
>

<v-toolbar-title>CNT</v-toolbar-title>
<v-spacer />

<v-list class="d-flex align-center">
  <v-list-item link v-for="(menu,index) in menus" :key="index" :to="menu.route">
    <v-list-item-title>{{menu.title}}</v-list-item-title>
  </v-list-item>
</v-list>

<!-- <div>
    <b-dropdown text="Outline Danger" variant="outline-danger" class="m-2">
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
      </b-dropdown>
</div> -->
  
</v-app-bar>

</template>

<script>

// import bootstrapVue from 'bootstrap-vue';

export default {

    // components: {
    //     bootstrapVue,
    // },

    name: "HeaderView",
    data(){
    return{
      menus:[
        {title: 'Home', route: 'home'},
        {title: 'Contact Us', route: 'contactus'},
      ]
    }
  }
}
</script>

<style>

</style>