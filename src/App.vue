<template>
  <div id="app">
    <v-app :style="{background: $vuetify.theme.themes[isDark].background}">
      <v-content>
        <v-container>
          <v-row justify="center" align="center" class="ma-0 pa-0" no-gutters>
            <v-col cols="12" class="ma-0 pa-0">
              <home/>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/views/Home.vue";

@Component({
  components: {
    Home,
  },
  computed: {
    isDark(): string {
      return (this.$vuetify.theme.dark) ? "dark" : "light";
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html, body{
  color: #000000;
}
* {
  font-family: 'Lato', monospace !important;
  font-weight: 400 !important;
}
h1,h2,h3,h5,h6 {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 700 !important;
}
p {
  line-height: 1.7rem !important;
}
</style>
