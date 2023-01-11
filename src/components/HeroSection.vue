<template>
    <div class="hero" >
        <v-container pt-15>
            <v-row>
                <v-col lg="6">
                    <h2 class="intro-text" style="color: white;">{{$t('message')}}</h2>
                    <v-spacer />
                    <v-spacer />
                    <p class="description" style="color: beige;">{{$t('message-one')}}</p>
                    <v-spacer />
                    <p class="dub-text" style="padding-left: 8%; color: beige;">
                        <span style="color: #c0392b;">{{$t('message-two')}}</span> 
                        {{$t('message-three')}}           
                    </p>
                </v-col>
                <!-- <v-col lg="6" style="padding-top: 57px;">
                    <img src="../assets/hero-img.png" alt="">
                </v-col> -->
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name:"HeroSection",
}
</script>

<style scoped>
    .hero{
        background-image: url('../assets/hero-img.jpeg');
        opacity: 100%;
        background-size: cover;
        max-height: 90vh;
        height: 90vh;
        width: 100%
    }

    h2.intro-text{
        font-size: 70px;
        font-weight: 750;
        font-family: sans-serif,serif;
        padding-top: 28%;
        padding-left: 7%;
    }

    p.description{
        color: black;
        font-size: 23px;
        padding-left: 8%;
    }

    p.dub-text{
        font-weight: 500;
        font-size: 24px;
        color: #000000;
        padding-left: 8px;
    }

    p.dub-text.span{
        padding-left: 8%;
        font-weight: 700;
        font-size: 24px;
    }

</style>