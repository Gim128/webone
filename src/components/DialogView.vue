<template>
  <v-row justify="center">
    <v-dialog 
                v-model="dialog"
                width="600px"
            >

                <template v-bind:slot="activator={ on,attrs }">
                    <v-btn
                        color="#0984e3"
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                        View
                    </v-btn>

                </template>

                <v-card>
                    <v-card-title>
                        <span class="text-05"> Lorem, ipsum dolor. </span>
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur cupiditate voluptatibus rem quo dolorum voluptatem doloribus quas quia, ipsum maxime atque minima totam iusto eligendi voluptatum saepe consequuntur ea similique. Porro voluptatem quidem, sapiente quam illum dolore ab natus?
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="green darken-1" text @click="dialog = false">
                            I ACCEPT
                        </v-btn>

                    </v-card-actions>

                </v-card>

            </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: true,
      }
    },
  }
</script>

<style>

</style>