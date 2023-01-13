<template>
    <div class="footer-head">
        <v-footer  padless>
            <v-col lg="12" md="4" sm="2" xs="1" class="bg-img" style="background-color: #dfe6e9; ">
                <v-row justify="center">
                    <v-col lg="4" md="2" sm="1" xs="1" class="text-center">
                        <v-toolbar-title class="mt-5">{{$t('message-thirt-three')}}</v-toolbar-title>
                        <v-card-text>
                            <v-btn
                                v-for="icon in icons"
                                :key="icon"
                                class="mx-4 black-text"
                                icon
                            >
        
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>
        
                            </v-btn>
                        </v-card-text>
        
                        <v-subheader class="desc-5">
                            {{$t('message-thirty-four')}}
                        </v-subheader>
                        
                        
                        

                    </v-col>
                </v-row>

                <div class="mt-5 text-center">
                    <v-row justify="center"> 
                        <v-btn @click="whitePaper" class="mr-4 white--text" rounded color="#2e86de">
                            <span class="mr-3">{{$t('message-thirty-nine')}}</span>
                            <v-icon>mdi-text-box</v-icon>
                        </v-btn>
                        
                    </v-row>
                    
                </div>
        
                <div class="mt-10">
                    <v-divider></v-divider>
                    <v-subheader>
                        {{$t('message-thirty-six')}}  {{ new Date().getFullYear() }} — <strong>{{$t('message-thirty-svnth')}}</strong>
                        <v-spacer />
                        <strong>{{$t('message-thirty-eight')}}</strong>
                    </v-subheader>
                </div>
        
            </v-col>
        
          </v-footer>
    </div>
  
</template>

<script>
export default {
    name: "FooterView",

    methods: {
        whitePaper() {
            window.open('https://www.freepik.com/')
        },
    },

    data(){
        return{
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }
    },
}
</script>

<style scope>
   .bg-img {
       
        background-image: url('https://static.vecteezy.com/system/resources/previews/001/874/132/original/abstract-geometric-white-background-free-vector.jpg');
        background-repeat: repeat-x;
   }
</style>