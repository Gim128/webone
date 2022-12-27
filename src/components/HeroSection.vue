<template>
    <div class="hero" >

        <v-container >
            <v-row>
                <v-col lg="6" sm="3" xs="3">
                    <h2 class="intro-text" style="color: black;">The Safe & Secure Coin</h2>
                    <v-spacer />
                    <v-spacer />
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui possimus fuga rem id ipsa nulla eius ullam, labore porro repellat!</p>
                    <v-spacer />
                    <p class="dub-text" style="padding-left: 8%;">
                        <span style="color:#0097e6;">CNT</span> 
                        -Entrance to the BLockchain World.            
                    </p>
                </v-col>
                <v-col lg="6" sm="3" xs="3">
                    
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name:"HeroSection"
}
</script>

<style scoped>
    .hero{
        opacity: 100%;
        background-size: cover;
        max-height: 85vh;
        height: 90vh;
        width: 100%
    }

    h2.intro-text{
        font-size: 70px;
        font-weight: 750;
        font-family: sans-serif,serif;
        padding-top: 39%;
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