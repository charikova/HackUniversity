<template>
  <f7-page class="main-page">
    <div class="main-block" style="background: #ff3b30;">
      <div class="main-layout-block"
      ></div>

    </div>
    <div class="main-block">
      <div class="main-layout-block"
      >
          <f7-button big fill color="red" @click="start">Создать мероприятие</f7-button>
      </div>
    </div>
    <div class="main-block">
      <div class="main-layout-block"
      ></div>
    </div>
  </f7-page>
</template>

<script>
  export default {
    name: "main",
    methods:{
      start(){
        this.$f7router.navigate('/admin/')
      }
    }
  }

</script>

<style>
  .main-page .page-content {
    display: flex;
    flex-direction: column;
  }

  .main-block {
    width: 100%;
    flex-grow: 1;
    border: 1px black solid;
  }

  .main-layout-block {
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

</style>
