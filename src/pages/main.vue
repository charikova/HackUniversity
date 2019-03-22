<template>
  <f7-page>
    <f7-navbar title="Генерация QR-Кода для мероприятия"></f7-navbar>
    <div>

      <f7-list>
        <f7-block-title>Имя Артиста</f7-block-title>
        <f7-list-input
          label=""
          type="text"
          :value="name"
          @input="name = $event.target.value"
          placeholder="Имя"
          clear-button
        ></f7-list-input>
      </f7-list>
      <f7-list>
        <f7-block-title style="display: flex;justify-content: space-between;align-content: center;">
          <span>Добавить песен</span>
          <i
            class="material-icons"
            @click="addSong"
          >add</i>
        </f7-block-title>
        <f7-list-input v-for="song in songs"
                       :key="song.name+'-'+song.id"
                       :value="song.name"
                       @input="song.name = $event.target.value"
                       placeholder="Название песни"
        >

        </f7-list-input>
      </f7-list>
      <f7-block>
        <f7-button large fill color="red" @click="generateLink">Генерировать QR-Код</f7-button>
      </f7-block>
      <f7-block class="qr-code">
        <qrcode v-if="link" :value="link" :options="{ width: 200 }"></qrcode>
      </f7-block>
    </div>
  </f7-page>
</template>

<script>

  export default {
    name: "main",
    data() {
      return {
        link: "",
        name: "",
        songs: [{
          id:0
        }]
      }
    },
    methods: {
      addSong() {
        this.songs.push({
          id:this.songs.length,
        });
        console.log(this.songs)
      },
      generateLink() {
        this.$store.dispatch('getEventId')
          .then(()=>{
            this.link = `http://${process.env.VUE_APP_API_HOST}:${
              process.env.VUE_APP_API_PORT}/event/${this.$store.getters["getEventId"]}`;
          })
          .catch(()=>{
            console.log('ебать ты лох')
          })

      }
    }
  }
</script>

<style scoped>
  .main-button-qr {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .qr-code {
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>
