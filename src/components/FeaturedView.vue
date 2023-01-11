<template>
  <v-container my-15>
    <v-row>
      
        <v-col lg="6" class="featured-one">
            <img src="" alt="">
        </v-col>

        <v-col lg="6" style="margin-top: 10x;">

          <v-subheader class="heading text-h4 pb-4" style="font-weight: bold;">{{$t('message-eight')}}</v-subheader>

          <div class="desc-one">
            <v-icon color="#17c0eb" class="mr-3">mdi-moon-full</v-icon>
            <strong class="pt-5 desc-one">{{$t('message-four')}}</strong>
          </div>

            <p class="desc-2" style="margin-top: 16px;">
                {{$t('message-five')}}
            </p>

            <v-list>

              <v-list-item>
                <v-icon color="#17c0eb" class="mr-3">mdi-rhombus-split</v-icon>
                  <v-list-item-subtitle>
                      {{$t('message-six')}}
                  </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-icon color="#17c0eb" class="mr-3">mdi-rhombus-split</v-icon>
                  <v-list-item-subtitle>
                      {{$t('message-seven')}}
                  </v-list-item-subtitle>
              </v-list-item>

            </v-list>

            <p class="desc-3">
                {{$t('message-nine')}}
            </p>

            <v-spacer></v-spacer>

            <div class="btn-group">
              <v-btn @click="btnClick" block color="#2e86de" elevation="3" x-large class="btn-address-1">
                <span class="mr-3" style="color: white;">View TRON Contract Address <v-icon>mdi-arrow-right-thin</v-icon></span>
              </v-btn>

              <v-spacer />

              <!-- <v-btn @click="btnAddress" block color="#2e86de" elevation="3" x-large class="btn-address-2">
                <span class="mr-3" style="color: white;">View CNT Contract Address <v-icon>mdi-arrow-right-thin</v-icon></span>
              </v-btn> -->

            </div>
        </v-col>

    </v-row>
  </v-container>
</template>

<script>

export default {

  components: {

  },

    name: "FeaturedView",

    methods: {
      btnClick(){
        window.open('https://tronscan.org/#/token20/TX8yuS4sRtbSXJVtjsmR7pSDQDrioWopKS/code')
      },
      btnAddress(){
        window.open('https://www.google.com/')
      }
    },

}
</script>

<style scope>
    p.desc-3{
      padding-top: 15px;
    }

    p.desc-2{
      padding-top: 12px;
    }

    .desc-one{
      padding-top: 15px;
      font-size: 20px;
    }

    .btn-group .btn-address-1 {
      margin-bottom: 19px;
      margin-top: 44px;
    }

    .featured-one{
      background-image: url('../assets/featured-two.png');
    }

</style>