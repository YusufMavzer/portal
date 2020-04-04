<template>
    <div class="py-6 px-4 d-flex flex-column align-start">
      <h2 class="mb-3 d-flex align-center primary--text">
        <v-icon class="primary--text">mdi-playlist-check</v-icon>
        <span class="ml-2 subtitle-2">Skills & Endorsements</span>
      </h2>
      <div class="ma-0 pa-0 d-flex flex-wrap align-start justify-space-between">
        <v-chip class="ma-1 ml-0 overline grey lighten-2 secondary--text" outlined v-for="tag in tags" :key="tag"  >
          {{ tag }}
        </v-chip>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      tags: [
        ".NET Framwork",
        ".NET Core",
        "C#",
        "VB.NET",
        "Modern C++",
        "ES6",
        "Typescript",
        "HTML",
        "CSS",
        "VueJS",
        "ReactJS",
        "SQL",
        "ADO.NET",
        "Entity Framework",
        "NoSQL",
        "MsSQL",
        "MongoDB",
        "ElasticSearch",
        "Docker",
        "Microservices",
        "RabbitMQ",
        "AWS",
        "GCP",
        "Azure",
        "Windows",
        "Linux (Ubuntu)",
        "Git",
        "Scrum",
        "UML",
        "WebAPI",
        "Mvc",
        "WPF",
        "WCF",
        "WinForms",
        "WebForms",
        "Razor",
        "XML",
        "JSON",
        "YAML",
        "XAML"] as Array<string>,
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
</style>
