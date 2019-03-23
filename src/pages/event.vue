<template>
  <f7-page class="gradient">
    <div v-if="selected_vote !== null">
      <f7-navbar title="Вы проголосовали" class="mynavbar"></f7-navbar>
      <f7-block>
        <VoteChart
          :votes="votes"
          :total_votes="total_votes"
          :selected="selected_vote"
        />
      </f7-block>
    </div>
    <div v-if="selected_vote === null">
      <f7-navbar title="Голосование" class="mynavbar"></f7-navbar>
      <f7-block>
        <div class="subtitle">Выберите следующую песню</div>
        <div v-for="vote in votes" :key="vote.id" class="vote_wrapper">
          {{ vote.name }}
        </div>
      </f7-block>
    </div>
    <div class="subtitle_vote">До конца голосования:</div>
    <div class="timer">
      {{minutes}}:{{seconds}}
    </div>
  </f7-page>
</template>

<script>
  import VoteChart from "../components/VoteChart";

  export default {
    name: "event",
    props: {
      eventId: String
    },
    data: () => ({
      votes: [
        {
          id: 0,
          name: "I hate everything about you",
          count: 113
        },
        {
          id: 1,
          name: "Time of Dying",
          count: 87
        },
        {
          id: 2,
          name: "I Am Machine",
          count: 34
        }
      ],
      total_votes: 113 + 87,
      selected_vote: null,
      current_time: 0,
      finish_time: Math.floor(Date.now() / 1000 + 60),
      seconds: 0,
      minutes: 0

    }),
    mounted() {
      setInterval(() => {
        this.current_time = Math.floor(Date.now() / 1000);
        let time_left = this.finish_time - this.current_time;
          this.seconds = time_left % 60;
        time_left = Math.floor(time_left / 60);
        this.minutes = time_left % 60;
        if (this.minutes < 10) {
          this.minutes = "0" + this.minutes;
        }
        if (this.seconds < 10) {
          this.seconds = "0" + this.seconds;
        }
        ;
      }, 1000);
    },
    methods: {},
    computed: {},
    components: { VoteChart },
  };
</script>

<style>
  .vote_wrapper {
    background: rgba(0, 0, 0, 0.2);
    padding: 10px 15px;
    display: flex;
    flex-direction: row;
    color: #fff;
    margin-bottom: 10px;
    border-radius: 6px;
    justify-content: space-between;
    position: relative;
    font-size: 1.5em;
  }

  .subtitle {
    text-align: center;
    font-size: 1.3em;
    color: #fff;
    margin-bottom: 15px;
  }

  .subtitle_vote {
    text-align: center;
    font-size: 1.3em;
    color: #fff;
    margin-bottom: 1px;
    margin-top: 10px;
  }

  .gradient {
    background: linear-gradient(148.61deg, rgba(219, 84, 197, 0.65) 7.81%, rgba(234, 56, 56, 0.65) 56.36%, rgba(232, 112, 61, 0.65) 96.56%) !important;
  }

  .mynavbar {
    background: none !important;
    color: #fff;
    border-bottom: 1px solid #fff;
  }

  .mynavbar .navbar-inner {
    justify-content: center !important;
  }

  .timer {
    text-align: center;
    font-size: 5em;
    color: #fff;
    margin-top: 3px;

  }
</style>
