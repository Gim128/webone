<template>
        <v-col lg="12" sm="3" xs="1"> 
        <nav>
            <v-avatar class="avatar mr-3">
            <img src="../../src/assets/cnt-gold.png" alt=""> 
            </v-avatar>
            <div class="menu-item"><a href="#">Home</a></div>
            <div class="menu-item"><a href="#">Contact Us</a></div>
            <DropdownComponentVue title="Language" :items="languages" />
        </nav>
    </v-col>
</template>

<script>

import DropdownComponentVue from './DropdownComponent.vue';

export default {
    name: 'navbarView',
    components: {
        DropdownComponentVue
    },

    data() {
        return {
            languages: [
                {
                    title: 'English',
                    link: '#'
                },
                {
                    title: 'Chinese',
                    link: '#'
                }
            ]
        }
    }
}
</script>

<style>

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav .menu-item {
        color: #ffffff;
        padding: 18px 18px;
        position: relative;
        text-align: center;
        border-bottom: 3px solid transparent;
        display: flex;
        transition: 0.4s;
        font-size: 18px;
    }

    nav .menu-item.active,
    nav .menu-item:hover {
        background-color: #b2bec3;
        border-bottom-color: #0984e3;
    }

    nav .menu-item a{
        color: inherit;
        text-decoration: none;
    }

</style>