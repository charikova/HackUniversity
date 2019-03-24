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
          <f7-col><button class="col button button-outline" @click="payVote(50)">50 руб.<br />+ 1 голосов</button></f7-col>
          <f7-col><button class="col button button-outline" @click="payVote(100)">100 руб.<br />+ 5 голосов</button></f7-col>
        </f7-row>
        <f7-row>
          <f7-col><button class="col button button-outline" @click="payVote(500)">500 руб.<br />+ 25 голосов</button></f7-col>
          <f7-col><button class="col button button-outline" @click="payVote(1000)">1000 руб.<br />+ 50  голосов</button></f7-col>
        </f7-row>
      </f7-block>
    </f7-page-content>
  </f7-sheet>
</template>

<script>
  export default {
    name: "PaySheet",
    props: ['opened', 'track','eventId','trackId'],
    methods:{
      payVote(value){
        this.$store.dispatch("vote", {
          eventId: this.eventId,
          trackId: this.trackId,
          inc: "inc",
          value: value
        })
        /*this.$store.dispatch("editTotal", {flg:true, value:value})*/
      }
    }
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
    color: rgb(234, 56, 56);
    border-color: rgb(234, 56, 56);
  }
  .sheet-modal {
    height: 320px;
    background: #fff;
  }
  .sheet-close {
    color: rgb(234, 56, 56);
  }
</style>
