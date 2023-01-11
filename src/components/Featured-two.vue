<template>
    <div>
    <v-container my-15>
        <v-row justify="center">
            <v-subheader class="heading text-h4" style="padding-bottom: 58px; font-weight: bold">{{$t('message-eleven')}}</v-subheader>
        </v-row>
        <v-row>
            <v-col lg="6" sm="1" xs="1"  class="featured-two">
                <img src="" alt="">
            </v-col>

            <v-col lg="6" md="4" sm="1" xs="1">
                <div>
                    <p class="para-one" style="font-weight: 500;">
                        {{$t('message-twle')}}
                    </p>
                </div>
                
                <v-list class="text-h6">
                    <v-list-item>
                        <v-icon color="#17c0eb" class="mr-3">mdi-rhombus-split</v-icon>
                        <v-list-item-subtitle>{{$t('message-thirteen')}}</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                        <v-icon color="#17c0eb" class="mr-3">mdi-rhombus-split</v-icon>
                        <v-list-item-subtitle>{{$t('message-fourt')}}</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                        <v-icon color="#17c0eb" class="mr-3">mdi-rhombus-split</v-icon>
                        <v-list-item-subtitle>{{$t('message-fiftn')}}</v-list-item-subtitle>
                    </v-list-item>

                </v-list>

                <v-spacer />

                <div>
                    <p class="para-two" style="font-size: 17px; font-weight: 500;">
                        {{$t('message-sixt')}}
                    </p>
                </div>
                

            </v-col>

        </v-row>
    </v-container>
</div>
</template>



<script>

export default {
    name:"Featured-two",

}
</script>

<style scoped>
    .featured-two {
        background-image: url('../assets/featured-two.png');
        height: 50vh;
        width: 100vw;
        margin-bottom: -53px;
    }
</style>