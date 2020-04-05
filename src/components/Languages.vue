<template>
    <div v-if="languages && languages.length > 0" class="py-6 px-4">
      <h2 class="mb-3 d-flex align-center primary--text">
        <v-icon class="primary--text">mdi-translate</v-icon>
        <span class="ml-2 subtitle-2">Languages</span>
      </h2>
      <div fluid class="ma-0 pa-0 d-flex flex-wrap align-start justify-space-between">
        <div v-for="(e, i) in languages" :key="i" class="ma-0 px-0 pb-4 pr-4">
          <h3 class="ma-0 pa-0 subtitle-2 font-weight-regular secondary--text text--darken-3">{{ e.title }}</h3>
          <p class="caption ma-0 pa-0">{{ e.subtitle }}</p>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    languages: {
      type: Array,
      default: [] as any[],
    },
  },
});

</script>

<style lang="scss" scoped>
@import "@/scss/font-sizes.scss";
</style>
