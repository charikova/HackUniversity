<template>
  <f7-page>
    <div v-if="selected_vote">
      <f7-navbar title="Вы проголосовали"></f7-navbar>
      <f7-block>
        <VoteChart
          :votes="votes"
          :total_votes="total_votes"
          :selected="selected_vote"
        />
      </f7-block>
    </div>
    <div v-if="!selected_vote">
      <f7-navbar title="Мероприятие"></f7-navbar>
      <f7-block>
        <f7-row>
          <f7-col>
            <f7-button fill color="red">Red</f7-button>
          </f7-col>
          <f7-col>
            <f7-button fill color="red">Red</f7-button>
          </f7-col>
        </f7-row>
        <br />
        <f7-row>
          <f7-col>
            <f7-button fill color="red">Red</f7-button>
          </f7-col>
          <f7-col>
            <f7-button fill color="red">Red</f7-button>
          </f7-col>
        </f7-row>
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
      }
    ],
    total_votes: 113 + 87,
    selected_vote: 1
  }),
  mounted() {},
  methods: {},
  computed: {},
  components: { VoteChart }
};
</script>

<style scoped></style>
