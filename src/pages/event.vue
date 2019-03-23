<template>
  <f7-page class="gradient">
    <div v-if="selected_vote !== null">
      <div class="mynavbar">Голосование</div>
      <div class="mycontainer">
        <div class="subtitle">Вы сделали голос</div>
        <VoteChart
          :votes="votes"
          :total_votes="total_votes"
          :selected="selected_vote"
        />
      </div>
    </div>
    <div v-if="selected_vote === null">
      <div class="mynavbar">Голосование</div>
      <div class="mycontainer">
        <div class="subtitle">Выберите следующую песню</div>
        <div v-for="vote in votes" :key="vote.id" class="vote_wrapper" @click="make_vote(vote.id)">
          <div>
            <div class="vote_name">{{ vote.name }}</div>
            <div class="vote_artist">{{ vote.artist }}</div>
          </div>
        </div>
      </div>
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
          artist: "Three days grace",
          count: 113
        },
        {
          id: 1,
          name: "Time of Dying",
          artist: "Three days grace",
          count: 87
        },
        {
          id: 2,
          name: "I Am Machine",
          artist: "Three days grace",
          count: 34
        }
      ],
      total_votes: 113 + 87,
      selected_vote: null,
    }),
    created(){
      this.$store.dispatch('getSongs', {
        eventId: this.eventId}
        )
        .then(()=> {
            console.log('загружено')
        })
        .catch((error)=>{
          this.$f7.dialog.alert(`${error.response.status}`, "Error");
        })
    },
    mounted() {
    },
    methods: {
      make_vote: function(id) {
        this.selected_vote = id;
      }
    },
    computed: {},
    components: { VoteChart }
  };
</script>

<style>
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

  }

  .vote_artist {
    color: rgba(255,255,255,.7);
    font-weight: normal;
  }

  .subtitle {
    text-align: center;
    font-size: 1.3em;
    color: #fff;
    margin-bottom: 15px;
    margin-top: 20px;
  }

  .gradient {
    background: linear-gradient(148.61deg, rgba(219, 84, 197, 0.65) 7.81%, rgba(234, 56, 56, 0.65) 56.36%, rgba(232, 112, 61, 0.65) 96.56%) !important;
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
  }
</style>
