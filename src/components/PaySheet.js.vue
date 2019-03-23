<template>
  <f7-sheet class="demo-sheet" :opened="opened" @sheet:closed="$emit('sheet:closed');">
    <f7-toolbar>
      <div class="left"></div>
      <div class="right">
        <f7-link sheet-close>Закрыть</f7-link>
      </div>
    </f7-toolbar>
    <!-- Scrollable sheet content -->
    <f7-page-content>
      <f7-block v-if="track">
        <p class="trackname">{{ `Вы голосуете за ${track.name} – ${track.title}` }}</p>
        <f7-row>
          <f7-col><button class="col button button-outline">50 руб.<br />+ 1 голосов</button></f7-col>
          <f7-col><button class="col button button-outline">100 руб.<br />+ 5 голосов</button></f7-col>
        </f7-row>
        <f7-row>
          <f7-col><button class="col button button-outline">500 руб.<br />+ 25 голосов</button></f7-col>
          <f7-col><button class="col button button-outline">1000 руб.<br />+ 50  голосов</button></f7-col>
        </f7-row>
      </f7-block>
    </f7-page-content>
  </f7-sheet>
</template>

<script>
  export default {
    name: "PaySheet",
    props: ['opened', 'track'],
  };
</script>

<style scoped>
  .trackname {
    font-size: 1.2rem;
  }
  .button {
    font-size: 1.2rem;
    margin-bottom: 15px;
    height: 60px;
  }
  .sheet-modal {
    height: 320px;
  }
</style>
