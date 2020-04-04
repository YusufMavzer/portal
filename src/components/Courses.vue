<template>
    <div class="py-6 px-4">
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
  data() {
    return {
      courses: [
        {
          name: "ASP.NET MVC",
          source: "PluralSight",
        },
        {
          name: "ASP.NET WebAPI",
          source: "PluralSight",
        },
        {
          name: "ASP.NET WebForms",
          source: "PluralSight",
        },
        {
          name: "AWS Compute",
          source: "PluralSight",
        },
        {
          name: "Angular Fundamentals",
          source: "PluralSight",
        },
        {
          name: "C Fundamentals",
          source: "PluralSight",
        },
        {
          name: "C# for Advanced",
          source: "PluralSight",
        },
        {
          name: "C++/CLR",
          source: "PluralSight",
        },
        {
          name: "Design Patterns with C#",
          source: "PluralSight",
        },
        {
          name: "Docker",
          source: "PluralSight",
        },
        {
          name: "Entity Framework",
          source: "PluralSight",
        },
        {
          name: "Git",
          source: "PluralSight",
        },
        {
          name: "JS6 for JS5 Developers",
          source: "PluralSight",
        },
        {
          name: "Microservices",
          source: "PluralSight",
        },
        {
          name: "Azure App Services",
          source: "PluralSight",
        },
        {
          name: "Azure Storage",
          source: "PluralSight",
        },
        {
          name: "Azure Virtual Machine",
          source: "PluralSight",
        },
        {
          name: "Modern C++ (C++17)",
          source: "PluralSight",
        },
        {
          name: "React Fundamentals",
          source: "PluralSight",
        },
        {
          name: "Rest Services",
          source: "PluralSight",
        },
        {
          name: "Solid Principals for OOPS",
          source: "PluralSight",
        },
        {
          name: "T4 Templates",
          source: "PluralSight",
        },
        {
          name: "Typescript Fundamentals",
          source: "PluralSight",
        },
        {
          name: "VB.NET for Advanced",
          source: "PluralSight",
        },
        {
          name: "VueJS Fundamentals",
          source: "PluralSight",
        },
        {
          name: "WCF",
          source: "PluralSight",
        },
        {
          name: "WPF",
          source: "PluralSight",
        },
        {
          name: "Winforms",
          source: "PluralSight",
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
  max-width: 33.33333%;
}

</style>
