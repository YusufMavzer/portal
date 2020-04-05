<template>
  <v-container class="mw">
    <v-row class="ma-0 pa-0 justify-center no-gutters">
      <v-col cols="12" class="ma-0 pa-0">
        <headline :headline="headline"/>
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <about :article="about"/>
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <experience :experiences="experiences"/>
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <education :educations="educations" />
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <skills :tags="skills" />
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <courses :courses="courses" />
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <languages :languages="languages"/>
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
import { Article } from "@/models/datamodels";

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
  data() {
    return {
      headline: {
        name: "Yusuf Mavzer",
        function: "Fullstack Senior Dotnet Developer",
        socials: [
          {
            name: "Linkedin",
            href: "https://www.linkedin.com/in/yusuf-mavzer/",
            icon: "mdi-linkedin",
            color: "blue",
          },
          {
            name: "Stackoverflow",
            href: "https://stackoverflow.com/users/8890779/yusuf-mavzer",
            icon: "mdi-stack-overflow",
            color: "orange",
          },
          {
            name: "Github",
            href: "https://github.com/YusufMavzer",
            icon: "mdi-github-circle",
            color: "secondary",
          },
          {
            name: "Docker",
            href: "https://hub.docker.com/u/yusufmavzer",
            icon: "mdi-docker",
            color: "blue",
          },
        ],
      },
      about: {
        title: "Who am I?",
        intro:
          "Every person has a fundamental quality in life, mine happens to be curiosity especially in the field of tech. From the moment I became aware of life to the point I'm standing. Luckily, that curiosity lead me towards computers. At the age of 11, I was able to assemble my own personal computer with specific parts of need. Diagnose any hardware and software problem and repair it instead of just reinstalling the OS, wich was a nice skill to have before starting high school.",
        paragraphs: [
          "Reaching the age of 16, I wanted to do new things. Building computers/ servers is fun and all but it wasn't giving me much excitement anymore. So I taught myself programming. Thinking I'll will be done with the subject by the age of 18. Couldn't have been more wrong. The world of software development itself has so many branches, architectures, topic and discussion that I often find myself in overdrive in learning them. It's an obsession. But every hypothesis in life needs tests to make sure it works. Well that was exactly what I did. Every moment I learnt something new, I tried to apply it in my daily routine. This also includes unlearning deprecated architectures and/or bad programming habits.",
          "This type of lifestyle made it possible to have a somewhat unique and exciting career path. From building an online startup in a 16m² room to providing software services to large multinational corporation of any industry. Something I'm deeply grateful for.",
          "Achievements so far are <ul> <li>an online food ordering platform, tech startup</li> <li>freelancing for companies in the fields of food and beverages ,electronics (metrology systems), steel company (production automation), education (cloud solution) and ofcourse FinTech (working with accountants, bank integrations, sme's)</li></ul>",
        ],
      } as Article,
      courses: [
        {
          name: "Amazon VPC Operations",
          source: "PluralSight",
        },
        {
          name: "Amazon ECS Fargate",
          source: "PluralSight",
        },
        {
          name: "Amazon EKS",
          source: "PluralSight",
        },
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
      ] as Array<any>,
      skills: [
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
      educations: [
        {
          year: "2014 - 2016",
          title: "Bachelor of Applied Informatics",
          text: "University College of Ghent",
        },
        {
          year: "2008 - 2014",
          title: "Technical Secundairy Education",
          text: "Benedictuspoort Campus Ledeberg",
        },
      ] as any[],
      experiences: [
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
      ] as any[],
      languages: [
        {
          title: "Dutch",
          subtitle: "Native or bilingual proficiency",
        },
        {
          title: "English",
          subtitle: "Full professional proficiency",
        },
        {
          title: "Turkish",
          subtitle: "Native or bilingual proficiency",
        },
      ] as any[],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/font-sizes.scss";

.mw {
  max-width: 900px;
}
</style>
