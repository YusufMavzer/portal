<template>
    <div class="py-6 px-4 d-flex flex-column align-start">
      <h2 class="mb-3 d-flex align-center primary--text">
        <v-icon class="primary--text">mdi-playlist-check</v-icon>
        <span class="ml-2 subtitle-2">Skills & Endorsements</span>
      </h2>
      <div class="ma-0 pa-0 d-flex flex-wrap align-start justify-space-between">
        <v-chip class="ma-1 ml-0 overline grey lighten-2 secondary secondary--text" outlined  v-for="tag in tags" :key="tag"  >
          {{ tag }}
        </v-chip>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    tags: {
      type: Array,
      required: true,
      default: [] as string[],
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/font-sizes.scss";

</style>
