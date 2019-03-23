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
          <f7-col><button class="col button button-outline">rtr</button></f7-col>
          <f7-col><button class="col button button-outline">rtr</button></f7-col>
        </f7-row>
        <f7-row>
          <f7-col><button class="col button button-outline"></button></f7-col>
          <f7-col><button class="col button button-outline"></button></f7-col>
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
</style>
