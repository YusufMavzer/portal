// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: "#81d4fa",
        secondary: "#f9f9f9",
        accent: "#ee028b",
        error: "#f84f4f",
        warning: "#ff890e",
        info: "#00c7e6",
        success: "#00ba97",
        background: "#121212",
      },
      light: {
        primary: "#18a3fa",
        secondary: "#999999",
        accent: "#ee028b",
        error: "#f84f4f",
        warning: "#ff890e",
        info: "#00c7e6",
        success: "#00ba97",
        background: "#ffffff",
      },
    },
  },
});
