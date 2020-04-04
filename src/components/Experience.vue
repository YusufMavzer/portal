<template>
    <div class="py-6 px-4">
      <h2 class="mb-3 d-flex align-center primary--text">
        <v-icon class="primary--text">mdi-briefcase-clock</v-icon>
        <span class="ml-2 subtitle-2">Work experience</span>
      </h2>
      <div fluid class="ma-0 pa-0 d-flex flex-wrap align-start justify-space-between mw">
        <div v-for="(e, i) in exp" :key="i" class="ma-0 px-0 py-4">
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
  data() {
    return {
      exp: [
        {
          period: "Jan 2020 - Present",
          title: "Fullstack Senior Dotnet Developer",
          subtitle: "Toco Belgium · Freelancer",
          text: "",
        },
        {
          period: "Aug 2019 - Jan 2020 · 6mos",
          title: "Fullstack Senior Dotnet Developer",
          subtitle: "ArcelorMittal Belgium · Freelancer",
          text: "",
        },
        {
          period: "Apr 2019 - Jul 2019 · 4mos",
          title: "Fullstack Senior Dotnet Developer",
          subtitle: "SignPost Belgium · Freelancer",
          text: "",
        },
        {
          period: "Oct 2018 - Apr 2019 · 7mos",
          title: "Fullstack Medior Dotnet Developer",
          subtitle: "KLA-Tencor Belgium · Freelancer",
          text: "",
        },
        {
          period: "Oct 2016 - Aug 2018 · 1yrs 11mos",
          title: "Founder & Developer",
          subtitle: "YummyExpress.be Belgium · Self-employed",
          text: "",
        },
        {
          period: "Apr 2014 - Oct 2016 · 2yrs 7mos",
          title: "Fullstack Junior Dotnet Developer",
          subtitle: "Misc · Freelancer",
          text: "",
        },
        {
          period: "Feb 2014 - Feb 2014 · 1mos",
          title: "Intern",
          subtitle: "Imec (IMinds) · Internship",
          text: "",
        },
      ],
    };
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

.mw > div{
  min-width: 250px;
  max-width: 50%;
}
</style>
