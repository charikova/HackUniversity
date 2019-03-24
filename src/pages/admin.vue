<template>
  <f7-page>
    <f7-page-content>
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

      <f7-list>
        <f7-block-title>Имя Исполнителя</f7-block-title>
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
        <f7-block-title>
          <span>Добавить песни</span>
        </f7-block-title>
        <f7-block-header>Здесь вы должны добавить песни, которые будут играть на вашем мероприятии</f7-block-header>
        <f7-block-title style="display: flex;justify-content: flex-end;margin-top:0">
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
      <f7-block style="display: flex;justify-content: center">
        <f7-button v-if="eventAdd && isDesktop" big fill color="red" @click="closeQr" style="width: 30%;">Открыть QR-код</f7-button>
      </f7-block>
      <f7-block class="qr-code" v-if="!isDesktop">
        <qrcode v-if="link && open" :value="link" :options="{ width: widthDevice }"></qrcode>
      </f7-block>
      <div v-if="isDesktop && open && link" @click="closeQr"
           style="width: 100%;height: 100%;position: absolute;top:0;display: flex;
           justify-content: center;
           align-items: center;
          z-index: 1000;"
           :class="{'layoutQR': open}"
      >
        <qrcode class="qr-code-desktop" :value="link" :options="{ width: widthDevice }"></qrcode>
      </div>
    </f7-page-content>
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
        }],
        open: false
      }
    },
    computed: {
      isDesktop(){
        return this.$device.desktop
      },
      widthDevice() {
        if (this.$device.desktop)
          return document.body.clientWidth - 500
        else return document.body.clientWidth - 100
      }
    },
    methods: {
      closeQr(){
        console.log('lol');
        this.open = !this.open
      },
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
        if (this.songs.length < 2 || !this.songs[this.songs.length - 1].title) {
          this.$f7.dialog.alert("Выберите больше одной песни", "Ошибка");
          return
        }
        this.$store.dispatch('getEventId', {
          name: this.name,
          songs: this.songs
        })
          .then(() => {
            this.link = `http://partymode.ru/#!/event/${this.$store.getters["getEventId"]}`;
            this.eventAdd = true;
            this.open = !this.open;
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
    },
    mounted(){
        localStorage.setItem("admin",true);
    }
  }
</script>

<style scoped>

  .qr-code {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .qr-code-desktop{

    z-index: 10000;

  }
  .layoutQR{
    background: rgba(0,0,0,0.5);
  }
</style>
