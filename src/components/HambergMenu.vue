<template>
  <div class="bg-grey-900 text-white-100 py-3.5 px-6 shadow md:flex justify-between items-center">

    <div class="flex items-center cursor-pointer">
        <v-subheader>
            <h1 class="white--text">Portfolio<span class="primary--text">.CNT</span></h1>
        </v-subheader>
    </div>

    <ul class="md:flex md:items-center">
        <li class="md:mx-4">
            <a href="#" class="text-xl hover:text-gold-500">Home</a>
        </li>
    </ul>

    <div class="text-center desktop-view">
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
              <v-list-item-title @click="item.function" >{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>

        </v-menu>
      </div>

  </div>
</template>

<script>

export default {
    name:"HamberMenu",
}
</script>

<style>

</style>