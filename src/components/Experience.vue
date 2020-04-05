<template v-if="experiences && experiences.length > 0">
    <div class="py-6 px-4">
      <h2 class="mb-3 d-flex align-center primary--text">
        <v-icon class="primary--text">mdi-briefcase-clock</v-icon>
        <span class="ml-2 subtitle-2">Work experience</span>
      </h2>
      <div fluid class="ma-0 pa-0 d-flex flex-wrap align-start justify-space-between mw">
        <div v-for="(e, i) in experiences" :key="i" class="ma-0 px-0 py-4">
          <h3 class="ma-0 pa-0 body-2 secondary--text">{{ e.title }}</h3>
          <p class="caption ma-0 pa-0">{{ e.subtitle }}</p>
          <p class="caption ma-0 pa-0">{{ e.period }}</p>
          <p class="ma-0 pa-0 caption font-regular grey--text text--darken-2">{{ e.text }}</p>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    experiences: {
      type: Array,
      default: [] as any[],
    },
  },
});

</script>

<style lang="scss" scoped>
@import "@/scss/font-sizes.scss";
.mw > div{
  min-width: 250px;
  max-width: 50%;
}
</style>
