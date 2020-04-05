<template>
    <div class="py-6 px-4">
      <h2 class="mb-3 d-flex align-center primary--text">
        <v-icon class="primary--text">mdi-school</v-icon>
        <span class="ml-2 subtitle-2">Education</span>
      </h2>
      <div fluid class="ma-0 pa-0 d-flex flex-wrap align-start justify-start">
        <v-card v-for="(frame, i) in educations" :key="i" class="ma-0 pa-3 mr-2 mb-5 " width="275px" outlined>
            <v-card-title  :class="`ma-0 pa-0 subtitle-2 font-weight-regular mb-1 secondary--text text--darken-3`">{{ frame.year }}</v-card-title>
            <v-card-subtitle class="caption ma-0 pa-0 secondary-text">{{ frame.title }}</v-card-subtitle>
            <v-card-text class="ma-0 pa-0 caption font-regular secondary--text text--darken-2">
               {{ frame.text }}
            </v-card-text>
          </v-card>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    educations: {
      type: Array,
      default: [] as any[],
      required: true,
    },
  },
});

</script>

<style lang="scss" scoped>
@import "@/scss/font-sizes.scss";
</style>
