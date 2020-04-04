<template>
    <div class="py-6 px-4 d-flex flex-column align-start">
      <h2 class="mb-3 d-flex align-center primary--text">
        <v-icon class="primary--text">mdi-account</v-icon>
        <span class="ml-2 subtitle-2">Who am I?</span>
      </h2>
      <p class="pa-0 ma-0 body-2 text-justify secondary--text dark">
        Every person has a fundamental quality in life, mine happens to be curiosity especially in the field of tech. From the moment I became aware of life to the point I'm standing. Luckily, that curiosity lead me towards computers. At the age of 11, I was able to assemble my own personal computer with specific parts of need. Diagnose any hardware and software problem and repair it instead of just reinstalling the OS, wich was a nice skill to have before starting high school.
      </p>
      <div :class="`para pa-0 ma-0 ${!readMoreToggle ? `hidden` : ``}`">
        <p class="pa-0 ma-0 mt-3 body-2 text-justify secondary--text">
          Reaching the age of 16, I wanted to do new things. Building computers/ servers is fun and all but it wasn't giving me much excitement anymore. So I taught myself programming. Thinking I'll will be done with the subject by the age of 18. Couldn't have been more wrong. The world of software development itself has so many branches, architectures, topic and discussion that I often find myself in overdrive in learning them. It's an obsession. But every hypothesis in life needs tests to make sure it works. Well that was exactly what I did. Every moment I learnt something new, I tried to apply it in my daily routine. This also includes unlearning deprecated architectures and/or bad programming habits.
        </p>
        <p  class="pa-0 ma-0 mt-3 body-2 text-justify secondary--text">
          This type of lifestyle made it possible to have a somewhat unique and exciting career path. From building an online startup in a 16m² room to providing software services to large multinational corporation of any industry. Something I'm deeply grateful for.
        </p>
        <p class="pa-0 ma-0 mt-3 body-2 text-justify secondary--text">
          Achievements so far are
          <ul>
            <li>an online food ordering platform, tech startup</li>
            <li>freelancing for companies in the fields of food and beverages ,electronics (metrology systems), steel company (production automation), education (cloud solution) and ofcourse FinTech (working with accountants, bank integrations, sme's)</li>
          </ul>
        </p>
      </div>
      <a @click="onClick" class="more pa-0 ma-0 pt-1">show {{!readMoreToggle ? `more` : `less`}}...</a>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      readMoreToggle: false as boolean,
    };
  },
  methods: {
    onClick() {
      this.readMoreToggle = !this.readMoreToggle;
    },
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

.para {
  transition: all 0.3s linear;
}
.hidden {
  opacity: 0;
  max-height:0;
  overflow: hidden;
}
.more {
  user-select: none;
}
</style>
