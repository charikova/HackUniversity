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
    selected_vote: null
  }),
  mounted() {},
  methods: {},
  computed: {},
  components: { VoteChart }
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
</style>
