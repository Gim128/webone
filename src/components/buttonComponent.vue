<template>
    <div class="text-center">
        <v-menu data-app offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              data-app
              color="#0652DD"
              dark
              v-bind="attrs"
              v-on="on"
              close-on-click="true"
            >
              Language
            </v-btn>
          </template>
          <v-list data-app>
            <v-list-item data-app
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title data-app >{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
</template>

<script>

export default {
    name: "ButtonView",

    data: () => ({
      items: [
        { title: 'English' },
        { title: 'Chinese' },
      ],
    }),
}
</script>

<style>

</style>