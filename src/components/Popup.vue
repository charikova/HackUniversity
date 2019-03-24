<template>
  <f7-popup
    :opened="opened"
    class="poll-popup"
    tablet-fullscreen
    @popup:closed="$emit('popup:closed');"
  >
    <f7-page>
      <f7-navbar>
        <f7-nav-left>
        </f7-nav-left>
        <f7-nav-title>
          Настройки голосования
        </f7-nav-title>
        <f7-nav-right>
          <f7-link style="font-size: 14px;color: rgb(234, 56, 56);" @click="close">Зыкрыть</f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-list>
        <f7-block-title>Песни</f7-block-title>
        <f7-block-header>Выберите песни, которые будут отображаться в голосовании</f7-block-header>
        <f7-list-item
          color="red"
          v-for="song in songs"
          :title="song.title"
          :key="song.id"
          @click="addSongCurrent(song)"
          checkbox
        >
        </f7-list-item>
      </f7-list>
      <f7-list>
        <f7-block-title>Время опроса</f7-block-title>
        <f7-list-item title="Длительность">
          <f7-stepper color="red"
                      :value="timer" :min="10" :max="300" :step="10"
                      @stepper:change="editTime"
                      style="border: 1px white solid;display:flex;align-content: center;justify-content: center"
          ></f7-stepper>
        </f7-list-item>
        <f7-list-button @click="sendCurrentSongs" color="red">Отправить на голосование</f7-list-button>
      </f7-list>
      <f7-list>
        <f7-block-title>Случайный розыгрыш</f7-block-title>
        <f7-block-header>Вы можете провести случайный розыгрыш подароков, среди людей присутствующих на мероприятии</f7-block-header>
        <f7-list-button @click="startLottery" color="red">Нажмите чтобы разыграть</f7-list-button>
      </f7-list>
    </f7-page>
  </f7-popup>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Popup",
    props: {
      opened: Boolean,
      eventId: String
    },
    data: () => ({
      currentSongs: [],
      timer: 60,
    }),
    computed: {
      ...mapGetters({
        songs: "getAllSongs",
      })
    },
    methods: {
      editTime(value) {
        this.timer = value;
      },
      close() {
        this.$f7.popup.close();
      },
      addSongCurrent(song) {
        var flg;
        for (var i = 0; i < this.currentSongs.length; i++) {
          if (this.currentSongs[i].id === song.id) {
            this.currentSongs.splice(i, 1);
            flg = true;
            return
          }
        }

        if (!flg)
          this.currentSongs.push(song)
      },
      sendCurrentSongs() {
        if (this.currentSongs.length < 2) {
          this.$f7.dialog.alert("Выберите больше одной песни", "Ошибка");
          return
        }
        const data = {
          type: "Current",
          tracks: this.currentSongs,
          timer: this.timer
        }

        this.$store.dispatch("setCurrentSongs", {
          eventId: this.eventId,
          data: data
        })
          .then(() => {

            var toastCenter = this.$f7.toast.create({
              text: "Отправлено",
              position: "center",
              closeTimeout: 1000
            });
            toastCenter.open();
          })
          .catch((error) => {
            console.log('lol')
            var toastCenter = this.$f7.toast.create({
              text: "Произошла ошибка",
              position: "center",
              closeTimeout: 1000
            });
            toastCenter.open();
          })
        this.$f7.popup.close();
      },
      startLottery(){
        this.$store.dispatch("startLottery", this.eventId)
      }
    }
  }
</script>

<style>
  .custom-stopper .item-content .item-inner {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .ios label.item-checkbox input[type="checkbox"]:checked ~ .icon-checkbox,
  .ios .checkbox input[type="checkbox"]:checked ~ i {
    background: #ff3b30;
  }
</style>
