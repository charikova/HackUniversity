<template>
  <f7-popup
    :opened="opened"
    class="poll-popup"
    tablet-fullscreen
    @popup:closed="$emit('popup:closed');"
  >
    <f7-page-content>
      <f7-list>
        <f7-list-item
          v-for="song in songs"
          :title="song.title"
          :key="song.id"
          @click="addSongCurrent(song)"
          checkbox
        >
        </f7-list-item>
        <f7-list-item>
          <f7-stepper
            :value="timer" :min="10" :max="300" :step="10"
            style="border: 1px white solid;"
          ></f7-stepper>
        </f7-list-item>
      </f7-list>
      <f7-button class="cancel_button" @click="sendCurrentSongs">Отправить на голосование</f7-button>
    </f7-page-content>
  </f7-popup>
</template>

<script>
  import {mapGetters} from "vuex";
  export default {
    name: "Popup",
    props:{
      opened:Boolean
    },
    data: () => ({
        currentSongs: [],
        timer:60,
    }),
    computed: {
      ...mapGetters({
        songs: "getAllSongs",
      })
    },
    methods: {
      addSongCurrent(song) {
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
            var toastCenter = this.$f7.toast.create({
              text: "Произошла ошибка",
              position: "center",
              closeTimeout: 1000
            });
            toastCenter.open();
          })
      }
    }
  }
</script>

<style scoped>

</style>
