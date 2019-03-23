<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <i class="f7-icons" style="padding-left: 10px" @click="back">chevron-left</i>
      </f7-nav-left>
      <f7-nav-title>
        Генерация QR-кода для мероприятия
      </f7-nav-title>
      <f7-nav-right>
      </f7-nav-right>
    </f7-navbar>

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
          <div style="display: flex;">
            <div @click="delSong">
              <i
                class="f7-icons"
              >delete</i>
            </div>
            <div @click="addSong">
              <i
                class="f7-icons"
                style="margin-left:10px"
              >add</i>
            </div>
          </div>
        </f7-block-title>
        <f7-list-input v-for="song in songs"
                       :key="song.name+'-'+song.id"
                       :value="song.title"
                       @input="song.title = $event.target.value"
                       :placeholder="`${song.id}. Название песни`"
        >
        </f7-list-input>
      </f7-list>
      <f7-block>
        <f7-button v-if="!eventAdd" big fill color="red" @click="generateLink">Генерировать QR-Код</f7-button>
      </f7-block>
      <f7-block>
        <f7-button v-if="eventAdd" big fill color="red" @click="navigateEvent">Перейти в мероприятие</f7-button>
      </f7-block>
      <f7-block class="qr-code">
        <qrcode v-if="link" :value="link" :options="{ width: widthDevice }"></qrcode>
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
        eventAdd: false,
        songs: [{
          id: 1
        }]
      }
    },
    computed: {
      widthDevice() {
        return document.body.clientWidth - 100
      }
    },
    methods: {
      addSong() {
        //if (!this.songs[this.songs.length - 1].title) return
        this.songs.push({
          id: this.songs.length + 1,
        });
      },
      delSong() {
        if (this.songs.length !== 1) this.songs.pop();
      },
      generateLink() {
        if (!this.name) {
          this.$f7.dialog.alert("Имя обязательное поле", "Ошибка");
          return
        }
        if (!this.songs[this.songs.length - 1].title) {
          this.$f7.dialog.alert("Заполните песни", "Ошибка");
          return
        }
        this.$store.dispatch('getEventId', {
          name: this.name,
          songs: this.songs
        })
          .then(() => {
            this.link = `http://${process.env.VUE_APP_API_HOST}:${
              process.env.VUE_APP_API_PORT}/event/${this.$store.getters["getEventId"]}`;
            this.eventAdd = true;
          })
          .catch(error => {
            if (error.response && error.response.status === 500)
              this.$f7.dialog.alert("Непредвиденная ошибка сервера", "Ошибка");
          })
      },
      navigateEvent() {
        this.$f7router.navigate(`/event/${this.$store.getters["getEventId"]}/`)
      },
      back() {
        this.$f7router.back();
      }
    }
  }
</script>

<style scoped>

  .qr-code {
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>
