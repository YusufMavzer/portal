<template>
    <div v-if="courses &&  courses.length > 0" class="py-6 px-4">
      <h2 class="mb-3 d-flex align-center primary--text">
        <v-icon class="primary--text">mdi-notebook-outline</v-icon>
        <span class="ml-2 subtitle-2">Courses</span>
      </h2>
      <div fluid class="ma-0 pa-0 d-flex flex-wrap align-start justify-space-between mw">
        <div v-for="(e, i) in courses" :key="i" class="ma-0 px-0 py-4">
          <p class="ma-0 pa-0 body-2 secondary--text text--darken-4">{{ e.name }}</p>
          <p class="caption ma-0 pa-0 secondary--text text--darken-2">{{ e.source }}</p>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    courses: {
      type: Array,
      default: [] as Array<any>,
      required: true,
    },
  },
});

</script>

<style lang="scss" scoped>
@import "@/scss/font-sizes.scss";

.mw > div{
  min-width: 250px;
  max-width: 33.33333%;
}

</style>
