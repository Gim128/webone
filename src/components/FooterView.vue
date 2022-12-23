<template>
    <div>
        <v-footer padless>
            <v-col lg="12" style="background-color: #dfe6e9;">
                <v-row justify="center">
                    <v-col lg="4" class="text-center">
                        <v-toolbar-title class="mt-5">iCan Lanka (PVT) LTD</v-toolbar-title>
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
        
                        <v-subheader class="desc-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Aperiam tenetur eius sunt illo nemo est esse sint omnis iusto hic.
                        </v-subheader>
        
                        <v-form class="mt-4">
                            <v-text-field label="Email" outlined dense />
                            <v-btn rounded color="success">Subscription</v-btn>
                        </v-form>
        
                    </v-col>
                </v-row>
        
                <div class="mt-10">
                    <v-divider></v-divider>
                    <v-subheader>
                        © Copyright iCan Lanka. All Rights Reserved 2022  {{ new Date().getFullYear() }} — <strong>iCan Lanka (PVT) LTD, Sri Lanka</strong>
                        <v-spacer />
                        <strong>Devloped by iCan Lanka DEV's 2022.</strong>
                    </v-subheader>
                </div>
        
            </v-col>
        
          </v-footer>
    </div>
  
</template>

<script>
export default {
    name: "FooterView",
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
   
</style>