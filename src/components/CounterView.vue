<template>
  <v-container my-15>
    <v-row justify="center">
        <v-col lg="12" sm="3" xs="1" class="text-center">
            <v-subheader class="heading text-h4 justify-center"
                style="font-weight: bold;     padding-bottom: 19px;"
                >Lorem, ipsum dolor.</v-subheader>
                <p style="margin-bottom: -3px;">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, ipsum accusantium reiciendis minus placeat corporis enim explicabo?
                </p>
        </v-col>

        <!-- <div class="statistic"> -->
            <v-col lg="12" sm="3" xs="1" style="box-sizing: border-box;">
                <div class="text-center d-flex align-center oData">
                    <v-col lg="4" sm="1" xs="1">
                        <v-card
                            elevation="2"
                            shaped
                            class="mx-auto"
                            max-width="344"
                            outlined
                            >
                            
                            <v-list-item>
                                <v-avatar class="mr-5"> 
                                    <img src="../assets/cnt-silver.png" alt="">
                                </v-avatar>

                                <p class="num">
                                    $
                                    <span id="cuurency">223,354,154</span>
                                </p>

                            </v-list-item>

                        </v-card>
                    </v-col>

                    <v-col lg="4" sm="1" xs="1">
                        <v-card
                            elevation="2"
                            shaped
                            class="mx-auto"
                            max-width="344"
                            outlined
                            >
                            
                            <v-list-item>
                                <v-avatar class="mr-5"> 
                                    <img src="../assets/cnt-silver.png" alt="">
                                </v-avatar>

                                <p class="num">
                                    $
                                    <span id="cuurency">223,354,154</span>
                                </p>

                            </v-list-item>

                        </v-card>
                    </v-col>

                    <v-col lg="4" sm="1" xs="1">
                        <v-card
                            elevation="2"
                            shaped
                            class="mx-auto"
                            max-width="344"
                            outlined
                            >
                            
                            <v-list-item>
                                <v-avatar class="mr-5"> 
                                    <img src="../assets/cnt-silver.png" alt="">
                                </v-avatar>

                                <p class="num">
                                    $
                                    <span id="cuurency">223,354,154</span>
                                </p>

                            </v-list-item>

                        </v-card>
                    </v-col>

                </div>
            </v-col>
        <!-- </div> -->

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
</style>