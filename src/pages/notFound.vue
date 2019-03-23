<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <i class="f7-icons" style="padding-left: 10px" @click="back">chevron-left</i>
      </f7-nav-left>
      <f7-nav-title>
        404
      </f7-nav-title>
      <f7-nav-right>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      :(
    </f7-block>
  </f7-page>
</template>

<script>
  export default {
    name: "notFound",
    methods: {
      back() {
        window.location.href = `http://${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}`
        this.$f7router.navigate("/", {
          reloadCurrent: true,
          ignoreCache: true,
          reloadAll:true
        });
    }
  }
  }
</script>

<style scoped>

</style>
