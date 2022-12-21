<template>
  <v-container>
    <v-row>
        <v-col lg="8" sm="3" xs="3">
            <h3 class="heading">Safe & Reliable</h3>
            <v-spacer />
            <p class="desc-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellat modi ipsam ducimus odio aliquid neque quas doloribus consequatur! Vero?
            </p>
            <v-spacer />
            <p class="desc-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas vero quis aspernatur. Facilis ratione culpa quasi eos a rerum incidunt quo earum hic quam eum consequuntur fugiat quos, iusto vel.
            </p>

            <v-spacer></v-spacer>

            <div class="card d-flex align-center mr-6">
                <card-view />
                <card-view />
                <card-view />
            </div>

           

            <!-- <dialog-view /> -->
        </v-col>
        <v-col lg="4" sm="3" xs="3">
            <img src="" alt="">
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardView from './CardView.vue'
// import DialogView from './DialogView.vue'
export default {

  components: {
    CardView 
    // DialogView 
  },

    name: "FeaturedView",
}
</script>

<style scope>
    .card{

    }
</style>