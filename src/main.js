import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import globalSettings from "./config/settings";
import helper from "./config/helper";

// import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
// import "bootstrap/dist/js/bootstrap.min.js";

import "../src/assets/css/photon.min.css";
import "../src/assets/css/custom.css";

Vue.config.productionTip = false;

const plugin = {
  //vuejs custom plugin
  install() {
    Vue.helpers = "abc";
    Vue.prototype.$global = globalSettings; //GLOBAL SETTINGS
    Vue.prototype.$helper = helper; //GLOBAL HELPERS
  }
};

Vue.use(plugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
