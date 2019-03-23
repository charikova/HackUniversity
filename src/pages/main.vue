<template>
  <f7-page class="main-page">
    <div class="main-block">
      <div class="img-layer">
        <img src="./../img/concert.jpg" class="concert-img" />
      </div>
    </div>
    <div class="main-block">
      <div class="main-layout-block">
        <div class="description">
          <div class="header">Узнайте лучше свою аудиторию!</div>
          Запустите голосование и дайте возможность посетителям концертов самим определить следующую песню
        </div>
        <f7-button big fill color="red" @click="start">Начать мероприятие</f7-button>
      </div>
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

  .main-page {
    background: #000 !important;
  }

  .main-block {
    width: 100%;
  }

  .main-layout-block {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    box-sizing: border-box;
    background: #000;
    color: #fff;
  }

  .concert-img {
    width: 100%;
  }

  .img-layer {
    background: rgba(0,0,0,.2);
  }

  .description {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }

  .header {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 1.1;
  }

</style>
