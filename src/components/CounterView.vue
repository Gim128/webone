<template>
  <v-container my-15>
    <v-row justify="center">
        <v-col lg="12" md="4" sm="4" xs="1" class="flex text-center">
            <v-subheader class="heading text-h4 justify-center"
                style="font-weight: bold;     padding-bottom: 19px;"
                >{{$t('message-sevent')}}</v-subheader>
                <p style="margin-bottom: -3px;">
                    {{$t('message-eighten')}}
                </p>
        </v-col>

        <v-row class="flex mt-7 mb-7" >
            <v-col cols="12" lg="4" md="3" sm="2" xs="1">
                <v-card class="pa-6 rounded-xl back-img-1" elevation="5">
                    <div class="d-flex align-center justify-space-between">  
                        <div class="">
                           <img class="" src="../assets/cn-red-two.png"  style="mt-5 width: 100px; height: 100px;"/>
                        </div>
                        <h2 class="black--text mr-2 text-1">$223,256.00 <v-icon color="green" style="margin-right: 28px !important; font-size: 33px; margin-bottom: 10px;">mdi-arrange-send-to-back</v-icon></h2>
                    </div>
                    <v-card-text class="text-center" style="font-weight: 600; color:cadetblue">
                        {{$t('message-ninet')}}
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" lg="4" md="3" sm="2" xs="1">
                <v-card class="pa-6 rounded-xl back-img-2" elevation="5">
                    <div class="d-flex align-center justify-space-between">  
                        <div class="">
                           <img class="" src="../assets/cnt-silver.png"  style="mt-5 width: 100px; height: 100px;"/>
                        </div>
                        <h2 class="black--text mr-2 text-2">$223,256.00 <v-icon color="green" style="margin-right: 28px !important; font-size: 33px; margin-bottom: 10px;">mdi-arrange-send-to-back</v-icon></h2>
                    </div>
                    <v-card-text class="text-center" style="font-weight: 600; color:cadetblue">
                        {{$t('message-twnty')}}
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" lg="4" md="3" sm="2" xs="1">
                <v-card class="pa-6 rounded-xl back-img-3" elevation="5">
                    <div class="d-flex align-center justify-space-between">  
                        <div class="">
                           <img class="" src="../assets/cnt-gold.png"  style="mt-5 width: 100px; height: 100px;"/>
                        </div>
                        <h2 class="black--text mr-2 text-3">$223,256.00 <v-icon color="green" style="margin-right: 28px !important; font-size: 33px; margin-bottom: 10px;">mdi-arrange-send-to-back</v-icon></h2>
                    </div>
                    <v-card-text class="text-center" style="font-weight: 600; color:cadetblue">
                        {{$t('message-twnty-one')}}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
    .oData{
        padding: 40px 0;
        flex: 0 0 56%;
        margin: 0 1%;
        box-shadow: 0px 34px 38px rgb(28 84 167 / 8%);
        border-radius: 10px;
        text-align: center;
    }

    .back-img-1 {
        background-image: url('https://img.freepik.com/free-vector/realistic-white-monochrome-background_23-2149023992.jpg?w=1060&t=st=1673243441~exp=1673244041~hmac=07b4f977618cf6bc485829123741df0586c50458cedc165bbb4cd0e08ffc9cdc');
        
    }

    .back-img-2{
        background-image: url('https://img.freepik.com/free-vector/realistic-white-monochrome-background_23-2148998032.jpg?w=1060&t=st=1673243676~exp=1673244276~hmac=f8fe8a1f22d751ed5197bdd79bd31ac0ceed5d1469a49c0a1668abc1a3047abb');
    }

    .back-img-3 {
        background-image: url('https://img.freepik.com/free-vector/white-abstract-background-3d-paper-style_23-2148405976.jpg?w=1060&t=st=1673243841~exp=1673244441~hmac=bfd122fbc059d2b5d6080dbeac0d760712591baa0ae208af8b6c4b061194e167');
    }

    .text-1
    .text-2
    .text-3
     {
        font-size: 29px;
    }

</style>