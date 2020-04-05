<template>
    <div v-if="article && article.title" class="py-6 px-4 d-flex flex-column align-start">
      <h2 class="mb-3 d-flex align-center primary--text">
        <v-icon class="primary--text">mdi-account</v-icon>
        <span class="ml-2 subtitle-2">{{ article.title }}</span>
      </h2>
      <p class="pa-0 ma-0 body-2 text-justify secondary--text dark">
        {{ article.intro }}
      </p>
      <div :class="`para pa-0 ma-0 ${!readMoreToggle ? `hidden` : ``}`">
        <p
          v-for="p in article.paragraphs"
          :key="p"
          class="pa-0 ma-0 mt-3 body-2 text-justify secondary--text"
          v-html="p"
        />
      </div>
      <a @click="onClick" class="more pa-0 ma-0 pt-1">show {{!readMoreToggle ? `more` : `less`}}...</a>
    </div>
</template>

<script lang="ts">

import Vue from "vue";
import { Article } from "@/models/datamodels";

export default Vue.extend({
  props: {
    article: {
      type: Object,
      default: {} as Article,
      required: true,
    },
  },
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
@import "@/scss/font-sizes.scss";

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
