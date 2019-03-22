<template>
<div>
  лол
</div>
</template>
<script>
import { mapGetters } from "vuex";
import routes from "./routes";

import MainApp from "./pages/main.vue";


export default {
  components: {
    MainApp
  },
  data() {
    return {
      popupOpened: false,
      isIE: this.$device.ie,
      isLogin: false,
      f7params: {
        id: "io.framework7.hack", // App bundle ID
        name: "Hack", // App name
        theme: "ios", // Automatic theme detection
        routes,
        pushState: true,
        history: true,
        on: {
          routeChanged: (next, prev, router) => {
            localStorage.setItem("routersHistory", router.history);
          }
        },
      },
      PanelRightRoutes
    };
  },
};
</script>
<style>

</style>
