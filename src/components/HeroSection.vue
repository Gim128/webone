<template>
  <v-container class="hero">
    <v-row>
        <v-col lg="5">
            <h2 style="color: beige;">The Safe & Secure Coin</h2>
            <v-spacer />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui possimus fuga rem id ipsa nulla eius ullam, labore porro repellat!</p>
            <v-spacer />
            <p>
                <span style="color: '#0097e6';">CNT</span> 
                -Entrance to the BLockchain World.            
            </p>
        </v-col>
        <v-col lg="7">

        </v-col>
    </v-row>
  </v-container>
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
        height: 80vh;
        width: 100vw;
    }
</style>