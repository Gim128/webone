<template>
    <div class="hero" >

        <v-container >
            <v-row>
                <v-col lg="6" sm="3" xs="3">
                    <h2 class="intro-text" style="color: beige;">The Safe & Secure Coin</h2>
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
        background: url('https://images.theconversation.com/files/121656/original/image-20160509-23367-kxbc3k.jpg?ixlib=rb-1.1.0&rect=345%2C0%2C2178%2C1059&q=45&auto=format&w=1356&h=668&fit=crop') no-repeat;
        background-size: cover;
        max-height: 85vh;
        height: 80vh;
        width: 100%
    }

    h2.intro-text{
        font-size: 60px;
        font-weight: 700;
        font-family: sans-serif,serif;
        padding-top: 22%;
        padding-left: 8%;
    }

    p.description{
        color: white;
        font-size: 23px;
        padding-left: 8%;
    }

    p.dub-text{
        font-weight: 500;
        font-size: 24px;
        color: #ffffff;
        padding-left: 8px;
    }

    p.dub-text.span{
        padding-left: 8%;
        font-weight: 700;
        font-size: 24px;
    }

</style>