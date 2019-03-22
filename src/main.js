/* eslint-disable no-unused-vars */
import "@babel/polyfill";

// Import Vue
import Vue from "vue";

// Import F7
import Framework7 from "framework7/framework7.esm.bundle.js";

// Import F7 Vue Plugin
import Framework7Vue from "framework7-vue/framework7-vue.esm.bundle.js";


// Combine F7 & Vue
Framework7.use(Framework7Vue);

// Import Routes
import Routes from "./routes";

// Import store
import store from "./store";

// Import App Component
import App from "./app";

// Import VueRouter & YaMetrika
import VueRouter from "vue-router";
const router = new VueRouter({
  mode: "history",
  routes: Routes
});
Vue.use(VueRouter);


import WebSocketHandler from "./js/websocket";

// Init App
new Vue({
  router,
  template: '<App/>',
  components: {
    app: App
  },
  store,
  data() {
    return {
      socket: new WebSocketHandler(store)
    };
  },
  render: h => h(App)
}).$mount("#app");
