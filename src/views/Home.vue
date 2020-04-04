<template>
<v-container class="mw">
  <v-row class="ma-0 pa-0 justify-center no-gutters">
    <v-col cols="12" class="ma-0 pa-0">
      <headline/>
    </v-col>
    <v-col cols="12" class="ma-0 pa-0">
     <about/>
    </v-col>
    <v-col cols="12" class="ma-0 pa-0">
     <experience/>
    </v-col>
    <v-col cols="12" class="ma-0 pa-0">
     <education/>
    </v-col>
    <v-col cols="12" class="ma-0 pa-0">
     <skills/>
    </v-col>
    <v-col cols="12" class="ma-0 pa-0">
     <courses/>
    </v-col>
    <v-col cols="12" class="ma-0 pa-0">
     <languages/>
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
});

</script>

<style lang="scss" scoped>
.display-1,
.display-2,
.display-3,
.display-4,
.title,
.subtitle-1,
.subtitle-2
{
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 600 !important;
}


.body-1,
.body-2,
.caption,
.overline {
  font-family: 'Lato', monospace !important;
  font-weight: 400 !important;
}

.mw {
  max-width: 900px;
}
</style>
