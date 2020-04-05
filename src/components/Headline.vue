<template>
  <div v-show="headline && headline.name" class="py-6 px-4 d-flex flex-column align-center justify-space-around">
      <v-btn class="align-self-end" icon @click="toggleDarkMode">
        <v-icon color="primary">mdi-theme-light-dark</v-icon>
      </v-btn>
      <h1 :class="`ma-0 pa-0 mb-2 ${$vuetify.breakpoint.smAndUp ? 'display-1' : 'title'}`">{{ headline.name }}</h1>
      <p :class="`ma-0 pa-0 mb-3 font-italic text-center ${$vuetify.breakpoint.smAndUp ? 'subtitle' : 'overline'}`">
        {{ headline.function }}
      </p>
      <div class="d-flex flex-wrap align-center justify-space-around">
        <v-btn
                v-for="(social, i) in headline.socials"
                :key="i"
                :color="social.color"
                class="white--text ma-0 pa-0 mx-1"
                fab
                icon
                small
                @click="navigate(social)"
              >
              <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
      </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    headline: {
      type: Object,
      required: true,
      default: null as any,
    },
  },
  methods: {
    navigate(e: any): void {
      window.open(e.href, "_blank");
    },
    toggleDarkMode(): void {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
});

</script>

<style lang="scss" scoped>
@import "@/scss/font-sizes.scss";
</style>
