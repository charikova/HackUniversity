<template>
  <f7-page>
    <div class="gradient">
      <!--<PayButton />-->

      <div v-if="selected_vote !== null" :class="{'disable':this.end === 1}">
        <div class="mynavbar">Голосование</div>
        <div class="mycontainer">
          <div class="subtitle">Вы проголосовали</div>
          <VoteChart
            :votes="votes"
            :total_votes="total_votes"
            :selected="selected_vote"
            :cancel_vote="cancel_vote"
          />
          <div class="cancel_button" v-if="this.end == 0" @click="sheetOpen = true">
            <i class="material-icons">
              attach_money
            </i>
            Усилить голос
          </div>
        </div>
      </div>
      <div v-if="selected_vote === null">
        <div class="mynavbar">Голосование</div>
        <div class="mycontainer">
          <div class="subtitle">Выберите следующую песню</div>
          <div
            v-for="vote in votes"
            :key="vote.id"
            class="vote_wrapper"
            @click="make_vote(vote)"
          >
            <div>
              <div class="vote_name">{{ vote.title }}</div>
              <div class="vote_artist">{{ vote.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="timer" v-if="this.realTime !== 0">
        <div v-if="this.end == 0">
          <div class="subtitle_vote">До конца голосования:</div>
          {{ minutes }}:{{ seconds }}
        </div>
        <div class="time_is_over" v-if="this.end == 1">
          Время вышло!<br />
          <p>Голосование окончено</p>
        </div>
      </div>
      <div v-if="isAdmin" style="display: flex;justify-content: center;align-content: center;">
        <f7-button  class="cancel_button" style="margin-bottom: 10%;" @click="popupOpen = true">Песни для голосования</f7-button>
      </div>
      <popup v-if="isAdmin"
             :opened="popupOpen"
             :eventId = "eventId"
             @popup:closed="popupOpen = false"></popup>
      <PaySheet v-if="selected_vote !== null"
                :opened="sheetOpen"
                :track="selectedTrack"
                @sheet:closed="sheetOpen = false"></PaySheet>
    </div>
  </f7-page>
</template>

<script>
  import VoteChart from "../components/VoteChart";
  import {mapGetters} from "vuex";
  import WebSocketHandler from "../js/websocket";
  import Popup from "../components/Popup";
  import PayButton from "../components/PayButton";
  import PaySheet from "../components/PaySheet.js";

  export default {
    name: "event",
    props: {
      eventId: String
    },
    data: () => ({
      selected_vote: null,
      current_time: 0,
      finish_time: Math.floor(Date.now() / 1000 + 10),
      seconds: 0,
      minutes: 0,
      time_left: 1,
      end: 0,
      popupOpen:false,
      sheetOpen:false
    }),

  components: {
    PaySheet,
    PayButton,
    Popup,
    VoteChart
  },
  created() {
    if (localStorage.getItem("admin")) {
      this.$store
        .dispatch("getSongs", {
          eventId: this.eventId
        })
        .then(() => {})
        .catch(error => {
          this.$f7.dialog.alert(`${error.response.status}`, "Error");
        });
    }
  },
  mounted() {
    const stored = localStorage.getItem("selected_vote");
    if (stored) {
      this.selected_vote = stored;
    }

    this.socket = new WebSocketHandler(this.$store);
    const url = WebSocketHandler.eventSocketURL(1);
    this.socket.connect(url);

    this.timerStart();
  },
  methods: {
    timerStart() {
      const updateTimer = () => {
        this.current_time = Math.floor(Date.now() / 1000);
        let time_left = Math.floor(this.realTime / 1000) - this.current_time;

        if (time_left <= 1) {
          this.seconds = "00";
          this.minutes = "00";
          this.end = 1;
        } else {
          this.seconds = time_left % 60;
          time_left = Math.floor(time_left / 60);
          this.minutes = time_left % 60;
          if (this.minutes < 10) {
            this.minutes = "0" + this.minutes;
          }
          if (this.seconds < 10) {
            this.seconds = "0" + this.seconds;
          }
          this.end = 0;
        }
      };
      updateTimer();
      setInterval(updateTimer, 1000);
    },
    make_vote: function(vote) {
      vote.count++;
      this.selected_vote = vote.id;
      localStorage.setItem("selected_vote", vote.id);
      this.$store.dispatch("vote",{
        eventId: this.eventId,
        trackId: vote.id,
        inc: "inc"
      })
      this.$store.dispatch("editTotal",false)
    },
    cancel_vote: function(vote) {
      this.selected_vote = null;
      localStorage.removeItem("selected_vote");
      vote.count--;
      this.$store.dispatch("vote",{
        eventId: this.eventId,
        trackId: vote.id,
        inc: "dec"
      })
      this.$store.dispatch("editTotal",true)
    }
  },
  computed: {
    ...mapGetters({
      realTime: "getTimer"
    }),
    isAdmin() {
      return !!localStorage.getItem("admin");
    },
    votes(){
      return this.$store.getters["getCurrentSongs"]
    },
    total_votes(){
      return this.$store.getters["getTotal"]
      return this.$store.getters["getTotalVotes"]
    },
    selectedTrack(){
      return this.votes.find(el => el.id == this.selected_vote);
    }
  }
};
</script>

<style>
  p {
    font-size: 0.6em;
    margin: .5em 0;
  }

  .vote_wrapper {
    background: rgba(0, 0, 0, 0.2);
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
    color: #fff;
    margin-bottom: 10px;
    border-radius: 6px;
    justify-content: space-between;
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
  }

  .vote_artist {
    color: rgba(255, 255, 255, .7);
    font-weight: normal;
  }

  .subtitle {
    text-align: center;
    font-size: 1.3em;
    color: #fff;
    margin-bottom: 15px;
    margin-top: 20px;
  }

  .subtitle_vote {
    text-align: center;
    font-size: 0.3em;
    color: #fff;
    margin-bottom: 1px;
    margin-top: 10px;
  }

  .time_is_over {
    text-align: center;
    font-size: 0.5em;
    color: #fff;
    margin-top: 15px;
  }

  .gradient {
    background: linear-gradient(148.61deg, rgba(219, 84, 197, 0.65) 7.81%, rgba(234, 56, 56, 0.65) 56.36%, rgba(232, 112, 61, 0.65) 96.56%) !important;
    height: 100%;
    overflow-x: hidden;
  }

  .mynavbar {
    background: none !important;
    color: #fff;
    border-bottom: 1px solid #fff;
    font-size: 1.5rem !important;
    text-align: center;
    margin: 10px 0 35px;
    padding-bottom: 10px;
  }

  .mycontainer {
    padding: 0 10px;
    text-align: center;
    margin-bottom: 30px;
  }

  .cancel_button {
    margin-top: 15px;
    border: 1px solid #fff !important;
    color: #fff !important;
    font-size: 1.2rem;
    display: inline-block;
    padding: 5px 10px !important;
    height: auto !important;
    line-height: 35px;
    border-radius: 5px;
  }

  .cancel_button i {
    transform: translateY(3px);
  }

  .timer {
    text-align: center;
    font-size: 5em;
    color: #fff;
    margin-top: 3px;
    line-height: 1.1;
  }
  .disable{
    pointer-events: none;
  }
</style>
