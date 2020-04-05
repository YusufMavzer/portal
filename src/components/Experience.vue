<template v-if="experiences && experiences.length > 0">
    <div class="py-6 px-4">
      <h2 class="mb-3 d-flex align-center primary--text">
        <v-icon class="primary--text">mdi-briefcase-clock</v-icon>
        <span class="ml-2 subtitle-2">Work experience</span>
      </h2>
      <div fluid class="ma-0 pa-0 d-flex flex-column align-start justify-center mw">
        <div v-for="(e, i) in experiences" :key="i" class="ma-0 px-0 py-4">
          <h3 class="ma-0 pa-0 body-1 secondary--text text--darken-1">{{ e.title }}</h3>
          <p class="body-2 ma-0 pa-0 secondary--text text--darken-2">{{ e.subtitle }}</p>
          <p class="body-2 ma-0 pa-0 secondary--text text--darken-2">{{ e.period }}</p>
          <p class="ma-0 pa-0 body-2 font-weight-medium secondary--text text--darken-4">{{ e.text }}</p>
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
  min-width: 350px;
  max-width: 85%;
}
</style>
