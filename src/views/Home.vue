<template>
  <v-container class="mw">
    <v-row class="ma-0 pa-0 justify-center no-gutters">
      <v-col cols="12" md="8" class="ma-0 pa-0">
        <headline :headline="cv.headline" />
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <about :article="cv.about" />
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <experience :experiences="cv.experiences" />
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <skills :tags="cv.skills" />
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <education :educations="cv.educations" />
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <courses :courses="cv.courses" />
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <languages :languages="cv.languages" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Headline from "@/components/Headline.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Languages from "@/components/Languages.vue";
import Courses from "@/components/Courses.vue";
import * as data from "@/content.json";

export default Vue.extend({
  components: {
    Headline,
    About,
    Skills,
    Education,
    Experience,
    Languages,
    Courses,
  },
  computed: {
    cv() {
      return (data as any).default;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/font-sizes.scss";

.mw {
  max-width: 900px;
}
</style>
