<template>
  <div class="votes">
    <div v-for="vote in votes" :key="vote.id" class="vote_wrapper">
      <div
        class="vote_bar"
        :style="{ width: Math.round((vote.count / total_votes) * 100) + '%' }"
      ></div>
      <div class="vote_left">
        <div class="vote_name">{{ vote.name }}</div>
        <div class="vote_count">{{ vote.count }}</div>
      </div>
      <div class="vote_result">
        {{ Math.round((vote.count / total_votes) * 100) }} %
      </div>
    </div>
    <f7-button class="cancel_button">Отменить голос</f7-button>
  </div>
</template>

<script>
export default {
  props: ["votes", "selected", "total_votes"]
};
</script>

<style scoped>
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

.vote_name {
}

.vote_result {
  z-index: 10;
}

.vote_left {
  display: flex;
  flex-direction: row;
  color: #fff;
  z-index: 10;
}

.vote_count {
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.vote_bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
}
.cancel_button {
  margin-top: 40px;
  border: none;
  color: #fff;
}
</style>
